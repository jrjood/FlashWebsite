import multer from 'multer';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const UPLOAD_DIR = process.env.UPLOAD_DIR || 'uploads';
const CV_DIR = path.join(UPLOAD_DIR, 'cv');

// Ensure CV directory exists
if (!fs.existsSync(CV_DIR)) {
  fs.mkdirSync(CV_DIR, { recursive: true });
}

const cvStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, CV_DIR);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = `cv-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 8)}${ext}`;
    cb(null, name);
  },
});

// File filter to accept only PDFs and Word documents
const fileFilter = (req, file, cb) => {
  const allowedMimes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        'Invalid file type. Only PDF, DOC, and DOCX files are allowed.'
      ),
      false
    );
  }
};

const cvUpload = multer({
  storage: cvStorage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

export default cvUpload;
