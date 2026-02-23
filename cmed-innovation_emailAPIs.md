# CMED Innovation - Email Service API Documentation

## Base Configuration

**Base URL:** `https://cmed-email-service.onrender.com`

> **Note:** Store this in your `.env` file as it may change.

---

## Authentication

### Login

Get your service key for API authentication.

**Endpoint:** `POST {{baseUrl}}/api/v1/auth/login`

**Request Body:**

```json
{
  "identifier": "innovationcmed462@gmail.com",
  "password": "cmed@2026"
}
```

**Response:**

- Returns `service_key` which must be included in all subsequent API requests

**Usage:**

- Add the `service_key` in the `X-API-Key` header for all POST requests

---

### Validate Service Key

Check if a service key is valid.

**Endpoint:** `POST {{baseUrl}}/api/auth/validate-key`

**Request Body:**

```json
{
  "service_key": "your-service-key-here"
}
```

**Response (Valid Key):**

```json
{
  "valid": true
}
```

**Response (Invalid Key):**

```json
{
  "valid": false
}
```

**Usage:**

- This endpoint does not require authentication
- Useful for checking if a stored service key is still valid before making API calls

---

## Email Templates

All email endpoints use the same base URL: `POST {{baseUrl}}/api/v1/email/send-template`

**Required Header:**

```
X-API-Key: <your-service-key>
```

---

### 1️⃣ Get in Touch

Send a general inquiry or message.

**Template Slug:** `get-in-touch`

**Request Body:**

```json
{
  "template_slug": "get-in-touch",
  "email_to": "innovationcmed462@gmail.com",
  "reply_to": "{{email_from_frontend}}",
  "params": {
    "name": "{{name_from_frontend}}",
    "email": "{{email_from_frontend}}",
    "message": "{{message_from_frontend}}"
  },
  "captcha_token": "your-captcha-token-here"
}
```

**Parameters:**

- `name` - Sender's full name
- `email` - Sender's email address
- `message` - Message content

---

### 2️⃣ Schedule a Call

Schedule a call with specific date, time, and timezone.

**Template Slug:** `schedule-a-call`

**Request Body:**

```json
{
  "template_slug": "schedule-a-call",
  "email_to": "innovationcmed462@gmail.com",
  "reply_to": "{{email_from_frontend}}",
  "params": {
    "name": "{{name_from_frontend}}",
    "email": "{{email_from_frontend}}",
    "notes": "{{notes_from_frontend}}",
    "schedule": {
      "date": "{{schedule_date_from_frontend}}",
      "time_range": "{{schedule_time_range_from_frontend}}",
      "time_zone": "{{schedule_time_zone_from_frontend}}"
    }
  },
  "captcha_token": "your-captcha-token-here"
}
```

**Parameters:**

- `name` - Requester's full name
- `email` - Requester's email address
- `notes` - Additional notes or purpose of call
- `schedule.date` - Preferred date for the call
- `schedule.time_range` - Preferred time range
- `schedule.time_zone` - Timezone for the scheduled call

---

### 3️⃣ Become Our Partner

Partnership inquiry form submission.

**Template Slug:** `become-our-partner`

**Request Body:**

```json
{
  "template_slug": "become-our-partner",
  "email_to": "innovationcmed462@gmail.com",
  "reply_to": "{{email_from_frontend}}",
  "params": {
    "name": "{{name_from_frontend}}",
    "email": "{{email_from_frontend}}",
    "message": "{{message_from_frontend}}"
  },
  "captcha_token": "your-captcha-token-here"
}
```

**Parameters:**

- `name` - Partner's full name
- `email` - Partner's email address
- `message` - Partnership proposal or inquiry

---

### 4️⃣ Contact Us

General contact form submission.

**Template Slug:** `contact-us`

**Request Body:**

```json
{
  "template_slug": "contact-us",
  "email_to": "innovationcmed462@gmail.com",
  "reply_to": "{{email_from_frontend}}",
  "params": {
    "name": "{{name_from_frontend}}",
    "email": "{{email_from_frontend}}",
    "message": "{{message_from_frontend}}"
  },
  "captcha_token": "your-captcha-token-here"
}
```

**Parameters:**

- `name` - Contact's full name
- `email` - Contact's email address
- `message` - Message or inquiry

---

### 5️⃣ Subscribe to Newsletter

Newsletter subscription form.

**Template Slug:** `subscribe-to-newsletter`

**Request Body:**

```json
{
  "template_slug": "subscribe-to-newsletter",
  "email_to": "innovationcmed462@gmail.com",
  "reply_to": "{{email_from_frontend}}",
  "params": {
    "email": "{{email_from_frontend}}"
  },
  "captcha_token": "your-captcha-token-here"
}
```

**Parameters:**

- `email` - Subscriber's email address

---

## Common Fields

All email template requests include these common fields:

| Field           | Type   | Required | Description                                    |
| --------------- | ------ | -------- | ---------------------------------------------- |
| `template_slug` | string | ✅       | Unique identifier for the email template       |
| `email_to`      | string | ✅       | Recipient email address                        |
| `reply_to`      | string | ✅       | Reply-to email address (usually from frontend) |
| `params`        | object | ✅       | Template-specific parameters                   |
| `captcha_token` | string | ✅       | CAPTCHA validation token                       |

---

## Response Format

**Success Response (200):**

```json
{
  "status": "success",
  "message": "Email sent successfully"
}
```

**Error Response (4xx/5xx):**

```json
{
  "status": "error",
  "message": "Error description"
}
```

---

## Implementation Notes

1. **Authentication:** Always login first to obtain `service_key`
2. **Headers:** Include `X-API-Key: <service_key>` in all email requests
3. **CAPTCHA:** Implement CAPTCHA validation on frontend before submission
4. **Reply-To:** Set to user's email for direct responses
5. **Environment Variable:** Store base URL in `.env` file for easy updates

---

## Example Implementation

```javascript
// Login to get service key
const login = async () => {
  const response = await fetch(
    `${process.env.EMAIL_SERVICE_URL}/api/v1/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: "innovationcmed462@gmail.com",
        password: "cmed@2026",
      }),
    },
  );
  const data = await response.json();
  return data.service_key;
};

// Send email
const sendEmail = async (serviceKey, templateData) => {
  const response = await fetch(
    `${process.env.EMAIL_SERVICE_URL}/api/v1/email/send-template`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": serviceKey,
      },
      body: JSON.stringify(templateData),
    },
  );
  return await response.json();
};
```
