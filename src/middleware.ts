import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;


  const publicpath  = ['/login', '/register'];

  console.log('login ', pathname, token, token && publicpath.includes(pathname))



  if (!token && pathname === '/') {
    return NextResponse.redirect(new URL('/login', request.url));
  }


  if (token && publicpath.includes(pathname)) {
    console.log('nmassukk kesini')
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: ['/', '/login', '/register', '/detail'], 
  };