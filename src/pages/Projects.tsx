import React, { useEffect, useState } from 'react'

type Project = { id: string; title: string; desc: string }

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(() => setProjects([]))
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-sky-600 mb-4">Các dự án Solar Share</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(p => (
          <div key={p.id} className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
