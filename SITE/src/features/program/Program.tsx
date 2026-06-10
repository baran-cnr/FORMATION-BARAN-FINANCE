
import React from 'react';
import './Program.css';
import Reveal from '../../components/Reveal';

const MODULES = [
  {
    n: '01',
    tag: 'Le déclic',
    title: 'Le mindset financier (sans culpabiliser)',
    bullets: [
      'Tuer la croyance « la bourse, c\'est pour les riches »',
      'Différencier les actifs qui t\'enrichissent des passifs qui te ruinent',
      'Le calcul brutal qui te montre le coût réel d\'attendre encore 1 an',
    ],
  },
  {
    n: '02',
    tag: 'Les fondations',
    title: 'Maîtriser ton budget au quotidien',
    bullets: [
      'La règle des comptes qui s\'auto-alimentent (tu n\'y penses plus)',
      'Te dégager une capacité d\'épargne même avec un petit revenu',
      'Le fonds de sécurité : combien, où, et pourquoi avant d\'investir',
    ],
  },
  {
    n: '03',
    tag: 'Le terrain',
    title: 'La bourse expliquée comme à un pote',
    bullets: [
      'Action, ETF, indice : enfin clair, en 20 minutes chrono',
      'Pourquoi 90% des pros battent rarement un simple ETF World',
      'PEA vs CTO : lequel ouvrir selon ta situation (et la fiscalité)',
    ],
  },
  {
    n: '04',
    tag: 'Le moteur',
    title: 'Activer la machine des intérêts composés',
    bullets: [
      'Le DCA : investir automatiquement sans stresser le timing',
      'Construire ta boule de neige et la laisser grossir',
      'Les 3 erreurs qui flinguent les rendements des débutants',
    ],
  },
  {
    n: '05',
    tag: 'Le passif',
    title: 'Bâtir ton portefeuille ETF en pilote auto',
    bullets: [
      'Le portefeuille « paresseux » que tu gères en 15 min / mois',
      'Choisir ses ETF : frais, réplication, capitalisant ou distribuant',
      'Le plan d\'action concret pour ton tout premier ordre cette semaine',
    ],
  },
];

const BONUSES = [
  '📄 Le tableur de suivi de portefeuille prêt à l\'emploi',
  '✅ La checklist « mon premier investissement » pas-à-pas',
  '💬 Accès à la communauté privée des membres',
];

function Program() {
  return (
    <section className="program section" id="programme">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Le programme</span>
          <h2 className="section-title">
            5 modules. <span className="accent">Zéro blabla.</span>
            <br />
            De « j'y comprends rien » à ton premier ETF.
          </h2>
          <p className="section-lead">
            Des vidéos courtes et actionnables. Tu regardes, tu appliques, tu
            avances. Chaque module débloque un palier concret de ta liberté financière.
          </p>
        </Reveal>

        <div className="program__list">
          {MODULES.map((m, i) => (
            <Reveal key={m.n} delay={i * 70}>
              <article className="module">
                <div className="module__left">
                  <span className="module__n">{m.n}</span>
                  <span className="module__tag">{m.tag}</span>
                </div>
                <div className="module__main">
                  <h3 className="module__title">{m.title}</h3>
                  <ul className="module__bullets">
                    {m.bullets.map((b) => (
                      <li key={b}>
                        <span className="module__check">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="program__bonus">
            <span className="program__bonus-label">+ Inclus avec la formation</span>
            <ul>
              {BONUSES.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Program;
