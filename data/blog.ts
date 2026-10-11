/**
 * BLOG — source unique de vérité.
 * ▶ POUR AJOUTER UN ARTICLE : ajoutez un objet ci-dessous. La page
 *   /blog/[slug], le JSON-LD BlogPosting, le SEO et le sitemap sont automatiques.
 *
 * Le champ `content` accepte un tableau de blocs : { type: 'h2' | 'p' | 'ul' }.
 *
 * Champs optionnels ajoutés (lot 1) :
 *  - imageAlt : texte alternatif de l'image d'illustration
 *  - favicon  : favicon propre à l'article (SVG), utilisé dans <head> de /blog/[slug]
 */

export type ContentBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  datePublished: string; // ISO YYYY-MM-DD
  readingMinutes: number;
  //image?: string;
  //imageAlt?: string;
  //favicon?: string;
  content: ContentBlock[];
  relatedServices: string[];
};

export const articles: Article[] = [
  {
    slug: 'entretenir-climatiseur-saison-chaude',
    title: 'Bien entretenir son climatiseur avant la saison chaude',
    seoTitle: 'Entretenir son climatiseur avant la saison chaude — Guide pratique',
    seoDescription:
      "Les vérifications essentielles pour entretenir votre climatiseur avant la saison chaude : filtres, gaz réfrigérant, unité extérieure et entretien préventif.",
    excerpt:
      "Les gestes simples qui prolongent la durée de vie de votre climatiseur et réduisent votre facture d'électricité.",
    category: 'Froid & Climatisation',
    tags: ['climatisation', 'entretien', 'maintenance'],
    author: 'KONFORTECH BÉNIN',
    datePublished: '2026-08-09',
    readingMinutes: 11,
    //image: '/gallerie/blog/entretenir-climatiseur-saison-chaude.webp',
    //imageAlt: "Technicien nettoyant le filtre d'une unité intérieure de climatisation murale",
    //favicon: '/gallerie/og/entretenir-climatiseur-saison-chaude.svg',
    relatedServices: ['froid-climatisation', 'maintenance-industrielle'],
    content: [
      {
        type: 'p',
        text: "Un climatiseur mal entretenu consomme davantage d'électricité, refroidit moins efficacement et tombe en panne plus souvent — généralement au pire moment. Voici les vérifications essentielles à effectuer avant l'arrivée de la saison chaude.",
      },
      {
        type: 'h2',
        text: "Pourquoi l'entretien compte encore plus sous un climat chaud et humide",
      },
      {
        type: 'p',
        text: "Au Bénin, un climatiseur travaille longtemps et à forte charge : la chaleur est présente une grande partie de l'année, l'humidité de l'air est élevée et, en saison sèche, la poussière transportée par les vents de harmattan se dépose partout. Ces conditions encrassent les filtres et les échangeurs plus vite que dans un climat tempéré. L'humidité favorise en outre la formation de moisissures sur l'échangeur intérieur et dans le bac de récupération de l'eau, ce qui explique bien des mauvaises odeurs.",
      },
      {
        type: 'p',
        text: "Un appareil utilisé presque chaque jour accumule aussi beaucoup plus d'heures de fonctionnement qu'un appareil de résidence secondaire. Chaque heure supplémentaire use les roulements des ventilateurs, les condensateurs, les contacteurs et, à terme, le compresseur. L'entretien n'est donc pas un luxe : c'est ce qui sépare un appareil qui dure d'un appareil qui tombe en panne au premier pic de chaleur.",
      },
      {
        type: 'p',
        text: "Ce guide détaille ce que vous pouvez faire vous-même en toute sécurité, ce qui revient à un technicien, comment organiser un calendrier d'entretien et quelles erreurs éviter. Il ne remplace pas la notice de votre appareil, qui reste la référence pour les opérations autorisées à l'utilisateur.",
      },
      {
        type: 'h2',
        text: "Avant de commencer : les règles de sécurité",
      },
      {
        type: 'p',
        text: "Un climatiseur combine de l'électricité, des pièces en rotation et un circuit contenant un fluide sous pression. La plupart des gestes d'entretien courant sont sans danger à condition de respecter quelques règles de base.",
      },
      {
        type: 'ul',
        items: [
          "Coupez toujours l'appareil au disjoncteur dédié avant d'ouvrir ou de nettoyer quoi que ce soit, et pas seulement avec la télécommande.",
          "N'ouvrez jamais les capots de l'unité extérieure et ne touchez pas aux condensateurs, aux cartes électroniques ni aux raccordements électriques.",
          "Ne démontez ni ne percez aucun tuyau du circuit frigorifique : il contient un fluide sous pression qui ne doit pas être rejeté dans l'air.",
          "N'utilisez pas de jet à haute pression ni de produits agressifs (solvants, eau de Javel concentrée) sur l'échangeur ou les plastiques.",
          "Pour toute intervention en hauteur (unité extérieure en façade, toiture), utilisez un équipement stable et adapté, ou confiez-la à un professionnel équipé.",
          "En cas de doute, arrêtez-vous : un geste mal maîtrisé coûte plus cher qu'une visite de technicien.",
        ],
      },
      { type: 'h2', text: '1. Nettoyer les filtres régulièrement' },
      {
        type: 'p',
        text: "Les filtres encrassés réduisent fortement le débit d'air et forcent l'appareil à travailler plus pour un résultat moindre. Dans un environnement poussiéreux, un nettoyage toutes les quelques semaines fait une différence nette sur la performance et sur la consommation.",
      },
      {
        type: 'h2',
        text: "Comment nettoyer les filtres, étape par étape",
      },
      {
        type: 'p',
        text: "Le nettoyage des filtres est la seule opération d'entretien que la plupart des fabricants autorisent explicitement à l'utilisateur. Voici la marche à suivre générale ; la notice de votre modèle indique l'emplacement exact des filtres.",
      },
      {
        type: 'ul',
        items: [
          "Étape 1 — Coupez l'appareil, puis le disjoncteur correspondant. Attendez que les ventilateurs soient complètement arrêtés.",
          "Étape 2 — Ouvrez la façade de l'unité intérieure en suivant les indications de la notice.",
          "Étape 3 — Retirez délicatement les filtres sans les plier ni les déchirer.",
          "Étape 4 — Aspirez la poussière superficielle avec un aspirateur muni d'une brosse douce.",
          "Étape 5 — Lavez à l'eau tiède avec un peu de savon doux, en rinçant à fond. N'utilisez pas d'eau chaude, qui peut déformer le plastique.",
          "Étape 6 — Laissez sécher complètement à l'ombre, à l'écart d'une source de chaleur directe. Un filtre humide remis en place favorise les moisissures.",
          "Étape 7 — Remettez les filtres, refermez la façade, puis rétablissez le courant et testez l'appareil.",
        ],
      },
      {
        type: 'p',
        text: "Un filtre déchiré, déformé ou dont le maillage est abîmé doit être remplacé : il ne retient plus la poussière et laisse l'encrassement gagner l'échangeur, bien plus difficile à nettoyer. Rappelons qu'un filtre propre ne dispense pas du nettoyage de l'échangeur et de la turbine, qui nécessite un démontage et relève d'un professionnel. Si vous utilisez l'appareil tous les jours, vérifiez l'état des filtres chaque mois ; en période de poussière marquée, un contrôle plus fréquent est utile.",
      },
      { type: 'h2', text: '2. Vérifier le niveau de gaz réfrigérant' },
      {
        type: 'p',
        text: "Un climatiseur qui refroidit moins bien qu'avant manque souvent de gaz réfrigérant, généralement à cause d'une micro-fuite. Cette vérification demande un technicien équipé du matériel adapté : ce n'est pas une opération à tenter soi-même.",
      },
      {
        type: 'h2',
        text: "Fuite de fluide : les signes et ce que fait réellement un technicien",
      },
      {
        type: 'p',
        text: "Le circuit frigorifique d'un climatiseur est fermé : le fluide n'est pas consommé, il circule en boucle. S'il en manque, c'est donc qu'il s'est échappé. Un appareil qui perd progressivement en performance, qui givre sur les tuyaux ou sur l'unité intérieure, ou qui émet un sifflement à la mise en route doit faire suspecter une fuite. Recharger sans chercher la cause est une solution provisoire : la fuite continue et la charge se perd de nouveau.",
      },
      {
        type: 'p',
        text: "La démarche d'un frigoriste sérieux suit en général quatre temps : localiser la fuite (détecteur adapté ou essai d'étanchéité sous pression avec un gaz neutre), la réparer, tirer au vide le circuit pour en retirer l'air et l'humidité, puis recharger la quantité de fluide prévue par le constructeur, mesurée avec précision. Cette séquence demande un outillage spécifique et une formation, et ne se résume pas à « remettre du gaz ».",
      },
      {
        type: 'p',
        text: "Cette rigueur est aussi une question d'environnement. Les fluides les plus courants en climatisation, les HFC, sont des gaz à fort effet de serre, et l'amendement de Kigali au Protocole de Montréal organise leur réduction progressive à l'échelle mondiale, avec des calendriers différents selon les groupes de pays (source : Secrétariat de l'ozone du PNUE, ozone.unep.org). Rejeter volontairement un fluide frigorigène dans l'atmosphère est donc à proscrire, et c'est une raison de plus de passer par un technicien qualifié.",
      },
      { type: 'h2', text: "3. Contrôler l'unité extérieure" },
      {
        type: 'p',
        text: "Poussière, feuilles ou obstacles autour de l'unité extérieure réduisent l'échange thermique et font chuter le rendement. Dégager un espace suffisant autour de l'appareil est l'un des gestes les plus simples et les plus efficaces.",
      },
      {
        type: 'h2',
        text: "Nettoyer l'unité extérieure sans l'abîmer",
      },
      {
        type: 'p',
        text: "L'unité extérieure est l'organe qui rejette la chaleur de votre pièce dans l'air. Son échangeur est constitué de fines ailettes d'aluminium, fragiles et faciles à tordre. Un échangeur encrassé ou aplati force le compresseur à travailler contre une pression plus élevée : la consommation augmente et la durée de vie diminue.",
      },
      {
        type: 'ul',
        items: [
          "Coupez l'alimentation au disjoncteur avant toute intervention.",
          "Retirez les feuilles, sacs plastiques, branches et autres débris accumulés autour et sous l'unité.",
          "Passez une brosse souple ou un chiffon sec sur les ailettes pour enlever la poussière superficielle, dans le sens des ailettes.",
          "Rincez à l'eau claire à faible pression si nécessaire, en évitant les parties électriques et le moteur du ventilateur ; jamais de jet puissant.",
          "Si des ailettes sont couchées, ne les forcez pas : un technicien dispose d'un peigne à ailettes adapté.",
          "Vérifiez que le support est stable, que l'unité est de niveau et qu'aucune vibration anormale n'est audible.",
        ],
      },
      {
        type: 'p',
        text: "Pensez aussi à l'emplacement. Une unité installée dans un recoin sans circulation d'air reprend l'air chaud qu'elle vient de rejeter, ce qui dégrade fortement son rendement. Si vous devez la protéger du soleil ou de la pluie, utilisez un auvent ventilé : ne la recouvrez jamais d'une bâche pendant le fonctionnement.",
      },
      {
        type: 'h2',
        text: "Le bac et le tuyau d'évacuation des condensats",
      },
      {
        type: 'p',
        text: "En refroidissant l'air, l'unité intérieure condense l'humidité qu'il contient. Cette eau est recueillie dans un bac puis évacuée par un tuyau vers l'extérieur. Dans un climat humide, le volume d'eau est important, et l'évacuation peut s'obstruer avec la poussière, les algues ou les insectes. Conséquences : eau qui goutte de l'unité intérieure, tâches sur le mur, mauvaises odeurs, moisissures.",
      },
      {
        type: 'p',
        text: "Vous pouvez vérifier que l'eau s'écoule bien à l'extrémité du tuyau pendant le fonctionnement et que celui-ci n'est ni plié ni écrasé ni bouché. Le débouchage et le nettoyage du bac relèvent d'un technicien, qui peut aussi corriger une pente insuffisante du tuyau, cause fréquente de reflux.",
      },
      { type: 'h2', text: '4. Planifier un entretien préventif' },
      {
        type: 'p',
        text: "Un contrôle professionnel tous les six mois permet de repérer les signes d'usure avant qu'ils ne deviennent une panne coûteuse — particulièrement avant les périodes de forte chaleur, quand les appareils tournent en continu.",
      },
      {
        type: 'h2',
        text: "Ce que comprend un entretien professionnel",
      },
      {
        type: 'p',
        text: "Une visite d'entretien sérieuse ne se limite pas à un coup de chiffon. Voici les opérations que vous êtes en droit d'attendre d'un technicien, adaptées au type d'appareil :",
      },
      {
        type: 'ul',
        items: [
          "Contrôle visuel complet des unités intérieure et extérieure, du support et des fixations.",
          "Nettoyage de l'échangeur intérieur, de la turbine et du bac à condensats.",
          "Nettoyage de l'échangeur extérieur et contrôle de l'état des ailettes.",
          "Vérification de l'écoulement des condensats.",
          "Contrôle et resserrage des connexions électriques, examen de l'état des câbles et de la protection.",
          "Mesure de l'intensité absorbée par le compresseur et les ventilateurs, comparée aux valeurs de la plaque signalétique.",
          "Contrôle des condensateurs et des organes de commande.",
          "Vérification des températures de soufflage et de reprise, et des pressions du circuit lorsque cela est nécessaire.",
          "Recherche de fuite si les mesures laissent suspecter un manque de fluide.",
          "Essai de fonctionnement complet avec la télécommande et remise d'un compte rendu.",
        ],
      },
      {
        type: 'p',
        text: "Demandez un compte rendu écrit, même court : il garde la trace des mesures et des anomalies constatées, ce qui facilite le suivi d'un appareil d'une année sur l'autre.",
      },
      {
        type: 'h2',
        text: "Contrat d'entretien ou intervention à la demande ?",
      },
      {
        type: 'p',
        text: "Une intervention ponctuelle convient à un appareil peu utilisé. Pour un commerce, un bureau, un hôtel ou toute activité qui dépend de la climatisation, un contrat d'entretien présente un double avantage : les visites sont planifiées avant la saison chaude, et un délai d'intervention peut être prévu en cas de panne. Avant de signer, vérifiez ce que le contrat précise : la fréquence des visites, la liste des opérations, les équipements couverts, le délai d'intervention, le traitement des pièces remplacées et la remise d'un compte rendu.",
      },
      {
        type: 'h2',
        text: "Quelle fréquence selon le type de local ?",
      },
      {
        type: 'p',
        text: "Les repères ci-dessous sont des pratiques courantes de la profession, à adapter à votre situation par un technicien :",
      },
      {
        type: 'ul',
        items: [
          "Logement occupé quelques heures par jour : au moins un contrôle par an, avant la saison chaude, avec nettoyage des filtres chaque mois d'utilisation.",
          "Usage quotidien et prolongé (chambre la nuit, bureau, boutique, restaurant) : un contrôle professionnel tous les six mois, comme indiqué plus haut.",
          "Local très poussiéreux, graisseux ou humide (atelier, cuisine, bord de route non goudronnée) : un entretien plus rapproché, car l'encrassement est plus rapide.",
          "Équipements critiques (salle informatique, local de stockage sensible, établissement de santé) : un contrat avec visites régulières et délai d'intervention défini.",
        ],
      },
      { type: 'h2', text: 'Les signes qui doivent alerter' },
      {
        type: 'ul',
        items: [
          "L'appareil met beaucoup plus de temps à refroidir qu'avant",
          'Un bruit inhabituel apparaît au démarrage ou en fonctionnement',
          "De l'eau s'écoule de l'unité intérieure",
          'La facture électrique augmente sans changement d’usage',
          'Une odeur désagréable se dégage à la mise en route',
        ],
      },
      {
        type: 'h2',
        text: "Les erreurs d'entretien les plus fréquentes",
      },
      {
        type: 'ul',
        items: [
          "Attendre la première panne pour faire intervenir un technicien.",
          "Nettoyer les filtres avec de l'eau chaude, ou les remettre humides.",
          "Laver l'unité extérieure à haute pression et coucher les ailettes.",
          "Faire « remettre du gaz » sans rechercher la fuite.",
          "Utiliser des produits désodorisants ou des parfums pour masquer une mauvaise odeur au lieu de nettoyer l'échangeur.",
          "Couvrir complètement l'unité extérieure avec une bâche pendant qu'elle fonctionne.",
          "Faire intervenir une personne sans formation sur le circuit frigorifique ou sur les connexions électriques.",
        ],
      },
      {
        type: 'h2',
        text: "Un calendrier d'entretien simple à suivre",
      },
      {
        type: 'ul',
        items: [
          "Chaque mois d'utilisation régulière : vérifier et nettoyer les filtres.",
          "Avant la saison chaude : faire réaliser un contrôle complet par un professionnel.",
          "Pendant la saison chaude : dégager régulièrement l'unité extérieure et vérifier l'écoulement des condensats.",
          "Après une période de poussière marquée ou de forte pluie : inspecter les filtres et l'unité extérieure.",
          "En fin de saison : noter les anomalies constatées (bruit, odeur, baisse de performance) pour les signaler au prochain contrôle.",
        ],
      },
      {
        type: 'h2',
        text: "Questions fréquentes",
      },
      {
        type: 'p',
        text: "Peut-on nettoyer soi-même l'intérieur de l'unité ? Les filtres, oui. L'échangeur et la turbine demandent un démontage partiel et un produit adapté : confiez-les à un technicien pour ne pas abîmer l'appareil ni projeter de l'eau sur l'électronique.",
      },
      {
        type: 'p',
        text: "Pourquoi mon climatiseur sent mauvais ? Le plus souvent, de l'humidité stagne dans l'échangeur ou le bac et favorise les moisissures et les bactéries. Un nettoyage complet résout généralement le problème ; les parfums ne font que le masquer.",
      },
      {
        type: 'p',
        text: "Combien de temps dure un climatiseur ? Il n'existe pas de durée garantie : elle dépend de la qualité de l'appareil, de la qualité de l'installation, de l'intensité d'usage et de l'entretien. Un appareil bien installé et régulièrement entretenu vieillit mieux qu'un appareil négligé.",
      },
      {
        type: 'p',
        text: "L'entretien réduit-il vraiment la facture d'électricité ? Un échangeur propre et un bon débit d'air améliorent le rendement, donc la consommation pour un même résultat. L'ampleur du gain varie selon l'état initial de l'appareil ; nous ne la chiffrons pas ici faute de mesure sur votre installation.",
      },
      { type: 'h2', text: 'En résumé' },
      {
        type: 'p',
        text: "Un entretien régulier coûte toujours moins cher qu'une panne en pleine saison chaude. Nos techniciens peuvent prendre en charge l'ensemble de ces vérifications dans le cadre d'un contrat d'entretien adapté à votre équipement.",
      },
    ],
  },

  /* ───────────────────────── LOT 1 · FROID & CLIMATISATION ───────────────────────── */

  {
    slug: 'choisir-puissance-climatiseur-btu',
    title: 'Comment choisir la puissance d’un climatiseur : BTU, kW et calcul pas à pas',
    seoTitle: 'Choisir la puissance d’un climatiseur (BTU, kW) — Méthode de calcul',
    seoDescription:
      "BTU, kW, « CV » : comprenez les unités, estimez la charge thermique d'une pièce avec une méthode simple et évitez les erreurs de dimensionnement d'un climatiseur.",
    excerpt:
      "Trop petit, il s'épuise ; trop grand, il gaspille. Une méthode claire pour estimer la puissance dont votre pièce a réellement besoin.",
    category: 'Froid & Climatisation',
    tags: ['climatisation', 'dimensionnement', 'BTU', 'puissance frigorifique'],
    author: 'KONFORTECH BÉNIN',
    datePublished: '2026-10-11',
    readingMinutes: 12,
    imageAlt:
      "Technicien en tenue de travail mesurant une pièce avec un télémètre laser avant de dimensionner un climatiseur",
    //image: '/gallerie/blog/choisir-puissance-climatiseur-btu.webp',
    //favicon: '/gallerie/og/choisir-puissance-climatiseur-btu.svg',
    relatedServices: ['froid-climatisation'],
    content: [
      {
        type: 'p',
        text: "Acheter un climatiseur sur la seule base du prix ou de la taille de la pièce est l'erreur la plus répandue. Un appareil sous-dimensionné tourne sans relâche sans jamais atteindre la température souhaitée ; un appareil surdimensionné refroidit trop vite, s'arrête, redémarre et use son compresseur. Dans les deux cas, vous payez pour un confort médiocre. Ce guide explique les unités, la logique du calcul et les pièges, pour que vous puissiez discuter avec un installateur en connaissance de cause.",
      },
      { type: 'h2', text: 'Ce que mesure vraiment la « puissance » d’un climatiseur' },
      {
        type: 'p',
        text: "La puissance qui compte est la puissance frigorifique : la quantité de chaleur que l'appareil est capable d'extraire de la pièce, par unité de temps. Elle s'exprime en watts (W) ou kilowatts (kW), ou en BTU/h dans les catalogues d'origine anglo-saxonne. Ne la confondez pas avec la puissance électrique absorbée, qui est ce que l'appareil consomme sur le réseau. Un climatiseur de 3,5 kW de puissance frigorifique consomme beaucoup moins que 3,5 kW d'électricité, car il déplace de la chaleur au lieu de la produire. Le rapport entre les deux est son efficacité énergétique, souvent notée EER.",
      },
      { type: 'h2', text: 'BTU, kW et « CV » : s’y retrouver dans les unités' },
      {
        type: 'p',
        text: "Un kilowatt équivaut à environ 3 412 BTU/h. Cette conversion est physique, donc fiable. Les modèles courants se situent approximativement aux équivalences suivantes :",
      },
      {
        type: 'ul',
        items: [
          '9 000 BTU/h ≈ 2,6 kW',
          '12 000 BTU/h ≈ 3,5 kW',
          '18 000 BTU/h ≈ 5,3 kW',
          '24 000 BTU/h ≈ 7,0 kW',
        ],
      },
      {
        type: 'p',
        text: "Vous entendrez aussi parler de « chevaux » (CV ou HP). Ce n'est pas une unité de puissance frigorifique normalisée : c'est une habitude commerciale, qui associe grossièrement un « 1 CV » à un climatiseur d'environ 9 000 BTU/h. Les fabricants ne l'utilisent pas tous de la même façon. Fiez-vous toujours à la valeur en kW ou en BTU/h indiquée sur la fiche technique, jamais au seul nombre de « CV ».",
      },
      { type: 'h2', text: 'Les facteurs qui déterminent la charge thermique' },
      {
        type: 'p',
        text: "La charge thermique est la quantité de chaleur qui entre ou se produit dans la pièce et que le climatiseur doit évacuer. La surface au sol n'en est qu'un des éléments. Voici ceux qui pèsent le plus, surtout sous un climat chaud et humide :",
      },
      {
        type: 'ul',
        items: [
          "L'exposition au soleil : une pièce sous toiture en tôle ou en dalle non isolée reçoit beaucoup plus de chaleur qu'une pièce intermédiaire.",
          'Les vitrages : une grande baie vitrée orientée à l’ouest peut à elle seule changer la puissance nécessaire.',
          "L'isolation des murs et du plafond, et la couleur des surfaces extérieures.",
          "Le nombre d'occupants : une personne au repos dégage de l'ordre de 100 à 130 W de chaleur.",
          "Les équipements : toute l'électricité consommée par un ordinateur, un éclairage ou un réfrigérateur finit en chaleur dans la pièce.",
          "La hauteur sous plafond : elle augmente le volume à traiter.",
          "Les entrées d'air : portes ouvertes fréquemment, fenêtres mal jointes, ventilation non contrôlée.",
          "L'humidité : elle ajoute une charge dite latente, car il faut condenser l'eau contenue dans l'air.",
        ],
      },
      { type: 'h2', text: 'Une méthode simple pour une première estimation' },
      {
        type: 'p',
        text: "Les professionnels réalisent un bilan thermique détaillé, mais vous pouvez obtenir un ordre de grandeur en quelques minutes. Cette méthode est une estimation de départ, pas un calcul d'ingénierie.",
      },
      {
        type: 'ul',
        items: [
          "Étape 1 — Mesurez la surface de la pièce en mètres carrés.",
          "Étape 2 — Multipliez cette surface par une valeur de base. Dans un climat chaud, on retient couramment une base de 100 à 150 W par m² pour une pièce de hauteur standard ; prenez le bas de la fourchette pour une pièce bien isolée et à l'ombre, le haut pour une pièce sous toiture ou très ensoleillée. C'est une règle empirique, pas une norme.",
          "Étape 3 — Ajoutez environ 100 à 130 W par occupant habituel au-delà de deux personnes, et la puissance électrique des équipements qui fonctionnent en même temps que le climatiseur.",
          "Étape 4 — Ajoutez une marge pour les vitrages exposés ou les pertes par infiltration si vous les avez repérés.",
          "Étape 5 — Comparez le résultat à la puissance frigorifique nominale des modèles disponibles et retenez la valeur immédiatement supérieure.",
        ],
      },
      { type: 'h2', text: 'Un exemple chiffré (hypothétique)' },
      {
        type: 'p',
        text: "Prenons un bureau de 20 m², avec une toiture bien isolée mais une fenêtre à l'ouest. Appliquons une base de 125 W/m² : 20 × 125 = 2 500 W. Deux personnes travaillent dans la pièce, ce qui correspond déjà à la base ; ajoutons un ordinateur de 150 W et une marge de 250 W pour la fenêtre. Total : environ 2 900 W, soit 2,9 kW ou à peu près 9 900 BTU/h. Le modèle de 9 000 BTU/h serait juste en limite ; un modèle de 12 000 BTU/h (3,5 kW) offre une marge raisonnable sans surdimensionnement excessif. Il s'agit d'un exemple pédagogique avec des valeurs choisies pour la démonstration, pas d'un cas client.",
      },
      { type: 'h2', text: 'Sous-dimensionné ou surdimensionné : deux erreurs, deux conséquences' },
      {
        type: 'p',
        text: "Un climatiseur trop petit fonctionne en continu à pleine charge, n'atteint jamais la consigne les jours les plus chauds, consomme beaucoup et s'use plus vite. Un climatiseur trop grand a l'air d'une bonne idée mais produit un refroidissement par à-coups : la température baisse vite, le compresseur s'arrête avant d'avoir assez déshumidifié, et l'air reste moite. Les démarrages répétés sollicitent le compresseur. Sur un appareil à vitesse variable, l'excès de puissance est moins pénalisant, mais il reste inutile et plus cher à l'achat.",
      },
      {
        type: 'h2',
        text: "Pourquoi un bilan thermique professionnel est plus fiable",
      },
      {
        type: 'p',
        text: "La règle empirique par mètre carré donne un ordre de grandeur, mais elle moyenne des situations très différentes. Un bilan thermique décompose la chaleur qui entre ou se produit dans le local en plusieurs sources, chacune calculée séparément :",
      },
      {
        type: 'ul',
        items: [
          "Les apports par les parois : murs, toiture et plancher transmettent la chaleur selon leur matériau, leur épaisseur, leur isolation et leur couleur extérieure.",
          "Les apports par les vitrages : le rayonnement solaire traverse le verre et s'ajoute à la conduction. L'orientation, la taille et la protection (rideaux, stores, films) comptent beaucoup.",
          "Les apports internes : occupants, éclairage et équipements électriques, dont toute la puissance consommée devient de la chaleur.",
          "Le renouvellement d'air : l'air extérieur chaud et humide qui entre par la ventilation ou les infiltrations doit être refroidi et déshumidifié.",
          "La charge latente : l'énergie nécessaire pour condenser l'humidité de l'air, particulièrement importante en climat humide.",
        ],
      },
      {
        type: 'p',
        text: "Le professionnel relève les dimensions, les orientations, la nature des matériaux et l'usage prévu, puis additionne ces postes pour obtenir une puissance en kW, qu'il compare aux modèles disponibles en prévoyant une marge raisonnable. Il en résulte une recommandation motivée, que vous pouvez comparer entre deux devis.",
      },
      {
        type: 'h2',
        text: "Cas particuliers : chambre, salon, bureau, boutique, local technique",
      },
      {
        type: 'ul',
        items: [
          "Chambre : la charge est faible en journée mais le fonctionnement est long la nuit. Le silence et la stabilité de température comptent autant que la puissance ; évitez le surdimensionnement, qui provoque des cycles courts.",
          "Salon ouvert sur une cuisine ou un couloir : le volume réel à refroidir est plus grand que la pièce principale, et la chaleur de cuisson s'ajoute. Une estimation basée sur la surface seule sous-estime souvent le besoin.",
          "Bureau : plusieurs occupants et plusieurs ordinateurs concentrent des apports internes importants. Comptez la puissance réelle des équipements qui fonctionnent en même temps.",
          "Boutique ou commerce : les portes s'ouvrent souvent, l'éclairage est puissant et le public nombreux. L'entrée d'air chaud est le premier facteur à prendre en compte.",
          "Restaurant ou cuisine : la chaleur des appareils de cuisson et la vapeur imposent un traitement dédié (extraction, ventilation) en plus de la climatisation ; ne dimensionnez pas sur la surface seule.",
          "Local technique ou salle informatique : la charge vient des équipements et tourne en continu, parfois toute l'année. Un dimensionnement précis et une solution fiable, éventuellement avec redondance, sont recommandés.",
        ],
      },
      {
        type: 'h2',
        text: "Un second exemple chiffré (hypothétique) : un salon de 30 m²",
      },
      {
        type: 'p',
        text: "Prenons un salon de 30 m² en rez-de-chaussée d'un immeuble, avec une façade vitrée orientée à l'est. On retient pour l'exemple une base de 125 W/m², soit 30 × 125 = 3 750 W. Quatre personnes y séjournent régulièrement : on compte les deux au-delà de la base, soit environ 2 × 115 = 230 W. Un téléviseur et une box consomment 150 W. Total : environ 4 130 W, soit 4,1 kW, ou à peu près 14 100 BTU/h.",
      },
      {
        type: 'p',
        text: "Les modèles standards les plus proches sont 12 000 BTU/h (3,5 kW), trop juste, et 18 000 BTU/h (5,3 kW), plus confortable mais environ 28 % au-dessus du besoin estimé. Certaines gammes proposent une puissance intermédiaire ; à défaut, le 18 000 BTU/h reste préférable à un appareil sous-dimensionné, surtout s'il s'agit d'un modèle à vitesse variable qui module sa puissance. Ces valeurs sont choisies pour illustrer le raisonnement et ne constituent pas le résultat d'une étude sur site.",
      },
      {
        type: 'h2',
        text: "Quel type d'appareil pour quelle situation ?",
      },
      {
        type: 'p',
        text: "La puissance est une chose ; la forme de l'installation en est une autre. Les principaux types se distinguent ainsi :",
      },
      {
        type: 'ul',
        items: [
          "Split mural : le plus répandu pour une pièce unique, avec une unité intérieure murale et une unité extérieure reliées par des tuyaux.",
          "Multi-split : une unité extérieure alimente plusieurs unités intérieures dans des pièces différentes. Pratique pour limiter le nombre d'unités extérieures, mais la panne de l'unité extérieure prive toutes les pièces de froid.",
          "Cassette de plafond : encastrée au plafond, adaptée aux bureaux et commerces avec faux plafond, pour une diffusion homogène.",
          "Gainable : l'unité est cachée dans le faux plafond et l'air est distribué par des gaines et des bouches ; solution discrète pour de grands volumes ou plusieurs pièces, avec un dimensionnement plus technique.",
          "Console ou armoire : unité posée au sol ou au bas du mur, adaptée aux grands espaces ou lorsque le mur ne permet pas la pose haute.",
        ],
      },
      { type: 'h2', text: 'Les erreurs fréquentes à éviter' },
      {
        type: 'ul',
        items: [
          "Dimensionner uniquement d'après la surface sans tenir compte de la toiture, du soleil ou des occupants.",
          'Choisir « un cran au-dessus au cas où », sans calcul, ce qui conduit au surdimensionnement.',
          "Utiliser un seul grand climatiseur pour plusieurs pièces séparées par des cloisons fermées.",
          'Installer l’unité intérieure au-dessus d’une source de chaleur ou face au soleil direct.',
          "Négliger l'emplacement de l'unité extérieure, qui doit pouvoir évacuer sa chaleur librement.",
          "Comparer des modèles sur le prix seul, sans regarder l'efficacité énergétique.",
        ],
      },
      { type: 'h2', text: 'Au-delà de la puissance : les autres critères de choix' },
      {
        type: 'p',
        text: "Une fois la puissance fixée, plusieurs critères départagent les modèles. L'efficacité énergétique d'abord, car l'électricité représente l'essentiel du coût sur la durée de vie d'un climatiseur. Le niveau sonore de l'unité intérieure, important dans une chambre ou un bureau. La technologie du compresseur, à vitesse fixe ou variable (inverter), qui influe sur le confort et la consommation. La disponibilité des pièces détachées et d'un technicien qualifié près de chez vous, souvent sous-estimée. Enfin, la qualité de l'installation elle-même : un bon appareil mal posé rend moins bien qu'un appareil moyen correctement installé.",
      },
      { type: 'h2', text: 'Quand faire appel à un professionnel' },
      {
        type: 'p',
        text: "Pour une pièce unique et ordinaire, la méthode ci-dessus donne un bon point de départ. Dès que le local est grand, vitré, sous toiture exposée, qu'il accueille beaucoup de monde ou des équipements dégageant de la chaleur (serveurs, cuisine, atelier), un bilan thermique réalisé sur place évite des erreurs coûteuses. L'installation, elle, doit être confiée à un technicien : elle implique des raccordements électriques, la mise sous vide et la manipulation d'un fluide frigorigène, interventions qui ne s'improvisent pas.",
      },
      { type: 'h2', text: 'Questions fréquentes' },
      {
        type: 'p',
        text: "Combien de m² un climatiseur de 12 000 BTU/h peut-il refroidir ? Il n'existe pas de réponse unique, car tout dépend de l'isolation, de l'exposition et des occupants. Avec la base de 100 à 150 W/m² utilisée plus haut, 3,5 kW correspondent grossièrement à une pièce de 23 à 35 m², mais seule une étude de la pièce permet de confirmer.",
      },
      {
        type: 'p',
        text: "Un climatiseur plus puissant refroidit-il plus vite ? Oui, mais au prix d'un refroidissement moins stable et d'une moins bonne déshumidification s'il est trop grand pour la pièce. Le bon appareil est celui dont la puissance correspond à la charge réelle.",
      },
      {
        type: 'p',
        text: "Le « CV » est-il fiable pour choisir ? Non : c'est une approximation commerciale. Comparez toujours les kW ou BTU/h de la fiche technique.",
      },
      {
        type: 'h2',
        text: "Les questions à poser à l'installateur",
      },
      {
        type: 'ul',
        items: [
          "Sur quelle base avez-vous estimé la puissance : surface seule ou bilan thermique ?",
          "Quelle est la puissance frigorifique réelle en kW, et pas seulement le nombre de « CV » ?",
          "Quel est l'indicateur d'efficacité énergétique du modèle proposé et selon quelle méthode a-t-il été mesuré ?",
          "Où seront placées les unités intérieure et extérieure, et pourquoi ?",
          "Quelle longueur de liaison frigorifique et quelle protection électrique (câble, disjoncteur) prévoyez-vous ?",
          "L'installation comprend-elle la mise sous vide du circuit et un essai de fonctionnement ?",
          "Quelle garantie couvre l'appareil et la pose, et qui intervient en cas de panne ?",
          "Proposez-vous un contrat d'entretien et à quelles conditions ?",
        ],
      },
      {
        type: 'p',
        text: "Un climatiseur de 18 000 BTU/h suffit-il pour tout un logement ? Il peut refroidir un grand séjour, mais pas plusieurs pièces séparées par des portes fermées : l'air froid ne circule pas bien d'une pièce à l'autre. Pour plusieurs pièces, prévoyez un multi-split ou plusieurs appareils.",
      },
      {
        type: 'p',
        text: "Faut-il ajouter une marge de sécurité ? Une marge modérée est raisonnable, surtout pour absorber les journées les plus chaudes ou une évolution de l'usage. Mais « un cran au-dessus au cas où » sans calcul conduit au surdimensionnement et à ses inconvénients.",
      },
      { type: 'h2', text: 'En résumé' },
      {
        type: 'p',
        text: "Choisir la bonne puissance, c'est estimer la chaleur à évacuer, pas seulement mesurer des mètres carrés. Une estimation simple vous aide à cadrer votre besoin ; un bilan thermique sur site le confirme quand les enjeux le justifient. Si vous souhaitez faire étudier votre local avant d'acheter, vous pouvez contacter KONFORTECH BÉNIN via la page de contact du site : une étude sur place permet de recommander une puissance adaptée à votre situation, sans engagement d'achat.",
      },
    ],
  },

  {
    slug: 'climatiseur-inverter-ou-non-inverter',
    title: 'Climatiseur inverter ou non-inverter : quelle différence et lequel choisir ?',
    seoTitle: 'Climatiseur inverter ou non-inverter : différences et choix',
    seoDescription:
      "Fonctionnement, confort, consommation, coût et limites : comparez un climatiseur inverter et un modèle à vitesse fixe pour choisir selon votre usage au Bénin.",
    excerpt:
      "Le compresseur à vitesse variable est-il toujours rentable ? Le point sur les vraies différences, au-delà des arguments commerciaux.",
    category: 'Froid & Climatisation',
    tags: ['climatisation', 'inverter', 'consommation', 'comparatif'],
    author: 'KONFORTECH BÉNIN',
    datePublished: '2026-10-11',
    readingMinutes: 9,
    imageAlt:
      "Deux unités extérieures de climatisation côte à côte sur un mur, comparées par un technicien avec une tablette",
    //image: '/gallerie/blog/climatiseur-inverter-ou-non-inverter.webp',
    //favicon: '/gallerie/og/climatiseur-inverter-ou-non-inverter.svg',
    relatedServices: ['froid-climatisation'],
    content: [
      {
        type: 'p',
        text: "Sur les étiquettes de climatiseurs, le mot « inverter » est partout. Il est présenté comme l'assurance d'économies et de silence. La réalité est plus nuancée : la technologie apporte de vrais avantages, mais son intérêt dépend de la façon dont vous utilisez l'appareil, de la qualité de votre alimentation électrique et de votre budget. Cet article compare les deux technologies sans exagération.",
      },
      { type: 'h2', text: 'Le principe : tout est dans la vitesse du compresseur' },
      {
        type: 'p',
        text: "Le compresseur est le cœur du climatiseur. Dans un modèle non-inverter, dit à vitesse fixe, il fonctionne à pleine puissance ou il est arrêté. Lorsque la pièce atteint la température demandée, il s'arrête ; quand elle remonte, il redémarre à pleine vitesse. Dans un modèle inverter, un variateur électronique adapte la vitesse du compresseur : il tourne vite pour refroidir, puis ralentit pour maintenir la température plutôt que de s'arrêter. Le terme « inverter » désigne ce variateur, qui convertit l'alimentation pour piloter le moteur à fréquence variable.",
      },
      { type: 'h2', text: 'Ce que cela change concrètement' },
      {
        type: 'ul',
        items: [
          "Stabilité de la température : l'inverter évite les écarts marqués entre phases de marche et d'arrêt.",
          "Niveau sonore : un compresseur qui ralentit est en général plus discret qu'un compresseur qui démarre à pleine vitesse.",
          "Courant de démarrage : le démarrage progressif sollicite moins le réseau qu'un démarrage direct.",
          "Consommation : en régime partiel, l'inverter est le plus souvent plus efficace, car il évite les cycles répétés de démarrage.",
          "Prix : l'électronique supplémentaire rend l'appareil plus cher à l'achat.",
          "Réparation : une carte électronique défaillante peut coûter plus cher à remplacer qu'un composant simple d'un modèle à vitesse fixe.",
        ],
      },
      { type: 'h2', text: 'L’inverter consomme-t-il vraiment moins ?' },
      {
        type: 'p',
        text: "Cela dépend du temps de fonctionnement et de la charge. Un climatiseur fonctionne rarement à sa puissance maximale en permanence : une fois la pièce rafraîchie, la charge est partielle. C'est là que la vitesse variable fait gagner de l'énergie. Si vous climatisez une chambre toute la nuit ou un bureau toute la journée, le gain peut être significatif sur la durée. Si vous allumez l'appareil une heure ou deux par jour, l'économie annuelle sera faible et le surcoût à l'achat mettra longtemps à être amorti. Nous ne donnons pas de pourcentage d'économie, car il varie selon le modèle et l'usage : demandez aux fabricants les indicateurs d'efficacité mesurés (EER, SEER) et comparez-les modèle par modèle.",
      },
      {
        type: 'h2',
        text: "Comprendre les indicateurs d'efficacité : EER, SEER et ce qu'ils disent vraiment",
      },
      {
        type: 'p',
        text: "Pour comparer deux appareils, les fabricants publient des indicateurs d'efficacité. L'EER (Energy Efficiency Ratio) est le rapport entre la puissance frigorifique produite et la puissance électrique absorbée, mesuré dans des conditions précises de température. Un EER plus élevé signifie plus de froid pour la même électricité. Mais il est mesuré à un seul point de fonctionnement, souvent à pleine charge.",
      },
      {
        type: 'p',
        text: "Or un climatiseur passe l'essentiel de son temps à charge partielle. C'est pourquoi existent des indicateurs saisonniers, souvent appelés SEER, qui pondèrent le fonctionnement à différentes charges et reflètent mieux l'avantage d'un compresseur à vitesse variable. Retenez deux précautions : comparez des valeurs mesurées selon la même méthode, car les conditions d'essai varient d'une région à l'autre, et demandez la fiche technique du fabricant plutôt que de vous fier à un seul autocollant ou à une publicité.",
      },
      {
        type: 'h2',
        text: "Calculer si l'inverter est rentable pour vous",
      },
      {
        type: 'p',
        text: "La rentabilité se calcule simplement : durée d'amortissement = surcoût à l'achat ÷ économie annuelle sur la facture. L'économie annuelle dépend de trois éléments : le nombre d'heures de fonctionnement par an, la différence de consommation moyenne entre les deux modèles, et le prix de votre kilowattheure, que vous trouverez sur votre facture d'électricité.",
      },
      {
        type: 'p',
        text: "Un exemple purement illustratif, en unités monétaires arbitraires : si l'inverter coûte 100 unités de plus et fait économiser 25 unités par an, l'amortissement prend 4 ans ; si l'économie n'est que de 10 unités par an à cause d'un usage rare, il prend 10 ans, au-delà de la durée de vie probable de bien des appareils. Ces chiffres ne sont pas des prix observés : ils servent à montrer qu'un fort usage rend l'inverter intéressant et qu'un usage rare le rend rarement rentable.",
      },
      {
        type: 'h2',
        text: "Confort : humidité, bruit et stabilité de température",
      },
      {
        type: 'p',
        text: "En climat humide, la déshumidification fait autant partie du confort que la température. Un compresseur d'inverter qui ralentit au lieu de s'arrêter continue d'extraire l'humidité de l'air en régime stable, ce qui limite la sensation de moiteur. À l'inverse, un appareil à vitesse fixe surdimensionné coupe dès que la consigne est atteinte, sans avoir suffisamment déshumidifié, puis redémarre : la pièce paraît froide mais humide.",
      },
      {
        type: 'p',
        text: "Sur le plan sonore, la différence se remarque surtout la nuit : un compresseur à vitesse réduite est moins audible qu'un démarrage à pleine vitesse. Mais le bruit dépend aussi de l'unité intérieure, de sa pose et de la propreté de la turbine ; un inverter encrassé ou mal fixé peut être bruyant.",
      },
      {
        type: 'h2',
        text: "Installation et mise en service : ce qui compte pour les deux technologies",
      },
      {
        type: 'p',
        text: "Aucune technologie ne rattrape une mauvaise installation. Une liaison frigorifique trop longue ou mal isolée, un circuit non tiré au vide, une unité extérieure mal ventilée ou un câblage sous-dimensionné dégradent les performances de n'importe quel appareil. Pour un inverter, qui contient davantage d'électronique, portez une attention particulière à la qualité de la mise à la terre, à la section du câble d'alimentation et au calibre du disjoncteur indiqués dans la notice, et protégez l'unité extérieure des projections d'eau directes tout en laissant l'air circuler. Ces opérations relèvent d'un installateur qualifié.",
      },
      { type: 'h2', text: 'Les limites et précautions propres au contexte local' },
      {
        type: 'p',
        text: "Les variations de tension et les coupures du réseau sont une réalité dans de nombreuses installations. L'électronique d'un inverter y est plus sensible qu'un compresseur à démarrage direct, et un parasurtenseur ou un stabilisateur adapté peut être pertinent ; votre installateur saura dire lequel selon le modèle. Si l'appareil doit être alimenté par un groupe électrogène ou un onduleur, vérifiez dans la notice du fabricant les conditions de compatibilité avant de brancher : n'improvisez pas. Enfin, la disponibilité d'un technicien capable de dépanner la partie électronique doit entrer dans votre décision.",
      },
      { type: 'h2', text: 'Tableau de décision rapide' },
      {
        type: 'ul',
        items: [
          "Usage long et quotidien (chambre la nuit, bureau, boutique, local occupé en continu) : inverter, en général plus avantageux.",
          'Usage ponctuel (pièce rarement utilisée, résidence secondaire) : un modèle à vitesse fixe peut suffire et coûte moins cher.',
          "Budget d'achat très serré : le non-inverter reste une option valable, à condition d'accepter une consommation et un bruit en général plus élevés.",
          "Réseau électrique instable : prévoir une protection, quelle que soit la technologie.",
          "Local professionnel avec forte exigence de stabilité de température : inverter.",
        ],
      },
      {
        type: 'h2',
        text: "Entretien et pannes : ce qu'on observe en pratique",
      },
      {
        type: 'p',
        text: "En règle générale, les pannes d'un climatiseur à vitesse fixe touchent plus souvent des organes électromécaniques simples : condensateur, contacteur, ventilateur, parfois le compresseur. Sur un inverter, les défauts touchent plus souvent l'électronique : carte de commande, module de puissance, capteurs de température. Il s'agit d'observations générales de la profession et non de statistiques, et le résultat varie beaucoup selon la marque et l'installation.",
      },
      {
        type: 'p',
        text: "Deux conséquences pratiques. D'abord, un inverter affiche souvent un code d'erreur qui aide le technicien à localiser le défaut ; notez-le avant d'appeler. Ensuite, le remplacement d'une carte électronique peut représenter une part importante du prix de l'appareil : renseignez-vous sur la garantie, sur la disponibilité des pièces et sur la présence d'un technicien formé à cette marque avant d'acheter.",
      },
      { type: 'h2', text: 'Les erreurs fréquentes' },
      {
        type: 'ul',
        items: [
          "Croire que l'inverter dispense de dimensionner correctement : la puissance doit toujours correspondre au besoin.",
          "Acheter un inverter pour une utilisation de quelques heures par semaine.",
          "Éteindre et rallumer fréquemment l'appareil : mieux vaut régler la consigne sur une température raisonnable.",
          "Comparer deux modèles sur le seul argument « inverter » sans regarder les indicateurs d'efficacité.",
          "Négliger l'entretien : un inverter encrassé perd son avantage.",
        ],
      },
      { type: 'h2', text: 'Questions fréquentes' },
      {
        type: 'p',
        text: "Un inverter dure-t-il plus longtemps ? Le démarrage progressif réduit certaines contraintes mécaniques, mais la durée de vie dépend surtout de la qualité de fabrication, de l'installation et de l'entretien. Aucune des deux technologies n'est garantie plus durable en soi.",
      },
      {
        type: 'p',
        text: "Peut-on faire fonctionner un inverter sur un groupe électrogène ? Cela dépend du modèle et de la qualité du courant fourni. Consultez la notice du fabricant et demandez conseil à votre installateur avant de brancher.",
      },
      {
        type: 'p',
        text: "L'inverter refroidit-il plus vite ? À son démarrage, il peut monter en puissance au-delà de la vitesse nominale d'un modèle comparable, mais l'écart dépend de chaque appareil. Ce n'est pas son principal intérêt, qui reste la régularité et la consommation en régime partiel.",
      },
      {
        type: 'h2',
        text: "Quand le modèle à vitesse fixe reste un bon choix",
      },
      {
        type: 'p',
        text: "Le modèle à vitesse fixe garde une vraie place dans plusieurs situations. Pour une pièce utilisée quelques heures par semaine, un bureau de passage ou un local d'appoint, le surcoût de l'inverter ne sera jamais amorti. Pour un budget très contraint, mieux vaut un appareil à vitesse fixe correctement dimensionné et bien installé qu'un inverter d'entrée de gamme posé sans soin. Enfin, dans un contexte où la réparation d'une carte électronique serait difficile à organiser localement, la simplicité mécanique d'un modèle classique peut rassurer.",
      },
      {
        type: 'p',
        text: "Dans tous les cas, adoptez de bons réflexes d'usage : consigne stable, portes fermées, filtres propres et contrôle périodique. Un climatiseur à vitesse fixe bien entretenu consomme moins qu'un inverter négligé, et la technologie ne compense jamais un mauvais dimensionnement ni une installation approximative.",
      },
      {
        type: 'h2',
        text: "Checklist avant d'acheter",
      },
      {
        type: 'ul',
        items: [
          "Estimez votre durée d'utilisation : combien d'heures par jour et combien de mois par an ?",
          "Notez votre tarif au kilowattheure sur votre facture pour estimer l'économie possible.",
          "Dimensionnez la puissance selon le local, pas selon le prix.",
          "Comparez les indicateurs d'efficacité fournis par le fabricant, avec la même méthode de mesure.",
          "Vérifiez la garantie sur le compresseur, la carte électronique et la pose.",
          "Assurez-vous qu'un technicien qualifié intervient dans votre ville pour cette marque.",
          "Prévoyez une protection électrique adaptée à votre réseau.",
          "Budgétez un entretien régulier, quelle que soit la technologie.",
        ],
      },
      {
        type: 'p',
        text: "Faut-il un stabilisateur de tension pour un inverter ? Cela dépend de la qualité de votre réseau et des prescriptions du fabricant. Si les variations de tension sont fréquentes, une protection adaptée est conseillée ; votre installateur peut mesurer la tension et recommander le dispositif approprié.",
      },
      {
        type: 'p',
        text: "Peut-on alimenter plusieurs pièces avec un seul inverter ? Oui, avec un multi-split inverter, dont une unité extérieure alimente plusieurs unités intérieures. Il faut alors vérifier que la puissance de l'unité extérieure couvre l'usage simultané des pièces concernées.",
      },
      {
        type: 'p',
        text: "Peut-on transformer un appareil à vitesse fixe en inverter ? Non : la technologie est liée au compresseur et à l'électronique de l'appareil, et il n'existe pas de kit de conversion fiable pour l'utilisateur. Le changement de technologie passe par le remplacement de l'appareil.",
      },
      { type: 'h2', text: 'En résumé' },
      {
        type: 'p',
        text: "L'inverter est généralement le meilleur choix pour les usages longs et réguliers ; le modèle à vitesse fixe garde son sens pour les usages occasionnels et les petits budgets. Dans tous les cas, la bonne puissance, une installation soignée et un entretien régulier pèsent autant que la technologie. Pour comparer des modèles en fonction de votre local et de votre usage, KONFORTECH BÉNIN peut vous conseiller : passez par la page de contact du site.",
      },
    ],
  },

  {
    slug: 'climatiseur-refroidit-mal-causes-solutions',
    title: 'Pourquoi un climatiseur refroidit mal : 10 causes et les bons réflexes',
    seoTitle: 'Climatiseur qui refroidit mal : causes, vérifications et solutions',
    seoDescription:
      "Filtres, unité extérieure, gaz, dimensionnement : les causes d'un climatiseur qui refroidit mal, ce que vous pouvez vérifier vous-même et quand appeler un technicien.",
    excerpt:
      "Avant de conclure à une panne grave, passez en revue les causes les plus courantes et sachez distinguer ce que vous pouvez faire de ce qui exige un technicien.",
    category: 'Froid & Climatisation',
    tags: ['climatisation', 'panne', 'diagnostic', 'dépannage'],
    author: 'KONFORTECH BÉNIN',
    datePublished: '2026-10-11',
    readingMinutes: 9,
    imageAlt:
      "Technicien frigoriste contrôlant la pression d'une unité extérieure de climatisation avec un manomètre",
    //image: '/gallerie/blog/climatiseur-refroidit-mal-causes-solutions.webp',
    //favicon: '/gallerie/og/climatiseur-refroidit-mal-causes-solutions.svg',
    relatedServices: ['froid-climatisation', 'maintenance-industrielle'],
    content: [
      {
        type: 'p',
        text: "Votre climatiseur tourne, souffle, mais la pièce reste chaude ou met un temps interminable à rafraîchir. Avant de remplacer l'appareil, il faut identifier la cause : elle est souvent simple et peu coûteuse. Elle peut aussi révéler un défaut qui s'aggravera si vous attendez. Voici les dix causes les plus courantes, les vérifications que vous pouvez faire en sécurité et les situations où un technicien est indispensable.",
      },
      { type: 'h2', text: 'D’abord, une règle de sécurité' },
      {
        type: 'p',
        text: "Coupez l'alimentation de l'appareil au disjoncteur avant toute manipulation autre que le réglage de la télécommande. Ne démontez pas les capots de l'unité extérieure, ne touchez ni aux condensateurs ni aux raccordements électriques. Les circuits contiennent du fluide frigorigène sous pression et de l'électricité qui peut être dangereuse. Tout ce qui touche au circuit frigorifique ou à l'électricité interne relève d'un professionnel.",
      },
      { type: 'h2', text: 'Cause 1 — Les réglages ne correspondent pas à l’usage' },
      {
        type: 'p',
        text: "Mode « ventilation » ou « déshumidification » au lieu de « froid », consigne trop haute, minuterie ou mode économie actifs : vérifiez la télécommande avant tout. Une consigne trop basse ne refroidit pas plus vite ; elle fait simplement tourner l'appareil plus longtemps.",
      },
      { type: 'h2', text: 'Cause 2 — Des filtres encrassés' },
      {
        type: 'p',
        text: "C'est la cause la plus fréquente. Un filtre colmaté par la poussière réduit le débit d'air, l'échange de chaleur diminue et le serpentin peut même givrer. Après avoir coupé l'appareil, retirez les filtres de l'unité intérieure, nettoyez-les selon les indications de la notice et laissez-les sécher avant de les remettre. Dans un environnement poussiéreux, le nettoyage doit être régulier.",
      },
      { type: 'h2', text: 'Cause 3 — Une unité extérieure gênée' },
      {
        type: 'p',
        text: "L'unité extérieure doit rejeter la chaleur. Si elle est collée à un mur, entourée d'objets, couverte de poussière ou de végétation, ou placée en plein soleil sans dégagement, son rendement chute. Vérifiez que l'air circule librement autour d'elle et dégagez ce qui l'encombre. Le nettoyage de l'échangeur extérieur doit être réalisé avec précaution : les ailettes sont fragiles et un lavage mal conduit peut les abîmer.",
      },
      { type: 'h2', text: 'Cause 4 — Un manque de fluide frigorigène' },
      {
        type: 'p',
        text: "Le circuit frigorifique est fermé : le fluide n'est pas consommé. S'il en manque, c'est qu'il y a une fuite. Compléter la charge sans trouver ni réparer la fuite est une solution provisoire. Les signes évocateurs sont une baisse progressive des performances, du givre sur les tuyaux ou sur l'unité intérieure, un sifflement. La détection de fuite, la réparation, la mise sous vide et la recharge nécessitent un outillage spécifique et une personne formée. Les fluides utilisés dans la climatisation sont aussi encadrés au niveau international : l'amendement de Kigali au Protocole de Montréal organise la réduction progressive des HFC, gaz à fort effet de serre très utilisés en froid et climatisation (source : Secrétariat de l'ozone du PNUE, ozone.unep.org). C'est une raison supplémentaire de ne jamais rejeter un fluide dans l'air et de passer par un professionnel.",
      },
      { type: 'h2', text: 'Cause 5 — Un appareil mal dimensionné' },
      {
        type: 'p',
        text: "Si l'appareil a toujours été insuffisant, la cause n'est pas une panne mais un sous-dimensionnement : la puissance est inférieure à la charge thermique de la pièce. Les changements d'usage — plus d'occupants, nouveaux équipements, vitrage ajouté — peuvent aussi faire basculer une installation auparavant correcte. Notre guide sur le choix de la puissance détaille la méthode d'estimation.",
      },
      { type: 'h2', text: 'Cause 6 — Un serpentin ou un échangeur intérieur encrassé' },
      {
        type: 'p',
        text: "Même avec des filtres propres, la poussière fine, la graisse en cuisine ou l'humidité finissent par encrasser l'échangeur intérieur et la turbine. Les performances baissent, des odeurs apparaissent. Le nettoyage en profondeur fait partie d'un entretien professionnel.",
      },
      { type: 'h2', text: 'Cause 7 — Un défaut de ventilateur ou de condensateur' },
      {
        type: 'p',
        text: "Un ventilateur qui tourne trop lentement ou s'arrête, un condensateur de démarrage faible : le compresseur ou le ventilateur extérieur peut ne pas démarrer correctement. Les symptômes sont un bruit de ronflement, un appareil qui disjoncte ou une unité extérieure à l'arrêt alors que l'intérieur souffle. C'est une intervention électrique réservée à un technicien.",
      },
      { type: 'h2', text: 'Cause 8 — Un givrage de l’unité intérieure' },
      {
        type: 'p',
        text: "Du givre ou de la glace sur l'unité intérieure indique en général un débit d'air insuffisant (filtres, turbine) ou un manque de fluide. Éteignez l'appareil et laissez la glace fondre avant de le relancer ; si le givre revient, le problème n'a pas été traité et il faut un diagnostic.",
      },
      { type: 'h2', text: 'Cause 9 — Un local qui reçoit trop de chaleur' },
      {
        type: 'p',
        text: "Portes ouvertes, fenêtres mal étanches, soleil direct, équipements qui chauffent : la chaleur peut entrer plus vite que l'appareil ne l'évacue. Fermer les ouvertures, poser des rideaux ou des films de protection solaire et regrouper les équipements chauds loin de l'unité intérieure peut améliorer nettement les choses.",
      },
      { type: 'h2', text: 'Cause 10 — Un compresseur ou un composant en fin de vie' },
      {
        type: 'p',
        text: "Après de nombreuses années, ou sur un appareil jamais entretenu, le compresseur peut perdre en efficacité. Le coût de réparation doit alors être comparé à celui du remplacement. Un technicien peut vous donner un avis motivé : réparer ou remplacer dépend de l'âge, du type de défaut et du prix des pièces.",
      },
      {
        type: 'h2',
        text: "Lecture rapide des symptômes",
      },
      {
        type: 'p',
        text: "Le tableau ci-dessous associe un symptôme à ses causes les plus probables. Il oriente le diagnostic sans le remplacer : plusieurs causes peuvent se cumuler.",
      },
      {
        type: 'ul',
        items: [
          "L'air souffle mais n'est pas froid : réglages incorrects, filtres colmatés, unité extérieure arrêtée, manque de fluide.",
          "L'appareil refroidit puis cesse de refroidir : givrage de l'unité intérieure, fuite de fluide, condensateur faible.",
          "La pièce est froide mais humide : appareil surdimensionné qui fonctionne par cycles courts.",
          "L'appareil refroidit trop lentement : sous-dimensionnement, apports de chaleur excessifs, échangeur encrassé.",
          "Le disjoncteur saute : défaut électrique, compresseur ou ventilateur en difficulté, protection inadaptée.",
          "De l'eau coule à l'intérieur : évacuation des condensats obstruée, pente insuffisante, givre qui fond.",
          "Mauvaise odeur au démarrage : échangeur ou bac humide avec moisissures.",
          "Bruit fort ou vibrations : support desserré, ventilateur déséquilibré, roulement fatigué, corps étranger dans la turbine.",
        ],
      },
      {
        type: 'h2',
        text: "Mesurer l'écart de température : un indice utile",
      },
      {
        type: 'p',
        text: "Un technicien compare la température de l'air repris par l'unité intérieure avec celle de l'air soufflé. Cet écart renseigne sur la capacité de l'appareil à extraire la chaleur. Un écart nettement plus faible que celui observé lorsque l'appareil fonctionnait bien est un indice de problème : filtre colmaté, manque de fluide, échangeur encrassé.",
      },
      {
        type: 'p',
        text: "Vous pouvez vous-même mesurer les deux températures avec un thermomètre simple, à condition de comparer les mesures dans les mêmes conditions : même consigne, mêmes ouvertures fermées, mêmes heures de la journée. L'interprétation dépend de l'humidité et de la charge de la pièce : ne tirez pas de conclusion définitive d'une seule mesure et ne vous en servez que pour décrire précisément le problème à votre technicien.",
      },
      {
        type: 'h2',
        text: "Le cas d'un appareil neuf qui refroidit mal",
      },
      {
        type: 'p',
        text: "Un climatiseur neuf qui ne refroidit pas correctement ne doit pas être considéré comme normal. Les causes les plus fréquentes sont des défauts d'installation : puissance mal choisie, liaison frigorifique trop longue ou mal isolée, circuit non tiré au vide, charge de fluide incorrecte, unité extérieure mal placée, ou unité intérieure installée face au soleil ou à une source de chaleur. Dans ce cas, contactez l'installateur, décrivez précisément le problème et demandez un contrôle documenté : la garantie de pose et celle de l'appareil peuvent s'appliquer.",
      },
      {
        type: 'h2',
        text: "Réparer ou remplacer ?",
      },
      {
        type: 'p',
        text: "Face à une panne coûteuse, la question se pose. Plutôt que de décider seul, demandez au technicien un devis détaillé et comparez-le au prix d'un appareil neuf équivalent. Plusieurs critères aident à trancher :",
      },
      {
        type: 'ul',
        items: [
          "L'âge de l'appareil et sa fréquence de pannes récentes.",
          "La nature de la panne : un condensateur ou un ventilateur se remplace à moindre coût, un compresseur ou une carte électronique pèse davantage.",
          "La disponibilité des pièces et le délai d'approvisionnement.",
          "L'efficacité énergétique de l'ancien appareil par rapport aux modèles actuels.",
          "Le type de fluide qu'il utilise et la facilité de se le procurer pour des interventions futures.",
          "Le dimensionnement : si l'appareil n'a jamais convenu, le remplacer par un modèle correctement dimensionné est souvent plus pertinent que le réparer.",
        ],
      },
      {
        type: 'h2',
        text: "Habitudes d'usage pour prévenir les problèmes",
      },
      {
        type: 'ul',
        items: [
          "Maintenir portes et fenêtres fermées pendant le fonctionnement.",
          "Choisir une consigne raisonnable et stable plutôt qu'une consigne extrême.",
          "Nettoyer les filtres régulièrement et faire contrôler l'appareil avant la saison chaude.",
          "Poser des rideaux, des stores ou des films de protection solaire sur les vitrages exposés.",
          "Éviter de placer des sources de chaleur sous l'unité intérieure.",
          "Ne pas obstruer les entrées et sorties d'air des unités.",
        ],
      },
      { type: 'h2', text: 'Ce que vous pouvez vérifier sans risque' },
      {
        type: 'ul',
        items: [
          'Les réglages de la télécommande (mode, consigne, minuterie).',
          'Les piles de la télécommande.',
          "L'état des filtres, nettoyés après coupure de l'appareil.",
          "Le dégagement autour de l'unité extérieure.",
          'Les portes et fenêtres de la pièce.',
          "Le disjoncteur de l'appareil.",
        ],
      },
      { type: 'h2', text: 'Quand appeler un technicien sans attendre' },
      {
        type: 'ul',
        items: [
          'Du givre qui revient après décongélation.',
          'Une odeur de brûlé ou un bruit métallique.',
          "Un disjoncteur qui saute à chaque démarrage.",
          "Une fuite d'eau abondante ou une trace d'huile sur les tuyaux.",
          'Une baisse de performances progressive malgré des filtres propres.',
          "Un compresseur qui ne démarre pas alors que l'intérieur souffle.",
        ],
      },
      { type: 'h2', text: 'Les erreurs fréquentes à éviter' },
      {
        type: 'ul',
        items: [
          "Abaisser la consigne à son minimum en espérant refroidir plus vite.",
          "Faire recharger du gaz sans faire chercher la fuite.",
          'Laver l’unité extérieure à haute pression.',
          "Continuer à utiliser un appareil qui givre ou qui fait un bruit anormal.",
          "Faire intervenir une personne sans formation sur le circuit frigorifique.",
        ],
      },
      { type: 'h2', text: 'Questions fréquentes' },
      {
        type: 'p',
        text: "Mon climatiseur souffle de l'air tiède : est-ce grave ? Pas forcément. Vérifiez d'abord le mode, les filtres et l'unité extérieure. Si l'unité extérieure ne tourne pas ou si le problème persiste, faites diagnostiquer l'appareil.",
      },
      {
        type: 'p',
        text: "Peut-on recharger soi-même le gaz d'un climatiseur ? Non : cela exige un matériel spécifique, une formation et le respect de la réglementation sur les fluides frigorigènes. Une charge incorrecte réduit les performances et peut endommager le compresseur.",
      },
      {
        type: 'p',
        text: "À quelle fréquence faire contrôler son appareil ? Un contrôle périodique par un professionnel, notamment avant les périodes de forte chaleur, permet de repérer les défauts avant la panne. Voir notre guide sur l'entretien avant la saison chaude.",
      },
      {
        type: 'p',
        text: "Pourquoi l'unité extérieure ne tourne-t-elle pas alors que l'intérieur souffle ? Plusieurs causes sont possibles : condensateur de démarrage défaillant, sécurité déclenchée, défaut de carte, compresseur bloqué. Coupez l'appareil et faites-le diagnostiquer, car relancer à répétition peut aggraver le défaut.",
      },
      {
        type: 'p',
        text: "Mon appareil givre : puis-je continuer à l'utiliser ? Il vaut mieux l'éteindre et laisser fondre la glace, puis nettoyer les filtres. Si le givre revient, ne forcez pas l'appareil : un manque de fluide ou un défaut de circulation d'air demande un diagnostic professionnel.",
      },
      {
        type: 'p',
        text: "Un climatiseur trop grand peut-il refroidir mal ? Oui : il atteint la consigne rapidement, coupe avant d'avoir déshumidifié, puis redémarre souvent. L'air reste moite malgré une température basse, et le compresseur s'use par démarrages répétés.",
      },
      { type: 'h2', text: 'En résumé' },
      {
        type: 'p',
        text: "Un climatiseur qui refroidit mal a le plus souvent une cause simple : réglages, filtres, unité extérieure gênée. Quand ces vérifications ne suffisent pas, une fuite, un défaut électrique ou un sous-dimensionnement sont à envisager, et le diagnostic revient à un professionnel. Pour faire examiner votre installation, KONFORTECH BÉNIN peut intervenir : utilisez la page de contact du site pour planifier un diagnostic.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const articleSlugs = () => articles.map((a) => a.slug);
export const sortedArticles = () =>
  [...articles].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
