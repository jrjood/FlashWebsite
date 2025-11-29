import { JobApplication } from '../models/index.js';
import { sendJobApplicationEmail } from '../utils/emailService.js';
import fs from 'fs';
import path from 'path';

// Ensure CV directory exists
const CV_DIR = path.join(
  process.cwd(),
  process.env.UPLOAD_DIR || 'uploads',
  'cv'
);
if (!fs.existsSync(CV_DIR)) {
  fs.mkdirSync(CV_DIR, { recursive: true });
}

/**
 * POST /api/careers
 * Create a new job application
 */
export const createJobApplication = async (req, res) => {
  try {
    const { name, email, phone, position } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !position) {
      return res.status(400).json({
        error:
          'Missing required fields: name, email, phone, and position are required',
      });
    }

    // Handle CV file upload
    let cv_filename = null;
    let cv_url = null;

    if (req.file) {
      cv_filename = req.file.filename;
      // Construct URL path
      const uploadDir = process.env.UPLOAD_DIR || 'uploads';
      cv_url = `/${uploadDir}/cv/${cv_filename}`;
    }

    // Create job application in database
    const jobApplication = await JobApplication.create({
      name,
      email,
      phone,
      position,
      cv_filename,
      cv_url,
      status: 'new',
    });

    // Send email notification (don't block on email failure)
    try {
      await sendJobApplicationEmail({
        name,
        email,
        phone,
        position,
        cv_url,
      });
    } catch (emailError) {
      console.error('Failed to send job application email:', emailError);
      // Continue even if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Job application submitted successfully',
      data: jobApplication,
    });
  } catch (error) {
    console.error('Error creating job application:', error);
    res.status(500).json({
      error: 'Failed to submit job application',
      details: error.message,
    });
  }
};

/**
 * GET /api/careers
 * Get all job applications (for admin dashboard)
 */
export const getAllJobApplications = async (req, res) => {
  try {
    const { status, limit = 50, offset = 0 } = req.query;

    const where = {};
    if (status) {
      where.status = status;
    }

    const jobApplications = await JobApplication.findAll({
      where,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['created_at', 'DESC']],
    });

    const total = await JobApplication.count({ where });

    res.json({
      success: true,
      data: jobApplications,
      total,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
  } catch (error) {
    console.error('Error fetching job applications:', error);
    res.status(500).json({
      error: 'Failed to fetch job applications',
      details: error.message,
    });
  }
};

/**
 * PATCH /api/careers/:id
 * Update job application status (for admin dashboard)
 */
export const updateJobApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (
      !status ||
      !['new', 'reviewing', 'shortlisted', 'rejected', 'hired'].includes(status)
    ) {
      return res.status(400).json({
        error:
          'Invalid status. Must be one of: new, reviewing, shortlisted, rejected, hired',
      });
    }

    const jobApplication = await JobApplication.findByPk(id);
    if (!jobApplication) {
      return res.status(404).json({ error: 'Job application not found' });
    }

    jobApplication.status = status;
    await jobApplication.save();

    res.json({
      success: true,
      message: 'Job application status updated',
      data: jobApplication,
    });
  } catch (error) {
    console.error('Error updating job application:', error);
    res.status(500).json({
      error: 'Failed to update job application',
      details: error.message,
    });
  }
};

/**
 * DELETE /api/careers/:id
 * Delete a job application
 */
export const deleteJobApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await JobApplication.findByPk(id);
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Job application not found',
      });
    }

    await application.destroy();

    res.json({
      success: true,
      message: 'Job application deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting job application:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete job application',
      error: error.message,
    });
  }
};
