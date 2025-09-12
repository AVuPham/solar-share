import React from 'react'

export default function About() {
  return (
    <div className="space-y-12">
      {/* Giới thiệu chung */}
      <section>
        <h1 className="text-4xl font-bold text-sky-700 mb-6">Về Solar Share</h1>
        <p className="text-gray-700 leading-relaxed">
          Solar Share là một sáng kiến cộng đồng nhằm giải quyết vấn đề năng lượng và môi trường toàn cầu.
          Chúng tôi tin rằng, mỗi mái nhà, trường học hay doanh nghiệp đều có thể trở thành một “nhà máy điện xanh”
          nhỏ bé, đóng góp vào một mạng lưới năng lượng bền vững và công bằng.  
          <br /><br />
          Dự án được xây dựng trên ba trụ cột: <strong>công nghệ hiện đại</strong>, <strong>mô hình chia sẻ minh bạch</strong>,
          và <strong>sự tham gia của cộng đồng</strong>.
        </p>
      </section>

      {/* Vấn đề toàn cầu */}
      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Thách thức hiện nay</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Khủng hoảng năng lượng:</strong> Nguồn năng lượng hóa thạch đang dần cạn kiệt, giá cả biến động mạnh.</li>
          <li><strong>Ô nhiễm môi trường:</strong> Điện than, dầu khí phát thải lượng lớn CO₂ gây biến đổi khí hậu.</li>
          <li><strong>Bất bình đẳng tiếp cận:</strong> Nhiều vùng nông thôn, miền núi vẫn chưa có nguồn điện ổn định.</li>
          <li><strong>Lãng phí năng lượng:</strong> Nhiều hộ gia đình lắp pin mặt trời nhưng không sử dụng hết sản lượng.</li>
        </ul>
      </section>

      {/* Giải pháp Solar Share */}
      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Giải pháp của chúng tôi</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Solar Share mang đến một nền tảng kết nối thông minh, cho phép người sản xuất và người tiêu thụ năng lượng 
          tái tạo gặp nhau một cách minh bạch và hiệu quả.  
          Chúng tôi tận dụng IoT để đo đạc chính xác, AI để phân tích & dự đoán, và Blockchain để ghi nhận giao dịch.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Người dân:</strong> Có thể bán lượng điện dư thừa từ hệ thống mặt trời trên mái nhà.</li>
          <li><strong>Doanh nghiệp:</strong> Mua điện sạch với chi phí thấp hơn, cải thiện hình ảnh “xanh”.</li>
          <li><strong>Nhà nước:</strong> Dễ quản lý, giám sát và thúc đẩy chính sách phát triển năng lượng tái tạo.</li>
        </ul>
      </section>

      {/* Lợi ích cộng đồng */}
      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Lợi ích cộng đồng</h2>
        <p className="text-gray-700 leading-relaxed">
          Solar Share không chỉ giảm chi phí điện, mà còn tạo ra giá trị xã hội:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Thúc đẩy <strong>tiết kiệm chi phí</strong> cho hộ gia đình và doanh nghiệp.</li>
          <li>Tạo <strong>thu nhập mới</strong> cho hộ dân có sản lượng dư thừa.</li>
          <li>Tăng cường <strong>minh bạch</strong> trong giao dịch năng lượng.</li>
          <li>Đóng góp vào <strong>mục tiêu giảm phát thải</strong> khí nhà kính.</li>
        </ul>
      </section>

      {/* Tác động môi trường */}
      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Tác động môi trường</h2>
        <p className="text-gray-700 leading-relaxed">
          Mỗi kWh điện mặt trời được chia sẻ là một bước tiến trong cuộc chiến chống biến đổi khí hậu.  
          Thông qua Solar Share, chúng tôi hướng đến:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Giảm hàng ngàn tấn CO₂ phát thải mỗi năm.</li>
          <li>Bảo tồn tài nguyên thiên nhiên cho thế hệ mai sau.</li>
          <li>Xây dựng mô hình năng lượng xanh có thể nhân rộng toàn cầu.</li>
        </ul>
      </section>

      {/* Tầm nhìn tương lai */}
      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Tầm nhìn tương lai</h2>
        <p className="text-gray-700 leading-relaxed">
          Solar Share không dừng lại ở một dự án thí điểm.  
          Mục tiêu của chúng tôi là xây dựng <strong>mạng lưới năng lượng chia sẻ toàn cầu</strong>, 
          nơi mỗi cá nhân đều có thể trở thành một phần trong giải pháp năng lượng bền vững.  
          <br /><br />
          Trong tương lai, chúng tôi sẽ mở rộng mô hình này sang nhiều quốc gia, 
          tích hợp thêm công nghệ lưu trữ thông minh, phân tích dữ liệu lớn và ứng dụng di động 
          để đưa năng lượng sạch đến gần hơn với mọi người.
        </p>
      </section>
    </div>
  )
}
