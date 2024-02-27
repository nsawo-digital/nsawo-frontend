import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { updateSession } from './utils/authContext'
 
export async function middleware(request: NextRequest) {
  const authToken = request.cookies.get('session')?.value
    console.log("baseUrl: " + request.url)
    console.log("destination: " + request.destination)
  if (authToken) {
    console.log('new: ' + new URL(request.url))
    return NextResponse.rewrite(new URL(request.url))
  }
  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$)(?!login|signup|.*\\.tsx$)(?!public|.*\\.jpeg$).*)'],
}

export async function updateSessionmiddleware(request: NextRequest) {
  return await updateSession(request);
}