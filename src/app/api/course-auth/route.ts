import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SESSION_COOKIE = 'bf_course_session'

export async function POST(request: NextRequest) {
  const { password } = await request.json()

  if (typeof password !== 'string' || password !== process.env.COURSE_PASSWORD) {
    return NextResponse.json({ success: false }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set(SESSION_COOKIE, '1', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })
  return response
}

export async function DELETE() {
  const response = NextResponse.json({ success: true })
  response.cookies.delete(SESSION_COOKIE)
  return response
}
