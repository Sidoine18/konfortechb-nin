import { useEffect, useRef, useState } from "react";
import { EVENT, PROGRAMME } from "../data";
import { MEB_CONFIG } from "../config";
import { RegistrationForm } from "./RegistrationForm";
import { MebHeader, MebFooter } from "./MebChrome";

const OBJECTIFS = [
  { t: "Valoriser les compétences techniques", d: "Montrer que le savoir-faire technique est une base solide pour créer de la valeur et des emplois." },
  { t: "Encourager l'entrepreneuriat des jeunes", d: "Donner aux jeunes l'élan et les repères pour passer de l'idée à l'action." },
  { t: "Promouvoir l'innovation numérique", d: "Mettre en avant les outils et usages numériques au service des entreprises." },
  { t: "Faciliter les rencontres", d: "Réunir étudiants, entrepreneurs et professionnels dans un même espace d'échange." },
  { t: "Favoriser les collaborations", d: "Créer des opportunités de partenariats, de projets communs et de mentorat." },
];

export function MebLanding() {
  const [done, setDone] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = page.querySelectorAll(".meb-card, .meb-timeline li, .meb-poster, .meb-section .meb-h2");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("meb-motion-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((target) => {
      if (target.getBoundingClientRect().top >= window.innerHeight) {
        target.classList.add("meb-motion-ready");
        observer.observe(target);
      }
    });
    return () => {
      observer.disconnect();
      targets.forEach((target) => target.classList.remove("meb-motion-ready", "meb-motion-visible"));
    };
  }, []);
  const onSuccess = (r: { id: string; nom: string }) => {
    setDone(true);
    const q = new URLSearchParams({ id: r.id, nom: r.nom });
    window.location.assign(`${MEB_CONFIG.basePath}/confirmation?${q.toString()}`);
  };

  return (
    <div className="meb-root" ref={pageRef}>
      <MebHeader />
      <main>
        <section className="meb-hero" aria-labelledby="meb-title">
          <div className="meb-hero-bg" aria-hidden><img src="/meb-2026/hero-salle.webp" alt="" fetchPriority="high" /></div>
          <div className="meb-container meb-hero-inner">
            <p className="meb-eyebrow">Mois de l'Entrepreneuriat au Bénin</p>
            <h1 id="meb-title" className="meb-hero-title">Business Summit <span>2026</span></h1>
            <p className="meb-hero-slogan">Le déclic entrepreneurial.</p>
            <div className="meb-theme-card">
              <span className="meb-theme-tag">Thème</span>
              <p><strong>De la compétence à l'entreprise :</strong> entrepreneuriat technique et innovation numérique</p>
            </div>
            <ul className="meb-hero-facts">
              <li><span className="meb-fact-big">21</span><span>Nov<br />2026</span></li>
              <li className="meb-fact-time">09h00</li>
              <li className="meb-fact-place">Salle 200 places · Site universitaire d'Abomey</li>
            </ul>
            <div className="meb-hero-cta">
              <a href="#inscription" className="meb-btn meb-btn-accent meb-btn-lg">Je m'inscris</a>
              <a href="#programme" className="meb-btn meb-btn-outline meb-btn-lg">Voir le programme</a>
            </div>
          </div>
          <div className="meb-flag-band" aria-hidden><i /><i /><i /></div>
        </section>

        <section id="presentation" className="meb-section">
          <div className="meb-container meb-split">
            <div>
              <p className="meb-kicker">Présentation</p>
              <h2 className="meb-h2">Transformer les compétences en entreprises</h2>
              <p className="meb-lead">Le Business Summit du MEB 2026 rapproche les compétences techniques de l'entrepreneuriat. Il encourage l'innovation numérique et accompagne la transformation des idées en entreprises viables.</p>
              <p>Une journée pensée pour celles et ceux qui savent faire — techniciens, étudiants, artisans du numérique, porteurs de projets — et qui veulent franchir le pas : structurer une idée, rencontrer les bonnes personnes et repartir avec un plan d'action.</p>
            </div>
            <figure className="meb-poster">
              <img src="/meb-2026/affiche-meb-2026.webp" alt="Affiche officielle du Business Summit – MEB 2026" loading="lazy" width={720} height={960} />
            </figure>
          </div>
        </section>

        <section id="objectifs" className="meb-section meb-section-tint">
          <div className="meb-container">
            <p className="meb-kicker">Objectifs</p>
            <h2 className="meb-h2">Pourquoi participer ?</h2>
            <div className="meb-cards">
              {OBJECTIFS.map((o, i) => (
                <article key={o.t} className="meb-card">
                  <span className="meb-card-num">0{i + 1}</span>
                  <h3>{o.t}</h3>
                  <p>{o.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="programme" className="meb-section">
          <div className="meb-container">
            <p className="meb-kicker">Programme</p>
            <h2 className="meb-h2">Une journée, plusieurs formats</h2>
            <ol className="meb-timeline">
              {PROGRAMME.map((p) => (
                <li key={p.titre} className={p.horaire ? "" : "meb-timeline-no-time"}>
                  {p.horaire && <span className="meb-time">{p.horaire}</span>}
                  <div><h3>{p.titre}</h3><p>{p.detail}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="infos" className="meb-section meb-section-dark">
          <div className="meb-container">
            <p className="meb-kicker">Informations pratiques</p>
            <h2 className="meb-h2">Rendez-vous à Abomey</h2>
            <dl className="meb-infos">
              <div><dt>Date</dt><dd>{EVENT.dateLabel}</dd></div>
              <div><dt>Heure</dt><dd>{EVENT.time}</dd></div>
              <div><dt>Lieu</dt><dd>Site universitaire d'Abomey, Bénin</dd></div>
              <div><dt>Capacité</dt><dd>{EVENT.capacity} places annoncées</dd></div>
            </dl>
            <p className="meb-contact">Renseignements : <a href="tel:+2290195498359">{EVENT.contactPhones[0]}</a> · <a href="tel:+2290154163067">{EVENT.contactPhones[1]}</a></p>
          </div>
        </section>

        <section id="inscription" className="meb-section meb-section-form" aria-labelledby="meb-form-title">
          <div className="meb-container meb-narrow">
            <p className="meb-kicker">Inscription</p>
            <h2 id="meb-form-title" className="meb-h2">Réserve ta place</h2>
            <p className="meb-muted">7 courtes étapes · environ 4 minutes. Les champs marqués <span className="meb-req">*</span> sont obligatoires.</p>
            <div className="meb-form-card">
              {done ? <p className="meb-lead">Inscription enregistrée, redirection vers ta confirmation…</p> : <RegistrationForm onSuccess={onSuccess} />}
            </div>
          </div>
        </section>
      </main>
      <MebFooter />
    </div>
  );
}
