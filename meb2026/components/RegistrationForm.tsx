"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ANCIENNETE, COMMUNES, DEPARTEMENTS, OUI_NON, PROFILS, SEXES, SOURCES, SUJETS,
} from "../data";
import { EMPTY_FORM, STEPS, validateAll, validateStep, type Errors, type FormData } from "../validation";
import { submitRegistration, SubmitError } from "../submit";
import { MEB_CONFIG } from "../config";

type Props = { onSuccess: (r: { id: string; nom: string }) => void };

function Field({ id, label, error, hint, optional, children }: {
  id: string; label: string; error?: string | undefined; hint?: string | undefined; optional?: boolean | undefined; children: ReactNode;
}) {
  return (
    <div className={`meb-field${error ? " has-error" : ""}`}>
      <label htmlFor={id} className="meb-label">
        {label} {optional ? <span className="meb-optional">(facultatif)</span> : <span className="meb-req" aria-hidden>*</span>}
      </label>
      {children}
      {hint && !error && <p className="meb-hint">{hint}</p>}
      {error && <p className="meb-error" id={`${id}-err`} role="alert">{error}</p>}
    </div>
  );
}

function Choices({ name, options, value, onChange, error, multiple }: {
  name: string; options: string[]; value: string | string[]; onChange: (v: string) => void; error?: string | undefined; multiple?: boolean | undefined;
}) {
  return (
    <div className="meb-choices" role={multiple ? "group" : "radiogroup"} aria-invalid={!!error}>
      {options.map((o) => {
        const checked = multiple ? (value as string[]).includes(o) : value === o;
        return (
          <label key={o} className={`meb-chip${checked ? " is-checked" : ""}`}>
            <input type={multiple ? "checkbox" : "radio"} name={name} value={o} checked={checked} onChange={() => onChange(o)} />
            <span>{o}</span>
          </label>
        );
      })}
    </div>
  );
}

export function RegistrationForm({ onSuccess }: Props) {
  const [data, setData] = useState<FormData>(EMPTY_FORM);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const sendingRef = useRef(false);
  const startedAt = useRef(Date.now());
  const topRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof FormData>(k: K, v: FormData[K]) => {
    const clearProject = k === "aProjet" && v !== "Oui";
    setData((d) => ({ ...d, [k]: v, ...(clearProject ? { secteur: "", projet: "", anciennete: "" } : {}) }));
    setErrors((e) => {
      const next = { ...e };
      delete next[k];
      if (clearProject) {
        delete next.secteur;
        delete next.projet;
        delete next.anciennete;
      }
      return next;
    });
  };
  const toggleSujet = (s: string) =>
    set("sujets", data.sujets.includes(s) ? data.sujets.filter((x) => x !== s) : [...data.sujets, s]);

  useEffect(() => { startedAt.current = Date.now(); }, []);

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  const focusFirstError = (e: Errors) => {
    const k = Object.keys(e)[0];
    if (k) setTimeout(() => document.getElementById(`meb-${k}`)?.focus(), 50);
  };

  const next = () => {
    const e = validateStep(step, data);
    setErrors(e);
    if (Object.keys(e).length) return focusFirstError(e);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    scrollTop();
  };
  const prev = () => { setErrors({}); setStep((s) => Math.max(0, s - 1)); scrollTop(); };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (step < STEPS.length - 1) return next();
    if (sendingRef.current) return;
    const bad = validateAll(data);
    if (bad) { setStep(bad.step); setErrors(bad.errors); focusFirstError(bad.errors); return; }
    // Anti-spam : champ piège rempli ou envoi trop rapide (< 8 s).
    if (botcheck || Date.now() - startedAt.current < 8000) {
      setStatus("error");
      setServerError("Envoi bloqué par la protection anti-spam. Patiente quelques secondes puis réessaie.");
      return;
    }
    sendingRef.current = true;
    setStatus("sending");
    setServerError("");
    try {
      const r = await submitRegistration(data, botcheck);
      onSuccess(r); // le bouton reste désactivé : pas de double soumission
    } catch (err) {
      sendingRef.current = false;
      setStatus("error");
      setServerError(err instanceof SubmitError ? err.message : "Une erreur inattendue est survenue. Merci de réessayer.");
    }
  };

  const progress = Math.round(((step + 1) / STEPS.length) * 100);
  const sending = status === "sending";
  const inp = (k: keyof FormData) => ({
    id: `meb-${k}`, name: k, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `meb-${k}-err` : undefined,
  });
  const communes = COMMUNES[data.departement] ?? [];

  return (
    <form className="meb-form" onSubmit={submit} noValidate aria-busy={sending}>
      <div ref={topRef} className="meb-progress-wrap">
        <div className="meb-progress-head">
          <span className="meb-step-count">Étape {step + 1} / {STEPS.length}</span>
          <span className="meb-step-name">{STEPS[step]}</span>
        </div>
        <div className="meb-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} aria-label="Progression de l'inscription">
          <div className="meb-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <ol className="meb-steps" aria-hidden>
          {STEPS.map((s, i) => <li key={s} className={i < step ? "done" : i === step ? "current" : ""}>{i + 1}</li>)}
        </ol>
      </div>

      {/* Champ piège anti-robot (invisible pour les humains) */}
      <div className="meb-hp" aria-hidden>
        <label>Ne pas remplir<input type="text" tabIndex={-1} autoComplete="off" value={botcheck} onChange={(e) => setBotcheck(e.target.value)} /></label>
      </div>

      <fieldset className="meb-fieldset" key={step} disabled={sending}>
        <legend className="meb-legend">{STEPS[step]}</legend>

        {step === 0 && <>
          <div className="meb-grid2">
            <Field id="meb-nom" label="Nom" error={errors.nom}><input {...inp("nom")} className="meb-input" autoComplete="family-name" value={data.nom} onChange={(e) => set("nom", e.target.value)} /></Field>
            <Field id="meb-prenoms" label="Prénoms" error={errors.prenoms}><input {...inp("prenoms")} className="meb-input" autoComplete="given-name" value={data.prenoms} onChange={(e) => set("prenoms", e.target.value)} /></Field>
          </div>
          <Field id="meb-sexe" label="Sexe" error={errors.sexe}><Choices name="sexe" options={SEXES} value={data.sexe} onChange={(v) => set("sexe", v)} error={errors.sexe} /></Field>
          <Field id="meb-dateNaissance" label="Date de naissance" optional error={errors.dateNaissance}><input {...inp("dateNaissance")} type="date" className="meb-input" value={data.dateNaissance} onChange={(e) => set("dateNaissance", e.target.value)} /></Field>
        </>}

        {step === 1 && <>
          <div className="meb-grid2">
            <Field id="meb-telephone" label="Numéro de téléphone" error={errors.telephone} hint="Format : 01 XX XX XX XX"><input {...inp("telephone")} type="tel" inputMode="tel" className="meb-input" autoComplete="tel" placeholder="01 95 49 83 59" value={data.telephone} onChange={(e) => set("telephone", e.target.value)} /></Field>
            <Field id="meb-whatsapp" label="Numéro WhatsApp" error={errors.whatsapp}>
              <input {...inp("whatsapp")} type="tel" inputMode="tel" className="meb-input" placeholder="01 54 16 30 67" value={data.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} />
              <button type="button" className="meb-link-btn" onClick={() => set("whatsapp", data.telephone)}>Identique au téléphone</button>
            </Field>
          </div>
          <Field id="meb-email" label="Adresse e-mail" error={errors.email}><input {...inp("email")} type="email" inputMode="email" className="meb-input" autoComplete="email" placeholder="nom@exemple.com" value={data.email} onChange={(e) => set("email", e.target.value)} /></Field>
        </>}

        {step === 2 && <>
          <Field id="meb-departement" label="Département" error={errors.departement}>
            <select {...inp("departement")} className="meb-input" value={data.departement} onChange={(e) => { set("departement", e.target.value); set("commune", ""); }}>
              <option value="">— Choisir —</option>
              {DEPARTEMENTS.map((d) => <option key={d}>{d}</option>)}
            </select>
          </Field>
          <div className="meb-grid2">
            <Field id="meb-commune" label="Commune" error={errors.commune}>
              {communes.length ? (
                <select {...inp("commune")} className="meb-input" value={data.commune} onChange={(e) => set("commune", e.target.value)}>
                  <option value="">— Choisir —</option>
                  {communes.map((c) => <option key={c}>{c}</option>)}
                </select>
              ) : (
                <input {...inp("commune")} className="meb-input" placeholder={data.departement ? "Ta commune" : "Choisis d'abord un département"} value={data.commune} onChange={(e) => set("commune", e.target.value)} />
              )}
            </Field>
            <Field id="meb-ville" label="Ville de résidence" error={errors.ville}><input {...inp("ville")} className="meb-input" autoComplete="address-level2" value={data.ville} onChange={(e) => set("ville", e.target.value)} /></Field>
          </div>
        </>}

        {step === 3 && <>
          <Field id="meb-profil" label="Tu es…" error={errors.profil}><Choices name="profil" options={PROFILS} value={data.profil} onChange={(v) => set("profil", v)} error={errors.profil} /></Field>
          {data.profil === "Autre" && <Field id="meb-profilAutre" label="Précise ton profil" error={errors.profilAutre}><input {...inp("profilAutre")} className="meb-input" value={data.profilAutre} onChange={(e) => set("profilAutre", e.target.value)} /></Field>}
          <Field id="meb-organisation" label="Établissement, entreprise ou organisation" error={errors.organisation}><input {...inp("organisation")} className="meb-input" autoComplete="organization" value={data.organisation} onChange={(e) => set("organisation", e.target.value)} /></Field>
          <div className="meb-grid2">
            <Field id="meb-fonction" label="Fonction ou niveau d'études" error={errors.fonction}><input {...inp("fonction")} className="meb-input" placeholder="Ex. Licence 3, Technicien, Gérant…" value={data.fonction} onChange={(e) => set("fonction", e.target.value)} /></Field>
            <Field id="meb-domaine" label="Domaine de formation ou secteur d'activité" error={errors.domaine}><input {...inp("domaine")} className="meb-input" placeholder="Ex. Génie électrique, Informatique…" value={data.domaine} onChange={(e) => set("domaine", e.target.value)} /></Field>
          </div>
        </>}

        {step === 4 && <>
          <div className="meb-grid2">
            <Field id="meb-aEntreprise" label="As-tu déjà une entreprise ?" error={errors.aEntreprise}><Choices name="aEntreprise" options={OUI_NON} value={data.aEntreprise} onChange={(v) => set("aEntreprise", v)} /></Field>
            <Field id="meb-aProjet" label="As-tu un projet entrepreneurial ?" error={errors.aProjet}><Choices name="aProjet" options={OUI_NON} value={data.aProjet} onChange={(v) => set("aProjet", v)} /></Field>
          </div>
          {data.aProjet === "Oui" && <div className="meb-project-details">
          <Field id="meb-secteur" label="Dans quel secteur ?" error={errors.secteur}><input {...inp("secteur")} className="meb-input" placeholder="Ex. Énergie, Numérique, Agro-transformation…" value={data.secteur} onChange={(e) => set("secteur", e.target.value)} /></Field>
          <Field id="meb-projet" label="Présente brièvement ton projet" optional error={errors.projet}><textarea {...inp("projet")} className="meb-input" rows={4} maxLength={1000} value={data.projet} onChange={(e) => set("projet", e.target.value)} /></Field>
          <Field id="meb-anciennete" label="Depuis combien de temps exerces-tu dans ce domaine ?" error={errors.anciennete}><Choices name="anciennete" options={ANCIENNETE} value={data.anciennete} onChange={(v) => set("anciennete", v)} /></Field>
          </div>}
        </>}

        {step === 5 && <>
          <Field id="meb-attentes" label="Qu'attends-tu de ce Business Summit ?" error={errors.attentes}><textarea {...inp("attentes")} className="meb-input" rows={4} maxLength={1000} value={data.attentes} onChange={(e) => set("attentes", e.target.value)} /></Field>
          <Field id="meb-sujets" label="Quels sujets t'intéressent ?" error={errors.sujets} hint="Plusieurs choix possibles"><Choices name="sujets" multiple options={SUJETS} value={data.sujets} onChange={toggleSujet} error={errors.sujets} /></Field>
          {data.sujets.includes("Autres") && <Field id="meb-sujetsAutre" label="Autres sujets" error={errors.sujetsAutre}><input {...inp("sujetsAutre")} className="meb-input" value={data.sujetsAutre} onChange={(e) => set("sujetsAutre", e.target.value)} /></Field>}
        </>}

        {step === 6 && <>
          <Field id="meb-source" label="Comment as-tu découvert le MEB 2026 ?" error={errors.source}>
            <select {...inp("source")} className="meb-input" value={data.source} onChange={(e) => set("source", e.target.value)}>
              <option value="">— Choisir —</option>
              {SOURCES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
          <Field id="meb-besoins" label="As-tu des besoins particuliers pour participer ?" error={errors.besoins} hint="Accessibilité, mobilité… Écris « Aucun » si ce n'est pas le cas."><input {...inp("besoins")} className="meb-input" value={data.besoins} onChange={(e) => set("besoins", e.target.value)} /></Field>
          <Field id="meb-commentaire" label="Commentaire complémentaire" optional error={errors.commentaire}><textarea {...inp("commentaire")} className="meb-input" rows={3} maxLength={1000} value={data.commentaire} onChange={(e) => set("commentaire", e.target.value)} /></Field>
          <div className={`meb-consent${errors.consentement ? " has-error" : ""}`}>
            <label>
              <input id="meb-consentement" type="checkbox" checked={data.consentement} onChange={(e) => set("consentement", e.target.checked)} aria-invalid={!!errors.consentement} />
              <span>J'accepte que mes données personnelles soient traitées par les organisateurs dans le cadre de l'organisation et de l'évaluation du MEB 2026, conformément à la <a href={`${MEB_CONFIG.basePath}/confidentialite`} target="_blank" rel="noopener">politique de confidentialité</a>. <span className="meb-req">*</span></span>
            </label>
            {errors.consentement && <p className="meb-error" role="alert">{errors.consentement}</p>}
          </div>
        </>}
      </fieldset>

      {status === "error" && serverError && <div className="meb-alert" role="alert">{serverError}</div>}

      <div className="meb-actions">
        {step > 0 && <button type="button" className="meb-btn meb-btn-ghost" onClick={prev} disabled={sending}>← Précédent</button>}
        {step < STEPS.length - 1 ? (
          <button type="submit" className="meb-btn meb-btn-primary">Continuer →</button>
        ) : (
          <button type="submit" className="meb-btn meb-btn-primary" disabled={sending}>
            {sending ? <><span className="meb-spinner" aria-hidden /> Envoi en cours…</> : "Valider mon inscription"}
          </button>
        )}
      </div>
    </form>
  );
}
