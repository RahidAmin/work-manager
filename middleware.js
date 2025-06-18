import { NextResponse } from "next/server";



export function middleware(request) {
    console.log('middleware executed..')

    const authToken = request.cookies.get('authToken')?.value;
    if (request.nextUrl.pathname === "/api/login") {
        return
    }

    const loggedInUserNotAccessPaths = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === '/signUp';
    if (loggedInUserNotAccessPaths) {
        if (authToken) {
            return NextResponse.redirect(new URL("/profile/user", request.url));
        }
    } else {
        if (!authToken) {
            return NextResponse.redirect(new URL("/login", request.url));
        } else {
            //verify token
        }

    }



    console.log('auth token: ', authToken);
}

export const config = {
    // matcher: ['/add-task'], //for one route
    matcher: ['/', '/api/:path*', '/login', '/signUp', '/add-task', '/show-tasks']
}