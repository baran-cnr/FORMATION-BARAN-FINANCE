
import React from 'react';
import './Authority.css';
import Reveal from '../../components/Reveal';

const STATS = [
  { val: '6 ans', label: "à investir réellement, mois après mois" },
  { val: '14', label: 'modules vidéo, droit au but' },
  { val: '0', label: 'jargon bancaire imbuvable' },
];

const TESTIMONIALS = [
  {
    quote:
      "J'avais 2 300 € qui dormaient sur mon Livret A depuis 3 ans. En une soirée j'ai ouvert mon PEA et passé mon premier ordre. Enfin clair.",
    name: 'Léa',
    role: '24 ans · étudiante en master',
  },
  {
    quote:
      "Je pensais qu'il fallait être un crack en maths. En fait non. J'investis 200 € par mois en automatique et je n'y pense plus.",
    name: 'Yanis',
    role: '27 ans · jeune actif',
  },
  {
    quote:
      "Le module sur les intérêts composés m'a mis une claque. J'aurais aimé voir ça à 18 ans au lieu de 29.",
    name: 'Marion',
    role: '29 ans · freelance',
  },
];

function Authority() {
  return (
    <section className="authority section">
      <div className="container">
        <div className="authority__top">
          <Reveal>
            <div className="authority__bio">
              <span className="eyebrow">Qui suis-je ?</span>
              <h2 className="section-title">
                L'étudiant qui a décidé de
                <br />
                <span className="accent">cracker le système.</span>
              </h2>
              <p className="authority__text">
                Salut, moi c'est <strong>Maxime</strong>. Étudiant en économie,
                j'en avais marre des cours théoriques qui n'expliquaient jamais
                la vraie question : <em>comment ne pas finir esclave de mon compte en banque ?</em>
              </p>
              <p className="authority__text">
                Alors j'ai appris sur le terrain. J'ai ouvert mon PEA avec un
                budget d'étudiant, lu les bouquins que les pros gardent pour eux,
                et appliqué exactement ce que les meilleurs investisseurs passifs font.
                Pas de promesse de devenir riche en 3 mois — juste une méthode
                rationnelle qui marche sur la durée.
              </p>
              <p className="authority__text">
                Cette formation, c'est tout ce que j'aurais voulu qu'on me dise
                à 18 ans, condensé et débarrassé du blabla. <strong>Ma règle :
                si ma petite sœur ne comprend pas, je réexplique.</strong>
              </p>
              <a href="#offre" className="btn btn--primary">
                Apprendre sa méthode →
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="authority__stats">
              {STATS.map((s) => (
                <div className="authority__stat" key={s.label}>
                  <span className="authority__stat-val">{s.val}</span>
                  <span className="authority__stat-label">{s.label}</span>
                </div>
              ))}
              <div className="authority__note">
                « Je ne te vends pas un rêve. Je te donne un système.
                Le reste, c'est ta régularité. »
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="authority__testi-title">Ils ont arrêté de subir</h3>
        </Reveal>
        <div className="authority__testimonials">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="testi">
                <div className="testi__stars">★★★★★</div>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="testi__avatar">{t.name[0]}</span>
                  <span>
                    <strong>{t.name}</strong>
                    <em>{t.role}</em>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="authority__disclaimer">
            Témoignages illustratifs. Investir comporte un risque de perte en
            capital. Cette formation est éducative et ne constitue pas un conseil
            en investissement personnalisé.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Authority;
