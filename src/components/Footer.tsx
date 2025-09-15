import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const navItems = [
    { label: "🏠 Trang chủ / Home", path: "/" },
    { label: "ℹ️ Giới thiệu / About", path: "/about" },
    { label: "⚡ Công nghệ / Technology", path: "/technology" },
    { label: "📂 Dự án / Projects", path: "/projects" },
    { label: "📊 Dashboard", path: "/dashboard" },
    { label: "📞 Liên hệ / Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-green-800 to-yellow-600 text-white mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 p-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-3">🌞 Solar Share</h2>
          <p className="text-gray-200 leading-relaxed">
            Solar Share mang đến <b>giải pháp năng lượng xanh</b> – bền vững và
            thân thiện môi trường, kết nối cộng đồng và nhà đầu tư.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-3">🔗 Liên kết nhanh</h3>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-black transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-3">🌐 Kết nối</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-black transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-black transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-black transition" />
            </a>
          </div>
          <p className="mt-4 text-gray-200 text-sm">
            © 2025 Solar Share. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
