import React from 'react';
import portrait from '../Assets/WhatsApp Image 2025-11-22 at 12.21.40_3f4f7728.jpg';

export default function Footer({ onOpenContact }) {
  const handleContact = (e) => {
    e.preventDefault();
    if (typeof onOpenContact === 'function') onOpenContact();
    else document.dispatchEvent(new CustomEvent('open-contact'));
  };

  return (
    <footer id="contact" className="site-footer" data-reveal>
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Shreyas Portfolio</h3>
            <p>Frontend Developer crafting beautiful, performant web experiences with clean code and thoughtful design.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#contact" onClick={handleContact}>Contact</a>
              <a href="#home">Back to Top</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="footer-links">
              <a href="https://github.com/shreythecoder" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-4.286-1.895-7-5.973-7-10C2 5.373 6.477 2 12 2s10 3.373 10 7c0 4.027-2.714 8.105-7 10M12 15v4m0 0h3m-3 0h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/shreyaspkaushik" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                LinkedIn
              </a>
              <a href="mailto:shreyaspkaushik2005@gmail.com">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4h20v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M22 4l-10 8L2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <img src={portrait} alt="Shreyas P Kaushik" className="footer-portrait" />
          <div className="footer-copy">© {new Date().getFullYear()} Shreyas P Kaushik. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
