
import React from 'react';
import './FinalCta.css';
import Reveal from '../../components/Reveal';

const INCLUDED = [
  '5 modules vidéo + bonus, accès à vie',
  'Tableur de suivi & checklist d\'action',
  'Communauté privée des membres',
  'Mises à jour futures offertes',
  'Garantie 14 jours satisfait ou remboursé',
];

function FinalCta() {
  return (
    <section className="cta section" id="offre">
      <div className="container container--narrow">
        <Reveal>
          <div className="cta__card">
            <div className="cta__glow" aria-hidden="true" />
            <span className="cta__urgency">⚡ Tarif de lancement — places limitées</span>
            <h2 className="cta__title">
              Arrête de subir. <span className="accent">Commence à composer.</span>
            </h2>
            <p className="cta__sub">
              Chaque mois où tu attends, ce sont des intérêts composés que tu ne
              récupéreras jamais. Le meilleur moment pour planter l'arbre, c'était
              il y a 10 ans. Le deuxième meilleur moment, c'est <strong>aujourd'hui</strong>.
            </p>

            <div className="cta__price">
              <span className="cta__price-old">149 €</span>
              <span className="cta__price-now">89 €</span>
              <span className="cta__price-note">paiement unique · accès à vie</span>
            </div>

            <a href="https://buy.stripe.com/eVqbJ17wm91V9Xs1KJ08g01" className="btn btn--primary btn--lg cta__btn">
              Je rejoins Capital Libre →
            </a>
            <p className="cta__reassure">
              🔒 Paiement sécurisé · Remboursé sous 14 jours si ça ne te convient pas
            </p>

            <ul className="cta__included">
              {INCLUDED.map((i) => (
                <li key={i}>
                  <span className="cta__tick">✓</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCta;
