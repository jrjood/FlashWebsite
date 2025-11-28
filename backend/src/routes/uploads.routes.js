import express from 'express';
import upload from '../middleware/upload.js';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post('/cover', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file' });
  const url = `${process.env.BASE_URL || ''}/uploads/${req.file.filename}`;
  res.json({ url });
});

export default router;
