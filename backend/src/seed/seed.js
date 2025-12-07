import dotenv from 'dotenv';
dotenv.config();
import {
  sequelize,
  User,
  Project,
  ProjectMedia,
  Post,
} from '../models/index.js';
import bcrypt from 'bcrypt';

async function run() {
  await sequelize.sync({ force: true });
  console.log('DB synced');

  const hash = await bcrypt.hash('Fl@sh@123', 10);
  await User.create({
    email: 'admin@investwithflash.com',
    password_hash: hash,
  });

  // Create 6 projects, 5 featured
  const projects = [];
  for (let i = 1; i <= 6; i++) {
    const p = await Project.create({
      title: `Project ${i}`,
      type: `Type ${i}`,
      subtitle: `City ${i}`,
      description: `Description for project ${i}`,
      area: `Area ${i}`,
      coverImage: `${process.env.BASE_URL || ''}/uploads/placeholder-${i}.jpg`,
      isFeatured: i <= 5,
      status: 'published',
    });
    projects.push(p);
    // add media
    await ProjectMedia.create({
      projectId: p.id,
      type: 'image',
      url: `${process.env.BASE_URL || ''}/uploads/placeholder-${i}.jpg`,
    });
  }

  // Create 6 posts
  for (let i = 1; i <= 6; i++) {
    await Post.create({
      title: `Post ${i}`,
      slug: `post-${i}`,
      excerpt: `Excerpt for post ${i}`,
      content: `<p>Content for post ${i}</p>`,
      coverImage: `${process.env.BASE_URL || ''}/uploads/post-${i}.jpg`,
      publishedAt: new Date(),
      status: 'published',
    });
  }

  console.log('Seeded data');
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
