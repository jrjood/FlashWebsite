// src/routes/AppRoutes.jsx
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import PageLoader from '../components/PageLoader';

import App from '../App';

// ---- Core layout & pages (load immediately) ----
import HomeLayout from '../pages/HomeLayout';
import Error from '../pages/Error';
import HomePage from '../pages/HomePage';

// ---- Lazy load all other pages ----
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ClientsPage = lazy(() => import('../pages/ClientsPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));

// ---- Contact nested forms (lazy loaded) ----
const ContactForm = lazy(() => import('../layout/ContactPage/ContactForm'));
const ContactSelectForm = lazy(() =>
  import('../layout/ContactPage/ContactSelectForm')
);
const JoinCrewForm = lazy(() => import('../layout/ContactPage/JoinCrewForm'));
const SiteVisitForm = lazy(() => import('../layout/ContactPage/SiteVisitForm'));

// ---- Blog + dynamic projects (lazy loaded) ----
const Blog = lazy(() => import('../pages/Blog/Blog'));
const PostDetail = lazy(() => import('../pages/Blog/PostDetail'));
const ProjectDetail = lazy(() => import('../pages/Projects/ProjectDetail'));

// ---- Admin pages (lazy loaded - not loaded for regular users) ----
const AdminLogin = lazy(() => import('../pages/Admin/AdminLogin'));
const AdminDashboard = lazy(() => import('../pages/Admin/AdminDashboard'));
const AdminProjects = lazy(() => import('../pages/Admin/AdminProjects'));
const AdminProjectEditor = lazy(() =>
  import('../pages/Admin/AdminProjectEditor')
);
const AdminPosts = lazy(() => import('../pages/Admin/AdminPosts'));
const AdminPostEditor = lazy(() => import('../pages/Admin/AdminPostEditor'));
const AdminLeads = lazy(() => import('../pages/Admin/AdminLeads'));

import { useAuth } from '../hooks/useAuth';

// Suspense wrapper for lazy loaded routes
const LazyRoute = ({ children }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
);

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
          {
            path: 'about',
            element: (
              <LazyRoute>
                <AboutPage />
              </LazyRoute>
            ),
          },
          {
            path: 'clients',
            element: (
              <LazyRoute>
                <ClientsPage />
              </LazyRoute>
            ),
          },

          // Projects (new dynamic)
          {
            path: 'projects',
            element: (
              <LazyRoute>
                <ProjectsPage />
              </LazyRoute>
            ),
          },
          {
            path: 'projects/:title',
            element: (
              <LazyRoute>
                <ProjectDetail />
              </LazyRoute>
            ),
          },

          // Blog
          {
            path: 'blog',
            element: (
              <LazyRoute>
                <Blog />
              </LazyRoute>
            ),
          },
          {
            path: 'blog/:slug',
            element: (
              <LazyRoute>
                <PostDetail />
              </LazyRoute>
            ),
          },

          // Contact with nested forms
          {
            path: 'contact',
            element: (
              <LazyRoute>
                <ContactPage />
              </LazyRoute>
            ),
            children: [
              {
                index: true,
                element: (
                  <LazyRoute>
                    <ContactSelectForm />
                  </LazyRoute>
                ),
              },
              {
                path: 'contact-us',
                element: (
                  <LazyRoute>
                    <ContactForm />
                  </LazyRoute>
                ),
              },
              {
                path: 'site-visit',
                element: (
                  <LazyRoute>
                    <SiteVisitForm />
                  </LazyRoute>
                ),
              },
              {
                path: 'join-us',
                element: (
                  <LazyRoute>
                    <JoinCrewForm />
                  </LazyRoute>
                ),
              },
            ],
          },
        ],
      },

      // Admin routes (not under HomeLayout, but still under App layout)
      {
        path: '/admin/login',
        element: (
          <LazyRoute>
            <AdminLogin />
          </LazyRoute>
        ),
      },

      {
        path: '/admin/dashboard',
        element: (
          <ProtectedRoute>
            <LazyRoute>
              <AdminDashboard />
            </LazyRoute>
          </ProtectedRoute>
        ),
      },

      {
        path: '/admin/projects',
        element: (
          <ProtectedRoute>
            <LazyRoute>
              <AdminProjects />
            </LazyRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/projects/new',
        element: (
          <ProtectedRoute>
            <LazyRoute>
              <AdminProjectEditor />
            </LazyRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/projects/:id',
        element: (
          <ProtectedRoute>
            <LazyRoute>
              <AdminProjectEditor />
            </LazyRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/posts',
        element: (
          <ProtectedRoute>
            <LazyRoute>
              <AdminPosts />
            </LazyRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/posts/new',
        element: (
          <ProtectedRoute>
            <LazyRoute>
              <AdminPostEditor />
            </LazyRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/posts/:id',
        element: (
          <ProtectedRoute>
            <LazyRoute>
              <AdminPostEditor />
            </LazyRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/leads',
        element: (
          <ProtectedRoute>
            <LazyRoute>
              <AdminLeads />
            </LazyRoute>
          </ProtectedRoute>
        ),
      },

      // 404
      { path: '*', element: <Error /> },
    ],
  },
]);

export default router;
