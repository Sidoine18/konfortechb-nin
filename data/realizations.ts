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
  image?: string;
  gallery?: string[];
  featured?: boolean;
  relatedServices: string[];
};

export const realizations: Realization[] = [
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
    image: '/gallery/realizations/rams-basketball-academy-site-web-page-accueil.jpg',
    gallery: [
      '/gallery/realizations/rams-basketball-academy-site-web-presentation-academie.jpg',
      '/gallery/realizations/rams-basketball-academy-site-web-activites-basketball.jpg',
      '/gallery/realizations/rams-basketball-academy-site-web-contact-familles.jpg',
      '/gallery/realizations/rams-basketball-academy-site-web-version-mobile.jpg',
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
    image: '/gallery/realizations/js-tech-benin-site-web-page-accueil.jpg',
    gallery: [
      '/gallery/realizations/js-tech-benin-site-web-presentation-entreprise.jpg',
      '/gallery/realizations/js-tech-benin-site-web-services-activite.jpg',
      '/gallery/realizations/js-tech-benin-site-web-contact.jpg',
      '/gallery/realizations/js-tech-benin-site-web-version-mobile.jpg',
    ],
    featured: true,
    relatedServices: ['developpement-web'],
  },
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
    image: '/gallery/realizations/climconnect-plateforme-mise-en-relation-accueil.jpg',
    gallery: [
      '/gallery/realizations/climconnect-plateforme-demande-intervention-climatisation.jpg',
      '/gallery/realizations/climconnect-plateforme-liste-techniciens-froid.jpg',
      '/gallery/realizations/climconnect-plateforme-version-mobile.jpg',
    ],
    featured: true,
    relatedServices: ['developpement-web', 'application-web', 'froid-climatisation'],
  },
  {
    slug: 'le-sky-bar-restaurant',
    title: 'Le Sky Bar Restaurant',
    category: 'Site web',
    excerpt:
      "Site web pour un restaurant-bar, conçu pour présenter l'établissement et faciliter le contact des clients.",
    seoTitle: 'Le Sky Bar Restaurant — Réalisation',
    seoDescription:
      "Découvrez le site web réalisé par KONFORTECH BÉNIN pour Le Sky Bar Restaurant : présentation de l'établissement et accès rapide aux informations utiles.",
    // TODO : compléter à partir du site (https://sky-bar-resto.vercel.app) — rien d'inventé ici.
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
    image: '/gallery/realizations/le-sky-bar-restaurant-site-web-page-accueil.jpg',
    gallery: [
      '/gallery/realizations/le-sky-bar-restaurant-site-web-presentation-etablissement.jpg',
      '/gallery/realizations/le-sky-bar-restaurant-site-web-menu-carte.jpg',
      '/gallery/realizations/le-sky-bar-restaurant-site-web-ambiance-bar.jpg',
      '/gallery/realizations/le-sky-bar-restaurant-site-web-contact-reservation.jpg',
      '/gallery/realizations/le-sky-bar-restaurant-site-web-version-mobile.jpg',
    ],
    featured: false,
    relatedServices: ['developpement-web'],
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
    // TODO : compléter à partir du site (https://paquita-hotel-bar.vercel.app) — rien d'inventé ici.
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
    image: '/gallery/realizations/paquita-hotel-site-web-page-accueil.jpg',
    gallery: [
      '/gallery/realizations/paquita-hotel-site-web-presentation-hotel.jpg',
      '/gallery/realizations/paquita-hotel-site-web-chambres.jpg',
      '/gallery/realizations/paquita-hotel-site-web-bar-restaurant.jpg',
      '/gallery/realizations/paquita-hotel-site-web-contact-reservation.jpg',
      '/gallery/realizations/paquita-hotel-site-web-version-mobile.jpg',
    ],
    featured: false,
    relatedServices: ['developpement-web'],
  },
];

export const getRealization = (slug: string) => realizations.find((r) => r.slug === slug);
export const realizationSlugs = () => realizations.map((r) => r.slug);
export const featuredRealizations = () => realizations.filter((r) => r.featured);
