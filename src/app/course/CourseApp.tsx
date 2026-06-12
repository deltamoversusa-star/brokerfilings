'use client'

import { useEffect, useState } from 'react'

const PROGRESS_KEY = 'bf_course_progress'

interface Lesson {
  id: string
  number: string
  title: string
}

interface Week {
  week: number
  title: string
  lessons: Lesson[]
}

const COURSE: Week[] = [
  {
    week: 1,
    title: 'Licensing + Setup',
    lessons: [
      { id: '1-1', number: '1.1', title: 'What Is a Moving Broker? — Industry Structure + Income Model' },
      { id: '1-2', number: '1.2', title: 'Brokers vs. Carriers — Roles, Liability, and How Money Flows' },
      { id: '1-3', number: '1.3', title: "What FMCSA Authority Means — and Why It's Required" },
      { id: '1-4', number: '1.4', title: 'Filing Your FMCSA Application — Step by Step' },
      { id: '1-4b', number: '1.4B', title: 'Identity Verification — Authorization and Secure Intake' },
      { id: '1-5', number: '1.5', title: 'The $75,000 Surety Bond — What You Actually Pay' },
      { id: '1-6', number: '1.6', title: 'Business Bank Account Setup + Bond Activation' },
    ],
  },
  {
    week: 2,
    title: 'Platform Setup',
    lessons: [
      { id: '2-1', number: '2.1', title: 'Why Platform Choice Matters — What to Look For in a Broker OS' },
      { id: '2-2', number: '2.2', title: 'MagickPlat Account Setup + Brokerage Profile' },
      { id: '2-3', number: '2.3', title: 'Connecting Stripe — Collecting and Holding Payments' },
      { id: '2-4', number: '2.4', title: 'Dashboard Orientation — CRM, Network Builder, Payments' },
      { id: '2-5', number: '2.5', title: 'Setting Your Service Area and Pricing Defaults' },
    ],
  },
  {
    week: 3,
    title: 'Carrier Network',
    lessons: [
      { id: '3-1', number: '3.1', title: 'How the Carrier Passive Income Model Works' },
      { id: '3-2', number: '3.2', title: 'Using the Pre-Loaded Carrier Database in MagickPlat' },
      { id: '3-3', number: '3.3', title: 'The Carrier Call Script — Opening, Pitch, Objection Handling' },
      { id: '3-4', number: '3.4', title: 'Live Call Demo — Watching a Real Carrier Conversation' },
      { id: '3-5', number: '3.5', title: 'Logging Calls, Sending Follow-Ups — Tracking Your Pipeline' },
      { id: '3-6', number: '3.6', title: 'Vetting Carriers — SAFER Database, Safety Scores, Insurance' },
      { id: '3-7', number: '3.7', title: 'Setting Carrier Rates in the Job Info Tab' },
    ],
  },
  {
    week: 4,
    title: 'Customer Operations',
    lessons: [
      { id: '4-1', number: '4.1', title: 'The Customer Journey — From First Call to Move Day' },
      { id: '4-2', number: '4.2', title: 'Creating a Lead in the CRM Pipeline' },
      { id: '4-3', number: '4.3', title: 'Quoting a Local Move — Hourly Rate, Labor, Drive Time' },
      { id: '4-4', number: '4.4', title: 'Quoting a Long-Distance Move — Cubic Foot Method + Inventory' },
      { id: '4-5', number: '4.5', title: 'Required Customer Disclosures — FMCSA Compliance' },
      { id: '4-6', number: '4.6', title: 'Dispatching the Job — Carrier Assignment and Confirmation' },
    ],
  },
  {
    week: 5,
    title: 'Payments + Compliance',
    lessons: [
      { id: '5-1', number: '5.1', title: 'How the MagickPlat Escrow System Works' },
      { id: '5-2', number: '5.2', title: 'Generating Stripe Payment Links for Every Job' },
      { id: '5-3', number: '5.3', title: 'Chargeback Prevention — What to Do Before and After a Move' },
      { id: '5-4', number: '5.4', title: 'Carrier Payouts — How Automatic Weekly Payments Work' },
      { id: '5-5', number: '5.5', title: 'Handling Disputes — Broker Responsibilities and Process' },
      { id: '5-6', number: '5.6', title: 'Compliance in Operations — Records, Disclosures, Audits' },
    ],
  },
  {
    week: 6,
    title: 'Leads + Marketing',
    lessons: [
      { id: '6-1', number: '6.1', title: 'Your Lead Engine — How Moving Brokers Get Customers' },
      { id: '6-2', number: '6.2', title: 'Why Digital Presence Is Your First Credibility Signal' },
      { id: '6-3', number: '6.3', title: 'Ad Booster — Your AI-Powered Lead Generation System' },
      { id: '6-4', number: '6.4', title: 'Realtor Referrals — Introduction to the Partnership Model' },
      { id: '6-5', number: '6.5', title: 'Realtor Referrals — The Pitch, The Setup, The Long Game' },
    ],
  },
  {
    week: 7,
    title: 'Realtor Network + Scaling',
    lessons: [
      { id: '7-1', number: '7.1', title: 'Why Realtors Are the Best Lead Source for Moving Brokers' },
      { id: '7-2', number: '7.2', title: 'The Realtor Database in MagickPlat' },
      { id: '7-3', number: '7.3', title: 'How Automatic Realtor Commission Payments Work' },
      { id: '7-4', number: '7.4', title: 'Setting Up Realtor Accounts and Commission Structures' },
      { id: '7-5', number: '7.5', title: 'Building Reporting and Tracking Your Growth' },
      { id: '7-6', number: '7.6', title: 'Your 90-Day Plan — Authority Live, First 10 Jobs, Scale' },
    ],
  },
]

const ALL_LESSONS = COURSE.flatMap((week) => week.lessons.map((lesson) => ({ ...lesson, week: week.week })))
const TOTAL_LESSONS = ALL_LESSONS.length

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#228B4A] shrink-0">
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 00-1.408-1.418l-7.04 7.04-2.55-2.55a1 1 0 10-1.414 1.415l3.257 3.257a1 1 0 001.414 0l7.74-7.745z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`w-4 h-4 shrink-0 text-[#228B4A] transition-transform ${open ? 'rotate-180' : ''}`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function CourseApp({ authenticated: initialAuthenticated }: { authenticated: boolean }) {
  const [mounted, setMounted] = useState(false)
  const [authenticated, setAuthenticated] = useState(initialAuthenticated)
  const [passwordInput, setPasswordInput] = useState('')
  const [loginError, setLoginError] = useState('')
  const [activeLessonId, setActiveLessonId] = useState('1-1')
  const [completedLessons, setCompletedLessons] = useState<string[]>([])
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([1])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const storedProgress = localStorage.getItem(PROGRESS_KEY)
    if (storedProgress) {
      try {
        const parsed = JSON.parse(storedProgress)
        if (Array.isArray(parsed)) setCompletedLessons(parsed)
      } catch {
        // ignore malformed progress data
      }
    }
    setMounted(true)
  }, [])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoginError('')
    try {
      const res = await fetch('/api/course-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      })
      if (res.ok) {
        setAuthenticated(true)
        setPasswordInput('')
      } else {
        setLoginError('Incorrect password. Please try again.')
      }
    } catch {
      setLoginError('Something went wrong. Please try again.')
    }
  }

  async function handleLogout() {
    await fetch('/api/course-auth', { method: 'DELETE' })
    localStorage.removeItem(PROGRESS_KEY)
    setAuthenticated(false)
    setCompletedLessons([])
    setPasswordInput('')
  }

  function toggleComplete(lessonId: string) {
    setCompletedLessons((prev) => {
      const next = prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId]
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next))
      return next
    })
  }

  function toggleWeek(week: number) {
    setExpandedWeeks((prev) => (prev.includes(week) ? prev.filter((w) => w !== week) : [...prev, week]))
  }

  function selectLesson(lessonId: string) {
    setActiveLessonId(lessonId)
    setMobileMenuOpen(false)
    const lesson = ALL_LESSONS.find((l) => l.id === lessonId)
    if (lesson && !expandedWeeks.includes(lesson.week)) {
      setExpandedWeeks((prev) => [...prev, lesson.week])
    }
  }

  if (!mounted) {
    return <div className="h-screen w-screen bg-white" />
  }

  if (!authenticated) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#0B1F3A] px-4">
        <div className="w-full max-w-sm bg-white rounded-xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="text-2xl font-bold text-[#228B4A]">BrokerFilings</div>
            <div className="mt-1 text-sm text-gray-500">Course Portal</div>
          </div>
          <h1 className="text-lg font-bold text-[#0B1F3A] text-center mb-1">HHG Moving Broker Launch Program</h1>
          <p className="text-sm text-gray-500 text-center mb-6">Enter your course password to continue</p>
          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Password"
              autoFocus
              className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#228B4A] focus:border-[#228B4A]"
            />
            {loginError && <p className="text-sm text-red-600">{loginError}</p>}
            <button
              type="submit"
              className="w-full bg-[#228B4A] text-white font-semibold rounded-md py-2.5 hover:bg-[#1B6B3A] transition-colors"
            >
              Access Course
            </button>
          </form>
          <p className="mt-6 text-center text-xs text-gray-400">
            Need access? Email <a href="mailto:support@brokerfilings.com" className="text-[#228B4A]">support@brokerfilings.com</a>
          </p>
        </div>
      </div>
    )
  }

  const activeIndex = ALL_LESSONS.findIndex((l) => l.id === activeLessonId)
  const activeLesson = ALL_LESSONS[activeIndex]
  const isCompleted = completedLessons.includes(activeLesson.id)
  const progressPercent = Math.round((completedLessons.length / TOTAL_LESSONS) * 100)

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100">
      {/* ── Header ── */}
      <header className="flex items-center justify-between gap-4 px-4 md:px-6 h-16 bg-white border-b border-gray-200 shrink-0 z-30">
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="md:hidden text-[#0B1F3A] shrink-0"
            aria-label="Toggle lesson menu"
          >
            <MenuIcon />
          </button>
          <div className="min-w-0">
            <div className="text-[#228B4A] font-bold text-lg leading-tight">BrokerFilings</div>
            <div className="hidden sm:block text-xs text-gray-400 leading-tight">Course Portal</div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center text-center flex-1 min-w-0 px-2">
          <h1 className="text-base font-bold text-[#0B1F3A] truncate w-full">HHG Moving Broker Launch Program</h1>
          <p className="text-xs text-gray-500 truncate w-full">
            7-Week Complete Course — {TOTAL_LESSONS} Lessons · Instructor: Erica Dorsey
          </p>
        </div>

        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <div className="hidden sm:flex flex-col items-end w-36 md:w-44">
            <span className="text-xs text-gray-500 mb-1 whitespace-nowrap">
              {completedLessons.length} of {TOTAL_LESSONS} lessons completed
            </span>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#228B4A] transition-all" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="text-sm font-semibold text-gray-600 hover:text-[#228B4A] border border-gray-300 rounded-md px-3 py-1.5 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="flex flex-1 min-h-0 relative">
        {/* ── Mobile overlay ── */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-20 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* ── Sidebar ── */}
        <aside
          className={`fixed md:static inset-y-0 left-0 z-30 w-70 bg-white border-r border-gray-200 overflow-y-auto transform transition-transform duration-200 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 md:hidden">
            <span className="text-sm font-bold text-[#0B1F3A]">Course Menu</span>
            <button type="button" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="text-gray-500">
              <CloseIcon />
            </button>
          </div>

          <div className="px-4 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>Overall Progress</span>
              <span className="font-semibold text-[#228B4A]">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#228B4A] transition-all" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>

          <nav>
            {COURSE.map((week) => {
              const expanded = expandedWeeks.includes(week.week)
              return (
                <div key={week.week} className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => toggleWeek(week.week)}
                    className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left hover:bg-gray-50"
                  >
                    <span className="text-xs font-bold uppercase tracking-wide text-[#228B4A]">
                      Week {week.week} — {week.title}
                    </span>
                    <ChevronIcon open={expanded} />
                  </button>
                  {expanded && (
                    <ul className="pb-2">
                      {week.lessons.map((lesson) => {
                        const active = lesson.id === activeLessonId
                        const done = completedLessons.includes(lesson.id)
                        return (
                          <li key={lesson.id}>
                            <button
                              type="button"
                              onClick={() => selectLesson(lesson.id)}
                              className={`w-full flex items-start gap-2 text-left px-4 py-2 text-sm border-l-4 transition-colors ${
                                active
                                  ? 'bg-[#E8F5EE] border-[#228B4A] text-[#228B4A] font-semibold'
                                  : 'border-transparent text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              <span className="mt-0.5">
                                {done ? <CheckIcon /> : <span className="inline-block w-4 h-4 rounded-full border border-gray-300" />}
                              </span>
                              <span>
                                {lesson.number} {lesson.title}
                              </span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              )
            })}
          </nav>
        </aside>

        {/* ── Main Content ── */}
        <main className="flex-1 overflow-y-auto bg-gray-100">
          <div className="max-w-3xl mx-auto px-4 md:px-8 py-6 md:py-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#0B1F3A] text-white text-xs font-bold uppercase px-2.5 py-1 rounded">
                Week {activeLesson.week}
              </span>
              <span className="bg-[#228B4A] text-white text-xs font-bold uppercase px-2.5 py-1 rounded">
                Lesson {activeLesson.number}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-5">{activeLesson.title}</h2>

            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-md">
              <iframe
                key={activeLesson.id}
                src="https://player.vimeo.com/video/PLACEHOLDER"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={activeLesson.title}
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => toggleComplete(activeLesson.id)}
                className={`px-5 py-2.5 rounded-md font-semibold text-sm transition-colors ${
                  isCompleted
                    ? 'bg-[#228B4A] text-white hover:bg-[#1B6B3A]'
                    : 'bg-white border-2 border-[#228B4A] text-[#228B4A] hover:bg-[#E8F5EE]'
                }`}
              >
                {isCompleted ? '✓ Completed' : 'Mark Complete'}
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Having trouble? Email{' '}
              <a href="mailto:support@brokerfilings.com" className="text-[#228B4A] underline">
                support@brokerfilings.com
              </a>
            </p>

            <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6">
              <button
                type="button"
                disabled={activeIndex === 0}
                onClick={() => selectLesson(ALL_LESSONS[activeIndex - 1].id)}
                className="text-sm font-semibold text-[#0B1F3A] border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous Lesson
              </button>
              <button
                type="button"
                disabled={activeIndex === ALL_LESSONS.length - 1}
                onClick={() => selectLesson(ALL_LESSONS[activeIndex + 1].id)}
                className="text-sm font-semibold text-white bg-[#228B4A] rounded-md px-4 py-2 hover:bg-[#1B6B3A] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next Lesson →
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
