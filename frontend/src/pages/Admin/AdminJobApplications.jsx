import React, { useState, useEffect } from 'react';
import api from '../../api/api';

export default function AdminJobApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, [filter]);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const params = filter !== 'all' ? { status: filter } : {};
      const response = await api.getJobApplications(params);
      setApplications(response.data.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching job applications:', err);
      setError('Failed to load job applications. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await api.updateJobApplicationStatus(id, { status: newStatus });
      // Refresh the list
      fetchApplications();
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update status. Please try again.');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getCVLink = (cvUrl) => {
    if (!cvUrl) return null;
    const baseUrl =
      import.meta.env.VITE_API_BASE?.replace('/api', '') ||
      'http://localhost:5000';
    return `${baseUrl}${cvUrl}`;
  };

  const getStatusBadge = (status) => {
    const badges = {
      new: { class: 'status-new', label: 'New' },
      reviewing: { class: 'status-reviewing', label: 'Reviewing' },
      shortlisted: { class: 'status-shortlisted', label: 'Shortlisted' },
      rejected: { class: 'status-rejected', label: 'Rejected' },
      hired: { class: 'status-hired', label: 'Hired' },
    };
    const badge = badges[status] || badges.new;
    return <span className={`status-badge ${badge.class}`}>{badge.label}</span>;
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(applications.map((a) => a.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;
    if (
      !confirm(
        `Are you sure you want to delete ${selectedIds.length} application(s)?`
      )
    )
      return;

    try {
      await Promise.all(selectedIds.map((id) => api.deleteJobApplication(id)));
      setApplications(applications.filter((a) => !selectedIds.includes(a.id)));
      setSelectedIds([]);
    } catch (err) {
      console.error('Error deleting applications:', err);
      alert('Failed to delete some applications');
    }
  };

  if (loading) {
    return <div className='loading'>Loading job applications...</div>;
  }

  if (error) {
    return (
      <div className='empty-state'>
        <p>{error}</p>
        <button onClick={fetchApplications} className='add-btn'>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className='content-section'>
      <div className='section-header'>
        <div className='stats'>
          <div className='stat-item'>
            <strong>{applications.length}</strong> Total Applications
          </div>
        </div>
        {selectedIds.length > 0 && (
          <button
            onClick={handleBulkDelete}
            className='delete-btn'
            style={{ marginLeft: '1rem' }}
          >
            Delete Selected ({selectedIds.length})
          </button>
        )}
        <div className='filter-group'>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className='filter-select'
          >
            <option value='all'>All Status</option>
            <option value='new'>New</option>
            <option value='reviewing'>Reviewing</option>
            <option value='shortlisted'>Shortlisted</option>
            <option value='rejected'>Rejected</option>
            <option value='hired'>Hired</option>
          </select>
        </div>
      </div>

      {applications.length === 0 ? (
        <div className='empty-state'>
          <p>No job applications found.</p>
        </div>
      ) : (
        <div className='table-container'>
          <table className='data-table'>
            <thead>
              <tr>
                <th>
                  <input
                    type='checkbox'
                    checked={
                      selectedIds.length === applications.length &&
                      applications.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Position</th>
                <th>CV</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>
                    <input
                      type='checkbox'
                      checked={selectedIds.includes(app.id)}
                      onChange={() => handleSelectOne(app.id)}
                    />
                  </td>
                  <td className='title-cell'>{app.name}</td>
                  <td>
                    <a href={`mailto:${app.email}`} className='link'>
                      {app.email}
                    </a>
                  </td>
                  <td>
                    <a href={`tel:${app.phone}`} className='link'>
                      {app.phone}
                    </a>
                  </td>
                  <td className='title-cell'>{app.position || '—'}</td>
                  <td>
                    {app.cv_url ? (
                      <a
                        href={getCVLink(app.cv_url)}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='link cv-link'
                      >
                        📄 Download
                      </a>
                    ) : (
                      '—'
                    )}
                  </td>
                  <td>{getStatusBadge(app.status)}</td>
                  <td>
                    <select
                      value={app.status}
                      onChange={(e) =>
                        handleStatusUpdate(app.id, e.target.value)
                      }
                      className='status-select'
                    >
                      <option value='new'>New</option>
                      <option value='reviewing'>Reviewing</option>
                      <option value='shortlisted'>Shortlisted</option>
                      <option value='rejected'>Rejected</option>
                      <option value='hired'>Hired</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
