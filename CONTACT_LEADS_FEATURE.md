# Contact & Leads Feature

This document describes the Contact & Leads feature that allows users to submit various types of inquiries through the website.

## Overview

The feature includes three separate contact flows:

1. **General Contact** - Email us form
2. **Site Visit Requests** - Schedule a property visit
3. **Career Applications** - Join our team

## Backend Structure

### Database Models

#### 1. Contact Model (`contacts` table)

- `id` - Primary key
- `name` - Contact's full name
- `email` - Contact's email
- `phone` - Contact's phone number
- `subject` - Optional subject/job title
- `message` - Contact message
- `status` - Enum: `new`, `read`, `responded`
- `created_at`, `updated_at` - Timestamps

#### 2. SiteVisit Model (`site_visits` table)

- `id` - Primary key
- `name` - Visitor's name
- `email` - Visitor's email
- `phone` - Visitor's phone number
- `project_name` - Optional project of interest
- `preferred_date` - Date (YYYY-MM-DD)
- `preferred_time_slot` - Optional time preference
- `message` - Optional additional notes
- `status` - Enum: `pending`, `confirmed`, `cancelled`, `completed`
- `created_at`, `updated_at` - Timestamps

#### 3. JobApplication Model (`job_applications` table)

- `id` - Primary key
- `name` - Applicant's name
- `email` - Applicant's email
- `phone` - Applicant's phone number
- `position` - Position applying for
- `message` - Cover letter/message
- `cv_filename` - Uploaded CV filename
- `cv_url` - URL path to CV file
- `status` - Enum: `new`, `reviewing`, `shortlisted`, `rejected`, `hired`
- `created_at`, `updated_at` - Timestamps

### API Endpoints

#### Contact Endpoints

- `POST /api/contact` - Submit general contact form (public)
- `GET /api/contact` - Get all contacts (admin only)

#### Site Visit Endpoints

- `POST /api/site-visits` - Submit site visit request (public)
- `GET /api/site-visits` - Get all site visits (admin only)
- `PATCH /api/site-visits/:id` - Update site visit status (admin only)

#### Career Endpoints

- `POST /api/careers` - Submit job application with CV upload (public)
- `GET /api/careers` - Get all applications (admin only)
- `PATCH /api/careers/:id` - Update application status (admin only)

### Email Notifications

Each submission triggers an automated email:

1. **Contact Form** → Sent to `info@wealthholding-eg.com`
2. **Site Visit** → Sent to `info@wealthholding-eg.com`
3. **Career Application** → Sent to `hr@wealthholding-eg.com` (includes CV link)

### File Uploads

CV files are uploaded to `backend/uploads/cv/` with:

- Accepted formats: `.pdf`, `.doc`, `.docx`
- File size limit: 5MB
- Naming convention: `cv-{timestamp}-{random}.{ext}`

## Frontend Implementation

### Forms

All forms are located in `frontend/src/layout/ContactPage/`:

1. **ContactForm.jsx** - General contact form
2. **SiteVisitForm.jsx** - Site visit booking form
3. **JoinCrewForm.jsx** - Career application form with file upload

### Features

- Form validation
- Loading states during submission
- Success/error feedback messages
- File drag-and-drop for CV upload
- i18n support for multilingual content
- Direct API integration (no third-party forms)

### API Integration

The frontend uses `api.js` with three new methods:

```javascript
api.submitContact(data);
api.submitSiteVisit(data);
api.submitCareerApplication(formData);
```

## Setup Instructions

### 1. Environment Variables

Add to your `.env` file:

```env
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# Email Recipients
EMAIL_FROM=noreply@wealthholding-eg.com
CONTACT_EMAIL=info@wealthholding-eg.com
HR_EMAIL=hr@wealthholding-eg.com

# Backend URL (for email CV links)
BACKEND_URL=http://localhost:5000
```

### 2. Database Migration

The new tables will be created automatically when you start the server (Sequelize auto-sync).

To manually create tables or in production, ensure your database is running and restart the backend:

```bash
cd backend
npm run dev
```

### 3. Email Configuration

#### Option A: Using Gmail

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password in `EMAIL_PASSWORD`

#### Option B: Using Custom SMTP

Update `.env`:

```env
# Comment out EMAIL_SERVICE
# EMAIL_SERVICE=gmail

# Add SMTP settings
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASSWORD=your-password
```

### 4. File Upload Directory

The backend automatically creates `uploads/cv/` directory. Ensure the backend has write permissions.

## Testing

### Test Contact Form

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","phone":"1234567890","subject":"Inquiry","message":"Test message"}'
```

### Test Site Visit

```bash
curl -X POST http://localhost:5000/api/site-visits \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Smith","email":"jane@example.com","phone":"1234567890","preferredDate":"2025-12-01","project":"Downtown Tower"}'
```

### Test Career Application

```bash
curl -X POST http://localhost:5000/api/careers \
  -F "name=Mike Johnson" \
  -F "email=mike@example.com" \
  -F "phone=1234567890" \
  -F "position=Developer" \
  -F "cv=@/path/to/resume.pdf"
```

## Admin Dashboard Integration

The GET endpoints are ready for admin dashboard integration:

- View all contacts with filtering by status
- View site visits with filtering and date sorting
- View job applications with filtering by status
- Update statuses via PATCH endpoints

Example admin queries:

```javascript
// Get pending site visits
GET /api/site-visits?status=pending&limit=20

// Get new job applications
GET /api/careers?status=new&limit=50

// Update site visit status
PATCH /api/site-visits/123
Body: { "status": "confirmed" }
```

## Troubleshooting

### Emails not sending

1. Check email credentials in `.env`
2. Verify Gmail App Password (if using Gmail)
3. Check console logs for detailed error messages
4. Email failures don't block form submission

### File upload errors

1. Ensure `uploads/cv/` directory exists
2. Check file permissions
3. Verify file type (PDF, DOC, DOCX only)
4. Check file size (5MB limit)

### Database errors

1. Ensure MySQL is running
2. Verify database credentials in `.env`
3. Check if tables were created (look for Sequelize sync logs)
4. Manually run migrations if needed

## Future Enhancements

- Email templates with company branding
- Admin dashboard for managing leads
- SMS notifications for urgent inquiries
- Calendar integration for site visits
- Automated follow-up emails
- Lead scoring and prioritization
