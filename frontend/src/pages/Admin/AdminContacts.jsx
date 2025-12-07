import React, { useState, useEffect } from 'react';
import api from '../../api/api';

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, [filter]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const params = filter !== 'all' ? { status: filter } : {};
      const response = await api.getContacts(params);
      setContacts(response.data.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError('Failed to load contacts. Please try again.');
    } finally {
      setLoading(false);
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

  const getStatusBadge = (status) => {
    const badges = {
      new: { class: 'status-new', label: 'New' },
      read: { class: 'status-read', label: 'Read' },
      responded: { class: 'status-responded', label: 'Responded' },
    };
    const badge = badges[status] || badges.new;
    return <span className={`status-badge ${badge.class}`}>{badge.label}</span>;
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(contacts.map((c) => c.id));
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
        `Are you sure you want to delete ${selectedIds.length} contact(s)?`
      )
    )
      return;

    try {
      await Promise.all(selectedIds.map((id) => api.deleteContact(id)));
      setContacts(contacts.filter((c) => !selectedIds.includes(c.id)));
      setSelectedIds([]);
    } catch (err) {
      console.error('Error deleting contacts:', err);
      alert('Failed to delete some contacts');
    }
  };

  if (loading) {
    return <div className='loading'>Loading contacts...</div>;
  }

  if (error) {
    return (
      <div className='empty-state'>
        <p>{error}</p>
        <button onClick={fetchContacts} className='add-btn'>
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
            <strong>{contacts.length}</strong> Total Contacts
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
            <option value='read'>Read</option>
            <option value='responded'>Responded</option>
          </select>
        </div>
      </div>

      {contacts.length === 0 ? (
        <div className='empty-state'>
          <p>No contact submissions found.</p>
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
                      selectedIds.length === contacts.length &&
                      contacts.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>
                    <input
                      type='checkbox'
                      checked={selectedIds.includes(contact.id)}
                      onChange={() => handleSelectOne(contact.id)}
                    />
                  </td>
                  <td className='title-cell'>{contact.name}</td>
                  <td>
                    <a href={`mailto:${contact.email}`} className='link'>
                      {contact.email}
                    </a>
                  </td>
                  <td>
                    <a href={`tel:${contact.phone}`} className='link'>
                      {contact.phone}
                    </a>
                  </td>
                  <td className='message-cell' title={contact.message}>
                    {contact.message
                      ? contact.message.substring(0, 60) +
                        (contact.message.length > 60 ? '...' : '')
                      : '—'}
                  </td>
                  <td>{getStatusBadge(contact.status)}</td>
                  <td className='date-cell'>
                    {formatDate(contact.created_at)}
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
