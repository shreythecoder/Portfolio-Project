import { useEffect } from 'react';

export default function useReveal(options = {}) {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    const interestCards = Array.from(document.querySelectorAll('.interest-card'));
    const allEls = [...els, ...projectCards, ...interestCards];
    
    if (allEls.length === 0) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options });

    allEls.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [options]);
}
