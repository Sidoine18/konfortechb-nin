/**
 * OFFRES D'EMPLOI — source unique de vérité.
 * ▶ POUR AJOUTER UNE OFFRE : ajoutez un objet ci-dessous avec active: true.
 * ⚠️ Ne publiez que des postes réellement ouverts. Le JSON-LD JobPosting
 *   n'est généré que pour les offres actives, et `validThrough` reflète la
 *   date limite réelle de candidature.
 */

export type Job = {
  slug: string;
  title: string;
  type: string;
  location: string;
  active: boolean;
  excerpt: string;
  seoDescription: string;
  /** Image d'illustration (affiche de recrutement) — utilisée en aperçu de la page et en Open Graph */
  image?: string;
  ogImage?: string;
  imageAlt?: string;
  missions: string[];
  profile: string[];
  /** Atouts appréciés, sans être obligatoires */
  perks?: string[];
  /** Raisons de nous rejoindre, affichées en bandeau */
  whyJoin?: string[];
  /** Éléments de rémunération réellement communiqués (pas de montant inventé) */
  compensation?: string[];
  datePosted: string; // ISO AAAA-MM-JJ
  /** Date et heure limites de candidature, format ISO avec fuseau (Bénin = +01:00) */
  deadline: string;
};

export const jobs: Job[] = [
  {
    slug: 'responsable-commercial',
    title: 'Responsable Commercial (H/F)',
    type: 'Temps plein',
    location: 'Abomey, Zou — Bénin',
    active: true,
    excerpt:
      'Développez le portefeuille clients de KONFORTECH BÉNIN sur nos deux pôles : développement web et froid & climatisation.',
    seoDescription:
      'KONFORTECH BÉNIN recrute un Responsable Commercial (H/F) à Abomey. Développement du portefeuille clients, prospection et réponse aux appels d’offres. Candidatures ouvertes jusqu’au 31 décembre 2027.',
    image: '/gallery/jobs/responsable-commercial.jpg',
    ogImage: '/gallery/og/responsable-commercial-og.jpg',
    imageAlt: "Affiche de recrutement KONFORTECH BÉNIN — Responsable Commercial (H/F)",
    missions: [
      'Développer et gérer le portefeuille clients',
      'Prospecter de nouveaux marchés publics et privés',
      'Identifier les opportunités commerciales',
      'Préparer et négocier les devis et contrats',
      'Répondre aux appels d’offres',
      'Élaborer et mettre en œuvre la stratégie commerciale',
      'Assurer le suivi des clients avant, pendant et après les prestations',
      'Développer des partenariats stratégiques',
      'Réaliser une veille concurrentielle',
      'Produire des rapports réguliers à la Direction',
    ],
    profile: [
      'Excellentes capacités de prospection et de négociation',
      'Bonne maîtrise de la gestion commerciale',
      'Capacité d’analyse et de réflexion stratégique',
      'Maîtrise de la gestion des contrats',
      'Excellentes qualités relationnelles et rédactionnelles',
      'Sens de l’organisation, autonomie et esprit d’initiative',
      'Bonne maîtrise des outils numériques',
    ],
    perks: [
      'Expérience dans le développement commercial',
      'Connaissance des secteurs du digital, du développement web ou de la climatisation',
      'Expérience dans la réponse aux appels d’offres',
      'Réseau professionnel au Bénin (un avantage)',
    ],
    whyJoin: [
      'Entreprise ambitieuse et innovante',
      'Projets variés et à fort impact',
      'Perspectives d’évolution réelles',
      'Rémunération motivationnelle et attractive',
    ],
    compensation: [
      'Commission attractive sur chaque contrat conclu',
      'Primes de performance selon les résultats',
    ],
    datePosted: '2026-09-17',
    deadline: '2027-12-31T23:59:00+01:00',
  },
];

export const activeJobs = () => jobs.filter((j) => j.active);
export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);
export const jobSlugs = () => activeJobs().map((j) => j.slug);
