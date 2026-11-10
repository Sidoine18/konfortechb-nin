"use client";

import { useEffect, useState } from "react";
import { EVENT } from "../data";
import { MEB_CONFIG } from "../config";
import { MebHeader } from "./MebChrome";

export function MebConfirmation() {
  const [info, setInfo] = useState<{ id: string; nom: string } | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const id = p.get("id") ?? "";
    if (/^MEB26-[A-Z0-9]{6}$/.test(id)) setInfo({ id, nom: (p.get("nom") ?? "").slice(0, 120) });
    setReady(true);
  }, []);

  return (
    <div className="meb-root">
      <MebHeader />
      <main className="meb-section meb-section-form meb-confirm">
        <div className="meb-container meb-narrow">
          {!ready ? null : info ? (
            <div className="meb-form-card meb-confirm-card">
              <div className="meb-check" aria-hidden>✓</div>
              <h1 className="meb-h2">Félicitations{info.nom ? `, ${info.nom}` : ""} !</h1>
              <p className="meb-lead">Ton inscription au <strong>Business Summit – MEB 2026</strong> est bien enregistrée.</p>
              <div className="meb-ticket">
                <span>Identifiant d'inscription</span>
                <strong>{info.id}</strong>
                <small>Conserve-le : il pourra t'être demandé à l'accueil.</small>
              </div>
              <dl className="meb-infos meb-infos-light">
                <div><dt>Date</dt><dd>{EVENT.dateLabel}</dd></div>
                <div><dt>Heure</dt><dd>{EVENT.time}</dd></div>
                <div><dt>Lieu</dt><dd>Salle de 200 places, site universitaire d'Abomey</dd></div>
              </dl>
              <a href={EVENT.whatsappGroup} target="_blank" rel="noopener noreferrer" className="meb-btn meb-btn-whatsapp meb-btn-lg">
                REJOINDRE LE GROUPE WHATSAPP
              </a>
              <p className="meb-muted">Les informations pratiques et les mises à jour du programme y seront partagées.</p>
            </div>
          ) : (
            <div className="meb-form-card meb-confirm-card">
              <h1 className="meb-h2">Aucune inscription trouvée</h1>
              <p className="meb-lead">Cette page s'affiche après une inscription réussie.</p>
              <a href={`${MEB_CONFIG.basePath}#inscription`} className="meb-btn meb-btn-primary">Aller au formulaire</a>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
