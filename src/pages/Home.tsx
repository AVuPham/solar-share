import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-green-700 via-yellow-400 to-green-600 text-white px-6">
        <motion.h1
          className="text-6xl font-extrabold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Solar Share ☀️
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Chia sẻ năng lượng, thắp sáng tương lai. <br />
          Solar Share mang đến giải pháp kết nối cộng đồng với năng lượng tái
          tạo – thông minh, minh bạch và bền vững.
        </motion.p>
        <div className="flex space-x-4">
          <Link
            to="/about"
            className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100"
          >
            Khám phá dự án
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <img
          src="https://source.unsplash.com/600x400/?solar,community"
          alt="Solar Share"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Về Solar Share
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Solar Share không chỉ là một nền tảng công nghệ, mà còn là một{" "}
            <b>phong trào cộng đồng</b> thúc đẩy việc sử dụng năng lượng tái
            tạo. Chúng tôi ứng dụng AI, IoT và Blockchain để tối ưu hóa việc sản
            xuất – phân phối – chia sẻ điện mặt trời, tạo ra một hệ sinh thái
            năng lượng bền vững.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Tầm nhìn của chúng tôi là xây dựng một tương lai nơi mọi gia đình
            đều có thể tiếp cận năng lượng sạch, giảm chi phí sinh hoạt và góp
            phần bảo vệ môi trường.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Điểm nổi bật</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🤖",
              title: "AI Dự đoán",
              desc: "Ứng dụng trí tuệ nhân tạo để dự đoán sản lượng điện mặt trời theo giờ nắng và thời tiết. Giúp hộ gia đình và doanh nghiệp tối ưu hiệu quả sử dụng.",
            },
            {
              icon: "☁️",
              title: "Thời tiết & IoT",
              desc: "Tích hợp dữ liệu thời tiết và cảm biến IoT để giám sát hiệu suất pin mặt trời theo thời gian thực, cảnh báo sớm khi có sự cố.",
            },
            {
              icon: "🔗",
              title: "Blockchain & Chia sẻ",
              desc: "Ứng dụng Blockchain để đảm bảo tính minh bạch khi giao dịch năng lượng. Người dân có thể bán – mua – chia sẻ điện mặt trời dễ dàng.",
            },
          ].map((f, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { num: "200+", label: "kWh đã chia sẻ" },
            { num: "1000+", label: "Người dùng" },
            { num: "15+", label: "Dự án" },
            { num: "5+", label: "Quốc gia" },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileInView={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-4xl font-extrabold text-green-700">
                {s.num}
              </h3>
              <p className="text-gray-600 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Dự án tiêu biểu</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              img: "https://source.unsplash.com/400x250/?solar,village",
              title: "Solar Village",
              desc: "Điện mặt trời cho vùng sâu vùng xa, giảm chi phí điện, cải thiện đời sống.",
            },
            {
              img: "https://source.unsplash.com/400x250/?school,energy",
              title: "Green School",
              desc: "Trường học xanh vận hành bằng năng lượng mặt trời, giáo dục thế hệ trẻ về năng lượng tái tạo.",
            },
            {
              img: "https://source.unsplash.com/400x250/?community,solar",
              title: "Solar For All",
              desc: "Mạng lưới chia sẻ điện mặt trời cho các hộ gia đình thu nhập thấp.",
            },
            {
              img: "https://source.unsplash.com/400x250/?city,cleanenergy",
              title: "Smart City Solar",
              desc: "Tích hợp điện mặt trời vào các tòa nhà đô thị thông minh.",
            },
          ].map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow hover:shadow-2xl overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-2">{p.desc}</p>
                <Link
                  to="/projects"
                  className="text-green-600 hover:underline"
                >
                  Xem thêm →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-6">
          Hãy cùng Solar Share lan tỏa năng lượng sạch 🌱
        </h2>
        <Link
          to="/contact"
          className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-200"
        >
          Tham gia ngay
        </Link>
      </section>
    </div>
  );
}
