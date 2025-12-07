import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import { Template, InspirationSection } from '../../layout/ProjectTemplate';

export default function ProjectDetail() {
  const { title } = useParams();
  const [project, setProject] = useState(null);
  useEffect(() => {
    api
      .getProject(title)
      .then((r) => setProject(r.data))
      .catch(() => {});
  }, [title]);

  if (!project)
    return (
      <>
        <div id='hero' />
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'var(--black)',
          }}
        >
          Project not found or maybe removed
        </div>
      </>
    );
  return (
    <>
      <div id='hero' />
      <div>
        <Template
          images={project.media || []}
          tags={[project.title, project.area, project.type, project.developer]}
          desc={project.description}
        />
        <InspirationSection quote='WHERE LIFESTYLE MEETS INVESTMENT' />
      </div>
    </>
  );
}
