
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">Formation 100% sans jargon</span>

          <h1 className="hero__title">
            Ton argent dort.
            <br />
            <span className="hero__title-accent">Il devrait bosser pour toi.</span>
          </h1>

          <p className="hero__subtitle">
            La méthode étape par étape pour comprendre la bourse, activer la
            magie des intérêts composés et construire un portefeuille d'ETF qui
            tourne en pilote automatique. <strong>Sans y passer 3 heures par jour.</strong>
          </p>

          <div className="hero__actions">
            <a href="#offre" className="btn btn--primary btn--lg">
              Je prends le contrôle →
            </a>
            <a href="#methode" className="btn btn--ghost btn--lg">
              Voir la méthode
            </a>
          </div>

          <ul className="hero__trust">
            <li>✔ Accès à vie</li>
            <li>✔ 14 jours satisfait ou remboursé</li>
            <li>✔ Conçu pour les 18–30 ans</li>
          </ul>
        </div>

        <aside className="hero__card-wrap" aria-label="Aperçu de croissance">
          <div className="hero__card">
            <div className="hero__card-head">
              <span>Portefeuille passif</span>
              <span className="hero__badge">+ Live</span>
            </div>
            <div className="hero__amount">
              <span className="hero__amount-val">38 412 €</span>
              <span className="hero__amount-delta">▲ +218%</span>
            </div>
            <div className="hero__chart">
              <svg viewBox="0 0 320 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(0,229,153,0.45)" />
                    <stop offset="100%" stopColor="rgba(0,229,153,0)" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,108 C40,104 60,92 90,84 C125,75 150,80 185,58 C220,38 250,40 285,18 L320,8"
                  fill="none"
                  stroke="#00e599"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0,108 C40,104 60,92 90,84 C125,75 150,80 185,58 C220,38 250,40 285,18 L320,8 L320,120 L0,120 Z"
                  fill="url(#heroFill)"
                />
              </svg>
            </div>
            <div className="hero__card-foot">
              <div>
                <span className="hero__foot-label">Versé / mois</span>
                <span className="hero__foot-val">150 €</span>
              </div>
              <div>
                <span className="hero__foot-label">Durée</span>
                <span className="hero__foot-val">12 ans</span>
              </div>
              <div>
                <span className="hero__foot-label">Rendement</span>
                <span className="hero__foot-val accent">~8% / an</span>
              </div>
            </div>
          </div>
          <div className="hero__chip hero__chip--1">Intérêts composés ⚡</div>
          <div className="hero__chip hero__chip--2">ETF World 🌍</div>
        </aside>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              INFLATION&nbsp;•&nbsp;INTÉRÊTS COMPOSÉS&nbsp;•&nbsp;ETF&nbsp;•&nbsp;DCA&nbsp;•&nbsp;PEA&nbsp;•&nbsp;INVESTISSEMENT PASSIF&nbsp;•&nbsp;LIBERTÉ FINANCIÈRE&nbsp;•&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
