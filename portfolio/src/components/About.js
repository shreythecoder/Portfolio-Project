import React from 'react';

export default function About() {
  return (
    <section className="about" aria-label="About" data-reveal>
      <div className="section-inner about-inner about-grid">
        <div className="about-left">
          <h2 className="section-title">About</h2>
          <p>
            I am currently pursuing Bachelor of Engineering at BMSCE and I am graduating in July 2027; my interests lie in game development, recommendation systems, and full-stack development. I am looking for internships where I can blend my foundational knowledge with indefinite learning.
          </p>
        </div>
        <div className="about-divider"></div>
        <div className="about-right">
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Education</span>
              <span className="detail-value">B.E. Candidate</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">University</span>
              <span className="detail-value">BMSCE</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Graduation</span>
              <span className="detail-value">July 2027</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Status</span>
              <span className="detail-value">Open to Internships</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
