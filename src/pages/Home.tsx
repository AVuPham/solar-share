// src/pages/Home.tsx
import React from "react";
import { FaSun, FaLeaf, FaRolt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-yellow-300 to-green-400 text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-white mb-4">
          🌞 Solar Share – Chia sẻ năng lượng, thắp sáng tương lai
        </h1>
        <p className="text-lg text-white max-w-2xl mx-auto mb-6">
          Nền tảng kết nối cộng đồng với năng lượng tái tạo – thông minh,
          minh bạch và bền vững.
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-white text-green-700 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-green-100"
          >
            🔍 Khám phá dự án
          </a>
          <a
            href="#cta"
            className="bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-green-800"
          >
            🚀 Tham gia ngay
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 bg-white text-center lg:text-left lg:flex lg:items-center lg:justify-center lg:space-x-12">
        <img
          src="https://img.icons8.com/fluency/240/solar-panel.png"
          alt="Solar Panel"
          className="w-64 mx-auto lg:mx-0"
        />
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Về Solar Share
          </h2>
          <p className="mb-3">
            Solar Share không chỉ là công nghệ, mà còn là{" "}
            <b>phong trào cộng đồng</b> thúc đẩy việc dùng năng lượng sạch.
          </p>
          <p className="mb-3">
            Ứng dụng <b>AI, IoT, Blockchain</b> để tối ưu hóa sản xuất – phân
            phối – chia sẻ điện mặt trời.
          </p>
          <p>
            Tầm nhìn: “Tất cả mọi gia đình đều tiếp cận được năng lượng sạch,
            giảm chi phí sinh hoạt và bảo vệ môi trường.”
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-12">
          Điểm nổi bật
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <MdOutlineAnalytics className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-lg">Thời tiết & IoT</h3>
            <p className="text-sm">
              Giám sát pin mặt trời theo thời gian thực bằng IoT.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaGlobe className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-lg">Blockchain minh bạch</h3>
            <p className="text-sm">
              Giao dịch năng lượng an toàn, minh bạch, đáng tin cậy.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaRobot className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-lg">AI dự đoán</h3>
            <p className="text-sm">
              AI ước lượng sản lượng điện từ giờ nắng trong ngày.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaUsers className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-lg">Cộng đồng toàn cầu</h3>
            <p className="text-sm">
              Kết nối hàng ngàn người dùng ở nhiều quốc gia.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 px-6 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-10">🌍 Số liệu ấn tượng</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="bg-green-800 p-6 rounded-lg shadow">
            <BsFillLightningChargeFill className="text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">200+</p>
            <p>kWh đã chia sẻ</p>
          </div>
          <div className="bg-green-800 p-6 rounded-lg shadow">
            <FaUsers className="text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">1000+</p>
            <p>Người dùng</p>
          </div>
          <div className="bg-green-800 p-6 rounded-lg shadow">
            <FaSolarPanel className="text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">15+</p>
            <p>Dự án</p>
          </div>
          <div className="bg-green-800 p-6 rounded-lg shadow">
            <FaGlobe className="text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">5+</p>
            <p>Quốc gia</p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-12">
          Dự án tiêu biểu
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img
              src="https://img.icons8.com/color/200/school-building.png"
              alt="Green School"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Green School</h3>
            <p className="text-sm">
              Trường học xanh vận hành bằng năng lượng mặt trời, giáo dục thế hệ
              trẻ.
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline mt-3 inline-block"
            >
              Xem thêm →
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img
              src="https://img.icons8.com/color/200/family.png"
              alt="Solar For All"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Solar For All</h3>
            <p className="text-sm">
              Mạng lưới chia sẻ điện mặt trời cho các hộ gia đình thu nhập thấp.
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline mt-3 inline-block"
            >
              Xem thêm →
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img
              src="https://img.icons8.com/color/200/city.png"
              alt="Smart City Solar"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Smart City Solar</h3>
            <p className="text-sm">
              Tích hợp điện mặt trời vào các tòa nhà đô thị thông minh.
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline mt-3 inline-block"
            >
              Xem thêm →
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        id="cta"
        className="py-20 px-6 bg-gradient-to-r from-green-500 to-yellow-400 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-6">
          🌞 Hãy cùng Solar Share lan tỏa năng lượng sạch!
        </h2>
        <a
          href="#"
          className="bg-white text-green-700 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-green-100"
        >
          🚀 Tham gia ngay
        </a>
      </section>
    </div>
  );
}
