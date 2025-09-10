import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-sky-600">Solar Share</Link>
        <nav className="flex gap-6">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-sky-600 font-semibold' : 'text-gray-700'}>Trang chủ</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-sky-600 font-semibold' : 'text-gray-700'}>Giới thiệu</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'text-sky-600 font-semibold' : 'text-gray-700'}>Dự án</NavLink>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? 'text-sky-600 font-semibold' : 'text-gray-700'}>Dashboard</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-sky-600 font-semibold' : 'text-gray-700'}>Liên hệ</NavLink>
        </nav>
      </div>
    </header>
  )
}
