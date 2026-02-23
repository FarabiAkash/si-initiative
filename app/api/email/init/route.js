import { getServiceKey } from '@/lib/emailService'

/**
 * GET /api/email/init
 * Warms the email service key on first page load (login using .env credentials, cache key server-side).
 * Call once when the app loads; no body or key returned to client.
 */
export async function GET() {
  try {
    await getServiceKey()
    return Response.json({ ok: true })
  } catch (err) {
    console.error('Email init failed:', err?.message)
    return Response.json(
      { status: 'error', message: err?.message || 'Email service init failed' },
      { status: 502 }
    )
  }
}
