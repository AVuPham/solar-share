// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-sky-700 mb-4">404</h1>
      <p className="mb-6 text-gray-700">Trang bạn tìm không tồn tại.</p>
      <Link to="/" className="text-white bg-sky-600 px-4 py-2 rounded-md hover:bg-sky-700">
        Quay lại trang chủ
      </Link>
    </div>
  );
}
