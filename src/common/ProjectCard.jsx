import React from "react";
import ProjectRating from "../components/ProjectRating/ProjectRating";

function ProjectCard({ src, link, h3, p }) {
  return (
    <div>
      <a href={link} target="_blank">
        <img className="hover" src={src} alt={`${h3}`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
      <ProjectRating projectName={h3} />
    </div>
  );
}

export default ProjectCard;
