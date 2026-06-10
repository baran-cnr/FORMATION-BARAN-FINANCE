
import React, { useState } from 'react';
import './Faq.css';
import Reveal from '../../components/Reveal';

const FAQS = [
  {
    q: "Je n'y connais absolument rien. C'est fait pour moi ?",
    a: "C'est même fait exprès pour toi. On part de zéro, sans présupposé. Si tu sais ouvrir une appli sur ton téléphone, tu sais suivre cette formation. Chaque concept est expliqué avec des mots simples et des exemples concrets.",
  },
  {
    q: 'Combien d\'argent faut-il pour commencer à investir ?',
    a: "Tu peux démarrer avec 25 € à 50 € par mois. Le but n'est pas le montant de départ, mais la régularité et le temps. La méthode est pensée pour les budgets étudiants et jeunes actifs.",
  },
  {
    q: "Combien de temps ça me prend par semaine ?",
    a: "Les vidéos sont courtes et tu avances à ton rythme. Une fois ton système en place, la gestion de ton portefeuille passif te prend environ 15 minutes par mois. C'est tout l'intérêt du « passif ».",
  },
  {
    q: 'Est-ce que tu garantis que je vais gagner de l\'argent ?',
    a: "Non, et méfie-toi de quiconque te le promet. Investir comporte un risque de perte en capital. Ce que je te donne, c'est une méthode rationnelle, prouvée sur le long terme et utilisée par les meilleurs investisseurs passifs — pas une boule de cristal.",
  },
  {
    q: "Pendant combien de temps j'ai accès au contenu ?",
    a: "À vie. Tu paies une fois, tu accèdes à toutes les vidéos et aux mises à jour futures, autant de fois que tu veux, sur tous tes appareils.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq section" id="faq">
      <div className="container container--narrow">
        <Reveal>
          <div className="faq__head">
            <span className="eyebrow">On lève les doutes</span>
            <h2 className="section-title">Questions fréquentes</h2>
          </div>
        </Reveal>

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 50}>
                <div className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="faq__q"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon" aria-hidden="true">+</span>
                  </button>
                  <div className="faq__a-wrap">
                    <p className="faq__a">{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
