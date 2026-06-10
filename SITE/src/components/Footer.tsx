
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="nav__logo">◮</span>
          Capital<span className="accent">Libre</span>
        </div>
        <p className="footer__disclaimer">
          Capital Libre est une formation à but pédagogique. Les contenus ne
          constituent pas un conseil en investissement personnalisé. Investir
          comporte un risque de perte en capital. Les performances passées ne
          préjugent pas des performances futures.
        </p>
        <div className="footer__links">
          <a href="#methode">Méthode</a>
          <a href="#programme">Programme</a>
          <a href="#faq">FAQ</a>
          <a href="#offre">Rejoindre</a>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Capital Libre — Décode l'argent, prends le contrôle.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
