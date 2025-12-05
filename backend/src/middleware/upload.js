import multer from 'multer';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const UPLOAD_DIR = process.env.UPLOAD_DIR || 'uploads';
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// Helper to ensure directory exists
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Create organized folder structure
const createUploadStructure = () => {
  ensureDir(path.join(UPLOAD_DIR, 'projects', 'cover-images'));
  ensureDir(path.join(UPLOAD_DIR, 'projects', 'media'));
  ensureDir(path.join(UPLOAD_DIR, 'posts', 'cover-images'));
  ensureDir(path.join(UPLOAD_DIR, 'cvs'));
  ensureDir(path.join(UPLOAD_DIR, 'temp'));
};

createUploadStructure();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath = UPLOAD_DIR;

    // Determine folder based on route
    const url = req.baseUrl + req.route?.path || '';

    if (url.includes('/projects') && url.includes('/media')) {
      uploadPath = path.join(UPLOAD_DIR, 'projects', 'media');
    } else if (url.includes('/uploads/cover')) {
      // Generic cover upload - check referer or query param
      const referer = req.headers.referer || '';
      if (referer.includes('/posts') || req.query.type === 'post') {
        uploadPath = path.join(UPLOAD_DIR, 'posts', 'cover-images');
      } else if (
        referer.includes('/projects') ||
        req.query.type === 'project'
      ) {
        uploadPath = path.join(UPLOAD_DIR, 'projects', 'cover-images');
      } else {
        uploadPath = path.join(UPLOAD_DIR, 'temp');
      }
    } else {
      uploadPath = path.join(UPLOAD_DIR, 'temp');
    }

    ensureDir(uploadPath);
    cb(null, uploadPath);
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
