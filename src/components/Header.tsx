import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-400 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">☀️ Solar Share</h1>
        <nav className="space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-300">Trang chủ</Link>
          <Link to="/about" className="hover:text-yellow-300">Giới thiệu</Link>
          <Link to="/technology" className="hover:text-yellow-300">Công nghệ</Link>
          <Link to="/projects" className="hover:text-yellow-300">Dự án</Link>
          <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
          <Link to="/contact" className="hover:text-yellow-300">Liên hệ</Link>
        </nav>
      </div>
    </header>
  );
}
