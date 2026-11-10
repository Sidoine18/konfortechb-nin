"use client";

import { useState } from "react";
import { EVENT } from "../data";
import { MEB_CONFIG } from "../config";

const B = MEB_CONFIG.basePath;

export function MebLogos() {
  return (
    <div className="meb-logos">
      <img src="/meb-2026/logo-konfortech.webp" alt="KONFORTECH BÉNIN" width={245} height={168} />
      <img src="/meb-2026/logo-adpme.webp" alt="ADPME – Agence de Développement des Petites et Moyennes Entreprises" width={470} height={144} />
      <img src="/meb-2026/logo-meb.webp" alt="Mois de l'Entrepreneuriat au Bénin" width={450} height={162} />
    </div>
  );
}

export function MebHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Présentation", "#presentation"], ["Objectifs", "#objectifs"], ["Programme", "#programme"], ["Infos", "#infos"],
  ];
  return (
    <header className="meb-header">
      <div className="meb-container meb-header-inner">
        <a href={B} className="meb-header-logos" aria-label="Business Summit – MEB 2026, accueil"><MebLogos /></a>
        <nav className={`meb-nav${open ? " is-open" : ""}`} aria-label="Navigation MEB 2026">
          {links.map(([l, h]) => <a key={h} href={`${B}${h}`} onClick={() => setOpen(false)}>{l}</a>)}
          <a href={`${B}#inscription`} className="meb-btn meb-btn-accent meb-btn-sm" onClick={() => setOpen(false)}>S'inscrire</a>
        </nav>
        <button type="button" className="meb-burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}><span /><span /><span /></button>
      </div>
    </header>
  );
}

export function MebFooter() {
  return (
    <footer className="meb-footer">
      <div className="meb-container meb-footer-inner">
        <div>
          <strong>{EVENT.name}</strong>
          <p>{EVENT.dateLabel} · {EVENT.time} · Site universitaire d'Abomey</p>
        </div>
        <div className="meb-footer-links">
          <a href={EVENT.website}>konfortechbenin.online</a>
          <a href={`${B}/confidentialite`}>Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
