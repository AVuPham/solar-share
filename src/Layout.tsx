import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 flex justify-between">
        <h1 className="font-bold text-xl">☀️ Solar Share</h1>
        <nav className="space-x-4">
          <Link to="/solar-share/">Trang chủ</Link>
          <Link to="/solar-share/about">Giới thiệu</Link>
          <Link to="/solar-share/technology">Công nghệ</Link>
          <Link to="/solar-share/projects">Dự án</Link>
          <Link to="/solar-share/dashboard">Dashboard</Link>
          <Link to="/solar-share/contact">Liên hệ</Link>
        </nav>
      </header>

      {/* Nội dung */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white text-center p-4">
        © 2025 Solar Share | Năng lượng sạch cho cộng đồng
      </footer>
    </div>
  );
}
