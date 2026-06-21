import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { createClient } from '@supabase/supabase-js'
import { verifySessionToken } from '@/lib/courseSession'
import CourseApp from './CourseApp'

export const metadata: Metadata = {
  title: 'HHG Moving Broker Launch Program — BrokerFilings',
  description:
    'Course covering licensing, platform setup, carrier network, customer operations, payments, compliance, and scaling your moving brokerage.',
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default async function CoursePage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('bf_course_session')?.value
  const email = verifySessionToken(token)

  if (!email) {
    return <CourseApp authenticated={false} accessLevel="course" />
  }

  const { data: purchases } = await supabase
    .from('course_purchases')
    .select('product')
    .eq('email', email)
    .eq('active', true)

  const hasBundle = purchases?.some((p) => p.product === 'bundle') ?? false
  const accessLevel: 'bundle' | 'course' = hasBundle ? 'bundle' : 'course'

  return <CourseApp authenticated={true} accessLevel={accessLevel} />
}
