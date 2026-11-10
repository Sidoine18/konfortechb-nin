import { describe, expect, it } from "vitest";
import { EMPTY_FORM, validateAll, validateStep, type FormData } from "../meb2026/validation";
import { buildRecord } from "../meb2026/submit";

const noProject: FormData = {
  ...EMPTY_FORM,
  nom: "Test", prenoms: "Participant", sexe: "Masculin",
  telephone: "0195498359", whatsapp: "0154163067", email: "test@example.com",
  departement: "Zou", commune: "Abomey", ville: "Abomey",
  profil: "Étudiant", organisation: "Université", fonction: "Licence 3", domaine: "Numérique",
  aEntreprise: "Non", aProjet: "Non", attentes: "Rencontrer des entrepreneurs",
  sujets: ["Masterclass"], source: "WhatsApp", besoins: "Aucun", consentement: true,
};

describe("Entrepreneurial project details", () => {
  it("allows Non to continue without project details, including the final validation", () => {
    expect(validateStep(4, noProject)).toEqual({});
    expect(validateAll(noProject)).toBeNull();
  });

  it("requires sector and experience only when the project answer is Oui", () => {
    expect(Object.keys(validateStep(4, { ...noProject, aProjet: "Oui" })).sort()).toEqual(["anciennete", "secteur"]);
    expect(validateStep(4, { ...noProject, aProjet: "Oui", secteur: "Numérique", anciennete: "1 à 3 ans" })).toEqual({});
  });

  it("does not require project details even when someone has an enterprise but no project", () => {
    expect(validateStep(4, { ...noProject, aEntreprise: "Oui" })).toEqual({});
  });

  it("never sends stale project details after the answer changes to Non", () => {
    const record = buildRecord({ ...noProject, secteur: "Numérique", projet: "Ancien projet", anciennete: "1 à 3 ans" }, "MEB26-TEST01", new Date("2026-11-10T03:35:00Z"));
    expect(record["A un projet"]).toBe("Non");
    expect(record["Secteur du projet / entreprise"]).toBe("—");
    expect(record["Présentation du projet"]).toBe("—");
    expect(record["Ancienneté dans le domaine"]).toBe("—");
  });

  it("includes the details of a project when the answer is Oui", () => {
    const record = buildRecord({ ...noProject, aProjet: "Oui", secteur: "Numérique", projet: "Application éducative", anciennete: "1 à 3 ans" }, "MEB26-TEST01", new Date("2026-11-10T03:35:00Z"));
    expect(record["Secteur du projet / entreprise"]).toBe("Numérique");
    expect(record["Présentation du projet"]).toBe("Application éducative");
    expect(record["Ancienneté dans le domaine"]).toBe("1 à 3 ans");
  });
});