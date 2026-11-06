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
 * Airtable table configured by AIRTABLE_* env vars.
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

  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table = process.env.AIRTABLE_TABLE;
  if (!token || !baseId || !table) {
    return respond(500, "airtable_not_configured", { error: "The UX audit request form is temporarily unavailable." });
  }

  try {
    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        typecast: true,
        fields: {
          Website: websiteUrl.trim(),
          "Submitted At": new Date().toISOString(),
        },
      }),
    });
    if (!response.ok) {
      return respond(502, `airtable_http_${response.status}`, { error: "Failed to submit your request. Please try again." });
    }
    return respond(200, "sent", { success: true });
  } catch {
    return respond(500, "airtable_network_error", { error: "Failed to submit your request. Please try again." });
  }
}
