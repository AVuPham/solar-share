import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const links = [
    { path: '/', label: 'Trang chủ' },
    { path: '/about', label: 'Giới thiệu' },
    { path: '/technology', label: 'Công nghệ' },
    { path: '/projects', label: 'Dự án' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/contact', label: 'Liên hệ' },
  ]

  return (
    <nav className="container mx-auto flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-bold">Solar Share</h1>
      <div className="space-x-6">
        {links.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`hover:underline ${
              location.pathname === link.path ? 'font-semibold text-yellow-300' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
