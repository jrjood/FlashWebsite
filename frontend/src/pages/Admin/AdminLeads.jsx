import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../../components/AdminNav';
import AdminContacts from './AdminContacts';
import AdminSiteVisits from './AdminSiteVisits';
import AdminJobApplications from './AdminJobApplications';
import Wrapper from '../../assets/wrappers/AdminPageWrappers/AdminTableWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function AdminLeads() {
  const [activeTab, setActiveTab] = useState('contacts');
  const nav = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    nav('/admin/login');
  };

  return (
    <Wrapper>
      <div className='admin-container'>
        <div className='admin-header'>
          <div className='header-content'>
            <h1 className='page-title'>Contact & Leads Management</h1>
            <p className='page-subtitle'>
              View and manage all customer inquiries and applications
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

        <div className='tabs-container'>
          <button
            className={`tab ${activeTab === 'contacts' ? 'active' : ''}`}
            onClick={() => setActiveTab('contacts')}
          >
            {/* <span className='tab-icon'>📧</span> */}
            <span>Received Mails</span>
          </button>
          <button
            className={`tab ${activeTab === 'siteVisits' ? 'active' : ''}`}
            onClick={() => setActiveTab('siteVisits')}
          >
            {/* <span className='tab-icon'>🏢</span> */}
            <span>Site Visits</span>
          </button>
          <button
            className={`tab ${activeTab === 'careers' ? 'active' : ''}`}
            onClick={() => setActiveTab('careers')}
          >
            {/* <span className='tab-icon'>💼</span> */}
            <span>Job Applications</span>
          </button>
        </div>

        <div className='tab-content'>
          {activeTab === 'contacts' && <AdminContacts />}
          {activeTab === 'siteVisits' && <AdminSiteVisits />}
          {activeTab === 'careers' && <AdminJobApplications />}
        </div>
      </div>
    </Wrapper>
  );
}
