import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Technology from './pages/Technology'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
      {/* Tự động redirect tất cả đường dẫn lạ về Trang chủ */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
