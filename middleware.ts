import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { updateSession } from './utils/authContext'
 
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('access_token')?.value
    console.log(authToken)
  if (authToken) {
    return NextResponse.rewrite(new URL('/dashboard', request.url))
  }
  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$)(?!login|signup|.*\\.tsx$)(?!public|.*\\.jpeg$).*)'],
  //matcher: ['/((?!api|_next/static|_next/image|.*\\.png$)(?!login|signup|.*\\.tsx$).*)'],
}

export async function updateSessionmiddleware(request: NextRequest) {
  return await updateSession(request);
}