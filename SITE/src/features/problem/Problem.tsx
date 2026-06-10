
import React from 'react';
import './Problem.css';
import Reveal from '../../components/Reveal';

const PAINS = [
  {
    icon: '🔥',
    title: 'Le Livret A te fait perdre de l\'argent',
    text: "Pendant que l'inflation grimpe, ton épargne « sécurisée » perd silencieusement de son pouvoir d'achat chaque année. Tu travailles, tu économises… et ton argent vaut de moins en moins.",
  },
  {
    icon: '🌀',
    title: 'Tu ne sais pas par où commencer',
    text: "PEA, CTO, ETF, actions, obligations… 47 onglets ouverts, des avis contradictoires partout, et au final tu ne fais rien. La paralysie par l'analyse, ça coûte cher.",
  },
  {
    icon: '🎩',
    title: 'La finance te prend de haut',
    text: "Conseillers en costume, jargon imbuvable, frais cachés. Le système semble conçu pour que tu ne comprennes pas — et que tu paies des gens pour décider à ta place.",
  },
  {
    icon: '⏳',
    title: 'Tu crois qu\'il faut être riche pour investir',
    text: "Faux. Le vrai luxe que tu as à 22 ans, ce n'est pas l'argent : c'est le temps. Et chaque année où tu attends, c'est l'arme la plus puissante de la finance que tu gaspilles.",
  },
];

function Problem() {
  return (
    <section className="problem section" id="probleme">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Le vrai problème</span>
          <h2 className="section-title">
            Le système n'est pas truqué.
            <br />
            <span className="accent">Il est juste mal expliqué.</span>
          </h2>
          <p className="section-lead">
            On t'a appris le théorème de Pythagore, mais jamais comment ne pas
            te faire grignoter ton argent par l'inflation. Résultat : tu subis
            au lieu de décider.
          </p>
        </Reveal>

        <div className="problem__grid">
          {PAINS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="problem__card">
                <span className="problem__icon">{p.icon}</span>
                <h3 className="problem__card-title">{p.title}</h3>
                <p className="problem__card-text">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="problem__quote">
            <p>
              « 1 000 € laissés sur un compte courant pendant 10 ans avec 3%
              d'inflation, c'est <span className="accent">≈ 740 €</span> de
              pouvoir d'achat. Tu ne perds pas en chiffres. Tu perds en
              <strong> liberté</strong>. »
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Problem;
