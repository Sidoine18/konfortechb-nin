/**
 * SECTEURS D'ACTIVITÉ — source unique de vérité.
 * ▶ POUR AJOUTER UN SECTEUR : ajoutez un objet ci-dessous. La page
 *   /secteurs/[slug], son SEO et son entrée au sitemap sont automatiques.
 */

export type Sector = {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  challenges: string[];
  answers: string[];
  relatedServices: string[];
  image?: string;
};

export const sectors: Sector[] = [
  {
    slug: 'hotels',
    title: 'Hôtels',
    excerpt: "Confort client et fiabilité technique, même en pleine saison.",
    seoTitle: 'Solutions pour Hôtels au Bénin',
    seoDescription:
      "KONFORTECH BÉNIN accompagne les hôtels au Bénin : climatisation, sécurité électronique, plomberie et présence en ligne.",
    intro:
      "Dans l'hôtellerie, une panne de climatisation en haute saison se traduit immédiatement en avis négatifs et en nuits perdues. La fiabilité technique fait partie de l'expérience client.",
    challenges: [
      'Climatisation en panne pendant la haute saison',
      'Visibilité en ligne insuffisante face à la concurrence',
      'Sécurité des locaux et des biens des clients',
      'Installations sanitaires sollicitées en continu',
    ],
    answers: [
      "Contrats d'entretien préventif planifiés hors périodes de forte affluence",
      'Site web et présence en ligne optimisés pour attirer des réservations directes',
      "Installation de vidéosurveillance et de contrôle d'accès",
      'Maintenance de plomberie et intervention rapide',
    ],
    relatedServices: ['froid-climatisation', 'videosurveillance', 'developpement-web', 'plomberie'],
  },
  {
    slug: 'restaurants',
    title: 'Restaurants',
    excerpt: "Chaîne du froid maîtrisée et visibilité locale.",
    seoTitle: 'Solutions pour Restaurants au Bénin',
    seoDescription:
      "KONFORTECH BÉNIN accompagne les restaurants au Bénin : froid commercial, électricité de cuisine et visibilité en ligne.",
    intro:
      "En restauration, une rupture de la chaîne du froid signifie des denrées perdues et un risque sanitaire. Les installations techniques travaillent en continu, souvent dans des conditions difficiles.",
    challenges: [
      'Rupture de la chaîne du froid et perte de denrées',
      'Installations électriques fortement sollicitées en cuisine',
      'Difficulté à être trouvé par de nouveaux clients en ligne',
    ],
    answers: [
      'Installation et entretien de froid commercial adapté à la restauration',
      'Mises aux normes et dépannage électrique réactif',
      'Référencement local et présence en ligne optimisée',
    ],
    relatedServices: ['froid-climatisation', 'electricite', 'seo'],
  },
  {
    slug: 'entreprises',
    title: 'Entreprises & PME',
    excerpt: "Outils digitaux efficaces et environnement de travail fiable.",
    seoTitle: 'Solutions pour Entreprises & PME au Bénin',
    seoDescription:
      "KONFORTECH BÉNIN accompagne les entreprises et PME au Bénin : applications métier, sites professionnels et maintenance technique des locaux.",
    intro:
      "Une PME perd du temps sur deux fronts : des outils internes dispersés qui ralentissent les équipes, et des locaux dont la maintenance technique est subie plutôt que planifiée.",
    challenges: [
      'Processus internes dispersés entre fichiers et papier',
      "Site web qui ne reflète pas le sérieux de l'entreprise",
      'Climatisation des bureaux mal entretenue',
      'Dépendance aux coupures du réseau électrique',
    ],
    answers: [
      'Applications web sur mesure pour centraliser vos processus',
      'Site professionnel pensé pour la crédibilité et la conversion',
      'Contrats de maintenance pour vos installations techniques',
      'Étude de solutions solaires ou hybrides',
    ],
    relatedServices: ['application-web', 'developpement-web', 'froid-climatisation', 'energie-solaire'],
  },
  {
    slug: 'ecoles',
    title: 'Écoles & centres de formation',
    excerpt: "Conditions d'apprentissage et communication avec les familles.",
    seoTitle: 'Solutions pour Écoles & Centres de Formation au Bénin',
    seoDescription:
      "KONFORTECH BÉNIN accompagne les écoles et centres de formation au Bénin : climatisation des salles, installations électriques et présence en ligne.",
    intro:
      "La chaleur en salle de classe pèse directement sur l'attention des élèves. En parallèle, les familles cherchent de plus en plus d'informations en ligne avant de choisir un établissement.",
    challenges: [
      'Salles de classe inconfortables en saison chaude',
      'Installations électriques vieillissantes',
      'Communication avec les familles peu structurée en ligne',
    ],
    answers: [
      'Installation et entretien de climatisation pour salles et bureaux',
      'Mise aux normes des installations électriques',
      "Site internet clair pour présenter l'établissement et ses programmes",
    ],
    relatedServices: ['froid-climatisation', 'electricite', 'developpement-web'],
  },
  {
    slug: 'industries',
    title: 'Industries',
    excerpt: "Continuité de production et fiabilité des équipements.",
    seoTitle: 'Solutions pour Industries au Bénin',
    seoDescription:
      "KONFORTECH BÉNIN accompagne les industries au Bénin : maintenance industrielle, froid technique et solutions énergétiques.",
    intro:
      "En industrie, chaque heure d'arrêt se chiffre. La maintenance préventive et l'autonomie énergétique ne sont pas des options mais des conditions de production.",
    challenges: [
      'Arrêts de production liés à des pannes non anticipées',
      'Dépendance forte au réseau électrique',
      'Besoin de froid industriel fiable et constant',
    ],
    answers: [
      'Contrats de maintenance préventive et corrective',
      'Étude et installation de solutions solaires complémentaires',
      'Installation et entretien de systèmes de froid industriel',
    ],
    relatedServices: ['maintenance-industrielle', 'energie-solaire', 'froid-climatisation'],
  },
  {
    slug: 'commerces',
    title: 'Commerces',
    excerpt: "Visibilité, confort en point de vente et sécurité.",
    seoTitle: 'Solutions pour Commerces au Bénin',
    seoDescription:
      "KONFORTECH BÉNIN accompagne les commerces au Bénin : référencement local, climatisation du point de vente et vidéosurveillance.",
    intro:
      "Un commerce se joue sur trois plans : être trouvé, offrir un point de vente agréable, et protéger son stock.",
    challenges: [
      'Peu de visibilité en ligne face à la concurrence',
      'Climatisation du point de vente peu performante',
      "Risques liés au vol ou à l'intrusion",
    ],
    answers: [
      'Référencement local pour apparaître dans les recherches de proximité',
      'Installation et entretien de climatisation pour points de vente',
      'Vidéosurveillance dimensionnée pour votre local',
    ],
    relatedServices: ['seo', 'froid-climatisation', 'videosurveillance'],
  },
  {
    slug: 'particuliers',
    title: 'Particuliers',
    excerpt: "Confort, sécurité et autonomie énergétique au quotidien.",
    seoTitle: 'Solutions pour Particuliers au Bénin',
    seoDescription:
      "KONFORTECH BÉNIN accompagne les particuliers au Bénin : climatisation résidentielle, électricité, plomberie et énergie solaire.",
    intro:
      "À la maison, les pannes techniques arrivent rarement au bon moment. Un entretien régulier coûte presque toujours moins cher qu'une réparation en urgence.",
    challenges: [
      'Climatiseur qui consomme trop ou tombe souvent en panne',
      'Installations électriques ou de plomberie vieillissantes',
      'Coupures de courant fréquentes',
    ],
    answers: [
      'Installation et entretien de climatisation résidentielle',
      'Dépannage électrique et plomberie réactif',
      'Étude de solutions solaires adaptées à votre consommation',
    ],
    relatedServices: ['froid-climatisation', 'electricite', 'plomberie', 'energie-solaire'],
  },
];

export const getSector = (slug: string) => sectors.find((s) => s.slug === slug);
export const sectorSlugs = () => sectors.map((s) => s.slug);
