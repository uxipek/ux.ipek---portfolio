import {
  isRequiredHttpUrl,
  hasOnlyAllowedKeys,
  verifyTurnstile,
  checkRateLimit,
  generateRequestId,
  logOutcome,
} from "./security";

// The form only asks for the website URL (plus the Turnstile token).
const UX_AUDIT_ALLOWED_KEYS = ["websiteUrl", "turnstileToken"] as const;

export type UxAuditResult = { status: number; body: Record<string, unknown>; retryAfter?: number };

/**
 * Shared by the Vercel function (api/ux-audit.ts) and the local Express dev
 * server, so both behave identically. Each submission becomes one row in the
 * Google Sheet behind the UX_AUDIT_WEBHOOK_* env vars (see docs/google-sheets-webhook.gs).
 */
export async function submitUxAudit(body: unknown, ip: string | undefined): Promise<UxAuditResult> {
  const requestId = generateRequestId();
  const respond = (status: number, reason: string, payload: Record<string, unknown>, retryAfter?: number): UxAuditResult => {
    logOutcome("/api/ux-audit", status, reason, requestId);
    return { status, body: payload, retryAfter };
  };

  const limit = checkRateLimit(`ux-audit:${ip ?? "unknown"}`, 5, 10 * 60 * 1000);
  if (!limit.allowed) {
    return respond(429, "rate_limited", { error: "Too many requests. Please try again later." }, limit.retryAfterSeconds);
  }

  if (!hasOnlyAllowedKeys(body, UX_AUDIT_ALLOWED_KEYS)) {
    return respond(400, "unexpected_keys", { error: "Invalid request." });
  }
  const { websiteUrl, turnstileToken } = body;
  if (!isRequiredHttpUrl(websiteUrl)) {
    return respond(400, "validation_failed", { error: "Invalid request." });
  }

  const turnstile = await verifyTurnstile(turnstileToken, "ux_audit_form", ip);
  if (turnstile.ok === false) {
    return respond(403, `turnstile_${turnstile.reason}`, { error: "Verification failed. Please try again." });
  }

  const webhookUrl = process.env.UX_AUDIT_WEBHOOK_URL;
  const webhookSecret = process.env.UX_AUDIT_WEBHOOK_SECRET;
  if (!webhookUrl || !webhookSecret) {
    return respond(500, "webhook_not_configured", { error: "The UX audit request form is temporarily unavailable." });
  }

  try {
    // Apps Script web apps answer a POST with a 302 to the result page; fetch
    // follows it, so a non-2xx here means the script itself failed.
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        secret: webhookSecret,
        websiteUrl: websiteUrl.trim(),
        submittedAt: new Date().toISOString(),
      }),
    });
    const result = (await response.json().catch(() => null)) as { ok?: boolean } | null;
    if (!response.ok || !result?.ok) {
      return respond(502, `webhook_failed_${response.status}`, { error: "Failed to submit your request. Please try again." });
    }
    return respond(200, "sent", { success: true });
  } catch {
    return respond(500, "webhook_network_error", { error: "Failed to submit your request. Please try again." });
  }
}
