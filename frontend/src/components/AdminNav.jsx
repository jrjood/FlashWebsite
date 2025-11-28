import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  a {
    padding: 0.625rem 1.25rem;
    border-radius: 6px;
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 600;
    color: #4a5568;
    background: #f7fafc;
    transition: all 0.2s;
  }

  a:hover {
    background: #e2e8f0;
    color: #2d3748;
  }

  a.active {
    background: linear-gradient(135deg, #0f5132 0%, #1a7f4f 100%);
    color: white;
    box-shadow: 0 2px 8px rgba(15, 81, 50, 0.3);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default function AdminNav() {
  const location = useLocation();

  return (
    <NavWrapper>
      <Link
        to='/admin/projects'
        className={
          location.pathname.includes('/admin/projects') ? 'active' : ''
        }
      >
        Projects
      </Link>
      <Link
        to='/admin/posts'
        className={location.pathname.includes('/admin/posts') ? 'active' : ''}
      >
        Posts
      </Link>
    </NavWrapper>
  );
}
