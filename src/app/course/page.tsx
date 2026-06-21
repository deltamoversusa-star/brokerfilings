import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { verifySessionToken } from '@/lib/courseSession'
import CourseApp from './CourseApp'

export const metadata: Metadata = {
  title: 'HHG Moving Broker Launch Program — BrokerFilings',
  description:
    '7-week course covering licensing, platform setup, carrier network, customer operations, payments, compliance, and scaling your moving brokerage.',
}

export default async function CoursePage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('bf_course_session')?.value
  const email = verifySessionToken(token)

  return <CourseApp authenticated={!!email} />
}
