export type FormData = {
  nom: string; prenoms: string; sexe: string; dateNaissance: string;
  telephone: string; whatsapp: string; email: string;
  departement: string; commune: string; ville: string;
  profil: string; profilAutre: string; organisation: string; fonction: string; domaine: string;
  aEntreprise: string; aProjet: string; secteur: string; projet: string; anciennete: string;
  attentes: string; sujets: string[]; sujetsAutre: string;
  source: string; besoins: string; commentaire: string; consentement: boolean;
};

export const EMPTY_FORM: FormData = {
  nom: "", prenoms: "", sexe: "", dateNaissance: "",
  telephone: "", whatsapp: "", email: "",
  departement: "", commune: "", ville: "",
  profil: "", profilAutre: "", organisation: "", fonction: "", domaine: "",
  aEntreprise: "", aProjet: "", secteur: "", projet: "", anciennete: "",
  attentes: "", sujets: [], sujetsAutre: "",
  source: "", besoins: "", commentaire: "", consentement: false,
};

export type Errors = Partial<Record<keyof FormData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Bénin : 01XXXXXXXX (10 chiffres), avec ou sans +229. International : +XXXXXXXX (8 à 15 chiffres). */
export function isValidPhone(raw: string): boolean {
  const v = raw.replace(/[\s.\-()]/g, "");
  if (/^(\+229|00229)/.test(v)) return /^(\+229|00229)01\d{8}$/.test(v);
  if (/^\d{10}$/.test(v)) return /^01\d{8}$/.test(v);
  return /^(\+|00)[1-9]\d{7,14}$/.test(v);
}
export const isValidEmail = (v: string) => EMAIL_RE.test(v.trim()) && v.length <= 254;

const req = (v: string, msg: string, max = 120): string | undefined => {
  const t = v.trim();
  if (!t) return msg;
  if (t.length > max) return `Ce champ ne doit pas dépasser ${max} caractères.`;
  return undefined;
};
const opt = (v: string, max: number) =>
  v.trim().length > max ? `Ce champ ne doit pas dépasser ${max} caractères.` : undefined;

export const STEPS = [
  "Identité", "Coordonnées", "Localisation", "Profil", "Entrepreneuriat", "Attentes", "Compléments",
] as const;

export function validateStep(step: number, d: FormData): Errors {
  const e: Errors = {};
  const set = (k: keyof FormData, m?: string) => { if (m) e[k] = m; };
  switch (step) {
    case 0: {
      set("nom", req(d.nom, "Indique ton nom.", 80));
      set("prenoms", req(d.prenoms, "Indique tes prénoms.", 120));
      set("sexe", d.sexe ? undefined : "Choisis une option.");
      if (d.dateNaissance) {
        const dt = new Date(d.dateNaissance);
        const y = dt.getFullYear();
        if (isNaN(dt.getTime()) || y < 1930 || y > 2015) set("dateNaissance", "Date de naissance invalide.");
      }
      break;
    }
    case 1:
      if (!d.telephone.trim()) set("telephone", "Indique ton numéro de téléphone.");
      else if (!isValidPhone(d.telephone)) set("telephone", "Numéro invalide. Exemple : 01 95 49 83 59 ou +229 01 95 49 83 59.");
      if (!d.whatsapp.trim()) set("whatsapp", "Indique ton numéro WhatsApp.");
      else if (!isValidPhone(d.whatsapp)) set("whatsapp", "Numéro WhatsApp invalide. Exemple : 01 54 16 30 67.");
      if (!d.email.trim()) set("email", "Indique ton adresse e-mail.");
      else if (!isValidEmail(d.email)) set("email", "Adresse e-mail invalide. Exemple : nom@exemple.com");
      break;
    case 2:
      set("departement", d.departement ? undefined : "Choisis ton département.");
      set("commune", req(d.commune, "Indique ta commune.", 80));
      set("ville", req(d.ville, "Indique ta ville de résidence.", 80));
      break;
    case 3:
      set("profil", d.profil ? undefined : "Choisis ton profil.");
      if (d.profil === "Autre") set("profilAutre", req(d.profilAutre, "Précise ton profil.", 80));
      set("organisation", req(d.organisation, "Indique ton établissement, entreprise ou organisation.", 150));
      set("fonction", req(d.fonction, "Indique ta fonction ou ton niveau d'études.", 100));
      set("domaine", req(d.domaine, "Indique ton domaine de formation ou secteur d'activité.", 120));
      break;
    case 4:
      set("aEntreprise", d.aEntreprise ? undefined : "Réponds par Oui ou Non.");
      set("aProjet", d.aProjet ? undefined : "Réponds par Oui ou Non.");
      if (d.aProjet === "Oui") {
        set("secteur", req(d.secteur, "Indique le secteur concerné.", 120));
        set("projet", opt(d.projet, 1000));
        set("anciennete", d.anciennete ? undefined : "Choisis une option.");
      }
      break;
    case 5:
      set("attentes", req(d.attentes, "Dis-nous ce que tu attends du Business Summit.", 1000));
      if (d.sujets.length === 0) set("sujets", "Choisis au moins un sujet.");
      if (d.sujets.includes("Autres")) set("sujetsAutre", req(d.sujetsAutre, "Précise les autres sujets.", 200));
      break;
    case 6:
      set("source", d.source ? undefined : "Indique comment tu as découvert le MEB 2026.");
      set("besoins", req(d.besoins, "Indique tes besoins particuliers, ou « Aucun ».", 500));
      set("commentaire", opt(d.commentaire, 1000));
      if (!d.consentement) set("consentement", "Ton consentement est nécessaire pour valider l'inscription.");
      break;
  }
  return e;
}

export function validateAll(d: FormData): { step: number; errors: Errors } | null {
  for (let i = 0; i < STEPS.length; i++) {
    const e = validateStep(i, d);
    if (Object.keys(e).length) return { step: i, errors: e };
  }
  return null;
}
