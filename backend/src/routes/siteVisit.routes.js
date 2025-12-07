import express from 'express';
import {
  createSiteVisit,
  getAllSiteVisits,
  updateSiteVisitStatus,
  deleteSiteVisit,
} from '../controllers/siteVisit.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Public route - anyone can submit site visit request
router.post('/', createSiteVisit);

// Protected routes - only authenticated admins can view/manage site visits
router.get('/', auth, getAllSiteVisits);
router.patch('/:id', auth, updateSiteVisitStatus);
router.delete('/:id', auth, deleteSiteVisit);

export default router;
