import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.routes.js';
import postsRoutes from './routes/posts.routes.js';
import projectsRoutes from './routes/projects.routes.js';
import uploadsRoutes from './routes/uploads.routes.js';
import contactRoutes from './routes/contact.routes.js';
import siteVisitRoutes from './routes/siteVisit.routes.js';
import careersRoutes from './routes/careers.routes.js';
import { sequelize } from './models/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const origins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
app.use(cors({ origin: origins.length ? origins : true, credentials: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// static uploads
const uploadDir = path.join(process.cwd(), process.env.UPLOAD_DIR || 'uploads');
app.use('/uploads', express.static(uploadDir));

// api
app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/uploads', uploadsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/site-visits', siteVisitRoutes);
app.use('/api/careers', careersRoutes);

app.get('/api/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('DB connected');

    // Sync database tables (creates tables if they don't exist)
    // alter: true will add new columns but won't drop existing ones
    await sequelize.sync({ alter: true });
    console.log('Database tables synced');

    app.listen(PORT, () => console.log('Server running on', PORT));
  } catch (err) {
    console.error('Failed to start', err);
    process.exit(1);
  }
}

start();
