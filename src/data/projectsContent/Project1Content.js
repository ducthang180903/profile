import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../pagescss/ProjectContent/Project1Content.css";
import img1 from "../../img/Project1Img/demo1.png";
import img2 from "../../img/Project1Img/demo2.png";
import img3 from "../../img/Project1Img/demo3.png";
import img4 from "../../img/Project1Img/demo4.png";
import img5 from "../../img/Project1Img/demo5.png";

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
        <button className="btn-slide-action " onClick={() => window.open("https://drive.google.com/file/d/1pfnOtp5c6K9cs79HpCxvmbSmF7run3ce/view?usp=sharing", "_blank")}>
  Xem Demo
</button>

        </div>
      </div>
      <div className="project1conten">
  <h2>Source Code Web Quản Lý Quán Coffee</h2>
  <p><strong>Mô tả:</strong> Dự án quản lý quán cà phê sử dụng ReactJS và Node.js mang đến giải pháp đơn giản, hiệu quả cho việc quản lý các hoạt động trong quán. Web cung cấp một giao diện người dùng thân thiện, dễ sử dụng, giúp người quản lý và nhân viên theo dõi và xử lý các đơn hàng, Oder, nhân viên một cách nhanh chóng. Các tính năng như phân quyền giữa quản trị viên và nhân viên, quản lý thông tin khách hàng được tích hợp đầy đủ, giúp quán hoạt động mượt mà và hiệu quả hơn.</p>
  
  <h3>Mô tả chi tiết</h3>
  <ul>
    <li><strong>Backend:</strong> Sử dụng Node.js.</li>
    <li><strong>Frontend:</strong> Dùng ReactJS, HTML, CSS, Và 1 số thư viện cần thiết...</li>
    <li><strong>Cơ sở dữ liệu:</strong> Sử dụng MySQL.</li>
    <li><strong>Phân quyền:</strong> Gồm Quản trị và Nhân viên.</li>
    <li>Nhân viên không được sử dụng một số chức năng như thêm, xóa, sửa.</li>
    <li>Giao diện đơn giản, dễ sử dụng.</li>
  </ul>
</div>

    </div>
    );
  };
  
  export default Project1Content;
  