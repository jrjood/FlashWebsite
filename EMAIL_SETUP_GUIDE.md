# 📧 Email Setup Guide

## Current Email Flow

Your system is already configured to send emails for:

1. **Contact Form** → Sends to `hr@wealthholding-eg.com`
2. **Site Visit Request** → Sends to `hr@wealthholding-eg.com`
3. **Job Application** → Sends to `hr@wealthholding-eg.com` (with CV attachment link)

## Setup Options

### Option 1: Gmail (Recommended for Testing) ⚡

**Steps:**

1. **Create/Use a Gmail Account**

   - You can use any Gmail account (e.g., `yourcompany@gmail.com`)
   - Or use a personal Gmail for testing

2. **Enable 2-Step Verification**

   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

3. **Generate App Password**

   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Flash Website"
   - Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

4. **Update `.env` file in `backend` folder:**

   ```env
   EMAIL_SERVICE=gmail
   EMAIL_USER=yourcompany@gmail.com
   EMAIL_PASSWORD=abcdefghijklmnop
   EMAIL_FROM=yourcompany@gmail.com
   HR_EMAIL=hr@wealthholding-eg.com
   CONTACT_EMAIL=hr@wealthholding-eg.com
   BACKEND_URL=http://localhost:5000
   ```

5. **Restart Docker:**
   ```bash
   docker-compose down
   docker-compose up -d
   ```

---

### Option 2: Company SMTP Server (For Production) 🏢

If Wealth Holding has an email server (e.g., Office 365, cPanel, custom SMTP):

1. **Get SMTP Details from Your IT/Hosting Provider:**

   - SMTP Host (e.g., `mail.wealthholding-eg.com`)
   - SMTP Port (usually 587 or 465)
   - Email account credentials

2. **Update `.env` file:**

   ```env
   # Comment out or remove EMAIL_SERVICE
   # EMAIL_SERVICE=gmail

   SMTP_HOST=mail.wealthholding-eg.com
   SMTP_PORT=587
   SMTP_SECURE=false
   EMAIL_USER=noreply@wealthholding-eg.com
   EMAIL_PASSWORD=your-smtp-password
   EMAIL_FROM=noreply@wealthholding-eg.com
   HR_EMAIL=hr@wealthholding-eg.com
   CONTACT_EMAIL=hr@wealthholding-eg.com
   BACKEND_URL=http://localhost:5000
   ```

3. **Restart Docker:**
   ```bash
   docker-compose down
   docker-compose up -d
   ```

---

## Testing Locally with Docker ✅

**Yes, you can test locally!** Here's how:

### Step-by-Step Test:

1. **Configure email in `.env`** (use Gmail for easiest testing)

2. **Restart containers:**

   ```bash
   docker-compose down
   docker-compose up -d
   ```

3. **Check backend logs to confirm email config loaded:**

   ```bash
   docker-compose logs backend
   ```

4. **Test each form:**

   **A. Contact Form:**

   - Go to: http://localhost:5173/contact
   - Click "Send Mail"
   - Fill: Name, Email, Phone, Message
   - Click "SEND"
   - Check `hr@wealthholding-eg.com` inbox

   **B. Site Visit:**

   - Go to: http://localhost:5173/contact
   - Click "Site Visit"
   - Fill: Name, Email, Phone, Date, Time Slot
   - Click "Book Now"
   - Check `hr@wealthholding-eg.com` inbox

   **C. Job Application:**

   - Go to: http://localhost:5173/contact
   - Click "Join Us"
   - Fill: Name, Email, Phone, Position
   - Upload CV (PDF/DOC)
   - Click "SEND"
   - Check `hr@wealthholding-eg.com` inbox
   - Email should include link to download CV

5. **Check Docker logs if email fails:**
   ```bash
   docker-compose logs backend | findstr email
   ```

---

## Email Content Examples

### 1. Contact Form Email

**To:** hr@wealthholding-eg.com  
**Subject:** New Contact Form Submission from [Name]  
**Body:**

```
New Contact Form Submission

Name: John Doe
Email: john@example.com
Phone: +201234567890
Message: I'm interested in your properties...

Submitted at: 11/29/2025, 9:30:00 PM
```

### 2. Site Visit Email

**To:** hr@wealthholding-eg.com  
**Subject:** New Site Visit Request: [Name]  
**Body:**

```
New Site Visit Request

Name: Jane Smith
Email: jane@example.com
Phone: +201234567890
Preferred Date: 2025-12-15
Time Slot: Morning (9 AM - 12 PM)

Submitted at: 11/29/2025, 9:35:00 PM
```

### 3. Job Application Email

**To:** hr@wealthholding-eg.com  
**Subject:** New Job Application: [Position]  
**Body:**

```
New Job Application

Name: Ahmed Hassan
Email: ahmed@example.com
Phone: +201234567890
Position: Marketing
CV: http://localhost:5000/uploads/cv/1234567890-resume.pdf

Submitted at: 11/29/2025, 9:40:00 PM
```

---

## Troubleshooting

### ❌ Email Not Sending

1. **Check backend logs:**

   ```bash
   docker-compose logs backend
   ```

2. **Common errors:**

   - `Invalid login` → Wrong email/password
   - `Connection timeout` → Wrong SMTP host/port
   - `Authentication failed` → Need App Password for Gmail

3. **Verify environment variables loaded:**
   ```bash
   docker exec -it re-backend sh
   printenv | grep EMAIL
   ```

### ⚠️ Gmail Blocking Emails

- Make sure you're using an **App Password**, not your regular password
- Enable "Less secure app access" (not recommended, use App Password instead)

### 📧 Emails Going to Spam

- For production, use company domain email (Option 2)
- Add SPF/DKIM records to your domain
- Use `noreply@wealthholding-eg.com` as sender

---

## Production Deployment

When deploying to production server:

1. **Use company SMTP** (Option 2)
2. **Update `BACKEND_URL`** in `.env`:
   ```env
   BACKEND_URL=https://your-domain.com
   ```
3. **Use secure SMTP** (port 465):
   ```env
   SMTP_PORT=465
   SMTP_SECURE=true
   ```

---

## Quick Start (Gmail Test)

**Copy this into `backend/.env`:**

```env
# Replace with your Gmail credentials
EMAIL_SERVICE=gmail
EMAIL_USER=your-test-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
EMAIL_FROM=your-test-email@gmail.com

# All emails go here
HR_EMAIL=hr@wealthholding-eg.com
CONTACT_EMAIL=hr@wealthholding-eg.com

BACKEND_URL=http://localhost:5000
```

**Then run:**

```bash
docker-compose down
docker-compose up -d
```

**Test at:** http://localhost:5173/contact

---

## Summary

✅ **Email code is ready** - just needs credentials  
✅ **All forms send to** `hr@wealthholding-eg.com`  
✅ **Can test locally** with Docker  
✅ **Gmail works** for testing (easiest option)  
✅ **Production ready** when you use company SMTP

**Next Step:** Choose Gmail (for quick testing) or company SMTP (for production) and update the `.env` file!
