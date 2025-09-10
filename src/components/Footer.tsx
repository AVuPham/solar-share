import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-8">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Solar Share. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link to="/about" className="hover:text-sky-600">Giới thiệu</Link>
          <Link to="/projects" className="hover:text-sky-600">Dự án</Link>
        </div>
      </div>
    </footer>
  )
}
