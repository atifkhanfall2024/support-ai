
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {

    const { pathname } = req.nextUrl

    // Allow main dashboard page
    if (pathname === "/dashboard") {
        return NextResponse.next()
    }

    // Protect nested routes like /dashboard/textform
       const token = req.cookies.get("token")?.value

    if (!token) {
        return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard/:path*"]
}