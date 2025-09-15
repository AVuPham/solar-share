import React from "react";
import {
  FaGlobe,
  FaSolarPanel,
  FaLeaf,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-green-100 to-green-200 py-20 rounded-xl shadow-md">
        <h1 className="text-5xl font-bold text-green-700 mb-4">
          🌞 Solar Share Project
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Chia sẻ và khai thác năng lượng mặt trời thông minh – Hướng tới một
          tương lai xanh và bền vững cho Việt Nam và thế giới.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-xl text-center hover:scale-105 transition">
          <FaGlobe className="text-green-600 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Kết nối toàn cầu</h2>
          <p className="text-gray-600">
            Hệ thống Solar Share giúp kết nối cộng đồng quốc tế cùng tham gia
            phát triển năng lượng sạch.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl text-center hover:scale-105 transition">
          <FaSolarPanel className="text-yellow-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Công nghệ hiện đại</h2>
          <p className="text-gray-600">
            Tích hợp IoT, AI và Blockchain để tối ưu hóa hiệu suất và minh bạch
            hóa giao dịch năng lượng.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl text-center hover:scale-105 transition">
          <FaLeaf className="text-green-700 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Xanh & Bền vững</h2>
          <p className="text-gray-600">
            Giảm khí thải CO₂ và khuyến khích sử dụng năng lượng tái tạo trong
            đời sống hằng ngày.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl text-center hover:scale-105 transition">
          <FaChartLine className="text-blue-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Phân tích thông minh</h2>
          <p className="text-gray-600">
            Dashboard AI cung cấp dự báo sản lượng điện mặt trời dựa trên dữ
            liệu thời tiết theo thời gian thực.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl text-center hover:scale-105 transition">
          <FaHandshake className="text-purple-600 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Cộng đồng & Hợp tác</h2>
          <p className="text-gray-600">
            Mạng lưới người dùng, nhà đầu tư và đối tác cùng chia sẻ lợi ích từ
            nguồn năng lượng mặt trời.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-green-700 text-white py-16 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          Tham gia Solar Share ngay hôm nay! 🚀
        </h2>
        <p className="mb-6">
          Hãy cùng chung tay xây dựng một hành tinh xanh và phát triển bền
          vững.
        </p>
        <a
          href="/projects"
          className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Khám phá Dự án
        </a>
      </section>
    </div>
  );
}
