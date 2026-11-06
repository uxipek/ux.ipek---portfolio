import {
  isRequiredString,
  isOptionalString,
  isValidEmail,
  isOptionalHttpUrl,
  isInAllowlist,
  isBoolean,
  isStrictTrue,
  hasOnlyAllowedKeys,
  verifyTurnstile,
  checkRateLimit,
  generateRequestId,
  logOutcome,
} from "./security.js";

const PROJECT_TYPES = ["ux_audit", "saas_design", "landing_page", "ai_interface", "consultancy"] as const;
const BUDGET_TIERS = ["tier_1", "tier_2", "tier_3", "discuss"] as const;

const CONTACT_ALLOWED_KEYS = [
  "name",
  "email",
  "company",
  "website",
  "projectType",
  "budget",
  "message",
  "legalConsent",
  "marketingConsent",
  "turnstileToken",
] as const;

export type ContactResult = { status: number; body: Record<string, unknown>; retryAfter?: number };

/**
 * Shared by the Vercel function (api/contact.ts) and the local Express dev
 * server, so both behave identically. Each message becomes one row in the
 * "Iletisim" tab of the Google Sheet behind the UX_AUDIT_WEBHOOK_* env vars
 * (see docs/google-sheets-webhook.gs).
 */
export async function submitContact(body: unknown, ip: string | undefined): Promise<ContactResult> {
  const requestId = generateRequestId();
  const respond = (status: number, reason: string, payload: Record<string, unknown>, retryAfter?: number): ContactResult => {
    logOutcome("/api/contact", status, reason, requestId);
    return { status, body: payload, retryAfter };
  };

  const limit = checkRateLimit(`contact:${ip ?? "unknown"}`, 5, 10 * 60 * 1000); // 5 requests / 10 minutes / IP
  if (!limit.allowed) {
    return respond(429, "rate_limited", { error: "Too many requests. Please try again later." }, limit.retryAfterSeconds);
  }

  if (!hasOnlyAllowedKeys(body, CONTACT_ALLOWED_KEYS)) {
    return respond(400, "unexpected_keys", { error: "Invalid request." });
  }

  const { name, email, company, website, projectType, budget, message, legalConsent, marketingConsent, turnstileToken } = body;

  const fieldErrors: string[] = [];
  if (!isRequiredString(name, 2, 100)) fieldErrors.push("name");
  if (!isValidEmail(email)) fieldErrors.push("email");
  if (!isOptionalString(company, 150)) fieldErrors.push("company");
  if (!isOptionalHttpUrl(website)) fieldErrors.push("website");
  if (!isInAllowlist(projectType, PROJECT_TYPES)) fieldErrors.push("projectType");
  if (!isInAllowlist(budget, BUDGET_TIERS)) fieldErrors.push("budget");
  if (!isRequiredString(message, 10, 5000)) fieldErrors.push("message");
  if (!isStrictTrue(legalConsent)) fieldErrors.push("legalConsent");
  if (!isBoolean(marketingConsent)) fieldErrors.push("marketingConsent");

  if (fieldErrors.length > 0) {
    return respond(400, "validation_failed", { error: "Invalid request." });
  }

  const turnstile = await verifyTurnstile(turnstileToken, "contact_form", ip);
  if (turnstile.ok === false) {
    return respond(403, `turnstile_${turnstile.reason}`, { error: "Verification failed. Please try again." });
  }

  const webhookUrl = process.env.UX_AUDIT_WEBHOOK_URL;
  const webhookSecret = process.env.UX_AUDIT_WEBHOOK_SECRET;
  if (!webhookUrl || !webhookSecret) {
    return respond(500, "webhook_not_configured", { error: "The contact form is temporarily unavailable." });
  }

  try {
    // Apps Script web apps answer a POST with a 302 to the result page; fetch
    // follows it, so a non-2xx here means the script itself failed.
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        secret: webhookSecret,
        type: "contact",
        submittedAt: new Date().toISOString(),
        name: (name as string).trim(),
        email: (email as string).trim(),
        company: company ? (company as string).trim() : "",
        website: website ? (website as string).trim() : "",
        projectType,
        budget,
        marketingConsent,
        message: (message as string).trim(),
      }),
    });
    const result = (await response.json().catch(() => null)) as { ok?: boolean; reason?: string } | null;
    if (!response.ok || !result?.ok) {
      const reason = typeof result?.reason === "string" && /^[a-z_]{1,20}$/.test(result.reason) ? result.reason : result ? "unknown" : "not_json";
      return respond(502, `webhook_failed_${response.status}_${reason}`, { error: "Failed to send your message. Please try again." });
    }
    return respond(200, "sent", { success: true });
  } catch {
    return respond(500, "webhook_network_error", { error: "Failed to send your message. Please try again." });
  }
}
