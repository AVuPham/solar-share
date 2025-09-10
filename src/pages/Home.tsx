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
      <section className="bg-gradient-to-r from-sky-600 to-green-500 text-white text-center py-16 px-6 rounded-lg shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Chia sẻ năng lượng, lan tỏa tương lai xanh 🌞</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Solar Share kết nối cộng đồng cùng phát triển năng lượng mặt trời – bền vững, tiết kiệm và xanh hơn cho Việt Nam.
        </p>
        <a
          href="/projects"
          className="bg-white text-sky-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Khám phá dự án
        </a>
      </section>

      {/* Why Solar Share */}
      <section className="mt-12 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="font-bold text-lg">Tiết kiệm chi phí</h3>
          <p className="text-gray-600 mt-2">Giảm đến 40% chi phí điện hàng tháng nhờ điện mặt trời.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
          <div className="text-4xl mb-3">🌍</div>
          <h3 className="font-bold text-lg">Giảm phát thải</h3>
          <p className="text-gray-600 mt-2">Mỗi dự án giảm hàng chục tấn CO₂, bảo vệ môi trường.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
          <div className="text-4xl mb-3">🤝</div>
          <h3 className="font-bold text-lg">Cộng đồng bền vững</h3>
          <p className="text-gray-600 mt-2">Kết nối hộ gia đình, doanh nghiệp, nhà đầu tư cùng chung tay.</p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="mt-16 bg-sky-50 rounded-lg shadow p-8 text-center grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-sky-600">500+</h2>
          <p className="text-gray-600">Hộ gia đình hưởng lợi</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-sky-600">2.000 tấn</h2>
          <p className="text-gray-600">CO₂ giảm mỗi năm</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-sky-600">300 kW</h2>
          <p className="text-gray-600">Công suất điện mặt trời</p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-sky-700">Dự án nổi bật</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} title={p.title} description={p.desc} />
          ))}
        </div>
      </section>
    </div>
  )
}
