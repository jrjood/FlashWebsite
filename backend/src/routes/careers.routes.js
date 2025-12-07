import express from 'express';
import {
  createJobApplication,
  getAllJobApplications,
  updateJobApplicationStatus,
  deleteJobApplication,
} from '../controllers/careers.controller.js';
import auth from '../middleware/auth.js';
import cvUpload from '../middleware/cvUpload.js';

const router = express.Router();

// Public route - anyone can submit job application with CV upload
router.post('/', cvUpload.single('cv'), createJobApplication);

// Protected routes - only authenticated admins can view/manage applications
router.get('/', auth, getAllJobApplications);
router.patch('/:id', auth, updateJobApplicationStatus);
router.delete('/:id', auth, deleteJobApplication);

export default router;
