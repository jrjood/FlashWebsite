import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    api.getProjects({ page, limit: 12 }).then((r) => {
      setProjects(r.data.data);
      setTotal(r.data.total);
    });
  }, [page]);

  return (
    <div>
      <h1>Projects</h1>
      <div className='grid cols-3'>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      <div style={{ marginTop: 16 }}>
        <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
          Prev
        </button>
        <span style={{ margin: '0 8px' }}>Page {page}</span>
        <button
          disabled={page * 12 >= total}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
