import React, { useState, useEffect } from "react";

import { Home, About,Skin, Works, Services, Contact, ExperienceSection } from "./pages";
import imglogomenu from "./img/TMC.png";
import { FaBars } from "react-icons/fa"; // Import icon hamburger
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 // Hàm theo dõi section đang active
 useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "about","skill", "works", "services", "contact" ];
    let currentSection = "home";

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Tắt menu sau khi chọn
  };
  return (
    <div className="container">
     <nav className="navbar">
      <div className="nav-left">
        <img className="logo" src={imglogomenu} alt="Store Logo" />
        <span className="site-name">Đức Thắng</span>
      </div>

      {/* Nút menu trên mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Navbar có class active khi menuOpen = true */}
      <div className={`nav-right ${menuOpen ? "active" : ""}`}>
        {[
          { name: "Home", id: "home" },
          { name: "About", id: "about" },
          { name: "Skill", id: "skill" },
          { name: "Works", id: "works" },
          { name: "Services", id: "services" },
          { name: "Contact", id: "contact" },
         
        ].map(({ name, id }) => (
          <button key={id}  className={`nav-link ${activeSection === id ? "active" : ""}`} onClick={() => scrollToSection(id)}>
            {name}
          </button>
        ))}
      </div>
    </nav>
      <header className="header" id="home">
        <Home />
      </header>
      <div className="content">
        <section id="about" className="section">
          <About />
        </section>
        <section id="about" className="section1">
 <ExperienceSection />
        </section>
        <section id="skill" className="section">
          <Skin/>
        </section>
        <section id="works" className="section">
          <Works />
        </section>
   
        <section id="services" className="section">
          <Services />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
       
      </div>
      <footer className="footer">© 2025 Welcome to Đức Thắng profile ❤️</footer>
    </div>
  );
}

export default App;
