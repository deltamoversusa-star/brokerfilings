import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { createClient } from '@supabase/supabase-js'
import { verifySessionToken } from '@/lib/courseSession'
import CourseApp from './CourseApp'

export const metadata: Metadata = {
  title: 'HHG Moving Broker Launch Program — BrokerFilings',
  description:
    '7-week course covering licensing, platform setup, carrier network, customer operations, payments, compliance, and scaling your moving brokerage.',
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default async function CoursePage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('bf_course_session')?.value
  const email = verifySessionToken(token)

  let track: 'full' | 'licensed' = 'full'

  if (email) {
    const { data } = await supabase
      .from('course_purchases')
      .select('product')
      .eq('email', email)
      .eq('active', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    if (data?.product === 'course') {
      track = 'licensed'
    }
  }

  return <CourseApp authenticated={!!email} track={track} />
}
