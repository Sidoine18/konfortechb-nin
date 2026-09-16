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
    readingMinutes: 6,
    relatedServices: ['froid-climatisation', 'maintenance-industrielle'],
    content: [
      {
        type: 'p',
        text: "Un climatiseur mal entretenu consomme davantage d'électricité, refroidit moins efficacement et tombe en panne plus souvent — généralement au pire moment. Voici les vérifications essentielles à effectuer avant l'arrivée de la saison chaude.",
      },
      { type: 'h2', text: '1. Nettoyer les filtres régulièrement' },
      {
        type: 'p',
        text: "Les filtres encrassés réduisent fortement le débit d'air et forcent l'appareil à travailler plus pour un résultat moindre. Dans un environnement poussiéreux, un nettoyage toutes les quelques semaines fait une différence nette sur la performance et sur la consommation.",
      },
      { type: 'h2', text: '2. Vérifier le niveau de gaz réfrigérant' },
      {
        type: 'p',
        text: "Un climatiseur qui refroidit moins bien qu'avant manque souvent de gaz réfrigérant, généralement à cause d'une micro-fuite. Cette vérification demande un technicien équipé du matériel adapté : ce n'est pas une opération à tenter soi-même.",
      },
      { type: 'h2', text: "3. Contrôler l'unité extérieure" },
      {
        type: 'p',
        text: "Poussière, feuilles ou obstacles autour de l'unité extérieure réduisent l'échange thermique et font chuter le rendement. Dégager un espace suffisant autour de l'appareil est l'un des gestes les plus simples et les plus efficaces.",
      },
      { type: 'h2', text: '4. Planifier un entretien préventif' },
      {
        type: 'p',
        text: "Un contrôle professionnel tous les six mois permet de repérer les signes d'usure avant qu'ils ne deviennent une panne coûteuse — particulièrement avant les périodes de forte chaleur, quand les appareils tournent en continu.",
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
      { type: 'h2', text: 'En résumé' },
      {
        type: 'p',
        text: "Un entretien régulier coûte toujours moins cher qu'une panne en pleine saison chaude. Nos techniciens peuvent prendre en charge l'ensemble de ces vérifications dans le cadre d'un contrat d'entretien adapté à votre équipement.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const articleSlugs = () => articles.map((a) => a.slug);
export const sortedArticles = () =>
  [...articles].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
