import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../pagescss/ProjectContent/Project2Content.css";
import img1 from "../../img/project2Img/demonongsan1.png";
import img2 from "../../img/project2Img/demonongsan2.png";
import img3 from "../../img/project2Img/demonongsan3.png";
import img4 from "../../img/project2Img/demonongsan4.png";
import img5 from "../../img/project2Img/demonongsan5.png";

const images = [img1, img2, img3, img4, img5];


const Project1Content = () => {
  const settings = {
    dots: true, // Bật hiển thị dấu chấm điều hướng
    infinite: true, // Vòng lặp vô hạn
    speed: 500, // Tốc độ chuyển slide
    slidesToShow: 1, // Hiển thị 1 ảnh mỗi lần
    slidesToScroll: 1, // Cuộn từng ảnh một
    autoplay: true, // Tự động chạy
    autoplaySpeed: 3000, // Thời gian chờ giữa các slide (3 giây)
    arrows: false, // Ẩn nút điều hướng
  };
  
    return (
      <div className="project1">
      <div className="project1img1">
      <div className="project1img">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="slide-img" />
            </div>
          ))}
        </Slider>
        </div>
        
        <div className="project1btn">
        <button className="btn-slide-action " onClick={() => window.open("https://drive.google.com/file/d/1AcsQCljFTeVsqIcJiaDztwpIUmRB1DkS/view?usp=sharing", "_blank")}>
  Xem Demo
</button>

        </div>
      </div>
      <div className="project1conten">
  <h2>Source Code Web Bán Hàng nông Sản</h2>
  <p><strong>Mô tả:</strong> Dự án web bán hàng nông sản sử dụng Next.js và Node.js cung cấp giải pháp tối ưu cho việc kinh doanh và quản lý các sản phẩm nông sản trực tuyến. Website được thiết kế với giao diện dễ nhìn, thân thiện và dễ sử dụng, giúp người bán và khách hàng có thể dễ dàng tìm kiếm, đặt hàng và thanh toán.

Với các tính năng như quản lý kho hàng, phân quyền người dùng, theo dõi tình trạng đơn hàng và hỗ trợ khách hàng, hệ thống giúp việc bán hàng trở nên thuận tiện và hiệu quả hơn. Các quản trị viên có thể quản lý sản phẩm, thông tin khách hàng và xử lý đơn hàng một cách nhanh chóng. Phân quyền người dùng giúp phân biệt giữa nhân viên bán hàng và khách hàng, tạo sự thuận lợi trong việc quản lý cũng như đảm bảo tính bảo mật cho từng đối tượng người dùng..</p>
  
  <h3>Mô tả chi tiết</h3>
  <ul>
    <li><strong>Backend:</strong> Sử dụng Node.js.</li>
    <li><strong>Frontend:</strong> Dùng Next.js, HTML, CSS, Và 1 số thư viện cần thiết...</li>
    <li><strong>Cơ sở dữ liệu:</strong> Sử dụng MySQL.</li>
    <li><strong>Phân quyền:</strong> Gồm Quản trị và Khách hàng.</li>
    <li><strong>Chức năng Quản Trị:</strong> Cho Phép QT thêm, xóa, sửa, sản phẩm, loại sản phẩm, giỏ hàng , chỉnh sửa trạng thái đơn hàng </li>
    <li><strong>Chức năng Người Dùng:</strong> Cho Phép Người Dùng thêm, xóa, sửa, giỏ hàng , Thanh toán Đơn Hàng </li>
   
    <li>Giao diện đơn giản, dễ sử dụng.</li>
  </ul>
</div>

    </div>
    );
  };
  
  export default Project1Content;
  