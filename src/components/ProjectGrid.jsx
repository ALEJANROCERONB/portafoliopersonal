import React from "react";

export default function ProjectGrid({ projects, onSelect }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <button
          key={project.id}
          type="button"
          className="project-tile"
          onClick={() => onSelect(project)}
        >
          <div className="project-tile-media">
            {project.thumbnail ? (
              <img src={project.thumbnail} alt="" loading="lazy" />
            ) : (
              <div className="project-tile-fallback">{project.title}</div>
            )}
            <span className="project-tile-scrim" aria-hidden="true" />
          </div>
          <div className="project-tile-info">
            <h3>{project.title}</h3>
            <span className="project-tile-cta">View details →</span>
          </div>
        </button>
      ))}
    </div>
  );
}
