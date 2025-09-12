import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: 'Solar Village',
      location: 'Bình Thuận, Việt Nam',
      description:
        'Một cộng đồng 50 hộ gia đình được trang bị hệ thống pin mặt trời và kết nối qua Solar Share. Các hộ dân có thể bán lượng điện dư thừa và mua điện sạch từ hàng xóm.',
      impact: 'Giảm 25 tấn CO₂/năm, giảm 30% chi phí điện',
    },
    {
      title: 'Green School',
      location: 'Đà Nẵng, Việt Nam',
      description:
        'Trường học triển khai điện mặt trời trên mái, kết hợp IoT giám sát sản lượng. Điện dư được phân phối cho khu dân cư lân cận thông qua blockchain.',
      impact: 'Tiết kiệm 40% chi phí điện hàng tháng, giáo dục học sinh về năng lượng xanh',
    },
    {
      title: 'Smart Factory',
      location: 'TP. Hồ Chí Minh, Việt Nam',
      description:
        'Nhà máy ứng dụng Solar Share kết hợp AI để dự đoán nhu cầu sản xuất. Hệ thống lưu trữ pin thông minh giúp duy trì hoạt động ổn định, tránh phụ thuộc lưới điện quốc gia.',
      impact: 'Tăng hiệu suất năng lượng 15%, giảm chi phí vận hành 20%',
    },
    {
      title: 'Island Renewable Project',
      location: 'Phú Quốc, Việt Nam',
      description:
        'Khu vực đảo vốn khó tiếp cận nguồn điện ổn định nay sử dụng Solar Share với hệ thống năng lượng mặt trời và lưu trữ phân tán.',
      impact: 'Cung cấp điện ổn định 24/7 cho 300 hộ gia đình, giảm phát thải diesel',
    },
    {
      title: 'Community Health Center',
      location: 'Nghệ An, Việt Nam',
      description:
        'Trung tâm y tế cộng đồng triển khai Solar Share để đảm bảo nguồn điện cho thiết bị y tế, đặc biệt trong trường hợp mất điện lưới.',
      impact: 'Đảm bảo điện liên tục cho cấp cứu, giảm 50% chi phí vận hành điện',
    },
  ]

  return (
    <div className="space-y-12">
      {/* Giới thiệu chung */}
      <section>
        <h1 className="text-4xl font-bold text-sky-700 mb-6">Các Dự án Solar Share</h1>
        <p className="text-gray-700 leading-relaxed">
          Solar Share sẽ thử nghiệm và triển khai ở nhiều địa điểm khác nhau, từ cộng đồng nông thôn,
          trường học, nhà máy đến đảo xa. Mỗi dự án là một minh chứng cho sức mạnh của công nghệ và sự hợp tác cộng đồng
          trong việc xây dựng hệ sinh thái năng lượng xanh.
        </p>
      </section>

      {/* Danh sách dự án */}
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

      {/* Bài học rút ra */}
      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Bài học rút ra</h2>
        <p className="text-gray-700 leading-relaxed">
          Từ các dự án thí điểm, Solar Share rút ra rằng công nghệ chỉ là một phần của giải pháp. 
          Quan trọng hơn cả là sự tham gia và cam kết của cộng đồng. Khi người dân thấy rõ lợi ích kinh tế
          và môi trường, họ sẵn sàng tham gia và duy trì mô hình lâu dài.
        </p>
      </section>

      {/* Kêu gọi tham gia */}
      <section className="bg-sky-50 border border-sky-200 p-6 rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold text-sky-700 mb-4">Bạn muốn triển khai dự án Solar Share?</h2>
        <p className="text-gray-700 mb-6">
          Solar Share luôn tìm kiếm đối tác là cộng đồng, trường học, nhà máy hoặc địa phương muốn triển khai 
          năng lượng sạch. Chúng tôi sẽ đồng hành cùng bạn từ thiết kế, công nghệ đến đào tạo vận hành.
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
