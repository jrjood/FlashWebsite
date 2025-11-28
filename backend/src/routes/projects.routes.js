import express from 'express';
import * as ctrl from '../controllers/projects.controller.js';
import auth from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/filters', ctrl.getProjectFilters);
router.get('/', ctrl.listProjects);
router.get('/id/:id', ctrl.getProjectById);
router.get('/:title', ctrl.getProjectByTitle);

// admin
router.post('/', auth, ctrl.createProject);
router.put('/:id', auth, ctrl.updateProject);
router.delete('/:id', auth, ctrl.deleteProject);
router.post('/:id/media', auth, upload.array('files', 20), ctrl.addMedia);
router.post('/:id/link-media', auth, ctrl.linkTempMedia);
router.delete('/:id/media/:mediaId', auth, ctrl.deleteMedia);

export default router;
