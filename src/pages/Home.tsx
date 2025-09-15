import { FaSolarPanel, FaGlobe, FaLeaf, FaChartLine, FaBolt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-300 to-green-400 text-center py-16 text-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">☀️ Solar Share</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Giải pháp năng lượng mặt trời thông minh – vì một <b>hành tinh xanh</b> và <b>tương lai bền vững</b>.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="/About"
            className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100"
          >
            Tìm hiểu thêm
          </a>
          <a
            href="/Projects"
            className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-800"
          >
            Khám phá dự án
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <FaGlobe className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Kết nối toàn cầu</h3>
          <p>
            Solar Share kết nối cộng đồng quốc tế cùng tham gia phát triển năng lượng sạch.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <FaBolt className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Công nghệ hiện đại</h3>
          <p>
            Ứng dụng <b>AI, IoT, Blockchain</b> để tối ưu hóa hiệu suất và minh bạch hóa dữ liệu.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <FaLeaf className="text-4xl text-green-700 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Xanh & Bền vững</h3>
          <p>
            Hướng tới hệ sinh thái năng lượng sạch – giảm phát thải carbon, bảo vệ môi trường.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-100 py-12 rounded-lg shadow-inner">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          🌍 Tác động của Solar Share
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <FaSolarPanel className="text-4xl text-yellow-600 mx-auto mb-2" />
            <h3 className="text-xl font-semibold">200+ kWh</h3>
            <p>Năng lượng được chia sẻ</p>
          </div>
          <div>
            <FaChartLine className="text-4xl text-green-600 mx-auto mb-2" />
            <h3 className="text-xl font-semibold">1000+ người</h3>
            <p>Đang tham gia</p>
          </div>
          <div>
            <FaLeaf className="text-4xl text-green-700 mx-auto mb-2" />
            <h3 className="text-xl font-semibold">15+ dự án</h3>
            <p>Đã triển khai</p>
          </div>
          <div>
            <FaGlobe className="text-4xl text-blue-600 mx-auto mb-2" />
            <h3 className="text-xl font-semibold">5+ quốc gia</h3>
            <p>Đang mở rộng</p>
          </div>
        </div>
      </section>
    </div>
  );
}
