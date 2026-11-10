export const EVENT = {
  name: "BUSINESS SUMMIT – MEB 2026",
  slogan: "Le déclic entrepreneurial.",
  theme: "De la compétence à l'entreprise : entrepreneuriat technique et innovation numérique",
  dateLabel: "Samedi 21 novembre 2026",
  dateISO: "2026-11-21T09:00:00+01:00",
  time: "09h00",
  place: "Salle de 200 places, site universitaire d'Abomey, Bénin",
  capacity: 200,
  whatsappGroup:
    "https://chat.whatsapp.com/IF4OWmTlWGQLKtQNNOy1l2?s=cl&p=a&mlu=4&ilr=4&iam=2",
  contactPhones: ["01 95 49 83 59", "01 54 16 30 67"],
  website: "https://konfortechbenin.online",
};

export const COMMUNES: Record<string, string[]> = {
  Alibori: ["Banikoara", "Gogounou", "Kandi", "Karimama", "Malanville", "Ségbana"],
  Atacora: ["Boukoumbé", "Cobly", "Kérou", "Kouandé", "Matéri", "Natitingou", "Péhunco", "Tanguiéta", "Toucountouna"],
  Atlantique: ["Abomey-Calavi", "Allada", "Kpomassè", "Ouidah", "Sô-Ava", "Toffo", "Tori-Bossito", "Zè"],
  Borgou: ["Bembèrèkè", "Kalalé", "N'Dali", "Nikki", "Parakou", "Pèrèrè", "Sinendé", "Tchaourou"],
  Collines: ["Bantè", "Dassa-Zoumè", "Glazoué", "Ouèssè", "Savalou", "Savè"],
  Couffo: ["Aplahoué", "Djakotomey", "Dogbo", "Klouékanmè", "Lalo", "Toviklin"],
  Donga: ["Bassila", "Copargo", "Djougou", "Ouaké"],
  Littoral: ["Cotonou"],
  Mono: ["Athiémé", "Bopa", "Comè", "Grand-Popo", "Houéyogbé", "Lokossa"],
  Ouémé: ["Adjarra", "Adjohoun", "Aguégués", "Akpro-Missérété", "Avrankou", "Bonou", "Dangbo", "Porto-Novo", "Sèmè-Kpodji"],
  Plateau: ["Adja-Ouèrè", "Ifangni", "Kétou", "Pobè", "Sakété"],
  Zou: ["Abomey", "Agbangnizoun", "Bohicon", "Covè", "Djidja", "Ouinhi", "Zagnanado", "Za-Kpota", "Zogbodomey"],
};
export const DEPARTEMENTS = [...Object.keys(COMMUNES), "Hors du Bénin"];

export const SEXES = ["Masculin", "Féminin", "Préfère ne pas répondre"];
export const PROFILS = [
  "Étudiant", "Entrepreneur", "Porteur de projet", "Salarié", "Enseignant",
  "Chercheur", "Professionnel indépendant", "Autre",
];
export const OUI_NON = ["Oui", "Non"];
export const ANCIENNETE = [
  "Je débute (moins d'1 an)", "1 à 3 ans", "3 à 5 ans", "Plus de 5 ans", "Non concerné",
];
export const SUJETS = [
  "Panels", "Masterclass", "Entrepreneuriat technique", "Innovation numérique",
  "Financement", "Réseautage", "Développement professionnel", "Autres",
];
export const SOURCES = [
  "WhatsApp", "Facebook", "Affiche", "Site KONFORTECH BÉNIN", "Établissement / université",
  "Bouche-à-oreille", "ADPME", "Autre",
];

/**
 * Programme confirmé. Seul l’horaire d’ouverture a été communiqué.
 * Les autres activités sont présentées dans leur ordre, sans horaire inventé.
 */
export const PROGRAMME: { horaire: string; titre: string; detail: string }[] = [
  { horaire: "09h00", titre: "Accueil & ouverture", detail: "Accueil des participants et mot d'ouverture." },
  { horaire: "", titre: "Panels", detail: "Échanges autour du thème : de la compétence à l'entreprise." },
  { horaire: "", titre: "Masterclass", detail: "Sessions pratiques sur l'entrepreneuriat technique et l'innovation numérique." },
  { horaire: "", titre: "Échanges avec le public", detail: "Questions, témoignages et partage d'expériences." },
  { horaire: "", titre: "Réseautage", detail: "Rencontres entre étudiants, entrepreneurs et professionnels." },
];
