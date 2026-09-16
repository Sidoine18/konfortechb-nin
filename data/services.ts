/**
 * SERVICES — source unique de vérité.
 *
 * ▶ POUR AJOUTER UN SERVICE : ajoutez un objet dans le tableau ci-dessous.
 *   Sa page (/services/[slug]), son SEO, son JSON-LD, son entrée au sitemap
 *   et son maillage interne sont générés automatiquement.
 *
 * ⚠️ N'ajoutez que des prestations réellement proposées par KONFORTECH BÉNIN.
 */

export type ServicePillar = 'digital' | 'technique';

export type Service = {
  slug: string;
  title: string;
  shortTitle?: string;
  pillar: ServicePillar;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  /** Problème réel rencontré par le client */
  problem: string;
  /** Réponse apportée par KONFORTECH BÉNIN */
  solution: string;
  /** Prestations concrètes incluses */
  deliverables: string[];
  /** Bénéfices concrets, sans promesse chiffrée inventée */
  benefits: string[];
  /** Étapes d'intervention */
  process: { step: string; detail: string }[];
  faq: { question: string; answer: string }[];
  /** Slugs de services liés (maillage interne) */
  related: string[];
  /** Slugs de secteurs concernés */
  sectors: string[];
  image?: string;
};

export const services: Service[] = [
  {
    slug: 'developpement-web',
    title: 'Développement Web',
    pillar: 'digital',
    excerpt:
      "Sites professionnels, applications métier et e-commerce conçus pour être rapides, sécurisés et trouvables sur Google.",
    seoTitle: 'Développement Web au Bénin — Sites & Applications',
    seoDescription:
      "Développement de sites internet et d'applications web professionnels au Bénin par KONFORTECH BÉNIN : conception, performance et référencement dès la première ligne de code.",
    problem:
      "Beaucoup d'entreprises au Bénin disposent d'un site qui ne reflète pas leur sérieux, se charge lentement sur mobile, ou n'apparaît jamais dans les résultats de recherche de leurs futurs clients.",
    solution:
      "Nous concevons des sites et applications pensés d'abord pour l'usage réel : chargement rapide même sur une connexion mobile limitée, structure claire pour les moteurs de recherche, et interface compréhensible sans formation.",
    deliverables: [
      'Sites vitrines professionnels',
      'Applications web métier sur mesure',
      'Boutiques en ligne (e-commerce)',
      'Tableaux de bord et outils internes',
      'Refonte de site existant',
      'Maintenance et évolutions',
    ],
    benefits: [
      'Un site conçu pour la vitesse, critère décisif sur mobile comme pour Google',
      'Une architecture propre, facile à faire évoluer dans le temps',
      'Les fondamentaux SEO intégrés dès la conception, pas ajoutés après coup',
      'Un interlocuteur unique du cahier des charges à la maintenance',
    ],
    process: [
      { step: 'Comprendre', detail: "Analyse de votre activité, de vos utilisateurs et de vos objectifs réels." },
      { step: 'Concevoir', detail: 'Architecture, maquettes et validation avant toute ligne de code.' },
      { step: 'Développer', detail: 'Développement par étapes, avec des points de validation réguliers.' },
      { step: 'Mettre en ligne', detail: 'Déploiement, configuration du domaine et vérifications techniques.' },
      { step: 'Maintenir', detail: 'Mises à jour, sauvegardes et support après la livraison.' },
    ],
    faq: [
      {
        question: 'Combien de temps faut-il pour créer un site professionnel ?',
        answer:
          "Cela dépend de la complexité du projet. Un site vitrine peut être livré en quelques semaines ; une application métier demande davantage de temps. Nous vous communiquons un délai précis dès le devis.",
      },
      {
        question: 'Le site sera-t-il optimisé pour Google ?',
        answer:
          "Oui. Chaque site que nous développons intègre les bonnes pratiques SEO techniques dès sa conception : vitesse, structure des pages, balises et données structurées.",
      },
      {
        question: 'Puis-je modifier le contenu moi-même après la livraison ?',
        answer:
          "Selon la solution retenue, nous pouvons vous former à la mise à jour des contenus essentiels ou intégrer une interface d'administration adaptée à votre équipe.",
      },
    ],
    related: ['application-web', 'seo'],
    sectors: ['entreprises', 'commerces', 'hotels'],
  },
  {
    slug: 'application-web',
    title: 'Applications Web',
    pillar: 'digital',
    excerpt:
      "Outils métier sur mesure pour centraliser, suivre et automatiser vos processus internes.",
    seoTitle: "Développement d'Applications Web & Outils Métier au Bénin",
    seoDescription:
      "Applications web sur mesure au Bénin : gestion interne, suivi d'activité, tableaux de bord et automatisation, développées par KONFORTECH BÉNIN.",
    problem:
      "Des processus encore gérés sur papier ou dans des fichiers dispersés : informations perdues, double saisie, et aucune vision d'ensemble de l'activité.",
    solution:
      "Nous développons des applications web construites autour de vos processus réels — pas d'un modèle générique — et pensées pour être réellement utilisées par vos équipes au quotidien.",
    deliverables: [
      'Applications de gestion interne',
      'Suivi de stocks, clients ou dossiers',
      'Espaces clients et portails sécurisés',
      'Tableaux de bord de pilotage',
      'Automatisation de tâches répétitives',
      'Intégration avec vos outils existants',
    ],
    benefits: [
      'Une application conçue autour de vos processus réels',
      'Une interface simple, utilisable sur ordinateur comme sur mobile',
      'Une architecture évolutive, prête à grandir avec votre activité',
      'Formation et accompagnement de vos équipes inclus',
    ],
    process: [
      { step: 'Cadrer', detail: "Analyse de vos processus métier et des points de friction actuels." },
      { step: 'Prototyper', detail: 'Maquettes fonctionnelles validées avant développement.' },
      { step: 'Développer', detail: 'Construction par modules, testés au fur et à mesure.' },
      { step: 'Déployer', detail: 'Mise en production et migration des données existantes.' },
      { step: 'Accompagner', detail: 'Formation des utilisateurs et support continu.' },
    ],
    faq: [
      {
        question: 'Quelle différence entre un site web et une application web ?',
        answer:
          "Un site web présente votre activité à vos visiteurs. Une application web permet à vos équipes ou vos clients d'agir : saisir, suivre et gérer des données au quotidien.",
      },
      {
        question: "L'application fonctionnera-t-elle sur mobile ?",
        answer:
          'Oui, nos applications sont conçues pour être utilisables aussi bien sur ordinateur que sur smartphone ou tablette.',
      },
    ],
    related: ['developpement-web', 'seo'],
    sectors: ['entreprises', 'industries', 'ecoles'],
  },
  {
    slug: 'seo',
    title: 'SEO & Visibilité',
    pillar: 'digital',
    excerpt:
      'Référencement technique, local et éditorial pour être trouvé sur les recherches qui comptent pour votre activité.',
    seoTitle: 'SEO & Référencement Google au Bénin',
    seoDescription:
      "Services SEO au Bénin : référencement technique, SEO local et stratégie de contenu par KONFORTECH BÉNIN pour une visibilité durable sur Google.",
    problem:
      "Avoir un site ne sert à rien s'il n'apparaît jamais dans les résultats de recherche. Beaucoup d'entreprises investissent dans un site, puis constatent qu'aucun client ne le trouve.",
    solution:
      "Nous travaillons le référencement sur trois axes complémentaires : la technique (vitesse, structure, indexation), le local (recherches géolocalisées, Google Business Profile) et le contenu (répondre aux questions réelles de vos futurs clients).",
    deliverables: [
      'Audit SEO technique complet',
      'Optimisation de la vitesse et des Core Web Vitals',
      'SEO local et cohérence des informations',
      'Optimisation des titres, balises et structure',
      'Stratégie de contenu et rédaction',
      'Suivi de positionnement et reporting',
    ],
    benefits: [
      'Une approche honnête, sans promesse de résultat immédiat ou artificiel',
      'Un travail à la fois technique, local et éditorial',
      'Une cohérence assurée entre votre site et vos fiches en ligne',
      'Des progrès mesurables et documentés dans le temps',
    ],
    process: [
      { step: 'Auditer', detail: "Analyse technique du site, de son indexation et de sa concurrence." },
      { step: 'Prioriser', detail: 'Identification des corrections à fort impact en premier.' },
      { step: 'Corriger', detail: 'Mise en œuvre des optimisations techniques et structurelles.' },
      { step: 'Publier', detail: 'Création de contenus répondant aux recherches réelles.' },
      { step: 'Suivre', detail: 'Mesure des positions et ajustements réguliers.' },
    ],
    faq: [
      {
        question: 'En combien de temps voit-on des résultats en SEO ?',
        answer:
          "Le référencement naturel est un travail de fond. Les premiers effets sont généralement visibles après plusieurs semaines à quelques mois, selon la concurrence sur vos mots-clés. Aucun prestataire sérieux ne peut garantir un délai précis.",
      },
      {
        question: 'Le SEO est-il inclus dans la création de mon site ?',
        answer:
          'Les fondamentaux techniques du SEO sont intégrés dans chaque site que nous créons. Un accompagnement SEO continu (contenu, suivi, optimisation) peut être ajouté en complément.',
      },
    ],
    related: ['developpement-web', 'application-web'],
    sectors: ['commerces', 'hotels', 'entreprises'],
  },
  {
    slug: 'froid-climatisation',
    title: 'Froid & Climatisation',
    pillar: 'technique',
    excerpt:
      "Installation, entretien et dépannage de climatisation, du résidentiel au froid industriel.",
    seoTitle: 'Froid & Climatisation au Bénin — Installation, Entretien, Dépannage',
    seoDescription:
      "Installation, entretien et dépannage de climatisation et de froid industriel au Bénin par KONFORTECH BÉNIN. Intervention résidentielle, commerciale et industrielle.",
    problem:
      "La chaleur rend la climatisation indispensable. Une installation mal réalisée ou un entretien négligé se traduisent vite par des pannes répétées, une surconsommation d'électricité et un inconfort évitable.",
    solution:
      "Nous diagnostiquons avant d'intervenir, installons proprement et entretenons dans la durée — plutôt que de remplacer systématiquement du matériel qui pourrait être réparé.",
    deliverables: [
      'Installation de climatiseurs split et multi-split',
      'Entretien préventif périodique',
      'Dépannage et réparation',
      'Diagnostic technique avant intervention',
      'Climatisation résidentielle et professionnelle',
      'Froid commercial et industriel',
    ],
    benefits: [
      "Un diagnostic précis avant toute intervention, sans remplacement systématique",
      "Un entretien préventif qui réduit les pannes et la consommation électrique",
      'Des interventions résidentielles, professionnelles et industrielles',
      'Une disponibilité rapide en cas de panne urgente',
    ],
    process: [
      { step: 'Évaluer', detail: "Visite technique et analyse de vos besoins réels de refroidissement." },
      { step: 'Dimensionner', detail: 'Choix du matériel adapté à la surface et à l’usage.' },
      { step: 'Installer', detail: 'Pose conforme aux règles de l’art par des techniciens qualifiés.' },
      { step: 'Entretenir', detail: 'Contrôles périodiques pour préserver performance et durée de vie.' },
      { step: 'Dépanner', detail: 'Intervention rapide en cas de panne ou de baisse de performance.' },
    ],
    faq: [
      {
        question: 'À quelle fréquence faut-il entretenir un climatiseur ?',
        answer:
          "Un entretien tous les six mois est généralement recommandé pour préserver les performances et la durée de vie de l'appareil, particulièrement dans un climat chaud et poussiéreux.",
      },
      {
        question: 'Intervenez-vous pour du froid industriel ?',
        answer:
          'Oui, nous intervenons aussi bien sur la climatisation résidentielle que sur le froid commercial et industriel : chambres froides, vitrines réfrigérées et systèmes de production.',
      },
      {
        question: 'Que faire en cas de panne urgente ?',
        answer:
          "Contactez-nous par téléphone ou WhatsApp. Nous vous indiquons les premières vérifications à effectuer et organisons une intervention dans les meilleurs délais.",
      },
    ],
    related: ['maintenance-industrielle', 'electricite'],
    sectors: ['hotels', 'restaurants', 'commerces', 'particuliers'],
  },
  {
    slug: 'maintenance-industrielle',
    title: 'Maintenance industrielle',
    pillar: 'technique',
    excerpt:
      'Maintenance préventive et corrective de vos équipements techniques, pour limiter les arrêts de production.',
    seoTitle: 'Maintenance Industrielle au Bénin',
    seoDescription:
      "Maintenance industrielle préventive et corrective au Bénin par KONFORTECH BÉNIN : diagnostic, contrats de maintenance et optimisation d'équipements.",
    problem:
      "Dans un environnement industriel, une panne non anticipée coûte toujours plus cher qu'un entretien régulier — en réparation comme en production perdue.",
    solution:
      "Nous mettons en place une maintenance structurée : contrôles préventifs planifiés, intervention corrective rapide, et recommandations d'optimisation basées sur l'historique de vos équipements.",
    deliverables: [
      'Maintenance préventive planifiée',
      'Maintenance corrective et dépannage',
      "Diagnostic technique d'équipements",
      'Contrats de maintenance sur mesure',
      'Optimisation des installations',
      'Suivi et historique des interventions',
    ],
    benefits: [
      'Moins d’arrêts de production imprévus',
      'Une meilleure durée de vie de vos équipements techniques',
      'Un interlocuteur technique unique et disponible',
      'Un contrat adapté au rythme réel de votre production',
    ],
    process: [
      { step: 'Inventorier', detail: 'Recensement des équipements et de leur criticité.' },
      { step: 'Planifier', detail: 'Calendrier de maintenance adapté à votre production.' },
      { step: 'Intervenir', detail: 'Contrôles préventifs et réparations correctives.' },
      { step: 'Documenter', detail: 'Historique des interventions pour un pilotage clair.' },
      { step: 'Améliorer', detail: "Recommandations d'optimisation sur la base du suivi." },
    ],
    faq: [
      {
        question: 'Quelle différence entre maintenance préventive et corrective ?',
        answer:
          'La maintenance préventive anticipe les pannes par des contrôles réguliers. La maintenance corrective intervient après une panne pour la résoudre. Les deux sont complémentaires.',
      },
      {
        question: 'Proposez-vous des contrats annuels ?',
        answer:
          'Oui, nous pouvons mettre en place un contrat de maintenance planifié, adapté au rythme et aux besoins de votre unité de production.',
      },
    ],
    related: ['froid-climatisation', 'electricite'],
    sectors: ['industries', 'entreprises'],
  },
  {
    slug: 'electricite',
    title: 'Électricité',
    pillar: 'technique',
    excerpt: 'Installations électriques neuves, mises aux normes et dépannage, pour particuliers et professionnels.',
    seoTitle: 'Électricité Bâtiment & Professionnelle au Bénin',
    seoDescription:
      "Installation, dépannage et maintenance électrique au Bénin par KONFORTECH BÉNIN : tableaux électriques, mises aux normes et installations professionnelles.",
    problem:
      "Une installation électrique mal réalisée est à la fois un risque pour les personnes et une source de pannes récurrentes coûteuses.",
    solution:
      "Nous réalisons des installations conformes aux règles de sécurité, diagnostiquons les installations existantes et intervenons rapidement en cas de panne.",
    deliverables: [
      'Installations électriques neuves',
      'Dépannage et recherche de panne',
      'Tableaux électriques et mises aux normes',
      'Installations professionnelles et industrielles',
      'Maintenance électrique préventive',
      'Diagnostic de conformité',
    ],
    benefits: [
      'Des installations réalisées dans le respect des règles de sécurité',
      'Une intervention rapide en cas de panne',
      'Un accompagnement pour particuliers comme pour professionnels',
      'Une approche préventive pour limiter les risques électriques',
    ],
    process: [
      { step: 'Diagnostiquer', detail: "Contrôle de l'installation existante et de sa conformité." },
      { step: 'Proposer', detail: 'Devis détaillé des travaux nécessaires, sans surdimensionnement.' },
      { step: 'Réaliser', detail: 'Installation ou mise aux normes par des techniciens qualifiés.' },
      { step: 'Vérifier', detail: 'Tests de sécurité et de bon fonctionnement.' },
      { step: 'Entretenir', detail: 'Contrôles périodiques pour prévenir les risques.' },
    ],
    faq: [
      {
        question: 'Intervenez-vous en urgence pour une panne électrique ?',
        answer:
          'Oui, contactez-nous par téléphone ou WhatsApp pour organiser une intervention dans les meilleurs délais.',
      },
      {
        question: "Proposez-vous la mise aux normes d'anciennes installations ?",
        answer:
          'Oui, nous réalisons des diagnostics et des mises aux normes d’installations électriques existantes, pour les particuliers comme pour les professionnels.',
      },
    ],
    related: ['energie-solaire', 'maintenance-industrielle'],
    sectors: ['entreprises', 'particuliers', 'industries'],
  },
  {
    slug: 'energie-solaire',
    title: 'Énergie solaire',
    pillar: 'technique',
    excerpt: "Étude, dimensionnement et installation de solutions photovoltaïques adaptées à votre consommation réelle.",
    seoTitle: 'Énergie Solaire au Bénin — Installation Photovoltaïque',
    seoDescription:
      "Étude, dimensionnement et installation de solutions solaires photovoltaïques au Bénin par KONFORTECH BÉNIN, pour particuliers et professionnels.",
    problem:
      "Coupures fréquentes et coûts électriques élevés pénalisent l'activité — mais une installation solaire mal dimensionnée revient cher pour un résultat décevant.",
    solution:
      "Nous partons de votre consommation réelle, pas d'une estimation générique, pour dimensionner une solution solaire ou hybride qui correspond à votre usage et à votre budget.",
    deliverables: [
      'Étude de faisabilité et analyse de consommation',
      'Dimensionnement photovoltaïque précis',
      'Installation de panneaux, batteries et onduleurs',
      'Solutions hybrides solaire / réseau',
      'Maintenance et contrôle de performance',
      'Installations pour professionnels et industries',
    ],
    benefits: [
      'Un dimensionnement basé sur votre consommation réelle',
      'Une installation réalisée par des techniciens formés',
      'Une réduction progressive de votre dépendance au réseau',
      'Un suivi de maintenance pour préserver la performance',
    ],
    process: [
      { step: 'Analyser', detail: 'Étude de votre consommation et de vos contraintes de site.' },
      { step: 'Dimensionner', detail: 'Choix des panneaux, batteries et onduleurs adaptés.' },
      { step: 'Installer', detail: 'Pose et raccordement par des techniciens qualifiés.' },
      { step: 'Mettre en service', detail: 'Tests de production et de basculement.' },
      { step: 'Maintenir', detail: 'Contrôles périodiques pour préserver le rendement.' },
    ],
    faq: [
      {
        question: 'Combien coûte une installation solaire ?',
        answer:
          "Le coût dépend de votre consommation et du type de solution retenue (solaire seul ou hybride). Demandez une étude pour recevoir une estimation précise adaptée à votre situation.",
      },
      {
        question: "L'énergie solaire peut-elle remplacer totalement le réseau électrique ?",
        answer:
          "Cela dépend du dimensionnement retenu. Une solution hybride, combinant solaire et réseau, offre souvent le meilleur équilibre entre coût et fiabilité.",
      },
    ],
    related: ['electricite', 'maintenance-industrielle'],
    sectors: ['entreprises', 'particuliers', 'industries'],
  },
  {
    slug: 'plomberie',
    title: 'Plomberie',
    pillar: 'technique',
    excerpt: 'Installation, réparation et entretien de vos systèmes de plomberie.',
    seoTitle: 'Plomberie au Bénin — Installation & Réparation',
    seoDescription:
      "Installation, réparation et entretien de plomberie au Bénin par KONFORTECH BÉNIN, pour particuliers et professionnels.",
    problem:
      "Une fuite ou une installation mal réalisée cause rapidement des dégâts coûteux, souvent bien supérieurs au prix d'un entretien préventif.",
    solution:
      "Nous installons, réparons et entretenons vos systèmes de plomberie avec des matériaux durables, et intervenons rapidement en cas de fuite.",
    deliverables: [
      'Installation sanitaire et canalisations',
      'Recherche et réparation de fuites',
      'Entretien préventif des installations',
      'Plomberie pour hôtels, restaurants et commerces',
    ],
    benefits: [
      'Une intervention rapide en cas de fuite ou de panne',
      'Des installations réalisées avec des matériaux durables',
      'Un accompagnement pour particuliers comme pour professionnels',
    ],
    process: [
      { step: 'Diagnostiquer', detail: "Localisation précise de la fuite ou du dysfonctionnement." },
      { step: 'Proposer', detail: 'Devis clair des réparations ou de l’installation.' },
      { step: 'Réaliser', detail: 'Intervention propre et durable.' },
      { step: 'Vérifier', detail: 'Contrôle d’étanchéité et de bon fonctionnement.' },
    ],
    faq: [
      {
        question: "Intervenez-vous en urgence pour une fuite d'eau ?",
        answer: 'Oui, contactez-nous par téléphone ou WhatsApp pour une intervention rapide.',
      },
      {
        question: 'Proposez-vous un entretien préventif ?',
        answer:
          'Oui, un contrôle régulier de vos installations permet d’éviter la plupart des incidents coûteux.',
      },
    ],
    related: ['electricite', 'froid-climatisation'],
    sectors: ['hotels', 'restaurants', 'particuliers'],
  },
  {
    slug: 'videosurveillance',
    title: 'Vidéosurveillance',
    pillar: 'technique',
    excerpt: "Caméras, contrôle d'accès et sécurité électronique adaptés à la configuration de vos locaux.",
    seoTitle: 'Vidéosurveillance & Sécurité Électronique au Bénin',
    seoDescription:
      "Installation de caméras de vidéosurveillance et de solutions de sécurité électronique au Bénin par KONFORTECH BÉNIN.",
    problem:
      "Protéger un domicile, un commerce ou un site professionnel demande un dispositif adapté à la configuration réelle des lieux — pas un pack standard vendu sans étude.",
    solution:
      "Nous évaluons vos locaux, dimensionnons le dispositif nécessaire, puis installons et configurons un système simple à utiliser au quotidien.",
    deliverables: [
      'Caméras intérieures et extérieures',
      "Contrôle d'accès pour locaux professionnels",
      'Configuration et accès à distance',
      'Maintenance des équipements de sécurité',
    ],
    benefits: [
      'Des solutions dimensionnées selon la configuration réelle de vos locaux',
      'Une installation propre et une configuration simple d’usage',
      'Un accompagnement pour particuliers, commerces et entreprises',
    ],
    process: [
      { step: 'Évaluer', detail: 'Visite des locaux et identification des zones à couvrir.' },
      { step: 'Dimensionner', detail: 'Choix du nombre et du type de caméras nécessaires.' },
      { step: 'Installer', detail: 'Pose, câblage et raccordement.' },
      { step: 'Configurer', detail: 'Paramétrage, accès à distance et prise en main.' },
    ],
    faq: [
      {
        question: 'Puis-je consulter mes caméras à distance ?',
        answer:
          'Selon le système installé, un accès à distance depuis votre smartphone peut être configuré.',
      },
      {
        question: 'Combien de caméras faut-il pour sécuriser mon local ?',
        answer:
          'Cela dépend de la configuration de vos locaux. Nous réalisons une évaluation sur place avant de vous proposer un dimensionnement adapté.',
      },
    ],
    related: ['electricite', 'maintenance-industrielle'],
    sectors: ['commerces', 'entreprises', 'particuliers'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const serviceSlugs = () => services.map((s) => s.slug);
export const servicesByPillar = (pillar: ServicePillar) =>
  services.filter((s) => s.pillar === pillar);
