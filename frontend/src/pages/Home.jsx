import React from 'react';
import FeaturedProjectsGrid from '../components/FeaturedProjectsGrid';

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <section>
        <h2>Featured Projects</h2>
        <FeaturedProjectsGrid />
      </section>
    </div>
  );
}
