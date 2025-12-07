import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Logo from '../../components/Logo';
import Wrapper from '../../assets/wrappers/AdminPageWrappers/AdminDashboardWrapper';

export default function AdminDashboard() {
  const nav = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    nav('/admin/login');
  };

  return (
    <Wrapper>
      <div className='dashboard-container'>
        <div className='dashboard-header'>
          <Logo isSticky={true} />
          <h1 className='dashboard-title'>Admin Dashboard</h1>
          <div className='user-section'>
            <button onClick={handleLogout} className='logout-btn'>
              Logout
            </button>
          </div>
        </div>

        <div className='dashboard-content'>
          <p className='dashboard-subtitle'>Choose what you'd like to manage</p>

          <div className='cards-grid'>
            <div
              className='dashboard-card'
              onClick={() => nav('/admin/projects')}
            >
              <div className='card-icon projects-icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z' />
                </svg>
              </div>
              <h2 className='card-title'>Projects</h2>
              <p className='card-description'>
                Manage your real estate projects, add new listings, and update
                existing ones
              </p>
              <div className='card-arrow'>→</div>
            </div>

            <div className='dashboard-card' onClick={() => nav('/admin/posts')}>
              <div className='card-icon posts-icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' />
                </svg>
              </div>
              <h2 className='card-title'>Blog Posts</h2>
              <p className='card-description'>
                Create and edit blog posts, manage content, and keep your
                audience engaged
              </p>
              <div className='card-arrow'>→</div>
            </div>

            <div className='dashboard-card' onClick={() => nav('/admin/leads')}>
              <div className='card-icon leads-icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                </svg>
              </div>
              <h2 className='card-title'>Contact & Leads</h2>
              <p className='card-description'>
                View and manage contact forms, site visit requests, and job
                applications
              </p>
              <div className='card-arrow'>→</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
