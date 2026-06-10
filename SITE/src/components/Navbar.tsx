
import React, { useEffect, useState } from 'react';
import './Navbar.css';

const LINKS = [
  { href: '#probleme', label: 'Le problème' },
  { href: '#methode', label: 'La méthode' },
  { href: '#programme', label: 'Programme' },
  { href: '#faq', label: 'FAQ' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo">◮</span>
          Capital<span className="accent">Libre</span>
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#offre" className="btn btn--primary nav__cta" onClick={() => setOpen(false)}>
            Rejoindre
          </a>
        </nav>

        <button
          className="nav__burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={open ? 'is-open' : ''} />
          <span className={open ? 'is-open' : ''} />
          <span className={open ? 'is-open' : ''} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
