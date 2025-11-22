import React, { useState } from 'react';
import portrait from '../Assets/WhatsApp Image 2025-11-22 at 12.21.40_3f4f7728.jpg';

export default function Nav({ onOpenContact }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const open = (e) => { 
    e.preventDefault(); 
    setMenuOpen(false);
    if (typeof onOpenContact === 'function') onOpenContact(); 
    else document.dispatchEvent(new CustomEvent('open-contact')); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav" data-reveal>
      <div className="nav-inner">
        <a className="brand" href="#home" aria-label="Home" onClick={closeMenu}>
          <img src={portrait} alt="Shreyas P Kaushik" className="brand-logo" />
          <span className="brand-text">Shreyas Portfolio</span>
        </a>
        
        <button className="menu-toggle" aria-label="Toggle menu" onClick={toggleMenu} aria-expanded={menuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#interests" onClick={closeMenu}>Interests</a>
          <a href="#" onClick={open}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
