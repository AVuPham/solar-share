import React from "react";
import { Link } from "react-router-dom";
import { FaSolarPanel, FaLeaf, FaUsers, FaGlobe } from "react-icons/fa";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-green-500 to-yellow-400 text-white text-center py-20 px-6 rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold mb-6">🌞 Solar Share</h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Giải pháp <b>năng lượng mặt trời thông minh</b>, kết hợp công nghệ AI,
          IoT và Blockchain để xây dựng hệ sinh thái năng lượng xanh, minh bạch
          và bền vững cho cộng đồng.
        </p>
        <div className="mt-8 space-x-4">
          <Link
            to="/projects"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            🚀 Khám phá dự án
          </Link>
          <Link
            to="/about"
            className="bg-green-800 px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-900 transition"
          >
            📖 Tìm hiểu thêm
          </Link>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white shadow-lg p-8 rounded-xl hover:scale-105 transition">
          <FaSolarPanel className="text-5xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-700 mb-2">
            Công nghệ xanh
          </h3>
          <p className="text-gray-600">
            Ứng dụng AI & IoT tối ưu hóa hiệu suất năng lượng mặt trời, theo dõi
            trực tuyến và dự đoán sản lượng.
          </p>
        </div>

        <div className="bg-white shadow-lg p-8 rounded-xl hover:scale-105 transition">
          <FaLeaf className="text-5xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-700 mb-2">
            Bền vững & thân thiện
          </h3>
          <p className="text-gray-600">
            Năng lượng sạch, giảm phát thải CO₂ và bảo vệ môi trường sống cho
            thế hệ tương lai.
          </p>
        </div>

        <div className="bg-white shadow-lg p-8 rounded-xl hover:scale-105 transition">
          <FaUsers className="text-5xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-700 mb-2">
            Cộng đồng chia sẻ
          </h3>
          <p className="text-gray-600">
            Người dân, doanh nghiệp và nhà đầu tư cùng tham gia phát triển hệ
            sinh thái năng lượng tái tạo minh bạch.
          </p>
        </div>
      </section>

      {/* ABOUT BLOCK */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-green-700 mb-4">
            🌍 Tương lai năng lượng xanh
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Solar Share không chỉ cung cấp <b>nguồn năng lượng sạch</b> mà còn
            tạo ra một hệ thống minh bạch, kết nối cộng đồng và khuyến khích sự
            tham gia của nhà đầu tư quốc tế.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Với sự kết hợp công nghệ hiện đại, chúng tôi tin rằng giải pháp này
            sẽ góp phần quan trọng vào việc đạt được mục tiêu Net-Zero.
          </p>
          <Link
            to="/technology"
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition"
          >
            🔧 Xem công nghệ
          </Link>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
            alt="Solar Energy"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-yellow-400 to-green-500 text-white py-16 text-center rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-4">
          Tham gia cùng chúng tôi 🌞
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Hãy là một phần của hành trình chuyển đổi năng lượng – đầu tư, hợp
          tác và lan tỏa giá trị bền vững đến toàn cầu.
        </p>
        <Link
          to="/contact"
          className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          📩 Liên hệ ngay
        </Link>
      </section>
    </div>
  );
}
