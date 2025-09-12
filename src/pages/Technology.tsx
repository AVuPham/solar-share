import React from 'react'

export default function Technology() {
  return (
    <div className="space-y-12">
      {/* Tiêu đề */}
      <section>
        <h1 className="text-4xl font-bold text-sky-700 mb-6">Công nghệ của Solar Share</h1>
        <p className="text-gray-700 leading-relaxed">
          Solar Share không chỉ đơn thuần là nền tảng kết nối chia sẻ năng lượng, mà còn là một hệ sinh thái 
          công nghệ tích hợp ba trụ cột chính: <strong>IoT</strong>, <strong>AI</strong>, và <strong>Blockchain</strong>. 
          Các công nghệ này được thiết kế để làm việc đồng bộ, giúp tối ưu hóa toàn bộ vòng đời năng lượng mặt trời: 
          từ thu thập dữ liệu, phân tích, phân phối, đến giao dịch minh bạch.
        </p>
      </section>

      {/* IoT */}
      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">1. Internet of Things (IoT)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          IoT là nền tảng thu thập dữ liệu cho Solar Share. Các cảm biến và thiết bị thông minh được gắn trên
          tấm pin mặt trời, bộ lưu trữ và các thiết bị gia dụng giúp:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Đo lường chính xác sản lượng điện mặt trời theo thời gian thực.</li>
          <li>Theo dõi mức tiêu thụ của từng hộ gia đình và doanh nghiệp.</li>
          <li>Phát hiện sự cố, cảnh báo khi hiệu suất suy giảm hoặc hỏng hóc.</li>
          <li>Đồng bộ dữ liệu tức thì về nền tảng để phân tích và hiển thị cho người dùng.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Ví dụ: Một hộ gia đình có thể mở ứng dụng và biết được hôm nay tấm pin của họ tạo ra bao nhiêu kWh, 
          đã sử dụng bao nhiêu và còn dư bao nhiêu để bán.
        </p>
      </section>

      {/* AI */}
      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">2. Trí tuệ nhân tạo (AI)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          AI chính là “bộ não” của Solar Share. Thông qua dữ liệu từ IoT, AI giúp đưa ra các quyết định thông minh:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Dự đoán nhu cầu điện của từng hộ gia đình theo mùa, ngày hoặc khung giờ.</li>
          <li>Tối ưu phân phối điện dư đến những nơi cần nhất, tránh lãng phí.</li>
          <li>Đề xuất chiến lược lưu trữ trong pin để cân bằng giữa sản xuất và tiêu thụ.</li>
          <li>Phân tích xu hướng thị trường năng lượng tái tạo, từ đó đề xuất giá bán hợp lý.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Ví dụ: Nếu dự báo ngày mai trời mưa, AI sẽ khuyến nghị hộ gia đình giữ lại nhiều điện trong pin 
          thay vì bán ra, để đảm bảo nhu cầu ngày hôm sau.
        </p>
      </section>

      {/* Blockchain */}
      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">3. Blockchain</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Blockchain là “sổ cái” minh bạch của Solar Share. Tất cả giao dịch năng lượng được ghi lại và xác thực:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Mọi giao dịch mua bán điện mặt trời được ghi vào blockchain, không thể chỉnh sửa.</li>
          <li>Người dùng có thể kiểm chứng lịch sử giao dịch bất cứ lúc nào.</li>
          <li>Loại bỏ trung gian, giảm chi phí và tạo niềm tin cho người tham gia.</li>
          <li>Có thể tích hợp với các giải pháp “carbon credit” để chứng nhận giảm phát thải.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Ví dụ: Khi hộ A bán 5kWh cho hộ B, giao dịch này được ghi trên blockchain, đảm bảo minh bạch, 
          không ai có thể gian lận hay thay đổi.
        </p>
      </section>

      {/* Kết hợp */}
      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">4. Sự kết hợp đồng bộ</h2>
        <p className="text-gray-700 leading-relaxed">
          Khi kết hợp IoT (thu thập dữ liệu), AI (phân tích & tối ưu) và Blockchain (minh bạch giao dịch), 
          Solar Share tạo nên một hệ sinh thái hoàn chỉnh:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
          <li>Người dân có thể giám sát và điều khiển nguồn điện của mình dễ dàng.</li>
          <li>Cộng đồng được đảm bảo minh bạch và công bằng trong việc mua bán điện.</li>
          <li>Hệ thống năng lượng tái tạo trở nên bền vững và đáng tin cậy hơn.</li>
        </ul>
      </section>

      {/* Định hướng tương lai */}
      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">5. Định hướng tương lai</h2>
        <p className="text-gray-700 leading-relaxed">
          Trong tương lai, Solar Share sẽ mở rộng thêm các công nghệ như:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Lưu trữ năng lượng thông minh:</strong> tích hợp pin thông minh với thuật toán quản lý AI.</li>
          <li><strong>Dữ liệu lớn (Big Data):</strong> phân tích hàng triệu điểm dữ liệu để tối ưu toàn mạng lưới.</li>
          <li><strong>Khả năng tích hợp lưới quốc gia:</strong> kết nối Solar Share với hệ thống điện nhà nước.</li>
          <li><strong>Ứng dụng di động:</strong> giao diện thân thiện cho người dùng để theo dõi và giao dịch năng lượng.</li>
        </ul>
      </section>
    </div>
  )
}
