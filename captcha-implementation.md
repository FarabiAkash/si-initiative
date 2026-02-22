# CAPTCHA Implementation Guide

## Overview

This email service implements CAPTCHA verification to protect email endpoints from bot abuse and spam. The implementation supports both **hCaptcha** and **Google reCAPTCHA** (v2 and v3) with multi-tenant domain validation.

**Key Features:**

- ✅ Dual provider support (hCaptcha or reCAPTCHA)
- ✅ Multi-tenant domain validation (each org validated against their domain)
- ✅ reCAPTCHA v3 score-based filtering
- ✅ Test environment support (localhost, test keys)
- ✅ Action validation for reCAPTCHA v3
- ✅ Client IP tracking

---

## Configuration

### Environment Variables

Add these to your `.env` file:

```env
# Choose provider: "hcaptcha" or "recaptcha"
CAPTCHA_PROVIDER=recaptcha

# Backend secret key (get from provider dashboard)
CAPTCHA_SECRET=your-secret-key-here

# Frontend site key (used in your frontend forms)
CAPTCHA_SITE_KEY=your-site-key-here

# reCAPTCHA v3 only: minimum score threshold (0.0 to 1.0)
CAPTCHA_MIN_SCORE=0.5

# reCAPTCHA v3 only: action name to validate
CAPTCHA_V3_ACTION=submit
```

### Configuration in Settings

File: `app/core/config.py`

```python
class Settings(BaseSettings):
    CAPTCHA_PROVIDER: str | None = None   # "hcaptcha" or "recaptcha"
    CAPTCHA_SECRET: str | None = None
    CAPTCHA_SITE_KEY: str | None = None
    CAPTCHA_MIN_SCORE: float = 0.5        # reCAPTCHA v3 only
    CAPTCHA_V3_ACTION: str | None = "submit"  # reCAPTCHA v3 only
```

---

## How It Works

### 1. Verification Function

File: `app/utils/captcha.py`

```python
async def verify_captcha_or_400(
    *,
    token: str,
    org: "Organization",
    remote_ip: str | None = None
) -> dict[str, Any]:
```

**Process Flow:**

1. **Provider Selection**: Determines if using hCaptcha or reCAPTCHA
2. **API Call**: Sends token to provider's verification endpoint
3. **Success Check**: Validates `success` field from provider response
4. **Hostname Validation**: Ensures CAPTCHA was solved on correct domain
5. **Score Check** (reCAPTCHA v3): Validates minimum score threshold
6. **Action Check** (reCAPTCHA v3): Validates action name
7. **Returns**: Provider response data or raises HTTPException

### 2. Endpoint Protection

CAPTCHA verification is called in all email sending endpoints:

File: `app/api/routes/email.py`

```python
@router.post("/send")
async def send_email(
    request: Request,
    data: SendEmailSchema,
    org: Organization = Depends(require_api_key),
    db: Session = Depends(get_db),
):
    # Verify CAPTCHA with org-specific domain validation
    remote_ip = request.client.host if request.client else None
    await verify_captcha_or_400(token=data.captcha_token, org=org, remote_ip=remote_ip)

    # ... continue with email sending
```

### 3. Schema Requirements

All email schemas require `captcha_token` field:

File: `app/schemas/send_schema.py`

```python
class SendEmailSchema(BaseModel):
    email_to: EmailStr
    reply_to: EmailStr
    # ... other fields
    captcha_token: str = Field(..., min_length=1, description="hCaptcha or reCAPTCHA token")
```

---

## Multi-Tenant Domain Validation

### How It Works

Each organization registers with a `domain` (e.g., `example.com`). When CAPTCHA is verified:

1. Provider returns the hostname where CAPTCHA was solved
2. System validates hostname matches organization's domain
3. Allows exact match or www subdomain:
   - `example.com` ✅
   - `www.example.com` ✅
   - `other.example.com` ❌

### Test Environment Support

The following hostnames bypass domain validation:

- `localhost`
- `127.0.0.1`
- `testkey.google.com` (reCAPTCHA test keys)
- `testkey-website.com` (hCaptcha test keys)

### Code Implementation

```python
hostname = data.get("hostname") or data.get("host")

if hostname:
    hostname_lower = hostname.lower().strip()
    org_domain_lower = str(org.domain).lower().strip()

    # Allow test environments
    test_hostnames = {"testkey.google.com", "testkey-website.com", "localhost", "127.0.0.1"}

    if hostname_lower not in test_hostnames:
        # Production: validate against org domain
        allowed_domains = {org_domain_lower, f"www.{org_domain_lower}"}

        if hostname_lower not in allowed_domains:
            raise HTTPException(
                status_code=403,
                detail=f"Captcha hostname mismatch. Expected: {org.domain}"
            )
```

---

## Provider-Specific Details

### hCaptcha

**Verification URL**: `https://hcaptcha.com/siteverify`

**Getting Keys:**

1. Sign up at https://www.hcaptcha.com/
2. Create a site
3. Get Site Key (frontend) and Secret Key (backend)

**Configuration:**

```env
CAPTCHA_PROVIDER=hcaptcha
CAPTCHA_SECRET=0x1234567890abcdef
CAPTCHA_SITE_KEY=10000000-ffff-ffff-ffff-000000000001
```

### reCAPTCHA v2 (Checkbox)

**Verification URL**: `https://www.google.com/recaptcha/api/siteverify`

**Getting Keys:**

1. Visit https://www.google.com/recaptcha/admin
2. Choose reCAPTCHA v2
3. Add your domain
4. Get Site Key and Secret Key

**Configuration:**

```env
CAPTCHA_PROVIDER=recaptcha
CAPTCHA_SECRET=6LdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CAPTCHA_SITE_KEY=6LdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### reCAPTCHA v3 (Score-based)

**Verification URL**: `https://www.google.com/recaptcha/api/siteverify`

**Getting Keys:**

1. Visit https://www.google.com/recaptcha/admin
2. Choose reCAPTCHA v3
3. Add your domain
4. Get Site Key and Secret Key

**Configuration:**

```env
CAPTCHA_PROVIDER=recaptcha
CAPTCHA_SECRET=6LdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CAPTCHA_SITE_KEY=6LdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CAPTCHA_MIN_SCORE=0.5
CAPTCHA_V3_ACTION=submit
```

**Score System:**

- `1.0` = Very likely human
- `0.5` = Neutral (recommended threshold)
- `0.0` = Very likely bot

---

## Frontend Integration

### Example: reCAPTCHA v2 (React)

```javascript
// 1. Add script to HTML
<script src="https://www.google.com/recaptcha/api.js" async defer></script>;

// 2. Add widget to form
function ContactForm() {
  const [captchaToken, setCaptchaToken] = useState("");

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA");
      return;
    }

    const response = await fetch(`${API_URL}/api/email/send-template`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": serviceKey,
      },
      body: JSON.stringify({
        template_slug: "contact-us",
        email_to: "support@example.com",
        reply_to: formData.email,
        params: formData,
        captcha_token: captchaToken,
      }),
    });

    const data = await response.json();
    // Handle response
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}

      <div
        className="g-recaptcha"
        data-sitekey="your-site-key-here"
        data-callback={onCaptchaChange}
      ></div>

      <button type="submit">Send</button>
    </form>
  );
}
```

### Example: reCAPTCHA v3 (React)

```javascript
// 1. Add script to HTML
<script src="https://www.google.com/recaptcha/api.js?render=your-site-key"></script>;

// 2. Execute on form submit
const handleSubmit = async (e) => {
  e.preventDefault();

  // Get reCAPTCHA token
  const token = await window.grecaptcha.execute("your-site-key", {
    action: "submit",
  });

  const response = await fetch(`${API_URL}/api/email/send-template`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": serviceKey,
    },
    body: JSON.stringify({
      template_slug: "contact-us",
      email_to: "support@example.com",
      reply_to: formData.email,
      params: formData,
      captcha_token: token,
    }),
  });

  const data = await response.json();
  // Handle response
};
```

### Example: hCaptcha (React)

```javascript
// 1. Add script to HTML
<script src="https://js.hcaptcha.com/1/api.js" async defer></script>;

// 2. Add widget to form
function ContactForm() {
  const [captchaToken, setCaptchaToken] = useState("");

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA");
      return;
    }

    const response = await fetch(`${API_URL}/api/email/send-template`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": serviceKey,
      },
      body: JSON.stringify({
        template_slug: "contact-us",
        email_to: "support@example.com",
        reply_to: formData.email,
        params: formData,
        captcha_token: captchaToken,
      }),
    });

    const data = await response.json();
    // Handle response
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}

      <div
        className="h-captcha"
        data-sitekey="your-site-key-here"
        data-callback={onCaptchaChange}
      ></div>

      <button type="submit">Send</button>
    </form>
  );
}
```

---

## Testing

### Test Keys

Both providers offer test keys that always succeed:

**reCAPTCHA Test Keys:**

```env
CAPTCHA_SECRET=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
CAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
```

**hCaptcha Test Keys:**

- Site Key: `10000000-ffff-ffff-ffff-000000000001`
- Secret: `0x0000000000000000000000000000000000000000`

### Local Testing

1. Use localhost in organization domain:

   ```json
   {
     "domain": "localhost"
   }
   ```

2. Or use test keys which bypass domain validation

3. Add `DEV_CORS_ORIGINS` to allow frontend origin:
   ```env
   DEV_CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
   ```

---

## Error Handling

### HTTP Status Codes

| Code  | Reason                      | Solution                                                 |
| ----- | --------------------------- | -------------------------------------------------------- |
| `400` | CAPTCHA verification failed | Token invalid or expired - regenerate CAPTCHA            |
| `403` | Hostname mismatch           | Domain doesn't match organization's registered domain    |
| `403` | Score too low (v3)          | User likely a bot - increase CAPTCHA_MIN_SCORE or use v2 |
| `500` | CAPTCHA not configured      | Add CAPTCHA_PROVIDER and CAPTCHA_SECRET to .env          |
| `503` | Network error               | CAPTCHA provider API unreachable - check network         |

### Example Error Responses

**Missing Configuration:**

```json
{
  "detail": "Captcha is not configured on the server."
}
```

**Invalid Token:**

```json
{
  "detail": "Captcha verification failed."
}
```

**Hostname Mismatch:**

```json
{
  "detail": "Captcha hostname mismatch. Expected: example.com"
}
```

**Score Too Low:**

```json
{
  "detail": "Captcha score too low."
}
```

---

## Security Best Practices

### 1. Token Expiry

CAPTCHA tokens expire quickly (typically 2 minutes). Always:

- Generate token just before form submission
- Don't reuse tokens
- Handle expiry errors gracefully

### 2. Server-Side Validation Only

**Never validate CAPTCHA on client side only:**

- ❌ Client-side only = easily bypassed
- ✅ Server-side validation = secure

### 3. Score Tuning (reCAPTCHA v3)

Monitor your traffic and adjust `CAPTCHA_MIN_SCORE`:

- **0.7-1.0**: Very strict (may block legitimate users)
- **0.5-0.7**: Balanced (recommended)
- **0.0-0.5**: Lenient (may allow more bots)

### 4. Domain Registration

Ensure organization domain matches their actual website:

- ❌ Wrong: `example.com` when site is `mysite.com`
- ✅ Correct: Register actual production domain

### 5. Secret Key Protection

**Never expose backend secret:**

- Store in `.env` file (gitignored)
- Use environment variables in production
- Rotate keys if compromised

---

## Troubleshooting

### Issue: "Captcha hostname mismatch"

**Cause:** Frontend domain doesn't match organization's registered domain

**Solution:**

1. Check organization's `domain` field in database
2. Update if incorrect: `PATCH /api/org/me`
3. For dev: use `localhost` or test keys

### Issue: "Captcha verification failed"

**Causes:**

- Token expired (regenerate on frontend)
- Wrong secret key in backend
- Network issue contacting provider

**Solution:**

1. Enable CAPTCHA debug on frontend
2. Check backend logs for detailed error
3. Verify secret key matches provider dashboard
4. Test with provider's test keys first

### Issue: "Captcha score too low"

**Cause:** reCAPTCHA v3 detected suspicious activity

**Solution:**

1. Lower `CAPTCHA_MIN_SCORE` (careful!)
2. Switch to reCAPTCHA v2 (checkbox)
3. Review user's browser/network environment

### Issue: CORS errors preventing CAPTCHA

**Cause:** CAPTCHA verification happens before CORS check

**Solution:**

1. Ensure `DEV_CORS_ORIGINS` includes your frontend URL
2. Check organization's `domain` field
3. Add proper CORS headers in middleware

---

## Migration Guide

### From No CAPTCHA to CAPTCHA

1. **Add configuration:**

   ```env
   CAPTCHA_PROVIDER=recaptcha
   CAPTCHA_SECRET=your-secret
   CAPTCHA_SITE_KEY=your-site-key
   ```

2. **Update frontend forms:**
   - Add CAPTCHA widget
   - Include `captcha_token` in API requests

3. **Test thoroughly:**
   - Use test keys first
   - Verify localhost/dev environments work
   - Check production domain validation

### Switching Providers

**From reCAPTCHA to hCaptcha:**

1. Get hCaptcha keys
2. Update `.env`:
   ```env
   CAPTCHA_PROVIDER=hcaptcha
   CAPTCHA_SECRET=new-hcaptcha-secret
   CAPTCHA_SITE_KEY=new-hcaptcha-sitekey
   ```
3. Update frontend widget (change script source)
4. No backend code changes needed!

---

## API Reference

### Required Request Field

All email endpoints require:

```json
{
  "captcha_token": "03AGdBq..."
}
```

### Endpoints Protected

- `POST /api/email/send`
- `POST /api/email/send-template`

### Endpoints NOT Protected

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/validate-key`
- All other auth/organization/SMTP/template endpoints

---

## Future Enhancements

Potential improvements:

1. **Turnstile Support**: Add Cloudflare Turnstile provider
2. **Rate Limiting**: Combine with request rate limiting
3. **Analytics**: Track CAPTCHA solve rates
4. **Bypass for Trusted IPs**: Whitelist known good IPs
5. **Custom Error Messages**: Org-specific CAPTCHA error messages
6. **Token Caching**: Short-term cache to prevent replay attacks

---

## References

- [reCAPTCHA Documentation](https://developers.google.com/recaptcha)
- [hCaptcha Documentation](https://docs.hcaptcha.com/)
- [FastAPI Security Best Practices](https://fastapi.tiangolo.com/tutorial/security/)

---

## Support

For issues or questions:

1. Check logs in `app/utils/captcha.py`
2. Review CAPTCHA provider dashboard
3. Test with test keys first
4. Verify domain configuration in database
