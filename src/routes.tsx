// src/routes.tsx
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

// Import các page
import Home from './pages/Home'
import About from './pages/About'
import Technology from './pages/Technology'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Định nghĩa router
export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/technology', element: <Technology /> },
  { path: '/projects', element: <Projects /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> }, // 404 page
])
