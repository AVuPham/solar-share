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
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-green-100 to-green-200 py-20 rounded-xl shadow-lg">
        <h1 className="text-5xl font-bold text-green-700 mb-4">
          🌞 Solar Share Project
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Chia sẻ & khai thác năng lượng mặt trời thông minh – Hướng tới một
          tương lai xanh và bền vững cho Việt Nam và thế giới.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {[
          {
            icon: <FaGlobe className="text-green-600 text-5xl mx-auto mb-4" />,
            title: "Kết nối toàn cầu",
            desc: "Solar Share kết nối cộng đồng quốc tế cùng tham gia phát triển năng lượng sạch.",
          },
          {
            icon: (
              <FaSolarPanel className="text-yellow-500 text-5xl mx-auto mb-4" />
            ),
            title: "Công nghệ hiện đại",
            desc: "Tích hợp IoT, AI & Blockchain để tối ưu hóa hiệu suất và minh bạch hóa giao dịch.",
          },
          {
            icon: <FaLeaf className="text-green-700 text-5xl mx-auto mb-4" />,
            title: "Xanh & Bền vững",
            desc: "Giảm khí thải CO₂, khuyến khích năng lượng tái tạo trong đời sống hằng ngày.",
          },
          {
            icon: (
              <FaChartLine className="text-blue-500 text-5xl mx-auto mb-4" />
            ),
            title: "Phân tích thông minh",
            desc: "Dashboard AI dự báo sản lượng điện mặt trời dựa trên dữ liệu thời tiết.",
          },
          {
            icon: (
              <FaHandshake className="text-purple-600 text-5xl mx-auto mb-4" />
            ),
            title: "Cộng đồng & Hợp tác",
            desc: "Mạng lưới người dùng, nhà đầu tư & đối tác cùng chia sẻ lợi ích từ năng lượng sạch.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 text-center"
          >
            {item.icon}
            <h2 className="text-xl font-bold mb-2 text-green-800">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center bg-green-700 text-white py-16 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Tham gia Solar Share ngay hôm nay! 🚀
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Cùng nhau xây dựng hành tinh xanh – một hệ sinh thái năng lượng sạch,
          minh bạch và bền vững cho mọi người.
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
