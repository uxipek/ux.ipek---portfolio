import { submitUxAudit } from "../lib/uxAudit";

// Minimal request/response shapes so we don't need @vercel/node as a dependency.
type Req = { method?: string; body?: unknown; headers: Record<string, string | string[] | undefined> };
type Res = {
  status: (code: number) => Res;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const forwarded = req.headers["x-forwarded-for"];
  const ip = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(",")[0].trim();

  const result = await submitUxAudit(req.body, ip);
  if (result.retryAfter) res.setHeader("Retry-After", String(result.retryAfter));
  res.status(result.status).json(result.body);
}
