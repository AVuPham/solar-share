import React from 'react'

export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border rounded-lg p-5 shadow-sm bg-white hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-sky-700">{title}</h3>
      <p className="mt-2 text-gray-700 text-sm">{description}</p>
    </div>
  )
}
