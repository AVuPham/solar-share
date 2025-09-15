import React from "react";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-r from-green-500 to-yellow-400 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Chào mừng đến với Solar Share ☀️
        </h1>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Giải pháp năng lượng mặt trời thông minh – vì một <b>hành tinh xanh</b> và <b>tương lai bền vững</b>.
        </p>
      </div>

      {/* 3 Khối Giới thiệu */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
          <h2 className="text-xl font-bold text-green-700">Công nghệ hiện đại</h2>
          <p>Ứng dụng AI, IoT và Blockchain để tối ưu hoá sản lượng và minh bạch dữ liệu.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
          <h2 className="text-xl font-bold text-green-700">Dự án toàn cầu</h2>
          <p>Kết nối nhà đầu tư và cộng đồng trong các dự án xanh trên khắp thế giới.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
          <h2 className="text-xl font-bold text-green-700">Tương lai bền vững</h2>
          <p>Hướng tới một hệ sinh thái năng lượng sạch – giảm thiểu carbon, bảo vệ môi trường.</p>
        </div>
      </div>
    </div>
  );
}
