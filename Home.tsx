import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'

type Project = { id: string; title: string; desc: string }

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data.slice(0, 3)))
      .catch(() => setProjects([]))
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-green-500 text-white text-center py-20 px-6 rounded-lg shadow-md">
        <h1 className="text-5xl font-extrabold mb-6">Solar Share 🌞</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Chung tay chia sẻ năng lượng mặt trời – giải pháp xanh, tiết kiệm và bền vững cho cộng đồng.
        </p>
        <a
          href="/projects"
          className="bg-white text-sky-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition text-lg"
        >
          Khám phá dự án ngay →
        </a>
      </section>

      {/* Why Solar Share */}
      <section className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-8 bg-white rounded-lg shadow hover:shadow-lg transition">
          <div className="text-5xl mb-4">💡</div>
          <h3 className="font-bold text-xl">Tiết kiệm chi phí</h3>
          <p className="text-gray-600 mt-3">Giảm đến 40% hóa đơn điện, tạo lợi ích lâu dài cho hộ gia đình.</p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow hover:shadow-lg transition">
          <div className="text-5xl mb-4">🌍</div>
          <h3 className="font-bold text-xl">Bảo vệ Trái Đất</h3>
          <p className="text-gray-600 mt-3">Giảm phát thải hàng ngàn tấn CO₂ mỗi năm, hướng tới tương lai xanh.</p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow hover:shadow-lg transition">
          <div className="text-5xl mb-4">🤝</div>
          <h3 className="font-bold text-xl">Kết nối cộng đồng</h3>
          <p className="text-gray-600 mt-3">Tạo mạng lưới bền vững giữa người dân, doanh nghiệp và nhà đầu tư.</p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="mt-20 bg-sky-50 rounded-lg shadow-inner p-10 text-center grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-4xl font-extrabold text-sky-600">500+</h2>
          <p className="text-gray-700 mt-2">Hộ gia đình hưởng lợi</p>
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-sky-600">2.000 tấn</h2>
          <p className="text-gray-700 mt-2">CO₂ giảm mỗi năm</p>
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-sky-600">300 kW</h2>
          <p className="text-gray-700 mt-2">Công suất điện mặt trời</p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-sky-700 text-center">Dự án nổi bật</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} title={p.title} description={p.desc} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 text-center py-16 bg-gradient-to-r from-green-500 to-sky-600 text-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Bạn sẵn sàng tham gia Solar Share? 🚀</h2>
        <p className="text-lg mb-6">Cùng nhau lan tỏa năng lượng tái tạo, tạo tác động tích cực cho xã hội và môi trường.</p>
        <a
          href="/contact"
          className="bg-white text-green-700 font-semibold px-8 py-4 rounded-lg shadow hover:bg-gray-100 transition text-lg"
        >
          Liên hệ ngay →
        </a>
      </section>
    </div>
  )
}
