import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json().catch(() => ({ token: null }));
  if (!token || typeof token !== "string") {
    return NextResponse.json({ success: false, error: "missing-token" }, { status: 400 });
  }
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json({ success: false, error: "server-misconfigured" }, { status: 500 });
  }
  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  const ip = req.headers.get("CF-Connecting-IP") ?? req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (ip) body.set("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
  const data = (await res.json()) as { success: boolean; "error-codes"?: string[] };
  return NextResponse.json(
    { success: !!data.success, codes: data["error-codes"] ?? [] },
    { status: data.success ? 200 : 400 }
  );
}