export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-white">☀️ Solar Share</h2>
          <p className="mt-2 text-sm">
            Giải pháp năng lượng mặt trời thông minh – bền vững và thân thiện môi trường.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Liên kết nhanh</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-yellow-300">Trang chủ</a></li>
            <li><a href="/about" className="hover:text-yellow-300">Giới thiệu</a></li>
            <li><a href="/technology" className="hover:text-yellow-300">Công nghệ</a></li>
            <li><a href="/projects" className="hover:text-yellow-300">Dự án</a></li>
            <li><a href="/dashboard" className="hover:text-yellow-300">Dashboard</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Liên hệ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Kết nối</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#"><i className="fab fa-facebook text-xl hover:text-blue-400"></i></a>
            <a href="#"><i className="fab fa-twitter text-xl hover:text-sky-400"></i></a>
            <a href="#"><i className="fab fa-linkedin text-xl hover:text-blue-500"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 bg-gray-800 text-sm text-gray-400">
        © {new Date().getFullYear()} Solar Share. All rights reserved.
      </div>
    </footer>
  );
}
