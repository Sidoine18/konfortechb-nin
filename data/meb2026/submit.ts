import { MEB_CONFIG } from "./config";
import { EVENT } from "./data";
import type { FormData } from "./validation";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
export function generateRegistrationId(): string {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return "MEB26-" + Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join("");
}

/** Ligne à plat, identique pour Web3Forms et Google Sheets. */
export function buildRecord(d: FormData, id: string, submittedAt: Date) {
  return {
    "ID inscription": id,
    "Date de soumission": submittedAt.toLocaleString("fr-FR", { timeZone: "Africa/Porto-Novo" }),
    "Horodatage ISO": submittedAt.toISOString(),
    "Événement": EVENT.name,
    "Date de l'événement": `${EVENT.dateLabel} – ${EVENT.time}`,
    Nom: d.nom.trim(),
    "Prénoms": d.prenoms.trim(),
    Sexe: d.sexe,
    "Date de naissance": d.dateNaissance || "Non renseignée",
    "Téléphone": d.telephone.trim(),
    WhatsApp: d.whatsapp.trim(),
    "E-mail": d.email.trim(),
    "Département": d.departement,
    Commune: d.commune.trim(),
    "Ville de résidence": d.ville.trim(),
    Profil: d.profil === "Autre" ? `Autre : ${d.profilAutre.trim()}` : d.profil,
    "Établissement / Organisation": d.organisation.trim(),
    "Fonction / Niveau d'études": d.fonction.trim(),
    "Domaine / Secteur d'activité": d.domaine.trim(),
    "A une entreprise": d.aEntreprise,
    "A un projet": d.aProjet,
    "Secteur du projet / entreprise": d.aProjet === "Oui" ? d.secteur.trim() : "—",
    "Présentation du projet": d.aProjet === "Oui" ? d.projet.trim() || "—" : "—",
    "Ancienneté dans le domaine": d.aProjet === "Oui" ? d.anciennete : "—",
    Attentes: d.attentes.trim(),
    "Sujets d'intérêt": d.sujets.join(", ") + (d.sujetsAutre.trim() ? ` (Autres : ${d.sujetsAutre.trim()})` : ""),
    "Découverte du MEB 2026": d.source,
    "Besoins particuliers": d.besoins.trim(),
    Commentaire: d.commentaire.trim() || "—",
    "Consentement données": d.consentement ? "Oui" : "Non",
  };
}

export class SubmitError extends Error {}

/**
 * Envoie l'inscription à Web3Forms. Ne résout que si le service confirme
 * (HTTP 2xx ET success === true). Toute autre réponse lève une erreur.
 */
export async function submitRegistration(d: FormData, botcheck: string) {
  if (!MEB_CONFIG.web3formsKey) {
    throw new SubmitError("Le service d'inscription n'est pas configuré. Merci de réessayer plus tard.");
  }
  const id = generateRegistrationId();
  const now = new Date();
  const record = buildRecord(d, id, now);

  let res: Response;
  try {
    res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: MEB_CONFIG.web3formsKey,
        subject: `Nouvelle inscription MEB 2026 – ${record.Nom} ${record["Prénoms"]} (${id})`,
        from_name: "Business Summit – MEB 2026",
        replyto: record["E-mail"],
        botcheck,
        ...record,
      }),
    });
  } catch {
    throw new SubmitError("Connexion impossible. Vérifie ta connexion Internet puis réessaie.");
  }
  let json: { success?: boolean; message?: string } = {};
  try { json = await res.json(); } catch { /* réponse non JSON */ }
  if (!res.ok || json.success !== true) {
    throw new SubmitError(
      `L'inscription n'a pas pu être enregistrée${json.message ? ` (${json.message})` : ""}. Merci de réessayer.`,
    );
  }

  // Copie facultative vers Google Sheets (n'affecte pas la confirmation Web3Forms).
  if (MEB_CONFIG.sheetsWebhookUrl) {
    try {
      await fetch(MEB_CONFIG.sheetsWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(record),
      });
    } catch { /* l'e-mail Web3Forms reste la source de vérité */ }
  }
  return { id, nom: `${record["Prénoms"]} ${record.Nom}` };
}
