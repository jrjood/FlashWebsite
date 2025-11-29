import { SiteVisit } from '../models/index.js';
import { sendSiteVisitEmail } from '../utils/emailService.js';

/**
 * POST /api/site-visits
 * Create a new site visit request
 */
export const createSiteVisit = async (req, res) => {
  try {
    const { name, email, phone, preferredDate, timeSlot } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !preferredDate || !timeSlot) {
      return res.status(400).json({
        error:
          'Missing required fields: name, email, phone, preferredDate, and timeSlot are required',
      });
    }

    // Create site visit in database
    const siteVisit = await SiteVisit.create({
      name,
      email,
      phone,
      preferred_date: preferredDate,
      time_slot: timeSlot,
      status: 'pending',
    });

    // Send email notification (don't block on email failure)
    try {
      await sendSiteVisitEmail({
        name,
        email,
        phone,
        preferred_date: preferredDate,
        time_slot: timeSlot,
      });
    } catch (emailError) {
      console.error('Failed to send site visit email:', emailError);
      // Continue even if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Site visit request submitted successfully',
      data: siteVisit,
    });
  } catch (error) {
    console.error('Error creating site visit:', error);
    res.status(500).json({
      error: 'Failed to submit site visit request',
      details: error.message,
    });
  }
};

/**
 * GET /api/site-visits
 * Get all site visit requests (for admin dashboard)
 */
export const getAllSiteVisits = async (req, res) => {
  try {
    const { status, limit = 50, offset = 0 } = req.query;

    const where = {};
    if (status) {
      where.status = status;
    }

    const siteVisits = await SiteVisit.findAll({
      where,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [
        ['preferred_date', 'ASC'],
        ['created_at', 'DESC'],
      ],
    });

    const total = await SiteVisit.count({ where });

    res.json({
      success: true,
      data: siteVisits,
      total,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
  } catch (error) {
    console.error('Error fetching site visits:', error);
    res.status(500).json({
      error: 'Failed to fetch site visits',
      details: error.message,
    });
  }
};

/**
 * PATCH /api/site-visits/:id
 * Update site visit status (for admin dashboard)
 */
export const updateSiteVisitStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (
      !status ||
      !['pending', 'confirmed', 'cancelled', 'completed'].includes(status)
    ) {
      return res.status(400).json({
        error:
          'Invalid status. Must be one of: pending, confirmed, cancelled, completed',
      });
    }

    const siteVisit = await SiteVisit.findByPk(id);
    if (!siteVisit) {
      return res.status(404).json({ error: 'Site visit not found' });
    }

    siteVisit.status = status;
    await siteVisit.save();

    res.json({
      success: true,
      message: 'Site visit status updated',
      data: siteVisit,
    });
  } catch (error) {
    console.error('Error updating site visit:', error);
    res.status(500).json({
      error: 'Failed to update site visit',
      details: error.message,
    });
  }
};

/**
 * DELETE /api/site-visits/:id
 * Delete a site visit
 */
export const deleteSiteVisit = async (req, res) => {
  try {
    const { id } = req.params;

    const siteVisit = await SiteVisit.findByPk(id);
    if (!siteVisit) {
      return res.status(404).json({
        success: false,
        message: 'Site visit not found',
      });
    }

    await siteVisit.destroy();

    res.json({
      success: true,
      message: 'Site visit deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting site visit:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete site visit',
      error: error.message,
    });
  }
};
