import React from 'react';

const sampleProjects = [
  {
    title: 'Personal Portfolio',
    desc: 'This site, a clean React portfolio with animations and responsive layout.',
    tech: 'React, CSS'
  },
  {
    title: 'Project Tracker',
    desc: 'A lightweight task tracker with keyboard-first interactions.',
    tech: 'React, LocalStorage'
  },
  {
    title: 'UI Components',
    desc: 'Reusable UI components library designed for accessibility and theming.',
    tech: 'React, Storybook'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects" data-reveal>
      <div className="section-inner">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {sampleProjects.map((p, i) => (
            <article key={i} className="project-card" style={{ ['--i']: i }}>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="muted">{p.desc}</p>
              </div>
              <div className="project-meta">
                <span className="tech">{p.tech}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
