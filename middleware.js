import { NextResponse } from 'next/server';

export function middleware(request) {
  const adminCookie = request.cookies.get('user');

  if (adminCookie) {
    // If the 'admin' cookie exists, allow the user to access the admin page
    return NextResponse.next();
  }

  // If the 'admin' cookie does not exist, redirect to the signin page
  return NextResponse.redirect(new URL('/signin', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
};
