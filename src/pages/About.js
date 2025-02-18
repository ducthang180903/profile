import React, { useEffect, useRef, useState } from "react";
import "../pagescss/About.css"; // Import file CSS
import 'animate.css';
import imglogomenu from "../img/TMC.png";
const About = () => {
  const imgRef = useRef(null);
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    // Lưu giá trị của imgRef vào biến
    const currentImgRef = imgRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Element is in the viewport');
          setInViewport(true);
        } else {
          console.log('Element is out of the viewport');
          setInViewport(false);
        }
      },
      { threshold: 0.2 }
    );
    

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      // Sử dụng biến currentImgRef trong cleanup function
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);  // Chạy effect này một lần khi component mount

  return (
   
    <div className="about">
  <div className="aboutimg" ref={imgRef}>
      <img
        className={`aboutlogo ${inViewport ? 'in-viewport' : ''}`}
        src={imglogomenu}
        alt="Store Logo"
      />
    </div>
     <div className="abouttext">
     <div className="abouttext0">
     <h5 className="textabout">ABOUT ME</h5>
     <h1 className="textabout1"> FREELANCE DEVELOPER</h1>
     <p className="textabout2">Chào bạn, tôi là Đức Thắng, Học và tốt nghiệp ngành Công Nghệ Thông tin (Lập trình Máy Tính) Trường Cao Đẳng FPT Polytechnich, một lập trình viên đam mê công nghệ và sáng tạo. Với kinh nghiệm trong việc phát triển ứng dụng web, tôi luôn nỗ lực không ngừng để tạo ra những sản phẩm chất lượng và mang lại trải nghiệm tuyệt vời cho người dùng. Tôi luôn tìm kiếm cơ hội học hỏi và cải tiến bản thân, cùng với sự đam mê về lập trình, tôi hy vọng sẽ đóng góp tích cực vào cộng đồng công nghệ.</p>
     </div>
     <div className="abouttext1">

     <div className="aboutthongtin">
      <h3 className="nameabout">NAME</h3>
      <h3 className="nameabout">TUỔI</h3>
      <h3 className="nameabout">NGHỀ NGHIỆP</h3>
      <h3 className="nameabout">GIÁO DỤC</h3>
</div>
<div className="aboutthongtin1">
  <p className="nameabout1">Đức Thắng</p>
  <p className="nameabout2">22</p>
  <p className="nameabout3">Lập Trình Viên</p>
  <p className="nameabout4">Cao Đẳng</p>
</div>

<div className="aboutthongtin2">
<h3 className="nameabout">ĐIỆN THOẠI</h3>
      <h3 className="nameabout">E-MAIL</h3>
      <h3 className="nameabout">QUỐC TỊCH</h3>
      <h3 className="nameabout">TÌNH TRẠNG</h3>
</div>
<div className="aboutthongtin3">
<p className="nameabout1">0357441058</p>
  <p className="nameabout2">tmcdevweb@gmail.com</p>
  <p className="nameabout3">Việt Nam</p>
  <p className="nameabout4">Sẵn Sằng</p>
</div>
     </div>
      </div>
  </div>
  );
};

export default About;
