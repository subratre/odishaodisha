import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/admin/dashboard",
};
