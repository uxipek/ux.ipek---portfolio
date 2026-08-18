import express from "express";
import helmet from "helmet";
import path from "path";
import { createServer as createViteServer } from "vite";
import {
  escapeHtml,
  isRequiredString,
  isOptionalString,
  isValidEmail,
  isRequiredHttpUrl,
  isOptionalHttpUrl,
  isInAllowlist,
  isBoolean,
  isStrictTrue,
  hasOnlyAllowedKeys,
  verifyTurnstile,
  checkRateLimit,
  generateRequestId,
  logOutcome,
} from "./lib/security";

// Bumped whenever the KVKK / privacy-policy text meaningfully changes, so
// consent records can be tied back to the text the user actually agreed to.
const PRIVACY_POLICY_VERSION = "2026-08-18";

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

const UX_AUDIT_ALLOWED_KEYS = [
  "websiteUrl",
  "fullName",
  "email",
  "companyName",
  "primaryGoal",
  "mainProblem",
  "kvkkConsent",
  "marketingConsent",
  "turnstileToken",
] as const;

async function startServer() {
  const app = express();
  const PORT = 3000;

  // The app is designed to run behind a single trusted reverse proxy
  // (Vercel in production). This makes req.ip reflect the real client IP
  // from X-Forwarded-For instead of the proxy's own address, which the
  // rate limiter below depends on.
  app.set("trust proxy", 1);

  app.use(
    helmet({
      // No CSP here yet — the site pulls in GTM/GA4, Meta Pixel, Google
      // Fonts, Turnstile, and Vercel infra. A CSP allowlist needs to be
      // built and verified in Report-Only mode against all of those before
      // it's safe to turn on; see the security report for the follow-up.
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    })
  );
  // frame-ancestors is a CSP directive, so helmet's standalone
  // frameguard covers the "no framing" requirement in its absence.
  app.use(helmet.frameguard({ action: "sameorigin" }));
  app.use(helmet.referrerPolicy({ policy: "strict-origin-when-cross-origin" }));
  app.use((req, res, next) => {
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    next();
  });

  // Forms only ever submit short text fields — 50kb is generous headroom
  // over any realistic legitimate payload and caps the cost of abuse.
  app.use(express.json({ limit: "50kb" }));

  function rateLimitOrReject(endpoint: string, req: express.Request, res: express.Response): boolean {
    const key = `${endpoint}:${req.ip ?? "unknown"}`;
    const result = checkRateLimit(key, 5, 10 * 60 * 1000); // 5 requests / 10 minutes / IP
    if (!result.allowed) {
      res.setHeader("Retry-After", String(result.retryAfterSeconds));
      res.status(429).json({ error: "Too many requests. Please try again later." });
      return false;
    }
    return true;
  }

  // API Routes
  app.post("/api/contact", async (req, res) => {
    const requestId = generateRequestId();

    if (!rateLimitOrReject("contact", req, res)) {
      logOutcome("/api/contact", 429, "rate_limited", requestId);
      return;
    }

    const body = req.body;
    if (!hasOnlyAllowedKeys(body, CONTACT_ALLOWED_KEYS)) {
      logOutcome("/api/contact", 400, "unexpected_keys", requestId);
      return res.status(400).json({ error: "Invalid request." });
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
      logOutcome("/api/contact", 400, "validation_failed", requestId);
      return res.status(400).json({ error: "Invalid request." });
    }

    const turnstile = await verifyTurnstile(turnstileToken, "contact_form", req.ip);
    if (turnstile.ok === false) {
      logOutcome("/api/contact", 403, `turnstile_${turnstile.reason}`, requestId);
      return res.status(403).json({ error: "Verification failed. Please try again." });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      logOutcome("/api/contact", 500, "brevo_not_configured", requestId);
      return res.status(500).json({ error: "The contact form is temporarily unavailable." });
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
        logOutcome("/api/contact", response.status, "brevo_send_failed", requestId);
        return res.status(502).json({ error: "Failed to send your message. Please try again." });
      }

      logOutcome("/api/contact", 200, "sent", requestId);
      res.status(200).json({ success: true });
    } catch {
      logOutcome("/api/contact", 500, "brevo_network_error", requestId);
      res.status(500).json({ error: "Failed to send your message. Please try again." });
    }
  });

  app.post("/api/ux-audit", async (req, res) => {
    const requestId = generateRequestId();

    if (!rateLimitOrReject("ux-audit", req, res)) {
      logOutcome("/api/ux-audit", 429, "rate_limited", requestId);
      return;
    }

    const body = req.body;
    if (!hasOnlyAllowedKeys(body, UX_AUDIT_ALLOWED_KEYS)) {
      logOutcome("/api/ux-audit", 400, "unexpected_keys", requestId);
      return res.status(400).json({ error: "Invalid request." });
    }

    const { websiteUrl, fullName, email, companyName, primaryGoal, mainProblem, kvkkConsent, marketingConsent, turnstileToken } = body;

    const fieldErrors: string[] = [];
    if (!isRequiredHttpUrl(websiteUrl)) fieldErrors.push("websiteUrl");
    if (!isRequiredString(fullName, 2, 100)) fieldErrors.push("fullName");
    if (!isValidEmail(email)) fieldErrors.push("email");
    if (!isOptionalString(companyName, 150)) fieldErrors.push("companyName");
    if (!isRequiredString(primaryGoal, 10, 2000)) fieldErrors.push("primaryGoal");
    if (!isRequiredString(mainProblem, 10, 2000)) fieldErrors.push("mainProblem");
    if (!isStrictTrue(kvkkConsent)) fieldErrors.push("kvkkConsent");
    if (!isBoolean(marketingConsent)) fieldErrors.push("marketingConsent");

    if (fieldErrors.length > 0) {
      logOutcome("/api/ux-audit", 400, "validation_failed", requestId);
      return res.status(400).json({ error: "Invalid request." });
    }

    const turnstile = await verifyTurnstile(turnstileToken, "ux_audit_form", req.ip);
    if (turnstile.ok === false) {
      logOutcome("/api/ux-audit", 403, `turnstile_${turnstile.reason}`, requestId);
      return res.status(403).json({ error: "Verification failed. Please try again." });
    }

    const webhookUrl = process.env.UX_AUDIT_WEBHOOK_URL;
    if (!webhookUrl) {
      logOutcome("/api/ux-audit", 500, "webhook_not_configured", requestId);
      return res.status(500).json({ error: "The UX audit request form is temporarily unavailable." });
    }

    const payload = {
      websiteUrl: (websiteUrl as string).trim(),
      fullName: (fullName as string).trim(),
      email: (email as string).trim(),
      companyName: companyName ? (companyName as string).trim() : "",
      primaryGoal: (primaryGoal as string).trim(),
      mainProblem: (mainProblem as string).trim(),
      kvkkConsent: true,
      marketingConsent: Boolean(marketingConsent),
      consentTimestamp: new Date().toISOString(),
      privacyPolicyVersion: PRIVACY_POLICY_VERSION,
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        logOutcome("/api/ux-audit", response.status, "webhook_send_failed", requestId);
        return res.status(502).json({ error: "Failed to submit your request. Please try again." });
      }

      logOutcome("/api/ux-audit", 200, "sent", requestId);
      res.status(200).json({ success: true });
    } catch {
      logOutcome("/api/ux-audit", 500, "webhook_network_error", requestId);
      res.status(500).json({ error: "Failed to submit your request. Please try again." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Central error handler — must be registered last. Keeps body-parser
  // errors (oversized/malformed JSON) and anything unexpected from ever
  // reaching the client as a stack trace.
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (res.headersSent) return next(err);
    if (err?.type === "entity.too.large" || err?.status === 413) {
      return res.status(413).json({ error: "Request too large." });
    }
    if (err?.type === "entity.parse.failed" || err instanceof SyntaxError) {
      return res.status(400).json({ error: "Invalid request." });
    }
    console.log(JSON.stringify({ endpoint: req.path, statusCode: 500, reason: "unhandled_error" }));
    res.status(500).json({ error: "Internal server error." });
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
