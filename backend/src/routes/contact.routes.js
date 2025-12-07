import express from 'express';
import {
  createContact,
  getAllContacts,
  deleteContact,
} from '../controllers/contact.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Public route - anyone can submit contact form
router.post('/', createContact);

// Protected route - only authenticated admins can view contacts
router.get('/', auth, getAllContacts);

// Protected route - delete contact
router.delete('/:id', auth, deleteContact);

export default router;
