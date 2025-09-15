import React, { useEffect, useRef, useState } from "react";
import aboutme from "../assets/aboutme.png";
import pic from "../assets/pic.png";
import "../styles/AboutMe.css";

export default function AboutMe() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Solo una vez
          }
        });
      },
      { threshold: 0.2 } // 20% visible para activarse
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`aboutme-section ${isVisible ? "show" : ""}`}
      style={{
        background: "#06141b",
        padding: "20px 0",
      }}
    >
      {/* Título o banner superior */}
      <img
        src={aboutme}
        alt="aboutme"
        style={{ width: "100vw", display: "block", margin: "0 auto" }}
      />

      {/* Contenedor horizontal */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "20px",
          padding: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "#06141b",
        }}
      >
        {/* Descripción */}
        <div
          style={{
            flex: 1,
            color: "white",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <p
            style={{
              lineHeight: "1.4",
              fontSize: "1rem",
              margin: 0,
            }}
          >
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

        {/* Imagen lateral */}
        <img
          src={pic}
          alt="Developer"
          style={{
            width: "150px",
            height: "auto",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

