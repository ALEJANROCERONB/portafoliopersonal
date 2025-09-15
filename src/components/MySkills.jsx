import React, { useEffect, useRef, useState } from "react";
import skills from "../assets/myskills.png";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import "../styles/MySkills.css"; 

const skillData = [
  { name: "React", icon: <FaReact color="#61DBFB" size={40} /> },
  { name: "React Native", icon: <FaReact color="#61DBFB" size={40} /> },
  { name: "Node.js", icon: <FaNodeJs color="#3C873A" size={40} /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" size={40} /> },
  { name: "MySQL", icon: <SiMysql color="#00758F" size={40} /> },
  { name: "HTML5", icon: <FaHtml5 color="#E44D26" size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size={40} /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={40} /> },
  { name: "Git", icon: <FaGitAlt color="#F1502F" size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" size={40} /> },
  { name: "Databases", icon: <FaDatabase color="#9B59B6" size={40} /> },
];

export default function MySkills() {
  const [visible, setVisible] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute("data-index"), 10);
            setVisible((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#06141b",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <img
        src={skills}
        alt="My skills"
        style={{ width: "30vw", marginBottom: "2rem" }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {skillData.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            data-index={index}
            className={`skill-card ${visible.includes(index) ? "show" : ""}`}
          >
            <div style={{ marginBottom: "0.5rem" }}>{skill.icon}</div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
