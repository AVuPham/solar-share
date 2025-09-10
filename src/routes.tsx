import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Technology from './pages/Technology'
import Impact from './pages/Impact'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/technology', element: <Technology /> },
  { path: '/impact', element: <Impact /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> }, // 👈 route không tồn tại → show NotFound.tsx
])
