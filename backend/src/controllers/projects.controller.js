import { Project, ProjectMedia } from '../models/index.js';
import { Op } from 'sequelize';
import fs from 'fs';
import path from 'path';

export async function getProjectFilters(req, res) {
  try {
    // Get all distinct areas and types from projects
    const projects = await Project.findAll({
      attributes: ['area', 'type'],
    });

    // Extract unique areas and types
    const areas = [
      ...new Set(projects.map((p) => p.area).filter(Boolean)),
    ].sort();
    const types = [
      ...new Set(projects.map((p) => p.type).filter(Boolean)),
    ].sort();

    res.json({ areas, types });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function listProjects(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 12;
  const featured = req.query.featured;

  // Support multiple areas and types via query params
  const areasParam = req.query.areas; // "area1,area2,area3"
  const typesParam = req.query.types; // "type1,type2"

  const where = {};
  if (featured !== undefined)
    where.isFeatured = featured === '1' || featured === 'true' ? true : false;

  // Filter by areas if provided
  if (areasParam) {
    const areas = areasParam
      .split(',')
      .map((a) => a.trim())
      .filter(Boolean);
    if (areas.length > 0) {
      where.area = { [Op.in]: areas };
    }
  }

  // Filter by types if provided
  if (typesParam) {
    const types = typesParam
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
    if (types.length > 0) {
      where.type = { [Op.in]: types };
    }
  }

  const offset = (page - 1) * limit;
  const { count, rows } = await Project.findAndCountAll({
    where,
    order: [['createdAt', 'DESC']],
    limit,
    offset,
    include: [{ model: ProjectMedia, as: 'media' }],
  });
  res.json({ data: rows, total: count, page, pageSize: limit });
}

export async function getProjectByTitle(req, res) {
  const title = req.params.title;
  const project = await Project.findOne({
    where: { title },
    include: [{ model: ProjectMedia, as: 'media' }],
  });
  if (!project) return res.status(404).json({ message: 'Not found' });
  res.json(project);
}

export async function getProjectById(req, res) {
  const id = req.params.id;
  const project = await Project.findByPk(id, {
    include: [{ model: ProjectMedia, as: 'media' }],
  });
  if (!project) return res.status(404).json({ message: 'Not found' });
  res.json(project);
}

export async function createProject(req, res) {
  try {
    const body = req.body;
    const p = await Project.create(body);
    res.json(p);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function updateProject(req, res) {
  const id = req.params.id;
  const project = await Project.findByPk(id);
  if (!project) return res.status(404).json({ message: 'Not found' });
  await project.update(req.body);
  res.json(project);
}

export async function deleteProject(req, res) {
  const id = req.params.id;
  const project = await Project.findByPk(id, {
    include: [{ model: ProjectMedia, as: 'media' }],
  });
  if (!project) return res.status(404).json({ message: 'Not found' });

  // Delete all associated media files from disk
  if (project.media && project.media.length > 0) {
    for (const media of project.media) {
      try {
        const filename = media.url.split('/uploads/')[1];
        if (filename) {
          const filepath = path.join(process.cwd(), 'uploads', filename);
          if (fs.existsSync(filepath)) {
            fs.unlinkSync(filepath);
          }
        }
      } catch (err) {
        console.error('Error deleting media file:', err);
      }
    }
  }

  // Delete cover image if exists
  if (project.coverImage) {
    try {
      const filename = project.coverImage.split('/uploads/')[1];
      if (filename) {
        const filepath = path.join(process.cwd(), 'uploads', filename);
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
      }
    } catch (err) {
      console.error('Error deleting cover image:', err);
    }
  }

  await project.destroy();
  res.json({ success: true });
}

export async function addMedia(req, res) {
  const id = req.params.id;

  // If id is 'temp', just upload files and return URLs without creating DB records
  if (id === 'temp') {
    const files = req.files || [];
    const uploaded = [];
    for (const f of files) {
      const type = f.mimetype.startsWith('video') ? 'video' : 'image';
      const url = `${process.env.BASE_URL || ''}/uploads/${f.filename}`;
      uploaded.push({ type, url, filename: f.filename });
    }
    return res.json({ media: uploaded });
  }

  const project = await Project.findByPk(id);
  if (!project) return res.status(404).json({ message: 'Not found' });
  const files = req.files || [];
  const created = [];
  for (const f of files) {
    // decide type by mimetype
    const type = f.mimetype.startsWith('video') ? 'video' : 'image';
    const url = `${process.env.BASE_URL || ''}/uploads/${f.filename}`;
    const pm = await ProjectMedia.create({ projectId: project.id, type, url });
    created.push(pm);
  }
  res.json({ media: created });
}

export async function linkTempMedia(req, res) {
  const id = req.params.id;
  const { filenames } = req.body;

  const project = await Project.findByPk(id);
  if (!project) return res.status(404).json({ message: 'Not found' });

  if (!filenames || !Array.isArray(filenames)) {
    return res.status(400).json({ message: 'Invalid filenames' });
  }

  const created = [];
  for (const filename of filenames) {
    // Determine type from filename extension
    const ext = filename.split('.').pop().toLowerCase();
    const videoExts = ['mp4', 'mov', 'avi', 'webm', 'mkv'];
    const type = videoExts.includes(ext) ? 'video' : 'image';
    const url = `${process.env.BASE_URL || ''}/uploads/${filename}`;

    // Check if file exists
    const filepath = path.join(process.cwd(), 'uploads', filename);
    if (fs.existsSync(filepath)) {
      const pm = await ProjectMedia.create({
        projectId: project.id,
        type,
        url,
      });
      created.push(pm);
    }
  }

  res.json({ media: created });
}

export async function deleteMedia(req, res) {
  const { id, mediaId } = req.params;
  const media = await ProjectMedia.findOne({
    where: { id: mediaId, projectId: id },
  });
  if (!media) return res.status(404).json({ message: 'Not found' });

  // Delete the file from disk
  try {
    const filename = media.url.split('/uploads/')[1];
    if (filename) {
      const filepath = path.join(process.cwd(), 'uploads', filename);
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
    }
  } catch (err) {
    console.error('Error deleting media file:', err);
  }

  await media.destroy();
  res.json({ success: true });
}
