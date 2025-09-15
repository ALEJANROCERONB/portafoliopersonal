import React, { useEffect, useRef, useState } from "react";
import aboutme from "../assets/aboutme.png";
import pic from "../assets/pic.png"; // ✅ úsala en <img> y como bg
import "../styles/AboutMe.css";

export default function AboutMe() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`aboutme-section ${isVisible ? "show" : ""}`}
    >
      {/* Banner */}
      <img
        src={aboutme}
        alt="aboutme"
        style={{ width: "30vw", display: "block", margin: "0 auto" }}
      />

      {/* Contenedor */}
      <div
        className="aboutme-container"
        /* Pasamos la ruta de la imagen al CSS */
        style={{ "--aboutme-bg": `url(${pic})` }}
      >
        <div className="aboutme-text">
          <p style={{ lineHeight: "1.4", fontSize: "1rem", margin: 0 }}>
            I'm a passionate developer with experience in React, React Native,
            and Laravel. I have solid knowledge in APIs and enjoy building
            intuitive and efficient applications across web and mobile
            platforms. My journey in development started out of curiosity and a
            passion for solving real-world problems through code. Over the
            years, I’ve built and maintained products ranging from e-commerce
            platforms to mobile utilities. I’m also proficient with tools like
            Git, Firebase, and Tailwind CSS, and I thrive in collaborative
            environments using agile methodologies. I’m fluent in English and
            Spanish, and I’m open to remote opportunities. My mission is to keep
            growing as a developer and work on projects that have real-world
            impact.
          </p>
        </div>

        {/* Imagen lateral en desktop */}
        <img src={pic} alt="Developer" className="aboutme-pic" />
      </div>
    </div>
  );
}
