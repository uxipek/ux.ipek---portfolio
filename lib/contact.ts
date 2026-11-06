import {
  escapeHtml,
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
 * server, so both behave identically. Sends the message via Brevo.
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

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return respond(500, "brevo_not_configured", { error: "The contact form is temporarily unavailable." });
  }

  const trimmedName = (name as string).trim();
  const trimmedEmail = (email as string).trim();
  const trimmedCompany = company ? (company as string).trim() : "";
  const trimmedWebsite = website ? (website as string).trim() : "";
  const trimmedMessage = (message as string).trim();
  const subject = `New Contact Form Submission — ${projectType}`;

  const textContent = [
    `Name: ${trimmedName}`,
    `Email: ${trimmedEmail}`,
    `Company: ${trimmedCompany || "-"}`,
    `Website: ${trimmedWebsite || "-"}`,
    `Project Type: ${projectType}`,
    `Budget: ${budget}`,
    `Marketing Consent: ${marketingConsent ? "Yes" : "No"}`,
    "",
    "Message:",
    trimmedMessage,
  ].join("\n");

  const htmlContent = `
      <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
      <p><strong>Company:</strong> ${escapeHtml(trimmedCompany || "-")}</p>
      <p><strong>Website:</strong> ${escapeHtml(trimmedWebsite || "-")}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(String(projectType))}</p>
      <p><strong>Budget:</strong> ${escapeHtml(String(budget))}</p>
      <p><strong>Marketing Consent:</strong> ${marketingConsent ? "Yes" : "No"}</p>
      <p><strong>Message:</strong><br>${escapeHtml(trimmedMessage).replace(/\n/g, "<br>")}</p>
    `;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "UX.IPEK Contact Form", email: "ipekbolakca@gmail.com" },
        replyTo: { name: trimmedName, email: trimmedEmail },
        to: [{ email: "uxdesigneripek@gmail.com", name: "Ipek Bolakca" }],
        subject,
        textContent,
        htmlContent,
      }),
    });

    if (!response.ok) {
      return respond(502, `brevo_send_failed_${response.status}`, { error: "Failed to send your message. Please try again." });
    }
    return respond(200, "sent", { success: true });
  } catch {
    return respond(500, "brevo_network_error", { error: "Failed to send your message. Please try again." });
  }
}
