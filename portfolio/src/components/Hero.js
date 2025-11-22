import React from 'react';
import portrait from '../Assets/WhatsApp Image 2025-11-22 at 12.21.40_3f4f7728.jpg';

export default function Hero({ onAnimatedOpen }) {
  const [contacting, setContacting] = React.useState(false);

  const handleContact = (e) => {
    e.preventDefault();
    if (contacting) return;
    setContacting(true);
    if (typeof onAnimatedOpen === 'function') {
      onAnimatedOpen();
    } else {
      document.dispatchEvent(new CustomEvent('open-contact'));
    }
    setTimeout(() => setContacting(false), 2600);
  };

  return (
    <section id="home" className="hero" data-reveal>
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="name">Shreyas P Kaushik, Frontend Developer</h1>
          <p className="tagline">I build accessible, performant web apps with clean UI and thoughtful animations.</p>
           <div className="hero-actions">
            <a className="btn" href="#projects">View Projects</a>
            <button className={`btn ghost contact-btn ${contacting ? 'contacting' : ''}`} onClick={handleContact}>
              <svg className="phone-icon" width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="3" y="2" width="18" height="20" rx="3" fill="white" />
                <circle cx="12" cy="17" r="1" fill="currentColor" />
              </svg>
              <svg className="file-icon" width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 3h10l5 5v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="white" />
              </svg>
              <span>Contact</span>
            </button>
           </div>
        </div>
        <div className="hero-media" aria-hidden>
          <div className="photo-wrap">
            <img src={portrait} alt="Portrait of Shrey" className="photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
