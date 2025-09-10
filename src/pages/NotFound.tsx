import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-50 to-white px-6 text-center">
      <h1 className="text-9xl font-extrabold text-sky-600 animate-bounce">404</h1>
      <p className="mt-4 text-xl text-gray-700">
        Oops! Trang bạn tìm không tồn tại.
      </p>
      <p className="mt-2 text-gray-500">
        Có thể đường dẫn đã bị thay đổi hoặc bạn nhập sai URL.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow hover:bg-sky-700 transition duration-300"
      >
        ← Quay lại trang chủ
      </Link>
    </div>
  )
}
