import React, { useEffect, useState } from 'react';
import api from '../api/api';
import ProjectCard from './ProjectCard';

export default function FeaturedProjectsGrid() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    let mounted = true;
    api
      .getProjects({ featured: 1, limit: 5 })
      .then((res) => {
        if (mounted) setProjects(res.data.data);
      })
      .catch(() => {});
    return () => (mounted = false);
  }, []);

  return (
    <div className='grid cols-3'>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
