import multer from 'multer';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const UPLOAD_DIR = process.env.UPLOAD_DIR || 'uploads';
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name =
      Date.now() + '-' + Math.random().toString(36).substring(2, 8) + ext;
    cb(null, name);
  },
});

const upload = multer({ storage });

export default upload;
