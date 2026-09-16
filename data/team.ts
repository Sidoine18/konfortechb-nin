/**
 * ÉQUIPE — source unique de vérité.
 *
 * ▶ POUR AJOUTER UN MEMBRE :
 *   1. Déposez sa photo dans  public/gallery/team/
 *      → format CARRÉ recommandé (ex. 800 × 800 px), nom de fichier en
 *        minuscules sans accent : prenom-nom.jpg
 *   2. Copiez un bloc ci-dessous et modifiez-le.
 *   3. Sauvegardez : le membre apparaît automatiquement sur /equipe
 *      (et sur /direction s'il a `isDirector: true`).
 *
 * ⚠️ RÈGLE ABSOLUE : n'inscrivez que des personnes réelles et des
 *   informations exactes. Ne jamais inventer de diplôme, de titre,
 *   d'années d'expérience ou de certification.
 *   Un champ que vous n'avez pas ? Laissez-le absent — la section
 *   correspondante ne s'affichera simplement pas.
 */

export type TeamMember = {
  /** Identifiant unique en minuscules, sans accent ni espace */
  slug: string;
  /** Nom complet */
  name: string;
  /** Fonction dans l'entreprise */
  role: string;
  /** Chemin de la photo depuis /public — laisser absent si pas de photo */
  photo?: string;
  /** Texte alternatif de la photo (accessibilité + SEO images) */
  photoAlt?: string;
  /** Courte présentation — uniquement des faits réels */
  bio?: string;
  /** Domaines d'intervention réels de la personne */
  expertise?: string[];
  /** Email professionnel — uniquement s'il est destiné à être public */
  email?: string;
  /** URL du profil LinkedIn */
  linkedin?: string;
  /** true = mis en avant sur la page /direction */
  isDirector?: boolean;
  /** Ordre d'affichage (plus petit = affiché en premier) */
  order: number;
};

export const team: TeamMember[] = [
  {
    slug: 'sidoine-ahizigbe',
    name: 'Sidoine Ahizigbe',
    role: 'Fondateur / Direction',
    photo: '/gallery/team/sidoine-ahizigbe.jpg',
    photoAlt: 'Sidoine Ahizigbe, fondateur et dirigeant de KONFORTECH BÉNIN',
    isDirector: true,
    order: 1,
    // bio, expertise, email et linkedin volontairement absents :
    // à compléter uniquement avec des informations réelles et vérifiées.
  },

  /* ------------------------------------------------------------------
   * EXEMPLE — copiez ce bloc, retirez les /* *\/ autour, puis modifiez :
   *
   * {
   *   slug: 'prenom-nom',
   *   name: 'Prénom NOM',
   *   role: 'Technicien froid & climatisation',
   *   photo: '/gallery/team/prenom-nom.jpg',
   *   photoAlt: 'Prénom NOM, technicien chez KONFORTECH BÉNIN',
   *   bio: "Une ou deux phrases factuelles sur son rôle dans l'entreprise.",
   *   expertise: ['Installation de climatisation', 'Maintenance préventive'],
   *   email: 'prenom@konfortechbenin.online',
   *   linkedin: 'https://www.linkedin.com/in/...',
   *   order: 2,
   * },
   * ------------------------------------------------------------------ */
];

/** Membres triés par ordre d'affichage. */
export const sortedTeam = () => [...team].sort((a, b) => a.order - b.order);

/** Le(s) dirigeant(s), pour la page /direction. */
export const directors = () => sortedTeam().filter((m) => m.isDirector);

/** Les autres membres (hors direction). */
export const staff = () => sortedTeam().filter((m) => !m.isDirector);

export const getMember = (slug: string) => team.find((m) => m.slug === slug);
