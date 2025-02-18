import React from "react";
import "../pagescss/skill.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon html" />, color: "#E44D26" },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon css" />, color: "#1572B6" },
  { name: "Bootstrap", icon: <FaBootstrap className="skill-icon bootstrap" />, color: "#7952B3" },
  { name: "Next.js", icon: <SiNextdotjs className="skill-icon nextjs" />, color: "#000000" },
  { name: "React.js", icon: <FaReact className="skill-icon react" />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs className="skill-icon nodejs" />, color: "#3C873A" },
  { name: "MySQL", icon: <SiMysql className="skill-icon mysql" />, color: "#00758F" },
  { name: "JavaScript", icon: <FaJsSquare className="skill-icon javascript" />, color: "#F7DF1E" },
  { name: "GitHub", icon: <FaGithub className="skill-icon github" />, color: "#181717" },
];

const Skill = () => {
  return (
    <div className="skill-container">
      <h1 className="skill-title">KỸ NĂNG CỦA TÔI</h1>
      <p className="skill-description">Các công nghệ mình đã làm việc</p>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index} style={{ borderColor: skill.color }}>
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
