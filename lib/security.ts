// Server-only security helpers: HTML escaping, input validation, Cloudflare
// Turnstile verification, and a lightweight in-memory rate limiter.
//
// This module is imported exclusively by server.ts (esbuild's Node bundle),
// never by anything under src/, so none of it — including secrets read from
// process.env — ever reaches the Vite client bundle.

// ---------------------------------------------------------------------------
// HTML escaping
// ---------------------------------------------------------------------------

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Escapes the five characters that matter for safe interpolation into HTML text content/attributes. */
export function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
}

// ---------------------------------------------------------------------------
// Primitive validators — every one is a type guard so callers narrow safely.
// ---------------------------------------------------------------------------

export function isRequiredString(value: unknown, min: number, max: number): value is string {
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  return trimmed.length >= min && trimmed.length <= max;
}

export function isOptionalString(value: unknown, max: number): boolean {
  if (value === undefined || value === null || value === "") return true;
  return typeof value === "string" && value.trim().length <= max;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && value.length > 0 && value.length <= 254 && EMAIL_RE.test(value.trim());
}

function isHttpUrl(value: string): boolean {
  if (value.length > 2048) return false;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function isRequiredHttpUrl(value: unknown): value is string {
  return typeof value === "string" && isHttpUrl(value);
}

export function isOptionalHttpUrl(value: unknown): boolean {
  if (value === undefined || value === null || value === "") return true;
  return typeof value === "string" && isHttpUrl(value);
}

export function isInAllowlist<T extends string>(value: unknown, allowed: readonly T[]): value is T {
  return typeof value === "string" && (allowed as readonly string[]).includes(value);
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

export function isStrictTrue(value: unknown): value is true {
  return value === true;
}

/** Rejects anything that isn't a plain (non-array, non-null) object, or that carries keys outside the allowlist. */
export function hasOnlyAllowedKeys(body: unknown, allowedKeys: readonly string[]): body is Record<string, unknown> {
  if (typeof body !== "object" || body === null || Array.isArray(body)) return false;
  return Object.keys(body).every((key) => allowedKeys.includes(key));
}

// ---------------------------------------------------------------------------
// Cloudflare Turnstile server-side verification
// ---------------------------------------------------------------------------

export type TurnstileResult = { ok: true } | { ok: false; reason: string };

// Add real production hostnames here once the site's final domain is confirmed.
const EXPECTED_TURNSTILE_HOSTNAMES = ["uxipek.com", "www.uxipek.com"];

/**
 * Verifies a Turnstile token server-side via Cloudflare's siteverify endpoint.
 * Never throws — always resolves to a typed result so callers can safe-fail.
 * `reason` is a short category string only; it must never be logged together
 * with the token or any request PII.
 */
export async function verifyTurnstile(token: unknown, expectedAction: string, remoteIp?: string): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return { ok: false, reason: "not_configured" };
  }
  if (typeof token !== "string" || token.length === 0 || token.length > 2048) {
    return { ok: false, reason: "missing_token" };
  }

  try {
    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);
    if (remoteIp) params.append("remoteip", remoteIp);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!res.ok) {
      return { ok: false, reason: "siteverify_http_error" };
    }

    const data = (await res.json()) as { success?: boolean; action?: string; hostname?: string };

    if (!data.success) {
      return { ok: false, reason: "verification_failed" };
    }
    if (data.action && data.action !== expectedAction) {
      return { ok: false, reason: "action_mismatch" };
    }
    if (process.env.NODE_ENV === "production" && data.hostname && !EXPECTED_TURNSTILE_HOSTNAMES.includes(data.hostname)) {
      return { ok: false, reason: "hostname_mismatch" };
    }

    return { ok: true };
  } catch {
    return { ok: false, reason: "siteverify_network_error" };
  }
}

// ---------------------------------------------------------------------------
// Rate limiting — in-memory, per-process. Defense-in-depth ONLY.
//
// This does not provide real protection in a multi-instance or serverless
// deployment (e.g. Vercel functions): each instance keeps its own counters,
// so an attacker distributed across instances (or simply retried across cold
// starts) is not actually throttled. Production protection must come from an
// edge/WAF-level control (Vercel Firewall, Cloudflare rate limiting) or a
// shared store (Redis / Vercel KV) — see the security report for details.
// ---------------------------------------------------------------------------

type RateLimitEntry = { count: number; resetAt: number };
const rateLimitBuckets = new Map<string, RateLimitEntry>();
let lastSweep = 0;

function sweepExpiredBuckets(now: number) {
  if (now - lastSweep < 60_000) return;
  lastSweep = now;
  for (const [key, entry] of rateLimitBuckets) {
    if (entry.resetAt <= now) rateLimitBuckets.delete(key);
  }
}

export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  sweepExpiredBuckets(now);

  const entry = rateLimitBuckets.get(key);
  if (!entry || entry.resetAt <= now) {
    rateLimitBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (entry.count >= limit) {
    return { allowed: false, retryAfterSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)) };
  }

  entry.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

// ---------------------------------------------------------------------------
// Safe logging
// ---------------------------------------------------------------------------

/** Short random id for correlating a request across log lines without storing any PII. */
export function generateRequestId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Logs only a category-level outcome. `reason` must always be a short fixed
 * string (e.g. "invalid_email", "turnstile_failed") — never raw user input,
 * tokens, keys, webhook URLs, or third-party response bodies.
 */
export function logOutcome(endpoint: string, statusCode: number, reason: string, requestId: string) {
  console.log(JSON.stringify({ endpoint, statusCode, reason, requestId }));
}
