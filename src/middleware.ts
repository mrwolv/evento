import { url } from "inspector";
import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/events/all", request.url));
}

export const config = {
  matcher: ["/events"],
};
