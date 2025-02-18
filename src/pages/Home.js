import React, { useState, useEffect } from "react";
import "../pagescss/Home.css"; // Import file CSS
import imglogomenu from "../img/TMC.png";
import { FaFacebook, FaTiktok } from "react-icons/fa";


const ZaloIcon = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 4C12.95 4 4 11.82 4 21.5C4 28.31 8.44 34.09 15 36.71V44L24.09 37.61C35.06 37.44 44 29.73 44 21.5C44 11.82 35.05 4 24 4Z"
      fill="#0084FF"
    />
    <text
      x="11"
      y="28"
      fontFamily="Arial"
      fontSize="14"
      fill="white"
      fontWeight="bold"
    >
      Zalo
    </text>
  </svg>
);
const Home = () => {
  const words = "PHÁT TRIỂN WEBSITE"; // Từ cần gõ
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  // const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 200;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting ? prev.slice(0, -1) : words.slice(0, prev.length + 1)
      );

      if (!isDeleting && text === words) {
        setTimeout(() => setIsDeleting(true), 1000); // Đợi 1s trước khi xóa
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <div className="home-container">
 <div className="text">
      <p className="hello-text">HELLO I’M</p>
      <h1 className="name">ĐỨC THẮNG</h1>
      <p className="passion">
        ĐAM MÊ : <span className="highlight">{text}</span>
      </p>
      <p className="btn-hellos">Liên hệ với tôi</p>
      <div className="social-buttons">
        <button className="btn-social fb"  onClick={() => window.open("https://www.facebook.com/tmc.dev/", "_blank")}>
          <FaFacebook className="icon fb-icon" /> Facebook
        </button>
        <button className="btn-social zalo"onClick={() => window.open("https://zalo.me/0357441058", "_blank")}>
          <ZaloIcon /> Zalo
        </button>
        <button className="btn-social tiktok" onClick={() => window.open("https://www.tiktok.com/@tmc.dev?_t=ZS-8u01TYhWEdu&_r=1", "_blank")}>
          <FaTiktok className="icon tiktok-icon" /> TikTok
        </button>
        {/* <button className="btn-social instagram">
          <FaInstagram className="icon insta-icon" /> Instagram
        </button> */}
      </div>
    </div>

      {/* Ảnh profile */}
      <div className="hero-image">
     
      
   
      <img className="logo1" src={imglogomenu} alt="Store Logo" />
 
    </div>
    </div>
  );
};

export default Home;
