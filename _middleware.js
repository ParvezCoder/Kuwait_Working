import { NextResponse } from "next/server";

export function middleware(req) {
  const isAdmin = req.cookies.get("isAdmin");

  if (!isAdmin && !req.nextUrl.pathname.includes("/admin/login")) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}