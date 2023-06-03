import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/lib/database.types";

const middlewares = {
  "/api": apiMiddleware,
  "/dash": dashMiddleware,
} as const;

export const config = {
  matcher: ["/api/:path*", "/dash/:path*"],
};

export async function middleware(req: NextRequest) {
  for (const [prefix, middleware] of Object.entries(middlewares)) {
    if (req.nextUrl.pathname.startsWith(prefix)) {
      return middleware(req);
    }
  }
}

async function dashMiddleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient<Database>({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    // Auth condition met, continue on to the page.
    return NextResponse.next();
  }

  // Auth condition not met, redirect to home page.
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = "/login";
  redirectUrl.searchParams.set("redirect", req.nextUrl.pathname);

  return NextResponse.redirect(redirectUrl);
}

async function apiMiddleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient<Database>({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    // Auth condition met, continue on to the page.
    return NextResponse.next();
  }

  // Auth condition not met, return 401.
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
