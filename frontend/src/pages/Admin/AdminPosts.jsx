import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { useAuth } from '../../hooks/useAuth';
import AdminNav from '../../components/AdminNav';
import Wrapper from '../../assets/wrappers/AdminPageWrappers/AdminTableWrapper';

export default function AdminPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    api
      .getPosts({ page: 1, limit: 100 })
      .then((r) => {
        setPosts(r.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  async function remove(id) {
    if (!confirm('Are you sure you want to delete this post?')) return;
    try {
      await api.deletePost(id);
      setPosts((p) => p.filter((x) => x.id !== id));
    } catch (err) {
      alert('Failed to delete post');
    }
  }

  const handleLogout = () => {
    auth.logout();
    nav('/admin/login');
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Wrapper>
      <div className='admin-container'>
        <div className='admin-header'>
          <div className='header-content'>
            <h1 className='page-title'>Blog Posts Management</h1>
            <p className='page-subtitle'>
              Manage all your blog posts and content
            </p>
          </div>
          <div className='header-actions'>
            <button
              onClick={() => nav('/admin/dashboard')}
              className='back-btn'
            >
              ← Dashboard
            </button>
            <button onClick={handleLogout} className='logout-btn'>
              Logout
            </button>
          </div>
        </div>

        <AdminNav />

        <div className='content-section'>
          <div className='section-header'>
            <div className='stats'>
              <span className='stat-item'>
                Total Posts: <strong>{posts.length}</strong>
              </span>
            </div>
            <Link to='/admin/posts/new' className='add-btn'>
              + New Post
            </Link>
          </div>

          {loading ? (
            <div className='loading'>Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className='empty-state'>
              <p>No posts found</p>
              <Link to='/admin/posts/new' className='add-btn'>
                Create your first post
              </Link>
            </div>
          ) : (
            <div className='table-container'>
              <table className='data-table'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Published Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((p) => (
                    <tr key={p.id}>
                      <td className='title-cell'>
                        <div className='post-info'>
                          {p.coverImage && (
                            <img
                              src={p.coverImage}
                              alt={p.title}
                              className='project-thumb'
                            />
                          )}
                          <span>{p.title}</span>
                        </div>
                      </td>
                      <td>{p.author || 'Admin'}</td>
                      <td>{formatDate(p.publishedAt)}</td>
                      <td className='actions-cell'>
                        <Link
                          to={`/admin/posts/${p.id}`}
                          className='action-btn edit-btn'
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => remove(p.id)}
                          className='action-btn delete-btn'
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
