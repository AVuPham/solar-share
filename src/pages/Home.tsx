import React, { useEffect, useState } from "react";
import {
  FaGlobe,
  FaSolarPanel,
  FaLeaf,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

// Component đếm số liệu động
function Counter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 50);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="text-center p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-green-700">{count}+</h2>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-green-200 to-green-400 py-20 rounded-xl shadow-lg">
        <h1 className="text-6xl font-extrabold text-green-900 mb-6">
          🌞 Solar Share
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Nền tảng chia sẻ & khai thác năng lượng mặt trời thông minh – hướng
          tới một tương lai xanh, minh bạch và bền vững cho mọi cộng đồng.
        </p>
        <a
          href="/solar-share/projects"
          className="mt-8 inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
        >
          Khám phá Dự án
        </a>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {[
          {
            icon: <FaGlobe className="text-green-600 text-6xl mb-4" />,
            title: "Kết nối toàn cầu",
            desc: "Cộng đồng năng lượng tái tạo mở rộng toàn thế giới, cùng chung tay vì hành tinh xanh.",
          },
          {
            icon: <FaSolarPanel className="text-yellow-500 text-6xl mb-4" />,
            title: "Công nghệ hiện đại",
            desc: "IoT, AI và Blockchain giúp tối ưu hoá hiệu suất và minh bạch hóa giao dịch.",
          },
          {
            icon: <FaLeaf className="text-green-800 text-6xl mb-4" />,
            title: "Xanh & Bền vững",
            desc: "Giảm khí thải CO₂, khuyến khích năng lượng tái tạo trong đời sống hàng ngày.",
          },
          {
            icon: <FaChartLine className="text-blue-600 text-6xl mb-4" />,
            title: "Phân tích thông minh",
            desc: "Dashboard AI dự đoán sản lượng điện mặt trời dựa trên thời tiết thực tế.",
          },
          {
            icon: <FaHandshake className="text-purple-600 text-6xl mb-4" />,
            title: "Cộng đồng hợp tác",
            desc: "Người dùng, nhà đầu tư và doanh nghiệp cùng chia sẻ lợi ích từ năng lượng sạch.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition text-center"
          >
            {item.icon}
            <h2 className="text-2xl font-bold mb-2 text-green-800">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="bg-green-50 py-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          Thành tựu Solar Share 🚀
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <Counter target={200} label="kWh đã chia sẻ" />
          <Counter target={1000} label="Người dùng" />
          <Counter target={15} label="Dự án" />
          <Counter target={5} label="Quốc gia" />
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          🌟 Dự án tiêu biểu
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              img: "https://source.unsplash.com/600x400/?school,solar",
              title: "Green School",
              desc: "Trường học xanh vận hành bằng năng lượng mặt trời, giáo dục thế hệ trẻ về năng lượng tái tạo.",
            },
            {
              img: "https://source.unsplash.com/600x400/?solar,community",
              title: "Solar For All",
              desc: "Mạng lưới chia sẻ điện mặt trời cho các hộ gia đình thu nhập thấp.",
            },
            {
              img: "https://source.unsplash.com/600x400/?city,solar",
              title: "Smart City Solar",
              desc: "Tích hợp năng lượng mặt trời vào các tòa nhà đô thị thông minh.",
            },
          ].map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-600 mb-4">{proj.desc}</p>
                <a
                  href="/solar-share/projects"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Xem chi tiết →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-green-700 text-white py-16 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">
          Tham gia Solar Share ngay hôm nay! 🌍
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Hãy cùng chúng tôi xây dựng hành tinh xanh – nơi năng lượng tái tạo
          thuộc về tất cả mọi người.
        </p>
        <a
          href="/solar-share/dashboard"
          className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Trải nghiệm Dashboard AI
        </a>
      </section>
    </div>
  );
}
