import { Post } from '../models/index.js';
import { Op } from 'sequelize';

export async function listPosts(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 12;
  const where = {};
  const offset = (page - 1) * limit;
  const { count, rows } = await Post.findAndCountAll({
    where,
    order: [['publishedAt', 'DESC']],
    limit,
    offset,
  });
  res.json({ data: rows, total: count, page, pageSize: limit });
}

export async function getPostBySlug(req, res) {
  const slug = req.params.slug;
  const post = await Post.findOne({ where: { slug } });
  if (!post) return res.status(404).json({ message: 'Not found' });
  res.json(post);
}

export async function createPost(req, res) {
  const body = req.body;
  try {
    const p = await Post.create(body);
    res.json(p);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function updatePost(req, res) {
  const id = req.params.id;
  const post = await Post.findByPk(id);
  if (!post) return res.status(404).json({ message: 'Not found' });
  await post.update(req.body);
  res.json(post);
}

export async function deletePost(req, res) {
  const id = req.params.id;
  const post = await Post.findByPk(id);
  if (!post) return res.status(404).json({ message: 'Not found' });
  await post.destroy();
  res.json({ success: true });
}
