import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-sky-700 mb-4">404</h1>
      <p className="mb-6 text-gray-700">Trang bạn tìm không tồn tại.</p>
      <Link to="/" className="text-sky-600 hover:underline">Quay lại trang chủ</Link>
    </div>
  )
}
