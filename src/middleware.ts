import { NextRequest, NextResponse } from "next/server";
import Cookie from "js-cookie";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = request.cookies.get("user")?.value;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/posts", request.url));
  }

  if (pathname === "/add-post" && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/"],
};
