// src/routes/AppRoutes.jsx
import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '../App';

// ---- Old main layout & pages ----
import HomeLayout from '../pages/HomeLayout';
import Error from '../pages/Error';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ClientsPage from '../pages/ClientsPage';
import ContactPage from '../pages/ContactPage';
import ProjectsPage from '../pages/ProjectsPage';

// ---- Contact nested forms (from old layout) ----
import {
  ContactForm,
  ContactSelectForm,
  JoinCrewForm,
  SiteVisitForm,
} from '../layout/ContactPage';

// ---- Old "AllProjects" static pages ----
import {
  ProjectOne,
  ProjectTwo,
  ProjectThree,
  ProjectFour,
  ProjectFive,
} from '../pages/AllProjects';

// ---- New template: Blog + dynamic projects ----
import Blog from '../pages/Blog/Blog';
import PostDetail from '../pages/Blog/PostDetail';
import Projects from '../pages/Projects/Projects';
import ProjectDetail from '../pages/Projects/ProjectDetail';

// ---- New template: Admin + Auth ----
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import AdminProjects from '../pages/Admin/AdminProjects';
import AdminProjectEditor from '../pages/Admin/AdminProjectEditor';
import AdminPosts from '../pages/Admin/AdminPosts';
import AdminPostEditor from '../pages/Admin/AdminPostEditor';

import { useAuth } from '../hooks/useAuth';

// Small protected route wrapper using your Auth context
function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/admin/login' replace />;
  }

  return children;
}

// Create the router
const router = createBrowserRouter([
  {
    // Root layout: runs App (loader + Outlet)
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        // Public site layout (Navbar, Footer etc)
        element: <HomeLayout />,
        children: [
          // Home
          { index: true, element: <HomePage /> },

          // Static pages
          { path: 'about', element: <AboutPage /> },
          { path: 'clients', element: <ClientsPage /> },

          // Projects (new dynamic)
          { path: 'projects', element: <ProjectsPage /> },
          { path: 'projects/:title', element: <ProjectDetail /> },

          // Old static project pages still available
          { path: 'projects/proj1', element: <ProjectOne /> },
          { path: 'projects/proj2', element: <ProjectTwo /> },
          { path: 'projects/proj3', element: <ProjectThree /> },
          { path: 'projects/proj4', element: <ProjectFour /> },
          { path: 'projects/proj5', element: <ProjectFive /> },

          // Blog
          { path: 'blog', element: <Blog /> },
          { path: 'blog/:slug', element: <PostDetail /> },

          // Contact with nested forms
          {
            path: 'contact',
            element: <ContactPage />,
            children: [
              { index: true, element: <ContactSelectForm /> },
              { path: 'Contact-Us', element: <ContactForm /> },
              { path: 'site-visit', element: <SiteVisitForm /> },
              { path: 'join-us', element: <JoinCrewForm /> },
            ],
          },
        ],
      },

      // Admin routes (not under HomeLayout, but still under App layout)
      { path: '/admin/login', element: <AdminLogin /> },

      {
        path: '/admin/dashboard',
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },

      {
        path: '/admin/projects',
        element: (
          <ProtectedRoute>
            <AdminProjects />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/projects/new',
        element: (
          <ProtectedRoute>
            <AdminProjectEditor />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/projects/:id',
        element: (
          <ProtectedRoute>
            <AdminProjectEditor />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/posts',
        element: (
          <ProtectedRoute>
            <AdminPosts />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/posts/new',
        element: (
          <ProtectedRoute>
            <AdminPostEditor />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/posts/:id',
        element: (
          <ProtectedRoute>
            <AdminPostEditor />
          </ProtectedRoute>
        ),
      },

      // 404
      { path: '*', element: <Error /> },
    ],
  },
]);

export default router;
