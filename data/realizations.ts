export type Realization = {
  slug: string;
  title: string;
  category: string;
  client?: string;
  year?: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  context: string;
  problem: string;
  solution: string;
  /** Fonctionnalités / interventions réellement livrées */
  features: string[];
  /** Technologies réellement utilisées — laisser vide si non confirmé */
  technologies?: string[];
  /** Résultats UNIQUEMENT s'ils sont vérifiables. Vide sinon. */
  results?: string[];
  externalUrl?: string;
  /** Image de couverture (chemin public). */
  image?: string;
  /** Texte alternatif de l'image de couverture (SEO + accessibilité). */
  imageAlt?: string;
  /** Images de la galerie (chemins publics). */
  gallery?: string[];
  /** Textes alternatifs de la galerie — MÊME ORDRE que `gallery`. */
  galleryAlts?: string[];
  featured?: boolean;
  relatedServices: string[];
};

/**
 * Dossier des visuels : public/gallery/realizations/
 * Convention de nommage (SEO) : {projet}-{sujet}-{detail}.jpg
 * → minuscules, sans accents, mots séparés par des tirets.
 * Si tu utilises .webp ou .png, change simplement l'extension ci-dessous.
 */
const g = (file: string) => `/gallery/realizations/${file}`;

export const realizations: Realization[] = [
  {
    slug: 'climconnect',
    title: 'ClimConnect',
    category: 'Solution numérique',
    excerpt:
      "Solution numérique de mise en relation entre clients et techniciens du froid et de la climatisation.",
    seoTitle: 'ClimConnect — Solution numérique',
    seoDescription:
      "ClimConnect, solution numérique développée par KONFORTECH BÉNIN pour mettre en relation les clients et les techniciens du froid et de la climatisation.",
    context:
      "Trouver un technicien du froid disponible et compétent repose encore largement sur le bouche-à-oreille, ce qui rallonge les délais d'intervention pour les clients et complique la prospection pour les techniciens.",
    problem:
      "Aucun point de rencontre structuré entre les personnes ayant besoin d'une intervention en climatisation et les techniciens capables de la réaliser.",
    solution:
      "ClimConnect est conçu comme une plateforme de mise en relation entre clients et techniciens du froid et de la climatisation, pensée pour simplifier la prise de contact et la demande d'intervention.",
    features: [
      'Mise en relation clients / techniciens du froid et de la climatisation',
      "Demande d'intervention structurée",
    ],
    image: g('climconnect-plateforme-mise-en-relation-accueil.jpg'),
    imageAlt:
      "Écran d'accueil de ClimConnect, plateforme de mise en relation entre clients et techniciens du froid et de la climatisation",
    gallery: [
      g('climconnect-plateforme-demande-intervention-climatisation.jpg'),
      g('climconnect-plateforme-liste-techniciens-froid.jpg'),
      g('climconnect-plateforme-version-mobile.jpg'),
    ],
    galleryAlts: [
      "Formulaire de demande d'intervention en climatisation sur ClimConnect",
      'Liste des techniciens du froid et de la climatisation sur ClimConnect',
      'Affichage mobile de la plateforme ClimConnect',
    ],
    featured: true,
    relatedServices: ['developpement-web', 'application-web', 'froid-climatisation'],
  },
  {
    slug: 'paquita-hotel',
    title: 'Paquita Hôtel',
    category: 'Site web',
    excerpt:
      "Site web pour un hôtel-bar, conçu pour présenter l'établissement, ses espaces et faciliter la prise de contact.",
    seoTitle: 'Paquita Hôtel — Réalisation',
    seoDescription:
      "Découvrez le site web réalisé par KONFORTECH BÉNIN pour Paquita Hôtel : présentation de l'hôtel, de ses espaces et accès rapide aux informations utiles.",
    context:
      "Paquita Hôtel souhaitait une présence en ligne claire pour présenter son établissement et permettre aux visiteurs de trouver facilement les informations utiles.",
    problem:
      "Sans site officiel, l'hôtel avait peu de moyens de présenter ses espaces et ses informations pratiques de façon centralisée.",
    solution:
      "Nous avons conçu et développé un site présentant l'hôtel et ses espaces, avec une navigation simple et un accès rapide aux moyens de contact.",
    features: [
      "Présentation de l'hôtel et de ses espaces",
      'Navigation claire sur mobile et ordinateur',
      'Accès aux moyens de contact',
    ],
    externalUrl: 'https://paquita-hotel-bar.vercel.app',
    image: g('paquita-hotel-site-web-page-accueil.jpg'),
    imageAlt: "Page d'accueil du site web de Paquita Hôtel, réalisé par KONFORTECH BÉNIN",
    gallery: [
      g('paquita-hotel-site-web-presentation-hotel.jpg'),
      g('paquita-hotel-site-web-chambres.jpg'),
      g('paquita-hotel-site-web-bar-restaurant.jpg'),
      g('paquita-hotel-site-web-contact-reservation.jpg'),
      g('paquita-hotel-site-web-version-mobile.jpg'),
    ],
    galleryAlts: [
      "Page de présentation de l'hôtel sur le site de Paquita Hôtel",
      'Présentation des chambres sur le site de Paquita Hôtel',
      "Espace bar de l'hôtel présenté sur le site de Paquita Hôtel",
      'Page de contact de Paquita Hôtel',
      'Affichage mobile du site de Paquita Hôtel',
    ],
    featured: false,
    relatedServices: ['developpement-web'],
  },
  {
    slug: 'rams-basketball-academy',
    title: 'RAMS Basketball Academy',
    category: 'Site web',
    excerpt:
      "Site web pour une académie de basketball, conçu pour présenter la structure et faciliter le contact des familles.",
    seoTitle: 'RAMS Basketball Academy — Réalisation',
    seoDescription:
      "Découvrez le site web réalisé par KONFORTECH BÉNIN pour RAMS Basketball Academy : présentation de la structure et mise en relation avec les familles.",
    context:
      "RAMS Basketball Academy avait besoin d'une présence en ligne claire pour présenter son académie, ses activités et permettre aux familles intéressées de la contacter facilement.",
    problem:
      "Sans site officiel, la structure dépendait uniquement du bouche-à-oreille et des réseaux sociaux pour se faire connaître, avec une information dispersée et difficile à retrouver.",
    solution:
      "Nous avons conçu et développé un site présentant l'académie, ses activités et ses informations pratiques, avec une navigation simple et un accès rapide aux moyens de contact.",
    features: [
      "Présentation de l'académie et de ses activités",
      'Pages informatives structurées',
      'Accès direct aux moyens de contact',
      'Affichage adapté aux mobiles',
    ],
    externalUrl: 'https://ramsbasketballacademy.com/',
    image: g('rams-basketball-academy-site-web-page-accueil.jpg'),
    imageAlt:
      "Page d'accueil du site web de RAMS Basketball Academy, réalisé par KONFORTECH BÉNIN",
    gallery: [
      g('rams-basketball-academy-site-web-presentation-academie.jpg'),
      g('rams-basketball-academy-site-web-activites-basketball.jpg'),
      g('rams-basketball-academy-site-web-contact-familles.jpg'),
      g('rams-basketball-academy-site-web-version-mobile.jpg'),
    ],
    galleryAlts: [
      "Page de présentation de l'académie sur le site de RAMS Basketball Academy",
      'Section des activités de basketball sur le site de RAMS Basketball Academy',
      'Page de contact destinée aux familles sur le site de RAMS Basketball Academy',
      'Affichage mobile du site de RAMS Basketball Academy',
    ],
    featured: true,
    relatedServices: ['developpement-web'],
  },
  {
    slug: 'js-tech-benin',
    title: 'JS TECH BÉNIN',
    category: 'Site web',
    excerpt:
      "Site web professionnel réalisé pour JS TECH BÉNIN afin de présenter son activité en ligne.",
    seoTitle: 'JS TECH BÉNIN — Réalisation',
    seoDescription:
      "Découvrez le site web réalisé par KONFORTECH BÉNIN pour JS TECH BÉNIN : présentation de l'activité et des services de l'entreprise.",
    context:
      "JS TECH BÉNIN souhaitait disposer d'un site officiel pour présenter son activité et ses services à ses clients et prospects.",
    problem:
      "L'entreprise ne disposait pas d'un point de référence en ligne permettant à ses prospects de comprendre son offre et de la contacter.",
    solution:
      "Nous avons développé un site présentant l'entreprise et son activité, avec une structure claire et des moyens de contact accessibles.",
    features: [
      "Présentation de l'entreprise et de son activité",
      'Structure de pages claire',
      'Moyens de contact accessibles',
      'Affichage adapté aux mobiles',
    ],
    externalUrl: 'https://jstechbenin.online/',
    image: g('js-tech-benin-site-web-page-accueil.jpg'),
    imageAlt: "Page d'accueil du site web de JS TECH BÉNIN, réalisé par KONFORTECH BÉNIN",
    gallery: [
      g('js-tech-benin-site-web-presentation-entreprise.jpg'),
      g('js-tech-benin-site-web-services-activite.jpg'),
      g('js-tech-benin-site-web-contact.jpg'),
      g('js-tech-benin-site-web-version-mobile.jpg'),
    ],
    galleryAlts: [
      "Page de présentation de l'entreprise sur le site de JS TECH BÉNIN",
      "Section des services et de l'activité sur le site de JS TECH BÉNIN",
      'Page de contact du site de JS TECH BÉNIN',
      'Affichage mobile du site de JS TECH BÉNIN',
    ],
    featured: true,
    relatedServices: ['developpement-web'],
  },
  {
    slug: 'le-sky-bar-restaurant',
    title: 'Le Sky Bar Restaurant',
    category: 'Site web',
    excerpt:
      'Site web pour un restaurant-bar, conçu pour présenter l’établissement et faciliter le contact des clients.',
    seoTitle: 'Le Sky Bar Restaurant — Réalisation',
    seoDescription:
      "Découvrez le site web réalisé par KONFORTECH BÉNIN pour Le Sky Bar Restaurant : présentation de l'établissement et accès rapide aux informations utiles.",
    context:
      "Le Sky Bar Restaurant souhaitait disposer d'une vitrine en ligne pour présenter son établissement et permettre à ses clients de trouver facilement les informations utiles.",
    problem:
      "Sans site officiel, l'établissement avait peu de moyens de présenter son ambiance et ses informations pratiques de façon claire et centralisée.",
    solution:
      "Nous avons conçu et développé un site présentant l'établissement, avec une navigation simple et un accès rapide aux moyens de contact.",
    features: [
      "Présentation de l'établissement",
      'Navigation claire sur mobile et ordinateur',
      'Accès aux moyens de contact',
    ],
    externalUrl: 'https://sky-bar-resto.vercel.app',
    image: g('le-sky-bar-restaurant-site-web-page-accueil.jpg'),
    imageAlt:
      "Page d'accueil du site web du Sky Bar Restaurant, réalisé par KONFORTECH BÉNIN",
    gallery: [
      g('le-sky-bar-restaurant-site-web-presentation-etablissement.jpg'),
      g('le-sky-bar-restaurant-site-web-menu-carte.jpg'),
      g('le-sky-bar-restaurant-site-web-ambiance-bar.jpg'),
      g('le-sky-bar-restaurant-site-web-contact-reservation.jpg'),
      g('le-sky-bar-restaurant-site-web-version-mobile.jpg'),
    ],
    galleryAlts: [
      "Page de présentation de l'établissement sur le site du Sky Bar Restaurant",
      'Page de la carte du Sky Bar Restaurant',
      "Ambiance du bar présentée sur le site du Sky Bar Restaurant",
      'Page de contact du Sky Bar Restaurant',
      'Affichage mobile du site du Sky Bar Restaurant',
    ],
    featured: false,
    relatedServices: ['developpement-web'],
  },
];

export const getRealization = (slug: string) => realizations.find((r) => r.slug === slug);
export const realizationSlugs = () => realizations.map((r) => r.slug);
export const featuredRealizations = () => realizations.filter((r) => r.featured);
