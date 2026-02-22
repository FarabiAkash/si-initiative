/**
 * Client-side helper for sending email via the CMED Email Service.
 *
 * Prefer sendEmailWithCaptcha() for forms: it gets a ReCAPTCHA v3 token
 * centrally and sends in one call. Use sendEmail() only when you have
 * your own captcha token.
 *
 * @example With ReCAPTCHA (recommended for all email forms)
 * import { sendEmailWithCaptcha, EMAIL_RECIPIENT } from '@/lib/emailClient'
 * await sendEmailWithCaptcha({
 *   templateSlug: 'get-in-touch',
 *   emailTo: EMAIL_RECIPIENT,
 *   replyTo: form.email,
 *   params: { name: form.name, email: form.email, message: form.message },
 * })
 *
 * @example With your own token
 * import { sendEmail } from '@/lib/emailClient'
 * await sendEmail({ ...params, captchaToken: myToken })
 */

import { getRecaptchaToken } from '@/lib/recaptcha'

/** Fixed recipient for email forms; from NEXT_PUBLIC_EMAIL_RECIPIENT. Use when calling sendEmail / sendEmailWithCaptcha. */
export const EMAIL_RECIPIENT =
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_EMAIL_RECIPIENT) ||
  'innovationcmed462@gmail.com'

/**
 * @param {{
 *   templateSlug: string
 *   emailTo: string
 *   replyTo: string
 *   params: Record<string, unknown>
 *   captchaToken: string
 * }} options
 * @returns {Promise<{ status: string; message?: string }>}
 */
export async function sendEmail({
  templateSlug,
  emailTo,
  replyTo,
  params,
  captchaToken,
}) {
  const token = typeof captchaToken === 'string' ? captchaToken.trim() : ''
  if (!token) {
    throw new Error('CAPTCHA verification is required. Please try again.')
  }
  const res = await fetch('/api/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      template_slug: templateSlug,
      email_to: emailTo,
      reply_to: replyTo,
      params,
      captcha_token: token,
    }),
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    const message = data?.message || `Request failed: ${res.status}`
    throw new Error(message)
  }

  return data
}

/**
 * Send email with ReCAPTCHA v3 token obtained automatically.
 * Use this everywhere email is sent from forms (contact, schedule call, newsletter, etc.).
 *
 * @param {{
 *   templateSlug: string
 *   emailTo: string
 *   replyTo: string
 *   params: Record<string, unknown>
 *   action?: string
 * }} options - action defaults to 'submit' for ReCAPTCHA v3
 * @returns {Promise<{ status: string; message?: string }>}
 */
export async function sendEmailWithCaptcha({
  templateSlug,
  emailTo = EMAIL_RECIPIENT,
  replyTo,
  params,
  action = 'submit',
}) {
  const captchaToken = await getRecaptchaToken(action)
  if (!captchaToken || (typeof captchaToken === 'string' && !captchaToken.trim())) {
    throw new Error('ReCAPTCHA could not be verified. Please try again.')
  }
  return sendEmail({
    templateSlug,
    emailTo,
    replyTo,
    params,
    captchaToken,
  })
}
