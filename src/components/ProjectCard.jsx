import React from "react";

export default function ProjectCard({
  title,
  youtubeLink,
  imageSrc, 
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
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 0 10px rgba(0,0,0,0.4)",
      }}
    >
      <h3 style={{ color: "#C2A072", backgroundColor: "#06141b" }}>
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
