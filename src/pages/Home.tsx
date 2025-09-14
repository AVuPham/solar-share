import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-r from-green-600 via-yellow-400 to-green-600 text-white relative overflow-hidden">
        <motion.h1
          className="text-6xl font-extrabold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
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
          Giải pháp kết nối cộng đồng với năng lượng mặt trời – thông minh, bền
          vững và thân thiện với môi trường.
        </motion.p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/about"
            className="px-8 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-200 shadow-lg"
          >
            Khám phá dự án
          </Link>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: "⚡",
            title: "AI Dự đoán",
            desc: "Ứng dụng trí tuệ nhân tạo để phân tích và dự đoán sản lượng năng lượng mặt trời theo từng khu vực.",
          },
          {
            icon: "☁️",
            title: "Dữ liệu thời tiết",
            desc: "Tích hợp API thời tiết theo thời gian thực để đưa ra quyết định chính xác hơn.",
          },
          {
            icon: "🌍",
            title: "Chia sẻ cộng đồng",
            desc: "Mạng lưới chia sẻ điện năng giúp các hộ gia đình cùng hưởng lợi từ nguồn năng lượng xanh.",
          },
        ].map((f, idx) => (
          <motion.div
            key={idx}
            className="p-8 shadow-lg rounded-xl bg-white hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-6xl mb-4">{f.icon}</div>
            <h2 className="text-2xl font-bold mb-2">{f.title}</h2>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Statistics */}
      <section className="bg-green-50 py-16 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { value: 120, label: "kWh được chia sẻ" },
            { value: 650, label: "Hộ gia đình hưởng lợi" },
            { value: 15, label: "Dự án triển khai" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
            >
              <motion.h3
                className="text-5xl font-extrabold text-green-700"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {stat.value}+
              </motion.h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Các dự án nổi bật
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: "https://source.unsplash.com/400x250/?solar",
              title: "Solar Village",
              desc: "Giải pháp năng lượng mặt trời cho vùng sâu vùng xa.",
            },
            {
              img: "https://source.unsplash.com/400x250/?renewable",
              title: "Green School",
              desc: "Trường học xanh với hệ thống điện mặt trời hiện đại.",
            },
            {
              img: "https://source.unsplash.com/400x250/?cleanenergy",
              title: "Solar For All",
              desc: "Mạng lưới chia sẻ năng lượng cho các hộ gia đình thu nhập thấp.",
            },
          ].map((p, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover hover:scale-110 transition"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-3">{p.desc}</p>
                <Link
                  to="/projects"
                  className="text-green-600 hover:underline font-medium"
                >
                  Xem thêm →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 text-center bg-green-700 text-white">
        <motion.h2
          className="text-4xl font-extrabold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hãy cùng Solar Share lan tỏa năng lượng sạch 🌱
        </motion.h2>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-200 shadow-lg"
          >
            Tham gia ngay
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
