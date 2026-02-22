import { sendTemplate } from '@/lib/emailService'

const REQUIRED = ['template_slug', 'email_to', 'reply_to', 'params', 'captcha_token']

/**
 * POST /api/email/send
 * Body: { template_slug, email_to, reply_to, params, captcha_token }
 * Validates key (re-login if invalid/missing) and sends via external email service.
 */
export async function POST(request) {
  try {
    const body = await request.json()
    if (!body || typeof body !== 'object') {
      return Response.json(
        { status: 'error', message: 'Request body must be JSON object' },
        { status: 400 }
      )
    }

    for (const field of REQUIRED) {
      if (body[field] === undefined || body[field] === null) {
        return Response.json(
          { status: 'error', message: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }
    if (typeof body.params !== 'object' || Array.isArray(body.params)) {
      return Response.json(
        { status: 'error', message: 'params must be an object' },
        { status: 400 }
      )
    }

    const result = await sendTemplate({
      template_slug: body.template_slug,
      email_to: body.email_to,
      reply_to: body.reply_to,
      params: body.params,
      captcha_token: body.captcha_token,
    })

    return Response.json(result)
  } catch (err) {
    const message = err?.message || 'Failed to send email'
    const status = message.includes('configured') || message.includes('not set') ? 503 : 502
    return Response.json({ status: 'error', message }, { status })
  }
}
