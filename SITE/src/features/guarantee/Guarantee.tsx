
import React from 'react';
import './Guarantee.css';
import Reveal from '../../components/Reveal';

function Guarantee() {
  return (
    <section className="guarantee section">
      <div className="container container--narrow">
        <Reveal>
          <div className="guarantee__card">
            <div className="guarantee__seal">
              <span className="guarantee__seal-num">14</span>
              <span className="guarantee__seal-txt">jours</span>
            </div>
            <div className="guarantee__content">
              <span className="eyebrow">Risque zéro</span>
              <h2 className="guarantee__title">
                Teste tout. Si ça ne clique pas, tu es remboursé.
              </h2>
              <p className="guarantee__text">
                Tu as <strong>14 jours</strong> pour parcourir la formation,
                appliquer la méthode et te faire ton avis. Si tu estimes que tu
                n'as rien appris d'utile, tu m'envoies un simple message et je te
                rembourse <strong>l'intégralité</strong>. Sans justification, sans
                te faire la morale. Le seul risque, c'est de continuer à laisser
                ton argent fondre.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Guarantee;
