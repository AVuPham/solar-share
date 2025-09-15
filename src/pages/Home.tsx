import React from "react";
import { Link } from "react-router-dom";
import {
  FaSolarPanel,
  FaLeaf,
  FaUsers,
  FaGlobe,
  FaBolt,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 text-white text-center py-28 px-6 rounded-2xl shadow-2xl">
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
          🌞 Solar Share
        </h1>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed font-light">
          Nền tảng <b>chia sẻ năng lượng mặt trời</b> kết hợp{" "}
          <b>AI, IoT & Blockchain</b>, mang đến giải pháp minh bạch, bền vững và
          thân thiện với môi trường cho cộng đồng toàn cầu.
        </p>
        <div className="mt-10 space-x-6">
          <Link
            to="/projects"
            className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg shadow hover:bg-gray-100 transition"
          >
            🚀 Khám phá Dự án
          </Link>
          <Link
            to="/about"
            className="bg-green-900 px-8 py-4 rounded-xl font-bold text-lg shadow hover:bg-green-950 transition"
          >
            📖 Về Chúng Tôi
          </Link>
        </div>
      </section>

      {/* GIÁ TRỊ CỐT LÕI */}
      <section className="grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-white shadow-lg p-10 rounded-2xl border-t-8 border-green-600 hover:shadow-2xl transition">
          <FaSolarPanel className="text-6xl text-yellow-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-green-700 mb-3">
            Công nghệ tiên tiến
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Ứng dụng <b>AI & IoT</b> để dự báo, tối ưu và quản lý sản lượng
            điện mặt trời theo thời gian thực.
          </p>
        </div>

        <div className="bg-white shadow-lg p-10 rounded-2xl border-t-8 border-green-500 hover:shadow-2xl transition">
          <FaLeaf className="text-6xl text-green-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-green-700 mb-3">
            Bền vững & Xanh
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Góp phần giảm phát thải <b>CO₂</b>, hướng đến mục tiêu{" "}
            <b>Net-Zero</b>, xây dựng một hành tinh xanh cho thế hệ tương lai.
          </p>
        </div>

        <div className="bg-white shadow-lg p-10 rounded-2xl border-t-8 border-yellow-400 hover:shadow-2xl transition">
          <FaUsers className="text-6xl text-blue-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-green-700 mb-3">
            Cộng đồng chia sẻ
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Kết nối <b>hộ gia đình</b>, <b>doanh nghiệp</b> và{" "}
            <b>nhà đầu tư quốc tế</b> trong cùng một nền tảng minh bạch.
          </p>
        </div>
      </section>

      {/* GIỚI THIỆU CHI TIẾT */}
      <section className="bg-white shadow-lg rounded-2xl p-12 space-y-6">
        <h2 className="text-4xl font-extrabold text-green-700 text-center">
          🌍 Vì sao chọn Solar Share?
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg text-center max-w-4xl mx-auto">
          Solar Share không chỉ là giải pháp năng lượng, mà là{" "}
          <b>hệ sinh thái thông minh</b>.  
          Chúng tôi giúp cộng đồng cùng nhau khai thác, phân bổ và chia sẻ năng
          lượng mặt trời với sự minh bạch tuyệt đối.
        </p>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
          <li className="p-6 bg-gray-50 rounded-xl shadow">
            🔎 Dự báo chính xác sản lượng bằng AI.
          </li>
          <li className="p-6 bg-gray-50 rounded-xl shadow">
            📊 Theo dõi minh bạch bằng công nghệ Blockchain.
          </li>
          <li className="p-6 bg-gray-50 rounded-xl shadow">
            ⚡ Tối ưu lưu trữ và phân phối bằng IoT.
          </li>
          <li className="p-6 bg-gray-50 rounded-xl shadow">
            🤝 Gọi vốn cộng đồng để phát triển dự án năng lượng xanh.
          </li>
        </ul>
      </section>

      {/* THỐNG KÊ / IMPACT */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 rounded-2xl shadow-xl text-center">
        <h2 className="text-4xl font-bold mb-10">📊 Tác động toàn cầu</h2>
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <FaBolt className="text-5xl mx-auto mb-3" />
            <h3 className="text-2xl font-bold">+50MW</h3>
            <p>Điện mặt trời sản xuất</p>
          </div>
          <div>
            <FaGlobe className="text-5xl mx-auto mb-3" />
            <h3 className="text-2xl font-bold">12 Quốc gia</h3>
            <p>Đang triển khai</p>
          </div>
          <div>
            <FaUsers className="text-5xl mx-auto mb-3" />
            <h3 className="text-2xl font-bold">5000+</h3>
            <p>Người dùng tham gia</p>
          </div>
          <div>
            <FaChartLine className="text-5xl mx-auto mb-3" />
            <h3 className="text-2xl font-bold">30%</h3>
            <p>Tăng trưởng hàng năm</p>
          </div>
        </div>
      </section>

      {/* HỢP TÁC */}
      <section className="bg-white shadow-lg rounded-2xl p-12 text-center space-y-6">
        <FaHandshake className="text-6xl text-green-600 mx-auto mb-4" />
        <h2 className="text-4xl font-extrabold text-green-700">
          🤝 Hợp tác chiến lược
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
          Solar Share hợp tác cùng <b>tổ chức quốc tế</b>, <b>chính phủ</b> và{" "}
          <b>doanh nghiệp</b> để mở rộng năng lượng sạch.  
          Chúng tôi tin rằng, chỉ khi kết nối toàn cầu, chúng ta mới có thể tạo
          nên <b>tương lai Net-Zero</b>.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-4 bg-yellow-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow hover:bg-yellow-600 transition"
        >
          📩 Liên hệ hợp tác
        </Link>
      </section>

      {/* CTA CUỐI */}
      <section className="bg-gradient-to-r from-yellow-400 to-green-500 text-white py-20 text-center rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-extrabold mb-6 drop-shadow-lg">
          Hãy tham gia cùng Solar Share 🌞
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
          Cùng nhau, chúng ta có thể lan tỏa năng lượng sạch – cho{" "}
          <b>cộng đồng, doanh nghiệp và hành tinh</b>.  
          Solar Share luôn sẵn sàng hợp tác và phát triển cùng bạn.
        </p>
        <Link
          to="/contact"
          className="bg-white text-green-700 px-10 py-4 rounded-xl font-bold text-lg shadow hover:bg-gray-100 transition"
        >
          🚀 Bắt đầu ngay
        </Link>
      </section>
    </div>
  );
}
