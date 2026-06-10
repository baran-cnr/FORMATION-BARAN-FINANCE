
import React, { useMemo, useState } from 'react';
import './Solution.css';
import Reveal from '../../components/Reveal';

const PILLARS = [
  {
    n: '01',
    title: 'La rationalité plutôt que l\'émotion',
    text: 'Pas de timing du marché, pas de paris hasardeux. On automatise les bonnes décisions pour que tes émotions ne sabotent jamais ton plan.',
  },
  {
    n: '02',
    title: 'L\'investissement passif (ETF)',
    text: "Au lieu de parier sur une entreprise, tu achètes des centaines des plus grosses du monde en un clic. Diversifié, peu de frais, prouvé par les chiffres.",
  },
  {
    n: '03',
    title: 'Le temps comme super-pouvoir',
    text: 'Un versement régulier (DCA) + les intérêts composés = une boule de neige qui grossit toute seule. Ton job : la lancer maintenant.',
  },
];

function computeFutureValue(monthly: number, years: number, rate = 0.08) {
  const r = rate / 12;
  const n = years * 12;
  if (r === 0) return monthly * n;
  return monthly * ((Math.pow(1 + r, n) - 1) / r);
}

function fmt(v: number) {
  return Math.round(v).toLocaleString('fr-FR') + ' €';
}

function Solution() {
  const [monthly, setMonthly] = useState(150);
  const [years, setYears] = useState(15);

  const { total, invested, gains, points } = useMemo(() => {
    const total = computeFutureValue(monthly, years);
    const invested = monthly * 12 * years;
    const gains = total - invested;
    const pts: { x: number; inv: number; tot: number }[] = [];
    for (let y = 0; y <= years; y++) {
      pts.push({
        x: y,
        inv: monthly * 12 * y,
        tot: computeFutureValue(monthly, y),
      });
    }
    return { total, invested, gains, points: pts };
  }, [monthly, years]);

  const max = points[points.length - 1].tot || 1;
  const W = 520;
  const H = 220;
  const toX = (i: number) => (i / (points.length - 1)) * W;
  const toY = (v: number) => H - (v / max) * H;

  const totalPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(i)},${toY(p.tot)}`).join(' ');
  const invPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(i)},${toY(p.inv)}`).join(' ');
  const areaPath = `${totalPath} L${W},${H} L0,${H} Z`;

  return (
    <section className="solution section" id="methode">
      <div className="container">
        <Reveal>
          <span className="eyebrow">La solution</span>
          <h2 className="section-title">
            La méthode <span className="accent">Capital Libre</span> :
            <br />
            simple, rationnelle, automatique.
          </h2>
          <p className="section-lead">
            Pas besoin d'être un génie des maths ni de scotcher des graphiques
            toute la journée. Tu construis un système qui investit pour toi,
            mois après mois — et tu laisses le temps faire le reste.
          </p>
        </Reveal>

        <div className="solution__pillars">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <div className="solution__pillar">
                <span className="solution__pillar-n">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="calc">
            <div className="calc__head">
              <h3 className="calc__title">
                Vois la <span className="accent">magie des intérêts composés</span>
              </h3>
              <p className="calc__sub">
                Bouge les curseurs. Base de calcul : ~8% / an (moyenne historique
                long terme d'un ETF World). Estimation pédagogique, pas une promesse.
              </p>
            </div>

            <div className="calc__body">
              <div className="calc__controls">
                <label className="calc__field">
                  <div className="calc__field-top">
                    <span>Versement mensuel</span>
                    <strong>{monthly} €</strong>
                  </div>
                  <input
                    type="range"
                    min={25}
                    max={1000}
                    step={25}
                    value={monthly}
                    onChange={(e) => setMonthly(Number(e.target.value))}
                  />
                </label>

                <label className="calc__field">
                  <div className="calc__field-top">
                    <span>Durée</span>
                    <strong>{years} ans</strong>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={40}
                    step={1}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                  />
                </label>

                <div className="calc__results">
                  <div className="calc__result">
                    <span className="calc__result-label">Tu as versé</span>
                    <span className="calc__result-val">{fmt(invested)}</span>
                  </div>
                  <div className="calc__result calc__result--accent">
                    <span className="calc__result-label">Intérêts gagnés</span>
                    <span className="calc__result-val">{fmt(gains)}</span>
                  </div>
                  <div className="calc__result calc__result--total">
                    <span className="calc__result-label">Total potentiel</span>
                    <span className="calc__result-val">{fmt(total)}</span>
                  </div>
                </div>
              </div>

              <div className="calc__chart">
                <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="calcFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(0,229,153,0.4)" />
                      <stop offset="100%" stopColor="rgba(0,229,153,0)" />
                    </linearGradient>
                  </defs>
                  <path d={areaPath} fill="url(#calcFill)" />
                  <path d={totalPath} fill="none" stroke="#00e599" strokeWidth="2.5" />
                  <path
                    d={invPath}
                    fill="none"
                    stroke="#5fa0ff"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    opacity="0.85"
                  />
                </svg>
                <div className="calc__legend">
                  <span><i className="dot dot--green" /> Avec intérêts composés</span>
                  <span><i className="dot dot--blue" /> Sans (versements seuls)</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Solution;
