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
    email: 'sidoineah964@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sidoine-ahizigbe-34846a335/?isSelfProfile=true',
    isDirector: true,
    order: 1,
  },

  {
    slug: 'gloria-tossou',
    name: 'Gloria Tossou',
    role: 'Responsable Commerciale',
    photo: '/gallery/team/gloria-tossou.jpg',
    photoAlt: 'Gloria Tossou, responsable commerciale chez KONFORTECH BÉNIN',
    //bio: "Une ou deux phrases factuelles sur son rôle dans l'entreprise.",
    expertise: ['Aquisition client'],
    email: 'tossouseminvo@gmail.com',
    linkedin: 'https://www.linkedin.com/in/gloria-tossou-654483384',
    order: 2,
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
