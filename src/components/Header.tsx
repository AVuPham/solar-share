import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { label: "🏠 Trang chủ / Home", path: "/" },
    { label: "ℹ️ Giới thiệu / About", path: "/about" },
    { label: "⚡ Công nghệ / Technology", path: "/technology" },
    { label: "📂 Dự án / Projects", path: "/projects" },
    { label: "📊 Dashboard", path: "/dashboard" },
    { label: "📞 Liên hệ / Contact", path: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide hover:scale-105 transition"
        >
          🌞 Solar Share
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-black transition ${
                location.pathname === item.path ? "underline" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-green-700 p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block text-white font-medium hover:text-yellow-300 ${
                location.pathname === item.path ? "underline" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
