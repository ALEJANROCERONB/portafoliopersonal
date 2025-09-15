import React from "react";

export default function ProjectCard({
  title,
  youtubeLink,
  description,
  note,
  externalLink,
  githubLink,
}) {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        backgroundColor: "#06141b",
        backgroundImage: "none",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 0 10px rgba(0,0,0,0.4)",
      }}
    >
      <h3
        style={{
          color: "#C2A072",
          backgroundColor: "#06141b",
          backgroundImage: "none",
        }}
      >
        {title}
      </h3>

      <div
        style={{
          margin: "20px 0",
          backgroundColor: "#06141b",
          backgroundImage: "none",
        }}
      >
        <iframe
          width="100%"
          height="315"
          src={youtubeLink}
          title={`${title} Demo`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: "12px",
            backgroundColor: "#06141b",
            backgroundImage: "none",
          }}
        ></iframe>
      </div>

      {description.map((paragraph, index) => (
        <p
          key={index}
          style={{
            lineHeight: "1.6",
            backgroundColor: "#06141b",
            backgroundImage: "none",
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
            backgroundImage: "none",
          }}
        >
          {note}
        </p>
      )}

      {(externalLink || githubLink) && (
        <div
          style={{
            marginTop: "20px",
            backgroundColor: "#06141b",
            backgroundImage: "none",
          }}
        >
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
                backgroundColor: "#06141b",
                backgroundImage: "none",
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
                backgroundColor: "#06141b",
                backgroundImage: "none",
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
