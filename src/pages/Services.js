import React from "react";
import "../pagescss/services.css";

const Services = () => {
  return (
    <div className="services-container p-6">
      <h1 className="title">Dịch Vụ</h1>
      <p className="subtitle">NHỮNG DỊCH VỤ TÔI CUNG CẤP.</p>

      <div className="service-block">
        {/* Dịch vụ 1 */}
        <div className="service-item">
          <div className="service-img">
            <img
              src="https://img.icons8.com/?size=100&id=c84A8yTomT5p&format=png&color=000000"
              alt="Service 1"
              className="service-img__img"
            />
          </div>
          
          <div className="service-text">
            <h1 className="service-text__title">Phát Triển website</h1>
            <p1 className="service-text__desc">
              Chúng tôi cung cấp dịch vụ phát triển website toàn diện, từ
              thiết kế giao diện đẹp mắt, tối ưu hóa hiệu suất đến việc xây
              dựng tính năng bảo mật cao, giúp website của bạn luôn hoạt động
              mượt mà, dễ sử dụng và thân thiện với người dùng.
            </p1>
          </div>
        </div>

        {/* Dịch vụ 2 */}
        <div className="service-item">
          <div className="service-img">
            <img
              src="https://img.icons8.com/?size=100&id=z0vPnqZcDjkf&format=png&color=000000"
              alt="Service 2"
              className="service-img__img"
            />
          </div>
          <div className="service-text">
            <h1 className="service-text__title">Hỗ Trợ Lập Trình</h1>
            <p1 className="service-text__desc">
              Chúng tôi cung cấp dịch vụ hỗ trợ bài tập, giúp học sinh, sinh
              viên hiểu bài và giải quyết các bài tập khó. Với sự giải thích
              chi tiết, phương pháp tiếp cận dễ hiểu, chúng tôi giúp bạn nắm
              vững kiến thức và đạt kết quả tốt trong học tập.
            </p1>
          </div>
        </div>
      </div>

      <div className="service-block">
        {/* Dịch vụ 3 */}
        <div className="service-item">
          <div className="service-img">
            <img
              src="https://img.icons8.com/?size=100&id=114334&format=png&color=000000"
              alt="Service 3"
              className="service-img__img"
            />
          </div>
          <div className="service-text">
            <h1 className="service-text__title">UI/UX Design</h1>
            <p1 className="service-text__desc">
              Chúng tôi chuyên thiết kế UI/UX, tạo ra giao diện đẹp mắt và
              dễ sử dụng. Với sự tập trung vào trải nghiệm người dùng, chúng
              tôi giúp sản phẩm của bạn không chỉ thẩm mỹ mà còn thân thiện,
              tối ưu hóa hiệu suất và tương tác mượt mà.
            </p1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
