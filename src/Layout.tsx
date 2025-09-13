import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link to="/" className="text-2xl font-bold">☀ Solar Share</Link>
          <nav className="space-x-6">
            <Link to="/" className="hover:underline">Trang chủ</Link>
            <Link to="/about" className="hover:underline">Giới thiệu</Link>
            <Link to="/technology" className="hover:underline">Công nghệ</Link>
            <Link to="/projects" className="hover:underline">Dự án</Link>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <Link to="/contact" className="hover:underline">Liên hệ</Link>
          </nav>
          <a
            href="#"
            className="bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-500"
          >
            Tham gia ngay
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Solar Share. All rights reserved.</p>
          <div className="space-x-4">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/technology" className="hover:text-white">Technology</a>
            <a href="/projects" className="hover:text-white">Projects</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
