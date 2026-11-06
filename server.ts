import express from "express";
import helmet from "helmet";
import path from "path";
import { createServer as createViteServer } from "vite";
import { submitUxAudit } from "./lib/uxAudit";
import { submitContact } from "./lib/contact";

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

  // API Routes
  app.post("/api/contact", async (req, res) => {
    const result = await submitContact(req.body, req.ip);
    if (result.retryAfter) res.setHeader("Retry-After", String(result.retryAfter));
    res.status(result.status).json(result.body);
  });

  app.post("/api/ux-audit", async (req, res) => {
    const result = await submitUxAudit(req.body, req.ip);
    if (result.retryAfter) res.setHeader("Retry-After", String(result.retryAfter));
    res.status(result.status).json(result.body);
  });

  // Pretty URL for the static Zeka Oyunları case study (mirrors the rewrite in vercel.json)
  const staticRoot = process.env.NODE_ENV !== "production" ? "public" : "dist";
  app.get(["/portfolio/zeka-oyunlari", "/:lang(en|tr)/portfolio/zeka-oyunlari"], (_req, res) => {
    res.sendFile(path.join(process.cwd(), staticRoot, "zeka-oyunlari-case-study.html"));
  });
  app.get("/zeka-oyunlari-case-study.html", (_req, res) => {
    res.redirect(301, "/portfolio/zeka-oyunlari");
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
