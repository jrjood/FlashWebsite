import express from 'express';
import upload from '../middleware/upload.js';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post('/cover', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file' });
  // Extract relative path from destination
  const relativePath = req.file.path.replace(/\\/g, '/').split('/uploads/')[1];
  const url = `${process.env.BASE_URL || ''}/uploads/${relativePath}`;
  res.json({ url });
});

export default router;
