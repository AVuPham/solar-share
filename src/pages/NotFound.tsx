import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-50 to-white px-6 text-center">
      <h1 className="text-6xl font-extrabold text-sky-700 animate-bounce mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-2">Oops! Trang bạn tìm không tồn tại.</p>
      <p className="text-gray-500 mb-6">Có thể đường dẫn đã bị thay đổi hoặc bạn nhập sai URL.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow hover:bg-sky-700 transition duration-300"
      >
        ← Quay lại trang chủ
      </Link>
    </div>
  )
}
