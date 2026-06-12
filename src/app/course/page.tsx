import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import CourseApp from './CourseApp'

export const metadata: Metadata = {
  title: 'HHG Moving Broker Launch Program — BrokerFilings',
  description:
    '7-week course covering licensing, platform setup, carrier network, customer operations, payments, compliance, and scaling your moving brokerage.',
}

export default async function CoursePage() {
  const cookieStore = await cookies()
  const authenticated = cookieStore.get('bf_course_session')?.value === '1'

  return <CourseApp authenticated={authenticated} />
}
