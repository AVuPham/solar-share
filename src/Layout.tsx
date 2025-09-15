import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Trang chủ", path: "/solar-share/" },
    { label: "Giới thiệu", path: "/solar-share/about" },
    { label: "Công nghệ", path: "/solar-share/technology" },
    { label: "Dự án", path: "/solar-share/projects" },
    { label: "Dashboard", path: "/solar-share/dashboard" },
    { label: "Liên hệ", path: "/solar-share/contact" },
  ];

  // Breadcrumb logic
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="bg-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link to="/solar-share/" className="text-2xl font-bold flex items-center">
            🌞 Solar Share
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 font-semibold">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-yellow-300 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <div className="md:hidden bg-green-600 p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-white font-medium hover:text-yellow-300"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* BREADCRUMB */}
      <div className="bg-gray-100 py-2 px-6 md:px-16 text-sm text-gray-600">
        <Link to="/solar-share/" className="hover:text-green-600 font-medium">
          Trang chủ
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <span key={to}>
              {" "}
              ›{" "}
              <Link
                to={`/solar-share${to}`}
                className="hover:text-green-600 capitalize"
              >
                {decodeURIComponent(value)}
              </Link>
            </span>
          );
        })}
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-gray-50 py-10 px-6 md:px-16">{children}</main>

      {/* FOOTER */}
      <footer className="bg-green-800 text-white mt-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 p-8">
          {/* Cột 1 */}
          <div>
            <h2 className="text-2xl font-bold mb-3">🌞 Solar Share</h2>
            <p className="text-gray-200">
              Chia sẻ năng lượng – Thắp sáng tương lai xanh và bền vững.
            </p>
          </div>

          {/* Cột 2 */}
          <div>
            <h3 className="font-bold mb-3">Liên kết nhanh</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-yellow-300 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3 */}
          <div>
            <h3 className="font-bold mb-3">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-yellow-300 transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-yellow-300 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-yellow-300 transition">
                <FaLinkedin />
              </a>
            </div>
            <p className="mt-4 text-gray-300 text-sm">
              © 2025 Solar Share. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
