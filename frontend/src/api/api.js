import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

const api = axios.create({ baseURL: API_BASE, withCredentials: true });

let token = null;
export function setToken(t) {
  token = t;
}

api.interceptors.request.use((config) => {
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default {
  // auth
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),

  // posts
  getPosts: (params) => api.get('/posts', { params }),
  getPost: (slug) => api.get(`/posts/${slug}`),
  createPost: (data) => api.post('/posts', data),
  updatePost: (id, data) => api.put(`/posts/${id}`, data),
  deletePost: (id) => api.delete(`/posts/${id}`),

  // projects
  getProjectFilters: () => api.get('/projects/filters'),
  getProjects: (params) => api.get('/projects', { params }),
  getProject: (title) => api.get(`/projects/${encodeURIComponent(title)}`),
  getProjectById: (id) => api.get(`/projects/id/${id}`),
  createProject: (data) => api.post('/projects', data),
  updateProject: (id, data) => api.put(`/projects/${id}`, data),
  deleteProject: (id) => api.delete(`/projects/${id}`),
  addProjectMedia: (id, formData) =>
    api.post(`/projects/${id}/media`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  linkTempMedia: (id, data) => api.post(`/projects/${id}/link-media`, data),
  deleteProjectMedia: (id, mediaId) =>
    api.delete(`/projects/${id}/media/${mediaId}`),

  // uploads
  uploadCover: (formData) =>
    api.post('/uploads/cover', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};
