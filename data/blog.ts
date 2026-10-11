/**
 * BLOG — source unique de vérité.
 * ▶ POUR AJOUTER UN ARTICLE : ajoutez un objet ci-dessous. La page
 *   /blog/[slug], le JSON-LD BlogPosting, le SEO et le sitemap sont automatiques.
 *
 * Le champ `content` accepte un tableau de blocs : { type: 'h2' | 'p' | 'ul' }.
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
  image?: string;
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

  /* ───────── LOT 2 · ÉNERGIE SOLAIRE & ÉLECTRICITÉ ───────── */

  {
    slug: "dimensionner-installation-solaire-besoins",
    title: "Comment dimensionner une installation solaire selon vos besoins : méthode complète",
    seoTitle: "Dimensionner une installation solaire : méthode pas à pas (panneaux, batterie, onduleur)",
    seoDescription:
      "Bilan de consommation, panneaux, batterie, onduleur : la méthode complète pour dimensionner une installation solaire photovoltaïque adaptée à vos besoins, avec exemples chiffrés.",
    excerpt:
      "Ni trop petite ni surdimensionnée : une méthode en étapes pour calculer les panneaux, la batterie et l'onduleur dont vous avez réellement besoin.",
    category: "Énergie solaire & électricité",
    tags: ["solaire", "photovoltaïque", "dimensionnement", "batterie", "autonomie énergétique"],
    author: 'KONFORTECH BÉNIN',
    datePublished: '2026-10-11',
    readingMinutes: 14,
    relatedServices: ["maintenance-industrielle"],
    content: [
      {
        type: 'p',
        text: "Beaucoup d'installations solaires déçoivent pour la même raison : elles ont été achetées « au kit », sans avoir calculé ce qu'elles devaient alimenter. Résultat : une batterie qui se vide avant la fin de la soirée, un onduleur qui disjoncte quand le réfrigérateur démarre, ou à l'inverse un équipement coûteux dont la moitié ne servira jamais. Dimensionner une installation, c'est répondre dans l'ordre à quatre questions : de quelle énergie ai-je besoin chaque jour, avec quelle puissance simultanée, pendant combien de temps sans soleil, et avec quelles pertes à prévoir ? Cet article propose une méthode complète, avec des exemples chiffrés signalés comme hypothétiques, pour comprendre ce que fait un installateur sérieux et discuter avec lui en connaissance de cause.",
      },
      {
        type: 'p',
        text: "Il s'adresse aux particuliers, aux commerces et aux PME qui envisagent un système avec batteries, hybride ou de secours. Il ne remplace pas une étude sur site : l'installation, le raccordement et les protections relèvent d'un professionnel qualifié, car on y manipule du courant continu à fort ampérage et des batteries.",
      },
      {
        type: 'h2',
        text: "Rappel essentiel : puissance, énergie et capacité ne sont pas la même chose",
      },
      {
        type: 'p',
        text: "Trois grandeurs reviennent dans tout dimensionnement. La puissance, en watts (W) ou kilowatts (kW), est ce que consomme ou délivre un appareil à un instant donné : elle détermine la taille de l'onduleur et des câbles. L'énergie, en wattheures (Wh) ou kilowattheures (kWh), est la puissance multipliée par la durée : elle détermine la production nécessaire et la taille de la batterie. La capacité d'une batterie, exprimée en ampères-heures (Ah) à une tension donnée, se convertit en énergie : Wh = V × Ah. Confondre ces notions est la source de la plupart des erreurs. Un autre article de ce blog les détaille ; retenez ici que la puissance se « dépense » à chaque instant, tandis que l'énergie se « stocke » et se « consomme » dans la durée.",
      },
      {
        type: 'h2',
        text: "Étape 1 : établir le bilan de consommation",
      },
      {
        type: 'p',
        text: "Tout commence par une liste. Pour chaque appareil, notez sa puissance en watts (sur la plaque signalétique ou la notice), le nombre d'heures d'utilisation par jour et le nombre d'appareils. L'énergie quotidienne de l'appareil est : puissance (W) × heures par jour × nombre d'appareils, en Wh par jour. La somme de toutes les lignes donne votre consommation journalière.",
      },
      {
        type: 'p',
        text: "Deux précautions importantes. D'abord, les appareils à compresseur, comme un réfrigérateur ou un congélateur, ne fonctionnent pas en permanence : leur consommation journalière se lit plus fiablement sur l'étiquette énergie ou la fiche du fabricant que par un simple calcul puissance × 24 h. Ensuite, séparez les charges essentielles (éclairage, réfrigération, communication, ordinateurs) des charges de confort (climatisation, chauffe-eau électrique, fer à repasser, appareils de cuisson) : ces dernières pèsent lourd et décident à elles seules de la taille du système.",
      },
      {
        type: 'h2',
        text: "Un exemple de bilan (hypothétique)",
      },
      {
        type: 'p',
        text: "Prenons un petit logement avec des valeurs choisies pour l'exemple, qui ne proviennent d'aucune mesure sur site :",
      },
      {
        type: 'ul',
        items: [
          "6 lampes LED de 8 W, 5 heures par jour : environ 240 Wh/jour.",
          "2 ventilateurs de 50 W, 8 heures par jour : 800 Wh/jour.",
          "1 réfrigérateur, consommation lue sur l'étiquette : environ 1 000 Wh/jour (hypothèse).",
          "1 téléviseur de 80 W, 4 heures par jour : 320 Wh/jour.",
          "1 ordinateur portable de 60 W, 6 heures par jour : 360 Wh/jour.",
          "1 box internet de 12 W, 24 heures par jour : environ 288 Wh/jour.",
          "Chargeurs de téléphones : environ 100 Wh/jour.",
        ],
      },
      {
        type: 'p',
        text: "Total : environ 3 108 Wh par jour, soit 3,1 kWh. Calculons aussi la puissance simultanée maximale, c'est-à-dire ce qui peut fonctionner en même temps : lampes 48 W + ventilateurs 100 W + réfrigérateur 150 W + téléviseur 80 W + ordinateur 60 W + box 12 W + chargeurs 20 W, soit environ 470 W. Cette valeur, avec une marge, servira à choisir l'onduleur ; l'énergie quotidienne servira à dimensionner les panneaux et la batterie. Ajouter un climatiseur de quelques centaines de watts à ce bilan le bouleverserait : c'est pourquoi un climatiseur doit être traité à part et dimensionné avec soin.",
      },
      {
        type: 'h2',
        text: "Étape 2 : choisir l'architecture selon votre objectif",
      },
      {
        type: 'p',
        text: "Avant de calculer, précisez ce que vous attendez de l'installation, car l'architecture change tout :",
      },
      {
        type: 'ul',
        items: [
          "Réduire la facture en journée, sans batterie : des panneaux raccordés au réseau via un onduleur dédié. Simple et économique, mais l'installation s'arrête en cas de coupure du réseau, par sécurité.",
          "Disposer d'un secours pendant les coupures : un système hybride avec batterie, qui alimente les charges essentielles quand le réseau est absent.",
          "Alimenter un site non raccordé : un système autonome (hors réseau) avec batteries, dimensionné pour couvrir toute la consommation, y compris les jours peu ensoleillés.",
          "Compléter un groupe électrogène : un système hybride panneaux, batterie et groupe, pour réduire les heures de fonctionnement du groupe.",
        ],
      },
      {
        type: 'p',
        text: "Les règles de raccordement au réseau et d'injection dépendent de la réglementation et du distributeur d'électricité de votre pays. Renseignez-vous auprès des organismes compétents avant tout projet de raccordement, et ne présumez pas des conditions locales : nous ne les détaillons pas ici faute de source vérifiée.",
      },
      {
        type: 'h2',
        text: "Étape 3 : dimensionner le champ de panneaux photovoltaïques",
      },
      {
        type: 'p',
        text: "La puissance crête des panneaux, notée Wc (watt-crête), est la puissance qu'ils délivrent dans des conditions de test standardisées. Pour la calculer, on utilise la relation suivante : puissance crête nécessaire (Wc) = énergie quotidienne à produire (Wh/jour) ÷ (heures de plein soleil équivalentes × rendement global).",
      },
      {
        type: 'ul',
        items: [
          "Les heures de plein soleil équivalentes représentent l'énergie solaire reçue en une journée, exprimée comme un nombre d'heures à 1 000 W/m². Elles varient selon le lieu, la saison, l'inclinaison et l'orientation des panneaux. Ne les devinez pas : relevez-les pour votre site avec un outil de référence (voir plus bas).",
          "Le rendement global regroupe les pertes : échauffement des panneaux, câbles, poussière, rendement de l'onduleur et du chargeur, cycle de charge et de décharge de la batterie. Une valeur de l'ordre de 0,65 à 0,8 est souvent retenue en première approche ; elle dépend de la qualité des composants et des conditions d'installation.",
        ],
      },
      {
        type: 'p',
        text: "Pour obtenir les données d'ensoleillement de votre localité, le service PVGIS du Centre commun de recherche de la Commission européenne fournit gratuitement des données de rayonnement solaire et des estimations de production photovoltaïque pour n'importe quel point du globe, sans inscription, avec une interface disponible en français (source : joint-research-centre.ec.europa.eu, page « Photovoltaic Geographical Information System »). Il suffit de placer votre localité sur la carte et de saisir les caractéristiques de votre champ de panneaux.",
      },
      {
        type: 'h2',
        text: "Application à l'exemple (valeurs hypothétiques)",
      },
      {
        type: 'p',
        text: "Reprenons les 3,1 kWh par jour de l'exemple. Supposons, pour illustrer, 5 heures de plein soleil équivalentes et un rendement global de 0,7. Puissance crête nécessaire = 3 108 ÷ (5 × 0,7) ≈ 888 Wc. Avec des panneaux d'environ 450 Wc, deux panneaux (900 Wc) couvrent le besoin moyen. Mais ces 5 heures sont une hypothèse de calcul et non une donnée mesurée pour le Bénin : vous devrez les remplacer par la valeur de votre site, et la valeur de la saison la plus défavorable si vous voulez un système fiable toute l'année.",
      },
      {
        type: 'h2',
        text: "Orientation, inclinaison, ombrage et chaleur",
      },
      {
        type: 'ul',
        items: [
          "Orientation : dans l'hémisphère nord, donc au Bénin, les panneaux sont généralement orientés vers le sud. Un écart modéré reste acceptable et peut même être utile pour mieux répartir la production sur la journée.",
          "Inclinaison : à faible latitude, l'inclinaison optimale est faible. On garde toutefois une inclinaison minimale, souvent d'une dizaine de degrés ou plus, pour que la pluie évacue la poussière et que l'eau ne stagne pas.",
          "Ombrage : une ombre partielle, même petite (antenne, arbre, cheminée), peut réduire sensiblement la production d'une série de panneaux. Repérez-la à différentes heures de la journée avant de fixer l'emplacement.",
          "Chaleur : un panneau chaud produit moins. Laissez une lame d'air derrière les panneaux et évitez de les plaquer contre une toiture sans ventilation.",
          "Poussière : en saison sèche, le dépôt de poussière réduit la production. Prévoyez un accès sûr pour un nettoyage doux, à l'eau claire, tôt le matin ou en soirée.",
        ],
      },
      {
        type: 'h2',
        text: "Étape 4 : dimensionner la batterie",
      },
      {
        type: 'p',
        text: "La batterie couvre la consommation quand les panneaux ne produisent pas assez : la nuit, par temps couvert, ou pendant une coupure. Deux décisions pilotent son dimensionnement : l'énergie que vous voulez pouvoir stocker, et la profondeur de décharge autorisée. La formule courante est : capacité nominale (Wh) = énergie à stocker (Wh) ÷ (profondeur de décharge × rendement).",
      },
      {
        type: 'ul',
        items: [
          "L'énergie à stocker dépend de l'usage. Un secours pour les charges essentielles pendant quelques heures est bien plus petit qu'une autonomie d'une journée entière sans soleil.",
          "La profondeur de décharge est la part de la capacité que l'on accepte d'utiliser sans abréger la vie de la batterie. Elle dépend de la technologie et du fabricant : suivez la fiche technique, car une batterie régulièrement trop déchargée vieillit prématurément.",
          "Le rendement tient compte des pertes de la chaîne de conversion et de la batterie.",
        ],
      },
      {
        type: 'p',
        text: "Exemple hypothétique : on souhaite stocker 3,1 kWh, soit une journée de consommation, avec une profondeur de décharge de 80 % et un rendement de 0,9. Capacité nominale = 3 108 ÷ (0,8 × 0,9) ≈ 4 317 Wh, soit environ 4,3 kWh. À une tension de 48 V, cela représente environ 90 Ah. Ce calcul est une base : le fabricant précise la capacité utilisable réelle, la profondeur de décharge recommandée et le courant de décharge maximal. Pour la chaleur, sachez que le vieillissement des batteries s'accélère à haute température : placez-les dans un local ventilé et abrité du soleil.",
      },
      {
        type: 'h2',
        text: "Étape 5 : choisir l'onduleur et le régulateur",
      },
      {
        type: 'p',
        text: "L'onduleur transforme le courant continu des panneaux et de la batterie en courant alternatif utilisable par vos appareils. Sa puissance continue doit dépasser la puissance simultanée de vos charges, avec une marge, et son régime de pointe doit tolérer les appels de courant des appareils à moteur ou à compresseur, qui peuvent consommer plusieurs fois leur puissance nominale pendant quelques secondes au démarrage. Dans l'exemple, la puissance simultanée de 470 W, plus une marge, conduit à envisager un onduleur d'environ 800 à 1 000 W en sinus pur, à confirmer avec l'appel de courant du réfrigérateur.",
      },
      {
        type: 'p',
        text: "Le régulateur de charge, souvent intégré à l'onduleur hybride, gère la charge de la batterie à partir des panneaux. Les régulateurs de type MPPT extraient mieux l'énergie des panneaux que les régulateurs plus simples, mais ils doivent être compatibles avec la tension et le courant du champ photovoltaïque. Vérifiez la tension maximale d'entrée et le courant maximal dans la fiche technique : un champ dont la tension dépasse la limite peut détruire l'appareil. Notre guide sur les erreurs à éviter lors du choix d'un onduleur détaille ces points.",
      },
      {
        type: 'h2',
        text: "Étape 6 : câbles, protections et mise à la terre",
      },
      {
        type: 'p',
        text: "C'est la partie la moins visible et celle qui conditionne la sécurité. Sur le côté courant continu, les courants peuvent être élevés, surtout avec une batterie de faible tension, et un arc électrique en courant continu ne s'éteint pas spontanément comme en alternatif. Il faut donc des câbles de section adaptée à l'intensité et à la longueur, des connecteurs appropriés, des fusibles ou disjoncteurs spécialement prévus pour le courant continu, un sectionneur permettant d'isoler le champ de panneaux, une mise à la terre correcte des structures et des appareils, et une protection contre les surtensions adaptée au site.",
      },
      {
        type: 'ul',
        items: [
          "Ne jamais utiliser de câbles sous-dimensionnés ou de rallonges domestiques pour des liaisons de batterie.",
          "Ne jamais court-circuiter les bornes d'une batterie : le courant de court-circuit peut provoquer brûlures et incendie.",
          "Placer les batteries à l'écart de toute matière inflammable, dans un local ventilé, hors de portée des enfants.",
          "Confier l'installation et la mise en service à un électricien ou installateur qualifié, qui vérifiera aussi la conformité de l'installation électrique existante.",
        ],
      },
      {
        type: 'h2',
        text: "Les pertes qu'on oublie souvent",
      },
      {
        type: 'p',
        text: "Un bon dimensionnement anticipe les pertes plutôt que de les subir. Les principales sont l'échauffement des panneaux, qui diminue leur rendement sous forte chaleur, les chutes de tension dans les câbles, le rendement de l'onduleur, plus faible à très basse charge, la consommation à vide de l'onduleur, qui fonctionne en permanence, et le vieillissement progressif des panneaux et des batteries. Prévoyez aussi une réserve : un système juste calculé pour la moyenne annuelle manquera d'énergie lors des périodes les moins ensoleillées, par exemple en saison des pluies. Certains choisissent d'ajouter un groupe électrogène d'appoint, d'autres de dimensionner sur la saison défavorable.",
      },
      {
        type: 'h2',
        text: "Cas types : logement, commerce, bureau",
      },
      {
        type: 'ul',
        items: [
          "Logement : l'enjeu principal est de couvrir la réfrigération, l'éclairage, la ventilation et l'électronique. La climatisation, si elle est ajoutée, demande à elle seule un système bien plus important.",
          "Commerce avec réfrigérateur ou congélateur : la continuité de la chaîne du froid prime. On dimensionne d'abord la réfrigération, avec une batterie capable de la soutenir toute la nuit et les jours couverts.",
          "Bureau ou PME : les ordinateurs, serveurs et équipements réseau sont sensibles. On privilégie un onduleur sinus pur, une autonomie suffisante pour une extinction propre ou une poursuite du travail, et une séparation des charges critiques.",
          "Climatisation : un climatiseur est une charge forte et fréquente. Un modèle à vitesse variable, mieux géré au démarrage, est plus adapté à un système solaire ; l'estimation de sa consommation réelle doit venir de la fiche technique et de l'usage prévu (voir notre guide sur le choix de la puissance et sur inverter ou non-inverter).",
        ],
      },
      {
        type: 'h2',
        text: "Coût, durée de vie et rentabilité : poser les bonnes questions",
      },
      {
        type: 'p',
        text: "Nous ne publions pas de prix, car ils varient fortement selon les marques, la taille et le contexte, et nous n'avons pas de relevé fiable à citer. En revanche, la façon de raisonner est stable. Le coût total comprend les panneaux, les structures, l'onduleur, la batterie, les câbles et protections, la pose et la mise en service. La batterie est souvent l'élément dont la durée de vie est la plus courte : prévoyez son remplacement dans votre calcul de rentabilité. Comparez enfin le coût du kilowattheure solaire sur la durée de vie de l'installation à votre coût actuel, qu'il vienne du réseau ou d'un groupe électrogène, carburant et maintenance compris. Un devis détaillé, par poste, permet cette comparaison ; un prix global sans détail ne le permet pas.",
      },
      {
        type: 'h2',
        text: "Les erreurs fréquentes à éviter",
      },
      {
        type: 'ul',
        items: [
          "Acheter un kit sans avoir fait de bilan de consommation.",
          "Ignorer les appels de courant au démarrage des appareils à moteur.",
          "Choisir la batterie sur son prix ou son affichage en Ah sans regarder la tension, la profondeur de décharge et le courant maximal.",
          "Dimensionner sur la moyenne annuelle en ignorant la saison la moins ensoleillée.",
          "Oublier les pertes de la chaîne de conversion.",
          "Installer les panneaux à l'ombre d'un arbre ou d'une cheminée sans l'avoir vérifié.",
          "Poser les batteries dans un local fermé, chaud et non ventilé.",
          "Mélanger des batteries d'âges ou de types différents.",
          "Sous-dimensionner câbles et protections côté courant continu.",
          "Faire installer sans qualification, ou sans mise à la terre ni protection contre les surtensions.",
        ],
      },
      {
        type: 'h2',
        text: "Les documents à demander à l'installateur",
      },
      {
        type: 'ul',
        items: [
          "Le détail du bilan de consommation retenu, appareil par appareil.",
          "Le calcul de dimensionnement : heures de plein soleil, rendement, autonomie et profondeur de décharge retenus.",
          "Les fiches techniques de chaque composant principal.",
          "Un schéma électrique avec les protections.",
          "Les garanties sur les panneaux, la batterie, l'onduleur et la pose, avec leurs conditions.",
          "Les modalités d'entretien et de dépannage, et le délai d'intervention.",
        ],
      },
      {
        type: 'h2',
        text: "Questions fréquentes",
      },
      {
        type: 'p',
        text: "Combien de panneaux faut-il pour alimenter une maison ? Cela dépend entièrement de la consommation journalière, de l'ensoleillement du site et des pertes. Il n'existe pas de réponse générale : on calcule à partir du bilan de consommation, comme dans l'exemple ci-dessus.",
      },
      {
        type: 'p',
        text: "Peut-on alimenter un climatiseur avec le solaire ? Oui, mais cela demande un système sensiblement plus important qu'un simple éclairage ou une réfrigération. Il faut estimer la consommation réelle du climatiseur, tenir compte de son courant de démarrage et vérifier la compatibilité de l'onduleur.",
      },
      {
        type: 'p',
        text: "Les panneaux fonctionnent-ils par temps nuageux ? Oui, mais avec une production réduite. C'est pourquoi on dimensionne la batterie et, si besoin, un appoint pour les périodes peu ensoleillées.",
      },
      {
        type: 'p',
        text: "Faut-il nettoyer les panneaux ? La poussière réduit la production, surtout en saison sèche. Un nettoyage doux, à l'eau claire, sans produit abrasif et en sécurité, est conseillé selon l'empoussièrement du site.",
      },
      {
        type: 'p',
        text: "Quelle est la durée de vie d'une installation solaire ? Les composants n'ont pas la même durée : les panneaux ont généralement la durée de vie la plus longue, l'onduleur et la batterie sont plus fragiles. Reportez-vous aux garanties et aux fiches techniques de chaque composant.",
      },
      {
        type: 'p',
        text: "Puis-je agrandir l'installation plus tard ? Oui, si l'onduleur, le régulateur et la batterie ont été choisis pour le permettre. Demandez à l'installateur la capacité d'extension dès le départ.",
      },
      {
        type: 'h2',
        text: "En résumé",
      },
      {
        type: 'p',
        text: "Dimensionner une installation solaire, c'est enchaîner des étapes logiques : mesurer la consommation, choisir l'architecture, calculer les panneaux à partir de l'ensoleillement réel du site, dimensionner la batterie selon l'autonomie voulue, choisir un onduleur capable de démarrer vos appareils, puis sécuriser l'ensemble. Chaque étape repose sur des hypothèses que vous devez connaître et contester. Si vous souhaitez faire étudier vos besoins énergétiques, KONFORTECH BÉNIN peut vous accompagner : passez par la page de contact du site pour demander une étude adaptée à votre situation. Les estimations de cet article sont pédagogiques et ne constituent pas un devis.",
      },
    ],
  },
  {
    slug: "puissance-energie-capacite-batterie-difference",
    title: "Puissance, énergie et capacité d’une batterie : comprendre W, kWh et Ah sans se tromper",
    seoTitle: "Puissance, énergie, capacité de batterie : différence entre W, Wh, Ah et kWh",
    seoDescription:
      "W, kW, Wh, kWh, Ah, V : comprenez la différence entre puissance, énergie et capacité d'une batterie, avec des calculs d'autonomie et les erreurs à éviter.",
    excerpt:
      "Un onduleur de 1 000 W avec une batterie de 100 Ah dure combien de temps ? Les notions et les formules pour ne plus jamais confondre ces unités.",
    category: "Énergie solaire & électricité",
    tags: ["batterie", "puissance", "énergie", "autonomie", "solaire"],
    author: 'KONFORTECH BÉNIN',
    datePublished: '2026-10-11',
    readingMinutes: 14,
    relatedServices: ["maintenance-industrielle"],
    content: [
      {
        type: 'p',
        text: "Quand on achète un onduleur, une batterie ou un kit solaire, trois mots reviennent sans cesse : puissance, énergie et capacité. Dans la conversation courante, on les emploie presque comme des synonymes. En électricité, ils désignent pourtant des choses différentes, mesurées avec des unités différentes, et les confondre conduit à des achats mal dimensionnés : une batterie qui ne tient que deux heures au lieu de huit, un onduleur qui s'arrête dès qu'on branche un appareil, une facture d'électricité mal interprétée. Cet article pose les définitions, les formules et plusieurs exemples de calcul que vous pourrez refaire vous-même.",
      },
      {
        type: 'h2',
        text: "Une image pour comprendre : le robinet et le réservoir",
      },
      {
        type: 'p',
        text: "Imaginez un réservoir d'eau muni d'un robinet. La quantité d'eau que le réservoir peut contenir correspond à l'énergie stockée, en litres. Le débit du robinet, c'est-à-dire la quantité d'eau qui sort à chaque seconde, correspond à la puissance, en litres par seconde. Un petit débit pendant longtemps ou un gros débit pendant peu de temps peuvent vider le même volume. De la même façon, une batterie contient une certaine énergie, et un appareil la consomme avec une certaine puissance. La durée de fonctionnement est le rapport entre les deux.",
      },
      {
        type: 'h2',
        text: "La puissance : ce que consomme ou délivre un appareil à un instant donné",
      },
      {
        type: 'p',
        text: "La puissance s'exprime en watts (W). Mille watts font un kilowatt (kW). Une lampe LED de 10 W consomme 10 W lorsqu'elle est allumée, un ventilateur de 50 W consomme 50 W lorsqu'il tourne, un four électrique peut demander plusieurs milliers de watts. La puissance est une grandeur instantanée : elle n'indique pas combien d'électricité sera consommée au total, seulement à quel rythme.",
      },
      {
        type: 'p',
        text: "La puissance sert à dimensionner ce qui doit supporter ce rythme : l'onduleur, les câbles, les disjoncteurs, le groupe électrogène. Si la somme des puissances des appareils allumés en même temps dépasse la puissance de l'onduleur, celui-ci se met en protection ou s'arrête.",
      },
      {
        type: 'h2',
        text: "Watts, voltampères et facteur de puissance",
      },
      {
        type: 'p',
        text: "Sur les fiches techniques d'onduleurs, vous verrez aussi des voltampères (VA). La puissance apparente, en VA, est le produit de la tension par le courant. La puissance active, en W, est celle qui produit réellement du travail, de la chaleur ou de la lumière. Le rapport entre les deux est le facteur de puissance, un nombre compris entre 0 et 1 qui dépend du type d'appareil. Un onduleur de 1 000 VA ne délivre donc pas forcément 1 000 W : selon son facteur de puissance, il peut délivrer par exemple 800 W. Lisez toujours la puissance en watts sur la fiche, pas seulement celle en VA.",
      },
      {
        type: 'h2',
        text: "L'énergie : la puissance multipliée par la durée",
      },
      {
        type: 'p',
        text: "L'énergie, c'est ce que l'on consomme ou stocke au total. Elle s'exprime en wattheures (Wh) ou en kilowattheures (kWh), avec 1 kWh = 1 000 Wh. La relation fondamentale est : énergie (Wh) = puissance (W) × durée (h). C'est cette grandeur que mesure votre compteur et que facture votre fournisseur d'électricité.",
      },
      {
        type: 'ul',
        items: [
          "Une lampe de 10 W allumée 5 heures consomme 10 × 5 = 50 Wh.",
          "Un ventilateur de 50 W qui tourne 8 heures consomme 50 × 8 = 400 Wh, soit 0,4 kWh.",
          "Un appareil de 1 000 W qui fonctionne 3 heures consomme 3 000 Wh, soit 3 kWh.",
        ],
      },
      {
        type: 'p',
        text: "Remarquez qu'un petit appareil allumé longtemps peut consommer plus d'énergie qu'un gros appareil allumé brièvement. C'est ce qui rend utile le bilan de consommation : ce n'est pas la puissance seule qui pèse sur la facture ou sur la taille de la batterie, mais la puissance multipliée par le temps.",
      },
      {
        type: 'h2',
        text: "La capacité d'une batterie : ampères-heures, volts et wattheures",
      },
      {
        type: 'p',
        text: "Les batteries sont souvent présentées par une capacité en ampères-heures (Ah) et une tension en volts (V). Les ampères-heures mesurent une quantité de charge électrique, pas une énergie. Pour obtenir l'énergie, il faut multiplier par la tension : énergie (Wh) = tension (V) × capacité (Ah). C'est la raison pour laquelle comparer deux batteries uniquement avec leurs Ah est trompeur.",
      },
      {
        type: 'ul',
        items: [
          "Une batterie de 12 V et 100 Ah stocke 12 × 100 = 1 200 Wh, soit 1,2 kWh.",
          "Une batterie de 48 V et 100 Ah stocke 48 × 100 = 4 800 Wh, soit 4,8 kWh, quatre fois plus que la précédente, à nombre d'Ah identique.",
          "Une batterie de 24 V et 200 Ah stocke 24 × 200 = 4 800 Wh : mêmes wattheures que la précédente, avec un courant différent.",
        ],
      },
      {
        type: 'p',
        text: "Quand un vendeur annonce « 100 Ah » sans préciser la tension, la comparaison n'a donc aucun sens. Demandez toujours l'énergie en Wh ou en kWh, ou calculez-la vous-même.",
      },
      {
        type: 'h2',
        text: "Capacité nominale et capacité utilisable : la différence qui coûte cher",
      },
      {
        type: 'p',
        text: "La capacité indiquée sur une batterie est sa capacité nominale. Elle n'est pas entièrement exploitable. Plusieurs facteurs la réduisent :",
      },
      {
        type: 'ul',
        items: [
          "La profondeur de décharge : pour préserver la durée de vie, le fabricant recommande de ne pas décharger la batterie en dessous d'un certain niveau. La capacité utilisable est la capacité nominale multipliée par cette profondeur de décharge recommandée, qui dépend de la technologie et du modèle.",
          "Le rendement : l'énergie récupérée est inférieure à l'énergie injectée, à cause des pertes de la batterie, du chargeur et de l'onduleur.",
          "Le courant de décharge : sur certaines technologies, notamment le plomb, la capacité disponible diminue lorsque le courant demandé est élevé (c'est l'effet Peukert).",
          "La température : une batterie froide délivre moins ; une batterie chauffée vieillit plus vite.",
          "Le vieillissement : avec les cycles et les années, la capacité maximale diminue progressivement.",
        ],
      },
      {
        type: 'p',
        text: "En pratique, retenez qu'une batterie de 5 kWh nominaux ne vous donnera jamais 5 kWh disponibles à la prise. Le fabricant fournit la capacité utilisable et la profondeur de décharge recommandée : c'est cette valeur, et non la capacité nominale, qui doit entrer dans vos calculs.",
      },
      {
        type: 'h2',
        text: "Calculer l'autonomie : la formule et deux exemples",
      },
      {
        type: 'p',
        text: "L'autonomie, c'est-à-dire la durée pendant laquelle la batterie peut alimenter une charge, se calcule ainsi : durée (h) = capacité utilisable (Wh) × rendement ÷ puissance de la charge (W).",
      },
      {
        type: 'p',
        text: "Exemple hypothétique : une batterie de 4,8 kWh nominaux, avec une profondeur de décharge recommandée de 80 %, donne 4,8 × 0,8 = 3,84 kWh utilisables. Avec un rendement de l'onduleur de 0,9, l'énergie réellement disponible pour les appareils est de 3,84 × 0,9 ≈ 3,46 kWh. Pour une charge de 500 W, la durée est de 3 456 ÷ 500 ≈ 6,9 heures. Pour une charge de 1 000 W, par exemple un climatiseur moyen, la durée tombe à environ 3,5 heures. Ces chiffres illustrent la méthode ; les valeurs réelles dépendent du produit et de ses conditions d'usage.",
      },
      {
        type: 'p',
        text: "La même formule montre pourquoi la puissance de la charge domine l'autonomie : doubler la puissance divise la durée par deux. Réduire la consommation, par exemple en supprimant les veilles inutiles ou en choisissant des appareils plus efficaces, augmente autant l'autonomie qu'une batterie plus grosse, souvent à moindre coût.",
      },
      {
        type: 'h2',
        text: "La puissance de la batterie elle-même",
      },
      {
        type: 'p',
        text: "Une batterie a aussi une limite de puissance : le courant maximal qu'elle peut délivrer en continu et en pointe. Une batterie de grande capacité mais de faible courant maximal ne pourra pas alimenter un gros appareil, même si son énergie suffirait en théorie. Vérifiez sur la fiche technique le courant de décharge continu et le courant de pointe, et comparez-les au courant demandé par l'onduleur : courant = puissance ÷ tension, en tenant compte du rendement. Par exemple, un onduleur de 1 000 W alimenté en 12 V demande environ 93 A, alors que le même onduleur alimenté en 24 V ne demande qu'environ 46 A.",
      },
      {
        type: 'h2',
        text: "Pourquoi la tension (12, 24, 48 V) compte",
      },
      {
        type: 'p',
        text: "La puissance est le produit de la tension et du courant : P = U × I. À puissance égale, une tension plus élevée signifie un courant plus faible. Or un courant élevé impose des câbles plus gros, des pertes plus importantes et des protections plus coûteuses, et il augmente le risque d'échauffement aux connexions. C'est pourquoi les systèmes de plus forte puissance utilisent des tensions de batterie plus élevées, comme 24 V ou 48 V. Le choix de la tension de la batterie doit toujours correspondre à celle de l'onduleur.",
      },
      {
        type: 'p',
        text: "On peut associer des batteries pour augmenter la tension ou la capacité. En série, les tensions s'additionnent et la capacité en Ah reste celle d'une batterie. En parallèle, les capacités en Ah s'additionnent et la tension reste la même. Ne mélangez jamais des batteries de types, d'âges ou de capacités différents : la plus faible limite et abîme les autres. Les associations doivent être réalisées par un professionnel.",
      },
      {
        type: 'h2',
        text: "Plomb ou lithium : ce qui change pour la capacité",
      },
      {
        type: 'p',
        text: "Deux grandes familles se rencontrent dans les installations : les batteries au plomb (ouvertes, AGM, gel) et les batteries au lithium, dont la variante lithium fer phosphate est répandue dans le stockage solaire. Sans citer de chiffres qui varient d'un produit à l'autre, voici les différences générales :",
      },
      {
        type: 'ul',
        items: [
          "Profondeur de décharge recommandée : généralement plus élevée pour le lithium, ce qui donne plus de capacité utilisable à capacité nominale égale.",
          "Rendement : généralement meilleur pour le lithium.",
          "Entretien : certaines batteries au plomb ouvertes demandent un contrôle du niveau d'eau et une ventilation, car elles dégagent de l'hydrogène à la charge ; le lithium n'a pas ces contraintes, mais exige un système de gestion de batterie (BMS) fiable.",
          "Prix à l'achat : généralement plus élevé pour le lithium, mais le coût par kWh utilisé sur la durée de vie doit être comparé, et non le seul prix d'achat.",
          "Chaleur : dans les deux cas, une température élevée accélère le vieillissement. Dans un climat chaud, le lieu d'installation compte beaucoup.",
        ],
      },
      {
        type: 'p',
        text: "Pour comparer des batteries, demandez le nombre de cycles garanti, en précisant à quelle profondeur de décharge et à quelle température il a été mesuré. Un nombre de cycles annoncé sans ces conditions ne permet aucune comparaison.",
      },
      {
        type: 'h2',
        text: "Trois exercices pour vérifier que vous avez compris",
      },
      {
        type: 'ul',
        items: [
          "Exercice 1 : une batterie de 12 V et 200 Ah, quelle énergie nominale ? Réponse : 12 × 200 = 2 400 Wh, soit 2,4 kWh.",
          "Exercice 2 : un ordinateur de 60 W fonctionne 6 heures par jour, quelle énergie quotidienne ? Réponse : 60 × 6 = 360 Wh.",
          "Exercice 3 : avec 2,4 kWh nominaux, 50 % de profondeur de décharge et un rendement de 0,9, combien de temps pour alimenter une charge de 100 W ? Réponse : 2 400 × 0,5 × 0,9 = 1 080 Wh, soit 1 080 ÷ 100 = 10,8 heures.",
        ],
      },
      {
        type: 'h2',
        text: "Lire une fiche technique de batterie",
      },
      {
        type: 'ul',
        items: [
          "Tension nominale (V) et capacité nominale (Ah), pour calculer l'énergie en Wh.",
          "Capacité utilisable ou profondeur de décharge recommandée.",
          "Courant de décharge continu et courant de pointe.",
          "Nombre de cycles garantis, avec la profondeur de décharge et la température d'essai.",
          "Plage de température de fonctionnement.",
          "Rendement aller-retour, si indiqué.",
          "Garantie : durée, conditions, et ce qu'elle couvre vraiment.",
          "Compatibilité avec votre onduleur ou votre régulateur, notamment le protocole de communication du BMS pour le lithium.",
        ],
      },
      {
        type: 'h2',
        text: "Sécurité : les batteries ne se manipulent pas à la légère",
      },
      {
        type: 'p',
        text: "Une batterie stocke beaucoup d'énergie et peut débiter un courant considérable en cas de court-circuit. Ne posez jamais d'objet métallique sur les bornes, ne perforez ni ne démontez une batterie, respectez les polarités, utilisez des fusibles ou disjoncteurs adaptés au courant continu et protégez les connexions. Les batteries au plomb ouvertes demandent un local ventilé. Les installations de batteries doivent être réalisées par une personne qualifiée, avec un emplacement dégagé, à distance de toute matière inflammable.",
      },
      {
        type: 'h2',
        text: "Les erreurs fréquentes",
      },
      {
        type: 'ul',
        items: [
          "Comparer des batteries uniquement en Ah, sans tenir compte de la tension.",
          "Prendre la capacité nominale pour la capacité utilisable.",
          "Confondre VA et W sur la fiche d'un onduleur.",
          "Oublier de tenir compte du rendement de l'onduleur dans le calcul d'autonomie.",
          "Ignorer le courant maximal de décharge de la batterie.",
          "Choisir une tension de batterie qui ne correspond pas à l'onduleur.",
          "Mélanger des batteries de types ou d'âges différents.",
          "Installer des batteries dans un local chaud et non ventilé.",
        ],
      },
      {
        type: 'h2',
        text: "Mesurer sa consommation réelle plutôt que la deviner",
      },
      {
        type: 'p',
        text: "Les puissances inscrites sur les plaques signalétiques sont des maxima ou des valeurs nominales ; la consommation réelle d'un appareil varie avec son usage. Un wattmètre de prise, vendu dans le commerce, indique la puissance instantanée et l'énergie cumulée d'un appareil branché dessus. Laissez-le quelques jours sur un réfrigérateur, un ordinateur ou un téléviseur : vous obtiendrez une consommation journalière fiable en Wh, bien plus précise qu'un calcul théorique. Pour l'ensemble d'un logement ou d'un commerce, les relevés de votre compteur et vos factures donnent la consommation globale en kWh par période, à diviser par le nombre de jours pour avoir une moyenne quotidienne.",
      },
      {
        type: 'p',
        text: "Cette mesure est précieuse pour trois raisons. Elle révèle les consommateurs cachés, comme les veilles permanentes ou un vieux congélateur gourmand. Elle évite de surdimensionner par prudence excessive. Et elle donne à l'installateur des données solides, ce qui limite les mauvaises surprises après la mise en service.",
      },
      {
        type: 'h2',
        text: "Un cas pratique : la batterie d'un petit commerce (hypothétique)",
      },
      {
        type: 'p',
        text: "Une boutique souhaite maintenir en service un réfrigérateur et l'éclairage pendant une nuit de coupure, soit 10 heures. Supposons que le réfrigérateur consomme en moyenne 60 W sur la durée et que l'éclairage et la caisse représentent 90 W, soit 150 W au total. L'énergie nécessaire est de 150 × 10 = 1 500 Wh. Avec un rendement de 0,9 pour l'onduleur, il faut fournir 1 500 ÷ 0,9 ≈ 1 667 Wh à la sortie de la batterie. Si la profondeur de décharge recommandée est de 80 %, la capacité nominale requise est de 1 667 ÷ 0,8 ≈ 2 083 Wh. Avec une batterie de 24 V, cela correspond à environ 87 Ah. On retiendrait en pratique une capacité du palier supérieur disponible, pour garder une marge face au vieillissement et aux journées chaudes.",
      },
      {
        type: 'p',
        text: "Ce raisonnement fonctionne dans l'autre sens : si vous disposez déjà d'une batterie, calculez son énergie utilisable, divisez-la par la consommation moyenne de vos charges essentielles et vous obtenez l'autonomie réelle. C'est la meilleure façon de vérifier la promesse d'un vendeur.",
      },
      {
        type: 'h2',
        text: "Idées reçues à écarter",
      },
      {
        type: 'ul',
        items: [
          "« Plus il y a d'Ah, plus la batterie est puissante. » Faux : les Ah mesurent une quantité de charge, pas une puissance, et ne sont comparables qu'à tension égale.",
          "« Un onduleur plus gros protège mieux mes appareils. » Faux : la puissance de l'onduleur ne dit rien sur la qualité de l'onde ni sur les protections.",
          "« Ma batterie de 5 kWh me donne 5 kWh. » Faux : seule une partie de la capacité nominale est utilisable, et des pertes s'ajoutent.",
          "« Brancher deux batteries double l'autonomie. » Cela dépend du montage : en série, la tension double mais pas la capacité en Ah ; en parallèle, la capacité double à tension égale. Dans les deux cas, l'énergie totale double, mais les montages doivent être réalisés par un professionnel.",
          "« Les kWh de ma facture sont la même chose que les kW de mon onduleur. » Faux : le premier mesure une énergie, le second une puissance.",
        ],
      },
      {
        type: 'h2',
        text: "Questions fréquentes",
      },
      {
        type: 'p',
        text: "Un kWh, c'est quoi concrètement ? C'est l'énergie consommée par un appareil de 1 000 W qui fonctionne pendant une heure, ou par un appareil de 100 W qui fonctionne pendant dix heures.",
      },
      {
        type: 'p',
        text: "Comment convertir des Ah en kWh ? Multipliez les Ah par la tension en volts pour obtenir des Wh, puis divisez par 1 000 pour obtenir des kWh. Exemple : 100 Ah × 48 V = 4 800 Wh = 4,8 kWh.",
      },
      {
        type: 'p',
        text: "Pourquoi ma batterie se vide plus vite que prévu ? Les causes habituelles sont une consommation réelle supérieure à celle estimée, la capacité utilisable plus faible que la capacité nominale, les pertes de l'onduleur, la chaleur ou le vieillissement de la batterie.",
      },
      {
        type: 'p',
        text: "Un onduleur plus puissant consomme-t-il plus ? Pas par lui-même : il ne délivre que la puissance demandée par vos appareils. Mais sa consommation à vide, c'est-à-dire sans charge, peut être non négligeable sur une journée complète.",
      },
      {
        type: 'p',
        text: "Quelle est la différence entre une batterie et un onduleur ? La batterie stocke l'énergie en courant continu. L'onduleur convertit ce courant en courant alternatif pour alimenter les appareils domestiques. Les deux doivent être compatibles en tension et en courant.",
      },
      {
        type: 'h2',
        text: "En résumé",
      },
      {
        type: 'p',
        text: "Retenez trois idées : la puissance, en watts, est un rythme ; l'énergie, en wattheures, est une quantité, égale à la puissance multipliée par le temps ; la capacité d'une batterie, en ampères-heures, n'a de sens qu'avec sa tension, et sa part utilisable est inférieure à sa capacité nominale. Avec ces repères, vous pouvez estimer vous-même l'autonomie d'une installation et vérifier les affirmations d'un devis. Pour faire étudier votre besoin énergétique, vous pouvez contacter KONFORTECH BÉNIN via la page de contact du site ; les exemples de cet article sont pédagogiques et ne constituent pas un devis.",
      },
    ],
  },
  {
    slug: "erreurs-choisir-onduleur-solaire-secours",
    title: "Choisir un onduleur : 10 erreurs à éviter (secours, hybride, solaire)",
    seoTitle: "Choisir un onduleur : les erreurs à éviter (puissance, sinus pur, batterie)",
    seoDescription:
      "Puissance, appel de courant, sinus pur, tension de batterie, protections : les erreurs à éviter pour bien choisir un onduleur de secours ou solaire.",
    excerpt:
      "Un onduleur mal choisi s'arrête, chauffe ou abîme vos appareils. Les dix erreurs les plus courantes et la méthode pour les éviter.",
    category: "Énergie solaire & électricité",
    tags: ["onduleur", "solaire", "secours énergétique", "sinus pur", "batterie"],
    author: 'KONFORTECH BÉNIN',
    datePublished: '2026-10-11',
    readingMinutes: 14,
    relatedServices: ["maintenance-industrielle"],
    content: [
      {
        type: 'p',
        text: "L'onduleur est le cerveau d'une installation de secours ou solaire : c'est lui qui transforme le courant continu de la batterie ou des panneaux en courant alternatif pour vos appareils. Un mauvais choix se paie vite : coupures au moment où l'on a le plus besoin d'électricité, appareils abîmés, échauffement, batterie qui vieillit trop tôt. Ce guide passe en revue les dix erreurs les plus fréquentes, explique pourquoi elles arrivent et propose une méthode de choix en plusieurs étapes. Il ne remplace pas la notice du fabricant ni l'avis d'un installateur qualifié, car le raccordement d'un onduleur à une batterie implique des courants élevés.",
      },
      {
        type: 'h2',
        text: "D'abord, de quel type d'onduleur parle-t-on ?",
      },
      {
        type: 'p',
        text: "Le mot « onduleur » recouvre plusieurs familles qu'il faut distinguer avant de comparer des prix.",
      },
      {
        type: 'ul',
        items: [
          "L'onduleur de secours, ou onduleur de type alimentation sans interruption, branché sur le réseau. Il charge une batterie et prend le relais quand le courant disparaît. Il est courant pour les ordinateurs et les équipements réseau.",
          "L'onduleur-chargeur, utilisé avec des batteries de plus grande capacité pour alimenter une maison ou un commerce pendant les coupures. Il charge les batteries depuis le réseau ou un groupe électrogène.",
          "L'onduleur solaire raccordé au réseau, sans batterie, qui injecte la production des panneaux. Il s'arrête lors d'une coupure du réseau, par sécurité.",
          "L'onduleur hybride, qui combine la gestion des panneaux, de la batterie et du réseau dans un seul appareil.",
          "L'onduleur autonome, pour les sites non raccordés, souvent associé à un régulateur de charge et à des batteries.",
        ],
      },
      {
        type: 'p',
        text: "Ces appareils ne sont pas interchangeables. Un onduleur de secours pour ordinateur n'est pas conçu pour alimenter un réfrigérateur pendant des heures, et un onduleur solaire sans batterie ne fournira rien pendant une coupure. Définissez d'abord votre besoin.",
      },
      {
        type: 'h2',
        text: "Erreur 1 : confondre watts et voltampères",
      },
      {
        type: 'p',
        text: "Un onduleur affiche souvent une puissance en VA. Or la puissance qu'il peut vraiment fournir à vos appareils s'exprime en watts, et elle est égale aux VA multipliés par le facteur de puissance de l'onduleur. Un appareil de 1 000 VA qui a un facteur de puissance de 0,8 délivre 800 W. Comparer un onduleur de « 1 000 VA » à un besoin de 1 000 W conduit donc à un modèle trop petit. Repérez toujours la puissance en watts sur la fiche technique, et demandez-la au vendeur si elle n'est pas indiquée.",
      },
      {
        type: 'h2',
        text: "Erreur 2 : oublier les appels de courant au démarrage",
      },
      {
        type: 'p',
        text: "Les appareils à moteur ou à compresseur, comme les réfrigérateurs, congélateurs, pompes, climatiseurs, perceuses ou compresseurs, consomment beaucoup plus que leur puissance nominale pendant une fraction de seconde au démarrage. Ce courant d'appel peut atteindre plusieurs fois la puissance nominale. L'onduleur possède une puissance de crête, indiquée sur la fiche, qu'il peut tenir pendant une durée brève. Si elle est insuffisante, l'onduleur se met en défaut dès que le compresseur démarre, même si la somme des puissances nominales semble raisonnable.",
      },
      {
        type: 'p',
        text: "Pour un réfrigérateur ou un congélateur, vérifiez le courant de démarrage dans la fiche de l'appareil ou demandez-le au fabricant. Pour un climatiseur, un modèle à vitesse variable, qui démarre progressivement, est généralement beaucoup moins exigeant qu'un modèle à vitesse fixe. Notre guide sur le choix entre inverter et non-inverter détaille cette différence.",
      },
      {
        type: 'h2',
        text: "Erreur 3 : choisir un onduleur à sinus modifié pour des charges sensibles",
      },
      {
        type: 'p',
        text: "Un onduleur produit une onde électrique de forme plus ou moins proche de celle du réseau. Les modèles à sinus pur délivrent une onde de bonne qualité, adaptée à tous les appareils. Les modèles à sinus modifié, ou à onde approximative, sont moins chers mais peuvent provoquer bruit, échauffement et dysfonctionnement sur certains équipements : moteurs, compresseurs, électronique sensible, appareils audio, imprimantes laser, certains chargeurs. Pour alimenter un réfrigérateur, des ordinateurs ou des équipements professionnels, un onduleur à sinus pur est le choix le plus prudent. Vérifiez la forme d'onde annoncée dans la fiche technique.",
      },
      {
        type: 'h2',
        text: "Erreur 4 : se tromper de tension de batterie",
      },
      {
        type: 'p',
        text: "Un onduleur est conçu pour une tension de batterie précise : 12 V, 24 V ou 48 V, par exemple. Elle doit correspondre exactement à celle de votre banc de batteries. Mais le choix de la tension a aussi une conséquence sur le courant : à puissance égale, plus la tension est basse, plus le courant est élevé. Un onduleur de 1 000 W alimenté en 12 V demande environ 93 A, contre environ 46 A en 24 V. Un courant de cette ampleur impose des câbles plus gros et des connexions parfaites. Pour des puissances importantes, préférez une tension plus élevée.",
      },
      {
        type: 'h2',
        text: "Erreur 5 : ignorer le rendement et la consommation à vide",
      },
      {
        type: 'p',
        text: "Un onduleur consomme de l'énergie même quand il ne débite rien : c'est sa consommation à vide. Sur une installation qui fonctionne 24 heures sur 24, cette consommation s'additionne et peut vider une batterie pendant la nuit, surtout si les charges réelles sont faibles. Son rendement varie aussi avec la charge : il est souvent moins bon à très faible charge. Comparez ces données sur les fiches techniques, notamment si votre installation alimente surtout de petites charges, comme l'éclairage et les ordinateurs, pendant de longues périodes.",
      },
      {
        type: 'h2',
        text: "Erreur 6 : négliger la chaleur, la poussière et l'emplacement",
      },
      {
        type: 'p',
        text: "Un onduleur dissipe de la chaleur. Posé dans un local fermé et chaud, au soleil, ou recouvert de poussière, il réduit sa puissance disponible ou s'arrête par protection thermique. Beaucoup de fiches indiquent une puissance maximale à une température donnée, et une réduction au-delà. Dans un climat chaud et humide, choisissez un emplacement ventilé, à l'ombre, à l'abri de la pluie et de l'humidité, éloigné de tout produit inflammable, et dont l'accès permet l'entretien. Protégez-le contre l'entrée d'insectes et de petits animaux, qui provoquent de nombreuses pannes.",
      },
      {
        type: 'h2',
        text: "Erreur 7 : acheter sur le prix seul, sans regarder protections et garantie",
      },
      {
        type: 'p',
        text: "Deux onduleurs de même puissance affichée peuvent être très différents par leur qualité de fabrication. Vérifiez la présence des protections essentielles : contre la surcharge, le court-circuit, la surchauffe, la sous-tension et la surtension de la batterie, l'inversion de polarité. Regardez la durée et les conditions de la garantie, ainsi que l'existence d'un service après-vente et d'un technicien dans votre ville. Un onduleur bon marché sans possibilité de réparation locale peut coûter plus cher à long terme qu'un modèle plus onéreux dont le dépannage est assuré.",
      },
      {
        type: 'h2',
        text: "Erreur 8 : sous-estimer les câbles et les protections côté courant continu",
      },
      {
        type: 'p',
        text: "Entre la batterie et l'onduleur circulent des courants élevés. Des câbles trop fins chauffent, provoquent des chutes de tension et peuvent s'enflammer. Il faut une section adaptée au courant et à la longueur, des cosses serties correctement, des connexions serrées, un fusible ou un disjoncteur conçu pour le courant continu, placé au plus près de la batterie, et un moyen de sectionnement. Une mise à la terre correcte et, selon le site, une protection contre les surtensions complètent l'ensemble. Ce travail est réservé à un professionnel : un arc électrique en courant continu est difficile à éteindre.",
      },
      {
        type: 'h2',
        text: "Erreur 9 : négliger la compatibilité avec la batterie et les panneaux",
      },
      {
        type: 'p',
        text: "Un onduleur doit être compatible avec la technologie de batterie choisie. Les profils de charge du plomb et du lithium diffèrent, et certaines batteries au lithium communiquent avec l'onduleur par un protocole dédié. Un réglage incorrect peut réduire la durée de vie de la batterie, voire la rendre dangereuse. Si l'onduleur intègre un régulateur solaire, vérifiez aussi la tension maximale d'entrée, le courant maximal et la plage de fonctionnement du suivi du point de puissance maximale (MPPT) par rapport à votre champ de panneaux : un champ dont la tension dépasse la limite d'entrée peut détruire l'appareil. Faites valider l'ensemble par l'installateur à partir des fiches techniques.",
      },
      {
        type: 'h2',
        text: "Erreur 10 : ne pas penser à l'évolution du besoin et à l'entretien",
      },
      {
        type: 'p',
        text: "Un système sous-dimensionné dès le départ devient vite insuffisant : on ajoute un appareil, puis un autre. Demandez si l'onduleur peut être mis en parallèle avec un autre, si la batterie peut être étendue et si le champ solaire peut être agrandi. Pensez aussi à l'entretien : nettoyage des ventilateurs, contrôle des connexions, mise à jour du micrologiciel si elle est prévue, surveillance des alarmes. Un onduleur dont l'interface affiche l'état de la batterie et les défauts facilite le suivi et le dépannage.",
      },
      {
        type: 'h2',
        text: "Une méthode de choix en six étapes",
      },
      {
        type: 'ul',
        items: [
          "Étape 1 — Listez les appareils à alimenter pendant une coupure ou en autonomie, en séparant essentiels et confort.",
          "Étape 2 — Calculez la puissance simultanée maximale en watts, puis ajoutez une marge. Une marge de l'ordre de 20 à 30 % est un repère professionnel courant, à adapter à l'usage.",
          "Étape 3 — Identifiez les appareils à moteur et leurs courants de démarrage, et vérifiez la puissance de crête de l'onduleur.",
          "Étape 4 — Déterminez l'autonomie souhaitée, puis calculez l'énergie à stocker et la capacité de batterie correspondante.",
          "Étape 5 — Choisissez la tension de batterie en fonction de la puissance, en préférant une tension plus élevée pour les puissances importantes.",
          "Étape 6 — Vérifiez le type d'onde, les protections, la compatibilité batterie et panneaux, la garantie et le service après-vente, puis faites valider l'installation par un professionnel.",
        ],
      },
      {
        type: 'h2',
        text: "Un exemple de choix (hypothétique) : une petite boutique",
      },
      {
        type: 'p',
        text: "Une boutique veut garder en service, pendant les coupures, un réfrigérateur de 150 W, deux ventilateurs de 60 W, six lampes LED de 10 W, un ordinateur de 80 W et un téléviseur de 100 W. Puissance simultanée : 150 + 120 + 60 + 80 + 100 = 510 W. Avec une marge de 25 %, on retient environ 640 W de puissance continue. Supposons, pour l'exemple, que le réfrigérateur appelle trois fois sa puissance nominale au démarrage, soit 450 W : la pointe est alors d'environ 360 + 450 = 810 W, que l'onduleur doit pouvoir tenir quelques secondes.",
      },
      {
        type: 'p',
        text: "Un onduleur à sinus pur d'environ 1 000 W continus, avec une puissance de crête supérieure, répondrait à ce besoin. Sa tension d'entrée est un choix important : en 12 V, il demanderait environ 93 A à pleine puissance, contre environ 46 A en 24 V. Le 24 V paraît donc plus raisonnable pour les câbles et les protections. Ces valeurs sont des hypothèses pédagogiques ; la décision finale doit s'appuyer sur les fiches techniques réelles des appareils et de l'onduleur.",
      },
      {
        type: 'h2',
        text: "Et la climatisation sur onduleur ?",
      },
      {
        type: 'p',
        text: "Un climatiseur est une charge importante. Pour l'alimenter sur batterie, il faut estimer sa consommation réelle, son courant de démarrage et la durée d'autonomie voulue. Un modèle à vitesse variable est en général plus facile à alimenter par un onduleur qu'un modèle à vitesse fixe. Même avec ce type d'appareil, la batterie nécessaire est vite très volumineuse, car l'énergie consommée sur plusieurs heures est importante. Ne branchez jamais un climatiseur sur un petit onduleur sans avoir vérifié sa compatibilité dans la notice ; l'avis d'un installateur est recommandé.",
      },
      {
        type: 'h2',
        text: "Sécurité et bonnes pratiques d'installation",
      },
      {
        type: 'ul',
        items: [
          "Respecter les indications de la notice pour la tension, la polarité et le serrage des connexions.",
          "Utiliser des protections dimensionnées pour le courant continu, au plus près de la batterie.",
          "Installer l'appareil sur un support stable, ventilé, à l'abri de l'eau, loin de matières inflammables.",
          "Ne jamais ouvrir l'onduleur sous tension ni intervenir sur les condensateurs internes, qui peuvent rester chargés.",
          "Couper l'alimentation et isoler la batterie avant toute intervention.",
          "Faire contrôler régulièrement les connexions et l'état des câbles.",
          "Pour une alimentation médicale ou toute fonction vitale, demander un avis spécialisé : un onduleur domestique n'offre pas forcément le niveau de fiabilité requis.",
        ],
      },
      {
        type: 'h2',
        text: "Onduleur de secours pour ordinateurs et équipements réseau",
      },
      {
        type: 'p',
        text: "Pour un poste de travail, un serveur, une box ou un routeur, le critère principal n'est pas toujours la longue autonomie : c'est la continuité sans coupure et la possibilité d'éteindre proprement. Les onduleurs de secours de type interactif ou en ligne basculent sur la batterie en un temps très court, ce qui évite le redémarrage des ordinateurs. Certains modèles d'entrée de gamme ont un temps de transfert plus long, que la fiche technique doit préciser. Pour du matériel sensible, privilégiez un modèle à sinus pur ou à onde de bonne qualité, avec protection contre les surtensions, et dimensionnez la puissance en tenant compte de la puissance réelle de l'alimentation de chaque équipement, pas seulement de la valeur maximale indiquée.",
      },
      {
        type: 'p',
        text: "Pour un serveur ou un équipement critique, une autonomie de quelques minutes suffit souvent pour une extinction automatique via un logiciel ou un câble de communication, à condition que ce dispositif soit configuré. Si l'activité doit continuer pendant une longue coupure, il faut une batterie plus importante ou un groupe électrogène en complément, avec une étude spécifique.",
      },
      {
        type: 'h2',
        text: "Entretien et signes d'usure d'un onduleur",
      },
      {
        type: 'p',
        text: "Un onduleur bien choisi doit aussi être entretenu. Quelques gestes simples, accessibles à l'utilisateur, prolongent sa durée de vie : dépoussiérer les grilles d'aération à l'extérieur de l'appareil, vérifier que rien n'obstrue la ventilation, observer les voyants et les alarmes, noter les codes de défaut affichés. Les contrôles internes (serrage des connexions, état des câbles, inspection des condensateurs) relèvent d'un professionnel et doivent se faire appareil hors tension et batterie isolée.",
      },
      {
        type: 'ul',
        items: [
          "Ventilateur bruyant, ou qui s'emballe : poussière, roulement fatigué ou température trop élevée.",
          "Coupures répétées en charge : surcharge, batterie fatiguée, connexion lâche ou pic de démarrage trop élevé.",
          "Batterie qui se vide plus vite qu'avant : vieillissement de la batterie, consommation en hausse ou réglages incorrects.",
          "Odeur de brûlé ou de plastique chauffé : coupez immédiatement et faites contrôler l'installation.",
          "Alarmes de surchauffe fréquentes : emplacement trop chaud, ventilation insuffisante ou charge continue trop proche de la limite.",
        ],
      },
      {
        type: 'h2',
        text: "Idées reçues à écarter",
      },
      {
        type: 'ul',
        items: [
          "« Un onduleur de grande puissance consomme toujours plus. » Il ne délivre que ce que demandent les appareils, mais sa consommation à vide peut être plus élevée sur un grand modèle ; elle doit être comparée.",
          "« Le sinus modifié, c'est la même chose pour moins cher. » Pas pour tous les appareils : certains moteurs, compresseurs et électroniques le supportent mal.",
          "« Je peux brancher n'importe quelle batterie. » Non : la tension, la technologie et le courant de décharge doivent correspondre à l'onduleur.",
          "« L'onduleur règle tous mes problèmes de réseau instable. » Il protège contre les coupures et peut filtrer certaines perturbations, mais ne remplace ni une installation électrique correcte ni une bonne mise à la terre.",
        ],
      },
      {
        type: 'h2',
        text: "Questions fréquentes",
      },
      {
        type: 'p',
        text: "Un onduleur de 1 000 VA peut-il alimenter un appareil de 1 000 W ? Pas forcément : selon le facteur de puissance, la puissance réelle est inférieure en watts. Lisez la puissance en watts sur la fiche technique.",
      },
      {
        type: 'p',
        text: "Sinus pur ou sinus modifié, que choisir ? Le sinus pur convient à tous les appareils et reste le choix prudent pour les moteurs, compresseurs et électroniques sensibles. Le sinus modifié peut suffire pour des charges simples, comme des lampes ou des chargeurs, mais il est à éviter dans le doute.",
      },
      {
        type: 'p',
        text: "Un onduleur peut-il alimenter un réfrigérateur ? Oui, à condition que sa puissance de crête supporte le courant de démarrage du compresseur et que la batterie fournisse l'énergie nécessaire pendant la durée voulue.",
      },
      {
        type: 'p',
        text: "Peut-on brancher un onduleur sur un groupe électrogène ? Un onduleur-chargeur peut charger ses batteries depuis un groupe, mais les conditions de compatibilité (puissance, qualité de la tension, démarrage) sont précisées par les fabricants. Suivez leurs notices et demandez conseil à un installateur.",
      },
      {
        type: 'p',
        text: "Pourquoi mon onduleur chauffe-t-il et fait-il du bruit ? Une certaine chaleur est normale, mais un échauffement excessif peut venir d'une charge trop forte, d'un manque de ventilation, d'une poussière accumulée ou d'un ventilateur défaillant. Vérifiez l'emplacement et demandez un contrôle si le problème persiste.",
      },
      {
        type: 'p',
        text: "Quelle est la durée de vie d'un onduleur ? Elle dépend de la qualité de l'appareil, de la température, de la charge moyenne et de l'entretien. Reportez-vous à la garantie et aux indications du fabricant.",
      },
      {
        type: 'h2',
        text: "En résumé",
      },
      {
        type: 'p',
        text: "Bien choisir un onduleur revient à répondre à quelques questions simples : quelle puissance en watts, quelle crête au démarrage, quelle forme d'onde, quelle tension de batterie, quelle autonomie, quelle chaleur et quelle garantie. Les erreurs courantes viennent presque toujours d'un calcul omis, d'une fiche technique mal lue ou d'une installation trop vite faite. Pour faire étudier votre besoin avant d'acheter, vous pouvez contacter KONFORTECH BÉNIN via la page de contact du site. Les exemples de cet article sont pédagogiques et ne constituent pas un devis.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const articleSlugs = () => articles.map((a) => a.slug);
export const sortedArticles = () =>
  [...articles].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
