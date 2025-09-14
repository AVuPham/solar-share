import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-green-600 to-yellow-400 text-white">
        <h1 className="text-5xl font-extrabold mb-6">
          Solar Share – Năng lượng tái tạo cho cộng đồng
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Kết nối công nghệ AI, IoT và Blockchain để dự đoán, tối ưu và chia sẻ
          năng lượng mặt trời.
        </p>
        <Link
          to="/about"
          className="px-6 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-200"
        >
          Khám phá dự án
        </Link>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <span className="text-5xl">⚡</span>
          <h2 className="text-xl font-bold mt-4 mb-2">AI Dự đoán</h2>
          <p>
            Sử dụng trí tuệ nhân tạo để dự đoán sản lượng điện mặt trời theo dữ
            liệu thời tiết.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <span className="text-5xl">☁️</span>
          <h2 className="text-xl font-bold mt-4 mb-2">Dữ liệu thời tiết</h2>
          <p>
            Kết nối trực tiếp với API thời tiết để đưa ra thông tin chính xác
            theo từng khu vực.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <span className="text-5xl">🌍</span>
          <h2 className="text-xl font-bold mt-4 mb-2">Chia sẻ cộng đồng</h2>
          <p>
            Mô hình chia sẻ năng lượng sạch, giúp cộng đồng cùng hưởng lợi từ
            nguồn tài nguyên xanh.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-green-50 py-16 text-center">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-green-700">100+</h3>
            <p className="text-gray-700">kWh được chia sẻ</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-700">500+</h3>
            <p className="text-gray-700">Hộ gia đình hưởng lợi</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-700">10+</h3>
            <p className="text-gray-700">Dự án triển khai</p>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Dự án nổi bật</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://source.unsplash.com/400x250/?solar"
              alt="Project 1"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Solar Village</h3>
            <p>
              Cung cấp điện mặt trời cho làng quê vùng núi, giảm chi phí điện và
              bảo vệ môi trường.
            </p>
            <Link to="/projects" className="text-green-600 hover:underline">
              Xem thêm →
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://source.unsplash.com/400x250/?renewable"
              alt="Project 2"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Green School</h3>
            <p>
              Trường học xanh sử dụng năng lượng mặt trời, giáo dục học sinh về
              bảo vệ môi trường.
            </p>
            <Link to="/projects" className="text-green-600 hover:underline">
              Xem thêm →
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://source.unsplash.com/400x250/?energy"
              alt="Project 3"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Solar For All</h3>
            <p>
              Mạng lưới chia sẻ năng lượng mặt trời cho các hộ gia đình có thu
              nhập thấp.
            </p>
            <Link to="/projects" className="text-green-600 hover:underline">
              Xem thêm →
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 text-center bg-green-700 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Hãy cùng Solar Share lan tỏa năng lượng sạch
        </h2>
        <Link
          to="/contact"
          className="px-6 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-200"
        >
          Tham gia ngay
        </Link>
      </section>
    </div>
  );
}
