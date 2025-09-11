import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

// Import các page
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/projects', element: <Projects /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> }, // fallback 404
])
