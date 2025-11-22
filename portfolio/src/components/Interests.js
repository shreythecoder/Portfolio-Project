import React from 'react';

const IconCode = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M16 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 6L2 12l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconDesign = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M19.4 15a7.9 7.9 0 0 0 0-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4.6 9a7.9 7.9 0 0 0 0 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconMusic = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M9 17V5l12-2v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const interests = [
  { title: 'Frontend Development', icon: <IconCode /> },
  { title: 'UI/UX Design', icon: <IconDesign /> },
  { title: 'Music & Audio', icon: <IconMusic /> }
];

export default function Interests() {
  return (
    <section id="interests" className="interests" data-reveal>
      <div className="section-inner">
        <h2 className="section-title">Interests</h2>
        <div className="interests-grid">
          {interests.map((it, i) => (
            <div key={i} className="interest-card" style={{ ['--i']: i }}>
              <div className="interest-icon">{it.icon}</div>
              <div className="interest-title">{it.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
