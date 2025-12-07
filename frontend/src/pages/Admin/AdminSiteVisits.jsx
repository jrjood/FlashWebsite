import React, { useState, useEffect } from 'react';
import api from '../../api/api';

export default function AdminSiteVisits() {
  const [siteVisits, setSiteVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    fetchSiteVisits();
  }, [filter]);

  const fetchSiteVisits = async () => {
    try {
      setLoading(true);
      const params = filter !== 'all' ? { status: filter } : {};
      const response = await api.getSiteVisits(params);
      setSiteVisits(response.data.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching site visits:', err);
      setError('Failed to load site visits. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await api.updateSiteVisitStatus(id, { status: newStatus });
      // Refresh the list
      fetchSiteVisits();
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update status. Please try again.');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: { class: 'status-pending', label: 'Pending' },
      confirmed: { class: 'status-confirmed', label: 'Confirmed' },
      cancelled: { class: 'status-cancelled', label: 'Cancelled' },
      completed: { class: 'status-completed', label: 'Completed' },
    };
    const badge = badges[status] || badges.pending;
    return <span className={`status-badge ${badge.class}`}>{badge.label}</span>;
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(siteVisits.map((v) => v.id));
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
        `Are you sure you want to delete ${selectedIds.length} site visit(s)?`
      )
    )
      return;

    try {
      await Promise.all(selectedIds.map((id) => api.deleteSiteVisit(id)));
      setSiteVisits(siteVisits.filter((v) => !selectedIds.includes(v.id)));
      setSelectedIds([]);
    } catch (err) {
      console.error('Error deleting site visits:', err);
      alert('Failed to delete some site visits');
    }
  };

  if (loading) {
    return <div className='loading'>Loading site visits...</div>;
  }

  if (error) {
    return (
      <div className='empty-state'>
        <p>{error}</p>
        <button onClick={fetchSiteVisits} className='add-btn'>
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
            <strong>{siteVisits.length}</strong> Total Site Visits
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
            <option value='pending'>Pending</option>
            <option value='confirmed'>Confirmed</option>
            <option value='cancelled'>Cancelled</option>
            <option value='completed'>Completed</option>
          </select>
        </div>
      </div>

      {siteVisits.length === 0 ? (
        <div className='empty-state'>
          <p>No site visit requests found.</p>
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
                      selectedIds.length === siteVisits.length &&
                      siteVisits.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Preferred Date</th>
                <th>Time Slot</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {siteVisits.map((visit) => (
                <tr key={visit.id}>
                  <td>
                    <input
                      type='checkbox'
                      checked={selectedIds.includes(visit.id)}
                      onChange={() => handleSelectOne(visit.id)}
                    />
                  </td>
                  <td className='title-cell'>{visit.name}</td>
                  <td>
                    <a href={`mailto:${visit.email}`} className='link'>
                      {visit.email}
                    </a>
                  </td>
                  <td>
                    <a href={`tel:${visit.phone}`} className='link'>
                      {visit.phone}
                    </a>
                  </td>
                  <td className='date-cell'>
                    {formatDate(visit.preferred_date)}
                  </td>
                  <td>{visit.time_slot || '—'}</td>
                  <td>{getStatusBadge(visit.status)}</td>
                  <td>
                    <select
                      value={visit.status}
                      onChange={(e) =>
                        handleStatusUpdate(visit.id, e.target.value)
                      }
                      className='status-select'
                    >
                      <option value='pending'>Pending</option>
                      <option value='confirmed'>Confirmed</option>
                      <option value='cancelled'>Cancelled</option>
                      <option value='completed'>Completed</option>
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
