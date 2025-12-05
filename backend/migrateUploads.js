/**
 * Migration script to organize existing uploads into new folder structure
 * Run this once: node migrateUploads.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Project, ProjectMedia, Post, sequelize } from './src/models/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const UPLOAD_DIR = path.join(__dirname, 'uploads');

// Helper to ensure directory exists
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Move file and return new path
const moveFile = (oldPath, newPath) => {
  try {
    if (fs.existsSync(oldPath)) {
      ensureDir(path.dirname(newPath));
      fs.renameSync(oldPath, newPath);
      console.log(
        `✓ Moved: ${path.basename(oldPath)} -> ${newPath.replace(
          UPLOAD_DIR,
          'uploads'
        )}`
      );
      return true;
    }
    return false;
  } catch (error) {
    console.error(`✗ Error moving ${oldPath}:`, error.message);
    return false;
  }
};

// Extract filename from URL
const getFilenameFromUrl = (url) => {
  if (!url) return null;
  const match = url.match(/\/uploads\/(.+)$/);
  return match ? match[1] : null;
};

async function migrateUploads() {
  console.log('\n🚀 Starting upload migration...\n');

  try {
    // Create new folder structure
    console.log('📁 Creating folder structure...');
    ensureDir(path.join(UPLOAD_DIR, 'projects', 'cover-images'));
    ensureDir(path.join(UPLOAD_DIR, 'projects', 'media'));
    ensureDir(path.join(UPLOAD_DIR, 'posts', 'cover-images'));
    ensureDir(path.join(UPLOAD_DIR, 'temp'));
    console.log('✓ Folders created\n');

    // Migrate project cover images
    console.log('📸 Migrating project cover images...');
    const projects = await Project.findAll();
    let projectCoverCount = 0;

    for (const project of projects) {
      if (project.coverImage) {
        const filename = getFilenameFromUrl(project.coverImage);
        if (filename && !filename.includes('/')) {
          // Only migrate root files
          const oldPath = path.join(UPLOAD_DIR, filename);
          const newPath = path.join(
            UPLOAD_DIR,
            'projects',
            'cover-images',
            filename
          );

          if (moveFile(oldPath, newPath)) {
            // Update database
            const newUrl = project.coverImage.replace(
              `/uploads/${filename}`,
              `/uploads/projects/cover-images/${filename}`
            );
            await project.update({ coverImage: newUrl });
            projectCoverCount++;
          }
        }
      }
    }
    console.log(`✓ Migrated ${projectCoverCount} project cover images\n`);

    // Migrate project media
    console.log('🎬 Migrating project media files...');
    const mediaFiles = await ProjectMedia.findAll();
    let mediaCount = 0;

    for (const media of mediaFiles) {
      if (media.url) {
        const filename = getFilenameFromUrl(media.url);
        if (filename && !filename.includes('/')) {
          // Only migrate root files
          const oldPath = path.join(UPLOAD_DIR, filename);
          const newPath = path.join(UPLOAD_DIR, 'projects', 'media', filename);

          if (moveFile(oldPath, newPath)) {
            // Update database
            const newUrl = media.url.replace(
              `/uploads/${filename}`,
              `/uploads/projects/media/${filename}`
            );
            await media.update({ url: newUrl });
            mediaCount++;
          }
        }
      }
    }
    console.log(`✓ Migrated ${mediaCount} project media files\n`);

    // Migrate post cover images
    console.log('📰 Migrating post cover images...');
    const posts = await Post.findAll();
    let postCoverCount = 0;

    for (const post of posts) {
      if (post.coverImage) {
        const filename = getFilenameFromUrl(post.coverImage);
        if (filename && !filename.includes('/')) {
          // Only migrate root files
          const oldPath = path.join(UPLOAD_DIR, filename);
          const newPath = path.join(
            UPLOAD_DIR,
            'posts',
            'cover-images',
            filename
          );

          if (moveFile(oldPath, newPath)) {
            // Update database
            const newUrl = post.coverImage.replace(
              `/uploads/${filename}`,
              `/uploads/posts/cover-images/${filename}`
            );
            await post.update({ coverImage: newUrl });
            postCoverCount++;
          }
        }
      }
    }
    console.log(`✓ Migrated ${postCoverCount} post cover images\n`);

    // Move remaining files to temp
    console.log('🗂️  Moving remaining files to temp...');
    const remainingFiles = fs.readdirSync(UPLOAD_DIR).filter((file) => {
      const filePath = path.join(UPLOAD_DIR, file);
      return fs.statSync(filePath).isFile() && file !== '.gitkeep';
    });

    let tempCount = 0;
    for (const filename of remainingFiles) {
      const oldPath = path.join(UPLOAD_DIR, filename);
      const newPath = path.join(UPLOAD_DIR, 'temp', filename);
      if (moveFile(oldPath, newPath)) {
        tempCount++;
      }
    }
    console.log(`✓ Moved ${tempCount} files to temp folder\n`);

    console.log('✅ Migration completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   - Project covers: ${projectCoverCount}`);
    console.log(`   - Project media: ${mediaCount}`);
    console.log(`   - Post covers: ${postCoverCount}`);
    console.log(`   - Moved to temp: ${tempCount}`);
    console.log('\n💡 Note: CVs folder was preserved as-is');
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
  } finally {
    await sequelize.close();
    process.exit(0);
  }
}

migrateUploads();
