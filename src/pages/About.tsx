import React from 'react'

export default function About() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-4xl font-bold text-sky-700 mb-6">Về Solar Share</h1>
        <p className="text-gray-700 leading-relaxed">
          Solar Share là một sáng kiến cộng đồng nhằm tối ưu hóa việc khai thác và chia sẻ 
          năng lượng mặt trời. Dự án không chỉ dừng lại ở việc phát triển công nghệ, 
          mà còn hướng đến xây dựng một hệ sinh thái năng lượng xanh, minh bạch và bền vững 
          cho cộng đồng địa phương cũng như toàn cầu.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Vấn đề hiện tại</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Nguồn năng lượng truyền thống ngày càng khan hiếm và gây ô nhiễm.</li>
          <li>Chi phí đầu tư điện mặt trời cá nhân còn cao, khó tiếp cận.</li>
          <li>Chia sẻ và phân phối năng lượng tái tạo còn thiếu minh bạch.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Giải pháp Solar Share</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Solar Share tạo nền tảng kết nối cộng đồng sử dụng năng lượng mặt trời, 
          cho phép hộ gia đình bán phần điện dư, trong khi người khác có thể mua với giá hợp lý. 
          Tất cả được vận hành minh bạch bằng công nghệ hiện đại.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>IoT:</strong> Giám sát điện năng theo thời gian thực.</li>
          <li><strong>AI:</strong> Dự đoán nhu cầu và tối ưu phân phối.</li>
          <li><strong>Blockchain:</strong> Ghi nhận giao dịch minh bạch, an toàn.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Tác động xã hội</h2>
        <p className="text-gray-700 leading-relaxed">
          Solar Share thúc đẩy sử dụng năng lượng sạch, giảm khí thải CO₂, 
          mang lại lợi ích kinh tế thiết thực. Mỗi người dân vừa là người tiêu thụ, 
          vừa có thể trở thành nhà cung cấp điện xanh.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Tầm nhìn tương lai</h2>
        <p className="text-gray-700 leading-relaxed">
          Solar Share hướng đến mở rộng mô hình ra nhiều quốc gia, 
          tích hợp với lưới điện quốc gia và áp dụng thêm công nghệ mới như 
          lưu trữ năng lượng thông minh, dữ liệu lớn để tối ưu toàn hệ thống.
        </p>
      </section>
    </div>
  )
}
