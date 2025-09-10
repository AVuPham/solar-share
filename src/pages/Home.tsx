import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'

type Project = { id: string; title: string; desc: string }

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data.slice(0,3)))
      .catch(() => setProjects([]))
  }, [])

  return (
    <div>
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-sky-600 mb-3">Chào mừng đến với Solar Share</h1>
        <p className="text-gray-700 mb-4">Nền tảng chia sẻ và quản lý hệ thống điện mặt trời cộng đồng.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Dự án nổi bật</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => <ProjectCard key={p.id} title={p.title} description={p.desc} />)}
        </div>
      </section>
    </div>
)
}
