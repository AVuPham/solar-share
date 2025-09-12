import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-r from-sky-600 to-green-500 text-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-6">
          Solar Share – Chia sẻ năng lượng, kết nối cộng đồng
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Nền tảng năng lượng tái tạo kết hợp IoT, AI và Blockchain, giúp mọi người dễ dàng sản xuất,
          chia sẻ và sử dụng điện mặt trời minh bạch, an toàn và bền vững.
        </p>
        <Link
          to="/about"
          className="px-8 py-4 bg-white text-sky-700 font-semibold rounded-lg shadow hover:bg-gray-100"
        >
          Tìm hiểu thêm
        </Link>
      </section>

      {/* Tầm nhìn & Sứ mệnh */}
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-700 mb-6">Tầm nhìn & Sứ mệnh</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Chúng tôi tin rằng năng lượng sạch không chỉ dành cho một số ít người có điều kiện, 
          mà phải trở thành quyền lợi cơ bản cho mọi cộng đồng.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Solar Share hướng tới việc xây dựng một hệ sinh thái năng lượng mở, minh bạch và công bằng, 
          nơi mọi người đều có thể tham gia vào chuỗi giá trị năng lượng xanh.
        </p>
      </section>

      {/* Lợi ích chính */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-sky-600 mb-2">Cho Cộng đồng</h3>
          <p className="text-gray-700">
            Cung cấp nguồn điện ổn định, giảm chi phí sinh hoạt, và nâng cao ý thức bảo vệ môi trường.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-sky-600 mb-2">Cho Doanh nghiệp</h3>
          <p className="text-gray-700">
            Giảm chi phí vận hành, tăng uy tín thương hiệu xanh và mở ra cơ hội kinh doanh bền vững.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-sky-600 mb-2">Cho Môi trường</h3>
          <p className="text-gray-700">
            Giảm phát thải CO₂, bảo vệ tài nguyên thiên nhiên và góp phần chống biến đổi khí hậu.
          </p>
        </div>
      </section>

      {/* Các con số nổi bật */}
      <section className="bg-sky-50 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-sky-700">+10.000</h3>
            <p className="text-gray-600">Hộ gia đình tham gia</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-sky-700">50.000 MWh</h3>
            <p className="text-gray-600">Điện sạch được tạo ra</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-sky-700">120.000 tấn</h3>
            <p className="text-gray-600">CO₂ được cắt giảm</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-sky-700 mb-4">Bạn đã sẵn sàng tham gia?</h2>
        <p className="text-gray-700 mb-6">
          Cùng Solar Share tạo dựng tương lai xanh, bắt đầu từ hôm nay!
        </p>
        <Link
          to="/projects"
          className="px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg shadow hover:bg-sky-700"
        >
          Xem các dự án
        </Link>
      </section>
    </div>
  )
}
