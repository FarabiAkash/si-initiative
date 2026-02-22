/**
 * Centralized ReCAPTCHA v3 for the app.
 * Loads the script once and exposes getRecaptchaToken(action) for use
 * wherever email (or other protected actions) are submitted.
 *
 * Requires NEXT_PUBLIC_RECAPTCHA_SITE_KEY in .env.
 * @see captcha-implementation.md
 */

const SITE_KEY = typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY : null

let scriptLoadPromise = null

/**
 * Load the reCAPTCHA v3 script once. Safe to call multiple times.
 * @returns {Promise<void>}
 */
function loadRecaptchaScript() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('ReCAPTCHA can only run in the browser'))
  }
  if (!SITE_KEY) {
    return Promise.reject(
      new Error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set. Add it to .env for ReCAPTCHA v3.')
    )
  }
  if (window.grecaptcha?.ready) {
    return Promise.resolve()
  }
  if (scriptLoadPromise) return scriptLoadPromise

  scriptLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src*="recaptcha/api.js"]')
    if (existing) {
      if (window.grecaptcha?.ready) {
        window.grecaptcha.ready(resolve)
        return
      }
      existing.addEventListener('load', () => {
        if (window.grecaptcha?.ready) window.grecaptcha.ready(resolve)
        else resolve()
      })
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`
    script.async = true
    script.onload = () => {
      if (window.grecaptcha?.ready) window.grecaptcha.ready(resolve)
      else resolve()
    }
    script.onerror = () => reject(new Error('Failed to load ReCAPTCHA script'))
    document.head.appendChild(script)
  })

  return scriptLoadPromise
}

/**
 * Get a ReCAPTCHA v3 token for the given action.
 * Use this before sending email (or pass action to sendEmailWithCaptcha in lib/emailClient).
 *
 * @param {string} [action='submit'] - Action name (e.g. 'submit', 'contact', 'newsletter')
 * @returns {Promise<string>} Token to send as captcha_token
 */
export async function getRecaptchaToken(action = 'submit') {
  await loadRecaptchaScript()
  if (!window.grecaptcha?.execute || !SITE_KEY) {
    throw new Error('ReCAPTCHA is not available. Check NEXT_PUBLIC_RECAPTCHA_SITE_KEY.')
  }
  return window.grecaptcha.execute(SITE_KEY, { action })
}
