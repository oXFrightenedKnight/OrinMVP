// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const rateLimit = new Map<string, number>();

export function middleware(req: NextRequest) {
  const isWaitlisted = req.cookies.get("waitlisted")?.value;

  if (isWaitlisted) {
    return new NextResponse("Already registered", { status: 429 });
  }

  const raw = req.headers.get("x-forwarded-for") || "";
  const ip = raw.split(",")[0].trim() || "0.0.0.0";
  console.log(ip);
  const now = Date.now();

  const last = rateLimit.get(ip) ?? 0;

  if (now - last < 86_400_000) {
    return new NextResponse("Too many requests", { status: 429 });
  }

  rateLimit.set(ip, now);
  return NextResponse.next();
}

export const config = {
  matcher: "/api/waitlist",
};
