import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const {
    title,
    youtubeLink,
    imageSrc,
    description,
    note,
    externalLink,
    githubLink,
  } = project;

  return createPortal(
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <h3 className="project-modal-title">{title}</h3>

        {(youtubeLink || imageSrc) && (
          <div className="project-modal-media">
            {youtubeLink ? (
              <iframe
                src={youtubeLink}
                title={`${title} demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img src={imageSrc} alt={title} />
            )}
          </div>
        )}

        {description.map((paragraph, index) => (
          <p key={index} className="project-modal-text">
            {paragraph}
          </p>
        ))}

        {note && <p className="project-modal-note">{note}</p>}

        {(externalLink || githubLink) && (
          <div className="project-modal-links">
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal-link"
              >
                Visit Project
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal-link project-modal-link--ghost"
              >
                View on GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
