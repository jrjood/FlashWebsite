import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <div className='card'>
      <Link to={`/projects/${encodeURIComponent(project.title)}`}>
        <img
          src={project.coverImage}
          alt={project.title}
          loading='lazy'
          decoding='async'
        />
      </Link>
      <div className='card-body'>
        <h3>{project.title}</h3>
        <p>{project.subtitle}</p>
        <Link to={`/projects/${encodeURIComponent(project.title)}`}>View</Link>
      </div>
    </div>
  );
}
