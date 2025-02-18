import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../pagescss/ExperienceSection.css";

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current; // Lưu giá trị ref.current vào biến cục bộ

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Cleanup đảm bảo đúng giá trị ref
      }
    };
  }, []);

  return (
    <div className="experience-container" ref={ref}>
      {[
        { number: "1", text1: "SỐ NĂM", text2: "KINH NGHIỆM" },
        { number: "2", text1: "KHÁCH HÀNG", text2: "TRÊN TOÀN THẾ GIỚI" },
        { number: "2", text1: "TỔNG SỐ", text2: "DỰ ÁN" },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="experience-item"
          initial={{ opacity: 0, y: 100 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="numberexperience">{item.number}</span>
          <div className="textexperience">
            <p>{item.text1}</p>
            <p>{item.text2}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceSection;
