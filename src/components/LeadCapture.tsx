'use client'

import { useState } from 'react'
import { subscribeEmail } from '@/app/actions/subscribe'

export default function LeadCapture({ source }: { source?: string } = {}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    const result = await subscribeEmail(email, source)
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error ?? 'Something went wrong.')
    }
  }

  return (
    <div className="lead-capture">
      <div className="lead-capture-inner">
        <h2>Not Ready Yet? Get the Free Moving Broker Launch Checklist.</h2>
        <p>Everything you need to start a compliant HHG moving brokerage — in one printable checklist.</p>

        {status === 'success' ? (
          <div className="lead-success">
            You&apos;re on the list! Check your inbox shortly.
          </div>
        ) : (
          <form className="lead-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="lead-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="lead-btn" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Send It Free'}
            </button>
          </form>
        )}

        {status === 'error' && <p className="lead-error">{errorMsg}</p>}
      </div>
    </div>
  )
}
