import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Create transporter based on environment variables
const createTransporter = () => {
  // If using a service like Gmail, Outlook, etc.
  if (process.env.EMAIL_SERVICE) {
    return nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE, // e.g., 'gmail', 'outlook'
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // If using SMTP directly
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

const transporter = createTransporter();

/**
 * Send general contact email
 */
export const sendContactEmail = async (contactData) => {
  const { name, email, phone, message } = contactData;

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: process.env.CONTACT_EMAIL || 'info@wealthholding-eg.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'No message provided'}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully');
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

/**
 * Send site visit request email
 */
export const sendSiteVisitEmail = async (visitData) => {
  const { name, email, phone, preferred_date, time_slot } = visitData;

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: process.env.CONTACT_EMAIL || 'info@wealthholding-eg.com',
    subject: `New Site Visit Request: ${name}`,
    html: `
      <h2>New Site Visit Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Preferred Date:</strong> ${preferred_date}</p>
      <p><strong>Time Slot:</strong> ${time_slot}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Site visit email sent successfully');
  } catch (error) {
    console.error('Error sending site visit email:', error);
    throw error;
  }
};

/**
 * Send job application email
 */
export const sendJobApplicationEmail = async (applicationData) => {
  const { name, email, phone, position, cv_url } = applicationData;

  const cvLink = cv_url
    ? `${process.env.BACKEND_URL || 'http://localhost:5000'}${cv_url}`
    : 'No CV uploaded';

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: process.env.HR_EMAIL || 'hr@wealthholding-eg.com',
    subject: `New Job Application: ${position}`,
    html: `
      <h2>New Job Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Position:</strong> ${position}</p>
      <p><strong>CV:</strong> <a href="${cvLink}">${cvLink}</a></p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Job application email sent successfully');
  } catch (error) {
    console.error('Error sending job application email:', error);
    throw error;
  }
};

export default transporter;
