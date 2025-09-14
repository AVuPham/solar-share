import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-green-700 via-yellow-400 to-green-700 text-white">
        <motion.h1
          className="text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Chia sẻ năng lượng, thắp sáng tương lai
        </motion.h1>
        <motion.p
          className="text-lg max-w-xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Solar Share kết nối cộng đồng với năng lượng tái tạo – thông minh, minh bạch và bền vững.
        </motion.p>
        <div className="space-x-4">
          <Link to="/about" className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100">
            Bắt đầu khám phá
          </Link>
          <Link to="/projects" className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600">
            Xem dự án
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { icon: "🤖", title: "AI & Dữ liệu", desc: "Dự đoán sản lượng điện mặt trời với AI chính xác." },
          { icon: "☁️", title: "Thời tiết & IoT", desc: "Cập nhật theo thời gian thực nhờ IoT và API thời tiết." },
          { icon: "🔗", title: "Blockchain & Chia sẻ", desc: "Minh bạch, an toàn, cộng đồng cùng hưởng lợi." },
        ].map((f, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl mb-3">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Two-column */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <img src="https://source.unsplash.com/600x400/?solar,energy" alt="solar" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-700">Tầm nhìn Solar Share</h2>
          <p className="text-gray-700 mb-4">
            Chúng tôi không chỉ tạo ra nguồn điện sạch mà còn kết nối cộng đồng, xây dựng một hệ sinh thái năng lượng xanh nơi mọi người đều có thể chia sẻ và hưởng lợi.
          </p>
          <Link to="/about" className="text-green-600 hover:underline">Tìm hiểu thêm →</Link>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-green-50 py-12 text-center grid md:grid-cols-4 gap-8">
        {[
          { num: "200+", label: "kWh đã chia sẻ" },
          { num: "1000+", label: "Người dùng" },
          { num: "15+", label: "Dự án" },
          { num: "5+", label: "Quốc gia" },
        ].map((s, i) => (
          <motion.div key={i} whileInView={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
            <h3 className="text-4xl font-extrabold text-green-700">{s.num}</h3>
            <p className="text-gray-600">{s.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Dự án tiêu biểu</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { img: "https://source.unsplash.com/400x250/?solar,village", title: "Solar Village", desc: "Điện mặt trời cho vùng sâu vùng xa." },
            { img: "https://source.unsplash.com/400x250/?school,renewable", title: "Green School", desc: "Trường học xanh với hệ thống năng lượng mặt trời." },
            { img: "https://source.unsplash.com/400x250/?community,energy", title: "Solar For All", desc: "Mạng lưới chia sẻ cho hộ thu nhập thấp." },
            { img: "https://source.unsplash.com/400x250/?city,cleanenergy", title: "Smart City Solar", desc: "Tích hợp năng lượng mặt trời vào đô thị thông minh." },
          ].map((p, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="bg-white rounded-lg shadow hover:shadow-2xl overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-2">{p.desc}</p>
                <Link to="/projects" className="text-green-600 hover:underline">Xem thêm →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-6">Hãy cùng Solar Share lan tỏa năng lượng sạch 🌱</h2>
        <Link to="/contact" className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-200">
          Liên hệ ngay
        </Link>
      </section>
    </div>
  );
}
