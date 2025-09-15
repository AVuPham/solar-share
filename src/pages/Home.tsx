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
          Hệ sinh thái <b>năng lượng mặt trời thông minh</b>, tích hợp{" "}
          <b>AI, IoT và Blockchain</b>, mang lại nguồn năng lượng minh bạch, bền
          vững và thân thiện môi trường cho toàn cầu.
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
            Ứng dụng <b>AI & IoT</b> để tối ưu sản lượng điện mặt trời, dự báo
            thông minh và theo dõi thời gian thực.
          </p>
        </div>

        <div className="bg-white shadow-lg p-10 rounded-2xl border-t-8 border-green-500 hover:shadow-2xl transition">
          <FaLeaf className="text-6xl text-green-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-green-700 mb-3">
            Bền vững & Xanh
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Giảm phát thải <b>CO₂</b>, bảo vệ hành tinh và hướng đến mục tiêu{" "}
            <b>Net-Zero</b> cho cộng đồng toàn cầu.
          </p>
        </div>

        <div className="bg-white shadow-lg p-10 rounded-2xl border-t-8 border-yellow-400 hover:shadow-2xl transition">
          <FaUsers className="text-6xl text-blue-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-green-700 mb-3">
            Cộng đồng chia sẻ
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Mọi người đều có thể tham gia: từ <b>hộ gia đình</b>,{" "}
            <b>doanh nghiệp</b> đến <b>nhà đầu tư</b> quốc tế.
          </p>
        </div>
      </section>

      {/* GIỚI THIỆU CHI TIẾT */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-green-700 mb-6">
            🌍 Tương lai năng lượng toàn cầu
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Với Solar Share, năng lượng mặt trời không chỉ là nguồn điện – mà là{" "}
            <b>hệ sinh thái thông minh</b> kết nối mọi người, minh bạch hóa dữ
            liệu và phân bổ công bằng lợi ích.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chúng tôi tạo ra <b>giải pháp toàn diện</b> từ dự đoán sản lượng,
            chia sẻ năng lượng dư thừa, cho đến việc gọi vốn cộng đồng trên nền
            tảng Blockchain.
          </p>
          <Link
            to="/technology"
            className="inline-block mt-6 bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow hover:bg-green-700 transition"
          >
            🔧 Xem Công nghệ
          </Link>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
            alt="Solar Panels"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* THỐNG KÊ / IMPACT */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 rounded-2xl shadow-xl text-center">
        <h2 className="text-4xl font-bold mb-8">📊 Tác động toàn cầu</h2>
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <FaBolt className="text-5xl mx-auto mb-3" />
            <h3 className="text-2xl font-bold">+50MW</h3>
            <p>Điện mặt trời đã sản xuất</p>
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
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1581091215367-59ab6b29c7b6"
            alt="Partnership"
            className="rounded-2xl shadow-2xl"
          />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-green-700 mb-6">
            🤝 Hợp tác chiến lược
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Solar Share hợp tác cùng các tổ chức quốc tế, chính phủ và doanh
            nghiệp để xây dựng <b>giải pháp năng lượng bền vững</b>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chúng tôi tin rằng, chỉ với sự kết nối toàn cầu, chúng ta mới có thể
            tạo nên <b>tương lai Net-Zero</b> thực sự.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-yellow-500 text-white px-8 py-4 rounded-xl font-bold shadow hover:bg-yellow-600 transition"
          >
            📩 Liên hệ hợp tác
          </Link>
        </div>
      </section>

      {/* CTA CUỐI */}
      <section className="bg-gradient-to-r from-yellow-400 to-green-500 text-white py-20 text-center rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-extrabold mb-6 drop-shadow-lg">
          Tham gia cùng Solar Share 🌞
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
          Hãy cùng chúng tôi lan tỏa năng lượng sạch – cho{" "}
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
