import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { useAuth } from '../../hooks/useAuth';
import AdminNav from '../../components/AdminNav';
import Wrapper from '../../assets/wrappers/AdminPageWrappers/AdminTableWrapper';

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();
  const nav = useNavigate();

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  useEffect(() => {
    api
      .getProjects({ page: 1, limit: 100 })
      .then((r) => {
        setProjects(r.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  async function remove(id) {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      await api.deleteProject(id);
      setProjects((p) => p.filter((x) => x.id !== id));
    } catch (err) {
      alert('Failed to delete project');
    }
  }

  const handleLogout = () => {
    auth.logout();
    nav('/admin/login');
  };

  return (
    <Wrapper>
      <div className='admin-container'>
        <div className='admin-header'>
          <div className='header-content'>
            <h1 className='page-title'>Projects Management</h1>
            <p className='page-subtitle'>
              Manage all your real estate projects
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
                Total Projects: <strong>{projects.length}</strong>
              </span>
            </div>
            <Link to='/admin/projects/new' className='add-btn'>
              + New Project
            </Link>
          </div>

          {loading ? (
            <div className='loading'>Loading projects...</div>
          ) : projects.length === 0 ? (
            <div className='empty-state'>
              <p>No projects found</p>
              <Link to='/admin/projects/new' className='add-btn'>
                Create your first project
              </Link>
            </div>
          ) : (
            <div className='table-container'>
              <table className='data-table'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Area</th>
                    <th>Type</th>
                    <th>Featured</th>
                    <th>Published Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((p) => (
                    <tr key={p.id}>
                      <td className='title-cell'>
                        <div className='project-info'>
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
                      <td>{p.area || '-'}</td>
                      <td>{p.type || '-'}</td>
                      <td>
                        <span
                          className={`badge ${
                            p.isFeatured ? 'badge-success' : 'badge-gray'
                          }`}
                        >
                          {p.isFeatured ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td>{p.publishedAt ? formatDate(p.publishedAt) : '-'}</td>
                      <td className='actions-cell'>
                        <Link
                          to={`/admin/projects/${p.id}`}
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
