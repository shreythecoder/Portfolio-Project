import React from 'react';

export default function ContactWidget({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    const handleOpenContact = () => setOpen(true);
    document.addEventListener('open-contact', handleOpenContact);
    return () => document.removeEventListener('open-contact', handleOpenContact);
  }, [setOpen]);

  return (
    <div className={`contact-overlay ${open ? 'open' : ''}`} onClick={handleClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="contact-card">
          <div className="contact-header">
            <div className="contact-avatar">SK</div>
            <h2>Shreyas P Kaushik</h2>
            <p className="contact-title">Frontend Developer</p>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon">
                <rect x="3" y="2" width="18" height="20" rx="3" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="12" cy="17" r="1" fill="currentColor" />
              </svg>
              <div>
                <p className="label">Phone</p>
                <a href="tel:+916361696161" className="value">+91 636-169-6161</a>
              </div>
            </div>

            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon">
                <path d="M2 4h20v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M22 4l-10 8L2 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="label">Email</p>
                <a href="mailto:shreyaspkaushik2005@gmail.com" className="value">shreyaspkaushik2005@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon">
                <path d="M9 19c-4.286-1.895-7-5.973-7-10C2 5.373 6.477 2 12 2s10 3.373 10 7c0 4.027-2.714 8.105-7 10M12 15v4m0 0h3m-3 0h-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="label">GitHub</p>
                <a href="https://github.com/shreythecoder" target="_blank" rel="noopener noreferrer" className="value">github.com/shreythecoder</a>
              </div>
            </div>

            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <div>
                <p className="label">LinkedIn</p>
                <a href="https://www.linkedin.com/in/shreyaspk" target="_blank" rel="noopener noreferrer" className="value">linkedin.com/in/shreyaspkaushik</a>
              </div>
            </div>
          </div>

          <div className="contact-footer">
            <p className="cta">Feel free to reach out anytime!</p>
            <button className="btn" onClick={handleClose}>Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}
