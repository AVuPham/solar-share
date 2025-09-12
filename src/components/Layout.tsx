import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-sky-700 text-white shadow">
        <Navbar />
      </header>

      {/* Nội dung chính */}
      <main className="flex-grow container mx-auto px-6 py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 border-t">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Solar Share. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
