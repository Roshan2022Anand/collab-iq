import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request) {
    const token = await getToken({ req: request })

    // Check if the user is trying to access the mainPg route
    if (request.nextUrl.pathname.startsWith('/mainPg')) {
        // If there's no token, redirect to the login page
        if (!token) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    // For all other routes, allow the request to proceed
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/mainPg/:path*'],
}