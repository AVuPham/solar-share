import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Trang chủ / Home", path: "/" },
    { label: "Giới thiệu / About", path: "/about" },
    { label: "Công nghệ / Technology", path: "/technology" },
    { label: "Dự án / Projects", path: "/projects" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Liên hệ / Contact", path: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-extrabold tracking-wide hover:scale-105 transition"
        >
          <FaGlobe className="mr-2" /> Solar Share
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-black transition ${
                location.pathname === item.path ? "underline font-bold" : ""
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
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-green-700 px-4 py-6 space-y-4 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block text-white text-lg font-medium hover:text-yellow-300 transition ${
                location.pathname === item.path ? "underline font-bold" : ""
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
