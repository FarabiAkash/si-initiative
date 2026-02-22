/**
 * CMED Email Service - server-only module.
 * Uses EMAIL_SERVICE_IDENTIFIER and EMAIL_SERVICE_PASSWORD from .env for login.
 * Caches service_key in memory; validates before each send; re-login if invalid or missing.
 */

const BASE_URL = process.env.EMAIL_SERVICE_URL
let cachedServiceKey = null

/**
 * Clear cached key (e.g. when validation fails).
 */
function clearCachedKey() {
  cachedServiceKey = null
}

/**
 * Login and return service_key. Uses identifier/password from .env.
 * Caches the key for subsequent calls.
 * @returns {Promise<string>} service_key
 */
export async function getServiceKey() {
  if (cachedServiceKey) return cachedServiceKey

  const identifier = process.env.EMAIL_SERVICE_IDENTIFIER
  const password = process.env.EMAIL_SERVICE_PASSWORD

  if (!BASE_URL || !identifier || !password) {
    throw new Error(
      'Email service not configured: EMAIL_SERVICE_URL, EMAIL_SERVICE_IDENTIFIER, and EMAIL_SERVICE_PASSWORD must be set in .env'
    )
  }

  const res = await fetch(`${BASE_URL}/api/v1/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier, password }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Email service login failed: ${res.status} ${text}`)
  }

  const data = await res.json()
  const key = data?.service_key
  if (!key) throw new Error('Email service login did not return service_key')

  cachedServiceKey = key
  return key
}

/**
 * Validate a service key with the external API.
 * @param {string} key
 * @returns {Promise<boolean>}
 */
export async function validateKey(key) {
  if (!key) return false
  if (!BASE_URL) return false

  try {
    const res = await fetch(`${BASE_URL}/api/auth/validate-key`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service_key: key }),
    })
    if (!res.ok) return false
    const data = await res.json()
    return data?.valid === true
  } catch {
    return false
  }
}

/**
 * Get a valid service key: return cached if valid; otherwise login (and re-login if invalid).
 * @returns {Promise<string>}
 */
async function getValidServiceKey() {
  let key = await getServiceKey()
  const valid = await validateKey(key)
  if (!valid) {
    clearCachedKey()
    key = await getServiceKey()
  }
  return key
}

/**
 * Send an email using the template API.
 * Before sending: ensures key is valid; if invalid or missing, re-login then send.
 * @param {{
 *   template_slug: string
 *   email_to: string
 *   reply_to: string
 *   params: Record<string, unknown>
 *   captcha_token: string
 * }} payload
 * @returns {Promise<{ status: string; message: string }>}
 */
export async function sendTemplate(payload) {
  if (!BASE_URL) {
    throw new Error('EMAIL_SERVICE_URL is not set')
  }

  const { template_slug, email_to, reply_to, params, captcha_token } = payload
  if (!template_slug || !email_to || !reply_to || !params || !captcha_token) {
    throw new Error(
      'sendTemplate requires template_slug, email_to, reply_to, params, and captcha_token'
    )
  }

  const key = await getValidServiceKey()

  const res = await fetch(`${BASE_URL}/api/v1/email/send-template`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': key,
    },
    body: JSON.stringify({
      template_slug,
      email_to,
      reply_to,
      params,
      captcha_token,
    }),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data?.message || `Email send failed: ${res.status}`)
  }
  return data
}
