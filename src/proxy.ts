import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  if (!request.cookies.has('bf_course_session')) {
    return NextResponse.redirect(new URL('/course', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/course/:path+'],
}
