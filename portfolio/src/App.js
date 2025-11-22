import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Footer from './components/Footer';
import useReveal from './utils/useReveal';
import ContactWidget from './components/ContactWidget';
import { useState } from 'react';

function App() {
  useReveal();
  const [contactOpen, setContactOpen] = useState(false);
  const [contactAnimate, setContactAnimate] = useState(false);

  const animatedOpen = () => {
    // Start the phone+file animation; when complete, open the contact card
    if (contactAnimate || contactOpen) return;
    setContactAnimate(true);
    // duration must match animation length in CSS (2400ms for phone-drive)
    setTimeout(() => {
      setContactOpen(true);
      setContactAnimate(false);
    }, 2500);
  };
  return (
    <div className="site-root">
      <Nav onOpenContact={() => setContactOpen(true)} />
      <main>
        <Hero onAnimatedOpen={animatedOpen} />
        <About />
        <Projects />
        <Interests />
      </main>
      <ContactWidget open={contactOpen} setOpen={setContactOpen} />
      <Footer onOpenContact={() => setContactOpen(true)} />
    </div>
  );
}

export default App;
