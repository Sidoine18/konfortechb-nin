"use client";

import { useState } from "react";
import { MEB_CONFIG } from "../config";

const B = MEB_CONFIG.basePath;

/**
 * Le logo KONFORTECH BÉNIN est déjà affiché dans l'en-tête du site :
 * on ne montre ici que les logos propres à l'événement.
 */
export function MebLogos() {
  return (
    <div className="meb-logos">
      <img src="/meb-2026/logo-adpme.webp" alt="ADPME – Agence de Développement des Petites et Moyennes Entreprises" width={470} height={144} />
      <span aria-hidden style={{ width: 1, height: 28, background: "currentColor", opacity: 0.25 }} />
      <img src="/meb-2026/logo-meb.webp" alt="Mois de l'Entrepreneuriat au Bénin" width={450} height={162} />
    </div>
  );
}

const LINKS: [string, string][] = [
  ["Présentation", "#presentation"],
  ["Objectifs", "#objectifs"],
  ["Programme", "#programme"],
  ["Infos", "#infos"],
];

export function MebHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    // position: relative → la barre défile avec la page et ne chevauche pas l'en-tête du site.
    <header className="meb-header" style={{ position: "relative" }}>
      <div className="meb-container meb-header-inner">
        <a href={B} className="meb-header-logos" aria-label="Business Summit – MEB 2026, accueil">
          <MebLogos />
        </a>

        <nav id="meb-nav" className={`meb-nav${open ? " is-open" : ""}`} aria-label="Navigation MEB 2026">
          {LINKS.map(([label, hash]) => (
            <a key={hash} href={`${B}${hash}`} onClick={close}>{label}</a>
          ))}
          <a href={`${B}#inscription`} className="meb-btn meb-btn-accent meb-btn-sm" onClick={close}>S'inscrire</a>
        </nav>

        <button
          type="button"
          className="meb-burger"
          aria-expanded={open}
          aria-controls="meb-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
