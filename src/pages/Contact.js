import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from "emailjs-com";
import "../pagescss/contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra nếu form còn thiếu thông tin
    if (!name || !email || !message) {
      setStatus("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Gửi email thông qua EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send("service_tmcdev", "template_ucn82x9", templateParams, "JA3NECktVZGFjZvq0") // Bạn cần thay thế "service_id", "template_id", và "user_id" với giá trị thực từ EmailJS
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ trả lời bạn sớm.");
        },
        (error) => {
          console.log(error.text);
          setStatus("Đã có lỗi xảy ra. Vui lòng thử lại.");
        }
      );

    // Reset form sau khi gửi
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h5 className="contact-title">LIÊN HỆ VỚI TÔI</h5>
      <p1 className="contact-description">HÃY BẮT ĐẦU MỘT DỰ ÁN MỚI</p1>
      <div className="contact-form0">
      <div className="social-links">
     
      <div className="contact-info">
      <div className="contact-item">
        <div className="contacticon">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <div className="contact-text">
          <h3>Vị trí</h3>
          <p>Buôn Ma Thuột</p>
        </div>
      </div>
      <div className="contact-item">
        <div className="contacticon">
          <FontAwesomeIcon icon={faPhoneAlt} />
        </div>
        <div className="contact-text">
          <h3>Điện thoại</h3>
          <p>0357441058</p>
        </div>
      </div>
      <div className="contact-item">
        <div className="contacticon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="contact-text">
          <h3>E-mail</h3>
          <p>tmcdevweb@gmail.com</p>
        </div>
      </div>
    </div>
        </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Tên của bạn</label>
            <input
              type="text"
              id="name"
              placeholder="Nhập tên của bạn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Tin nhắn</label>
            <textarea
              id="message"
              placeholder="Nhập tin nhắn của bạn"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Gửi
          </button>
        </form>

        {status && <p className="status-message">{status}</p>}

      
      </div>
     
    </div>
    </div>
  );
};

export default Contact;
