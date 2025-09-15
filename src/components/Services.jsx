import React, { useEffect, useRef, useState } from "react";
import services from "../assets/services.png";
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
  FaDatabase,
} from "react-icons/fa";
import "../styles/Services.css";

const serviceList = [
  {
    title: "Web Development",
    icon: <FaCode size={40} color="#C2A072" />,
    description:
      "I build modern, responsive websites with React and Laravel, incorporating clean architectures and robust admin dashboards. From landing pages to complex backoffice systems, every project is optimized for performance, accessibility, and scalability, ensuring a seamless experience across devices.",
  },
  {
    title: "Mobile Apps",
    icon: <FaMobileAlt size={40} color="#C2A072" />,
    description:
      "Cross-platform apps developed with React Native for both iOS and Android. I focus on intuitive interfaces, efficient state management, and native-like performance, delivering mobile solutions that scale as your audience grows while integrating push notifications, secure storage, and analytics.",
  },
  {
    title: "API & DB Integration",
    icon: <FaServer size={40} color="#C2A072" />,
    description:
      "Design and integration of RESTful APIs and microservices, combined with custom database solutions in Laravel or Node. I ensure clean data modeling, authentication, and real-time updates, creating reliable backends that support high-traffic environments and complex business logic.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush size={40} color="#C2A072" />,
    description:
      "From wireframes to polished interfaces, I craft user experiences that are visually appealing and highly functional. My design process includes user research, prototyping, and usability testing to ensure every interface is both beautiful and easy to use.",
  },
  {
    title: "Database Architecture",
    icon: <FaDatabase size={40} color="#C2A072" />,
    description:
      "I create scalable database schemas and optimize queries for performance and growth. Whether using MySQL, PostgreSQL, or NoSQL options, I focus on data integrity, security, and efficient indexing to support applications of any size.",
  },
];

export default function Services() {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute("data-index"), 10);
            setVisibleItems((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px", // triggers a bit earlier; avoids flicker
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#06141b",
        padding: "40px 20px",
        color: "white",
      }}
    >
      <img
        src={services}
        alt="Services"
        style={{ width: "30vw", display: "block", margin: "0 auto" }}
      />

      <div
        style={{
          maxWidth: "1000px",
          margin: "40px auto 0",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        {serviceList.map((service, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
            className={`service-row ${visibleItems.includes(index) ? "show" : ""}`}
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              gap: "30px",
              /* per-card stagger (no TS): */
              "--delay": `${(index % 5) * 80}ms`,
            }}
          >
            {/* Icon */}
            <div
              style={{
                flex: "0 0 80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0c1d26",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              }}
            >
              {service.icon}
            </div>

            {/* Text */}
            <div
              style={{
                flex: 1,
                backgroundColor: "#0c1d26",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <h3
                style={{
                  marginBottom: "10px",
                  fontSize: "1.3rem",
                  color: "#C2A072",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  color: "#e0e0e0",
                  textAlign: "justify",
                }}
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
