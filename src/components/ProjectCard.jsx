import React, { useRef } from "react";

export default function ProjectCard({
  title,
  youtubeLink,
  imageSrc,
  description,
  note,
  externalLink,
  githubLink,
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 -> 1
    const py = (e.clientY - rect.top) / rect.height; // 0 -> 1
    const rotateX = (0.5 - py) * 10;
    const rotateY = (px - 0.5) * 12;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.015)`;
    card.style.setProperty("--glow-x", `${px * 100}%`);
    card.style.setProperty("--glow-y", `${py * 100}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        backgroundColor: "#06141b",
        backgroundImage:
          "radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 0%), rgba(194,160,114,0.12), transparent 60%)",
        padding: "20px",
        borderRadius: "16px",
        border: "1px solid #1a2f3a",
        boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
        transformStyle: "preserve-3d",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        willChange: "transform",
      }}
    >
      <h3 style={{ color: "#C2A072", backgroundColor: "transparent" }}>
        {title}
      </h3>

      <div style={{ margin: "20px 0", backgroundColor: "#06141b" }}>
        {youtubeLink ? (
          <iframe
            width="100%"
            height="315"
            src={youtubeLink}
            title={`${title} Demo`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "12px", backgroundColor: "#06141b" }}
          ></iframe>
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            style={{
              width: "100%",
              height: "315px", // misma altura que el video
              objectFit: "cover",
              borderRadius: "12px",
              backgroundColor: "#06141b",
            }}
          />
        ) : null}
      </div>

      {description.map((paragraph, index) => (
        <p
          key={index}
          style={{
            lineHeight: "1.6",
            backgroundColor: "#06141b",
            marginBottom: "10px",
          }}
        >
          {paragraph}
        </p>
      ))}

      {note && (
        <p
          style={{
            fontStyle: "italic",
            color: "#aaa",
            backgroundColor: "#06141b",
          }}
        >
          {note}
        </p>
      )}

      {(externalLink || githubLink) && (
        <div style={{ marginTop: "20px", backgroundColor: "#06141b" }}>
          {externalLink && (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginRight: "15px",
                color: "#C2A072",
                textDecoration: "underline",
              }}
            >
              Visit Project
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                color: "#C2A072",
                textDecoration: "underline",
              }}
            >
              View on GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}
