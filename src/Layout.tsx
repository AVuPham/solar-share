import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
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
    <div className="flex flex-col min-h-screen font-sans">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-green-600 to-yellow-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link to="/" className="text-2xl font-extrabold tracking-wide">🌞 Solar Share</Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 font-semibold">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-black transition">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
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
                className="block text-white font-medium hover:text-yellow-300"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-gray-50 py-10 px-6 md:px-16">{children}</main>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-green-800 to-yellow-600 text-white mt-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 p-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">🌞 Solar Share</h2>
            <p className="text-gray-200 leading-relaxed">
              Solar Share mang đến <b>giải pháp năng lượng xanh</b> – bền vững và thân thiện môi trường.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3">🔗 Liên kết nhanh</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-black transition">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">🌐 Kết nối</h3>
            <div className="flex space-x-4 text-xl">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
            <p className="mt-4 text-gray-200 text-sm">© 2025 Solar Share</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
