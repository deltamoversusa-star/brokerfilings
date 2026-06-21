import crypto from 'crypto'

// Set this in your environment variables — a long, random string.
// You can generate one with: openssl rand -hex 32
const SESSION_SECRET = process.env.SESSION_SECRET!

/**
 * Creates a signed session token embedding the user's email.
 * Format: base64url(email).hmacSignature
 */
export function createSessionToken(email: string): string {
  const payload = Buffer.from(email).toString('base64url')
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(payload)
    .digest('base64url')
  return `${payload}.${signature}`
}

/**
 * Verifies a session token and returns the email if valid, or null if not.
 */
export function verifySessionToken(token?: string | null): string | null {
  if (!token) return null
  const [payload, signature] = token.split('.')
  if (!payload || !signature) return null

  const expected = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(payload)
    .digest('base64url')

  const sigBuf = Buffer.from(signature)
  const expBuf = Buffer.from(expected)
  if (sigBuf.length !== expBuf.length) return null
  if (!crypto.timingSafeEqual(sigBuf, expBuf)) return null

  try {
    return Buffer.from(payload, 'base64url').toString('utf-8')
  } catch {
    return null
  }
}
