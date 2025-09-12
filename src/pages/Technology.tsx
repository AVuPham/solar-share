import React from 'react'

export default function Technology() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-sky-700">Công nghệ Solar Share</h1>
      <p className="text-gray-700 leading-relaxed">
        Solar Share kết hợp nhiều công nghệ tiên tiến để xây dựng nền tảng chia sẻ năng lượng minh bạch và hiệu quả.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>IoT:</strong> Giám sát sản lượng và mức tiêu thụ năng lượng theo thời gian thực.</li>
        <li><strong>AI:</strong> Phân tích và dự đoán nhu cầu sử dụng điện để tối ưu phân phối.</li>
        <li><strong>Blockchain:</strong> Lưu trữ và xác minh giao dịch điện mặt trời minh bạch, không thể bị thay đổi.</li>
      </ul>
    </div>
  )
}
