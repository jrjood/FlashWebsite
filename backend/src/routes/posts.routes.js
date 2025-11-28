import express from 'express';
import * as ctrl from '../controllers/posts.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', ctrl.listPosts);
router.get('/:slug', ctrl.getPostBySlug);

// admin
router.post('/', auth, ctrl.createPost);
router.put('/:id', auth, ctrl.updatePost);
router.delete('/:id', auth, ctrl.deletePost);

export default router;
