import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: 'Solar Village',
      location: 'Bình Thuận, Việt Nam',
      description:
        'Một cộng đồng nhỏ 50 hộ gia đình sử dụng Solar Share để chia sẻ điện mặt trời dư thừa, giúp giảm 30% chi phí điện năng.',
      impact: 'Giảm 25 tấn CO₂/năm',
    },
    {
      title: 'Green School',
      location: 'Đà Nẵng, Việt Nam',
      description:
        'Trường học áp dụng mái nhà năng lượng mặt trời và quản lý điện bằng IoT. Điện dư được bán cho dân cư qua blockchain.',
      impact: 'Tiết kiệm 40% chi phí điện hàng tháng',
    },
    {
      title: 'Smart Factory',
      location: 'TP. Hồ Chí Minh, Việt Nam',
      description:
        'Nhà máy sử dụng Solar Share với AI để dự đoán nhu cầu sản xuất và lưu trữ pin thông minh, đảm bảo hoạt động ổn định.',
      impact: 'Tối ưu hóa 15% hiệu suất năng lượng',
    },
  ]

  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-4xl font-bold text-sky-700 mb-6">Các Dự án Solar Share</h1>
        <p className="text-gray-700 leading-relaxed">
          Solar Share đã và đang được triển khai tại nhiều cộng đồng, trường học và doanh nghiệp. 
          Dưới đây là một số dự án tiêu biểu minh chứng cho tính khả thi của mô hình.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-sky-600 mb-2">{project.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{project.location}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
            <p className="text-green-600 font-medium">{project.impact}</p>
          </div>
        ))}
      </section>

      <section className="bg-sky-50 border border-sky-200 p-6 rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold text-sky-700 mb-4">Bạn muốn tham gia Solar Share?</h2>
        <p className="text-gray-700 mb-6">
          Hãy cùng chúng tôi xây dựng cộng đồng năng lượng xanh tại địa phương bạn. 
          Solar Share sẽ hỗ trợ công nghệ, đào tạo và tư vấn để bạn bắt đầu dễ dàng.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow hover:bg-sky-700"
        >
          Liên hệ ngay
        </a>
      </section>
    </div>
  )
}
