import { Contact } from '../models/index.js';
import { sendContactEmail } from '../utils/emailService.js';

/**
 * POST /api/contact
 * Create a new contact submission
 */
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, and phone are required',
      });
    }

    // Create contact in database
    const contact = await Contact.create({
      name,
      email,
      phone,
      message: message || null,
      status: 'new',
    });

    // Send email notification (don't block on email failure)
    try {
      await sendContactEmail({
        name,
        email,
        phone,
        message,
      });
    } catch (emailError) {
      console.error('Failed to send contact email:', emailError);
      // Continue even if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: contact,
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({
      error: 'Failed to submit contact form',
      details: error.message,
    });
  }
};

/**
 * GET /api/contact
 * Get all contacts (for admin dashboard)
 */
export const getAllContacts = async (req, res) => {
  try {
    const { status, limit = 50, offset = 0 } = req.query;

    const where = {};
    if (status) {
      where.status = status;
    }

    const contacts = await Contact.findAll({
      where,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['created_at', 'DESC']],
    });

    const total = await Contact.count({ where });

    res.json({
      success: true,
      data: contacts,
      total,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      error: 'Failed to fetch contacts',
      details: error.message,
    });
  }
};

/**
 * DELETE /api/contact/:id
 * Delete a contact
 */
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }

    await contact.destroy();

    res.json({
      success: true,
      message: 'Contact deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      error: 'Failed to delete contact',
      details: error.message,
    });
  }
};
