/**
 * FAQ GÉNÉRALE — affichée sur /faq et sur la page d'accueil.
 * Les FAQ spécifiques à un service vivent dans data/services.ts.
 */

export type Faq = { question: string; answer: string; category: string };

export const faqs: Faq[] = [
  {
    category: 'Entreprise',
    question: 'Qui est KONFORTECH BÉNIN ?',
    answer:
      "KONFORTECH BÉNIN est une entreprise béninoise basée à Abomey, dans le Zou, spécialisée dans la conception de solutions techniques. Elle intervient sur deux pôles complémentaires : le développement web et les solutions numériques d'une part, le froid, la climatisation et les installations techniques d'autre part.",
  },
  {
    category: 'Entreprise',
    question: 'Faites-vous à la fois du développement web et de la climatisation ?',
    answer:
      "Oui. C'est précisément ce qui distingue notre approche : réunir sous un même toit les compétences numériques et les compétences techniques, pour que nos clients n'aient qu'un seul interlocuteur.",
  },
  {
    category: 'Interventions',
    question: 'Dans quelles zones intervenez-vous ?',
    answer:
      "Nous sommes basés à Abomey, dans le Zou, et intervenons naturellement dans cette région. Selon la nature et l'ampleur du projet, nous nous déplaçons également dans d'autres villes du Bénin — précisez votre localisation lors de votre demande.",
  },
  {
    category: 'Devis',
    question: 'Combien de temps pour recevoir un devis ?',
    answer:
      "Après réception de votre demande via le formulaire, par téléphone ou par WhatsApp, nous revenons généralement vers vous sous 24 à 48 heures ouvrées avec une première estimation.",
  },
  {
    category: 'Devis',
    question: 'Le devis est-il payant ?',
    answer:
      "L'établissement d'un devis est gratuit. Selon la complexité du projet, une visite technique préalable peut être nécessaire pour établir une estimation précise.",
  },
  {
    category: 'Maintenance',
    question: 'Proposez-vous des contrats de maintenance ?',
    answer:
      "Oui, aussi bien pour vos installations techniques (climatisation, électricité, équipements industriels) que pour vos outils digitaux (site web, application). Contactez-nous pour discuter d'une formule adaptée à votre situation.",
  },
  {
    category: 'Interventions',
    question: 'Intervenez-vous en urgence ?',
    answer:
      "Pour les pannes techniques urgentes (climatisation, électricité, fuite d'eau), contactez-nous directement par téléphone ou WhatsApp. Nous vous indiquons les premières vérifications à effectuer et organisons une intervention dans les meilleurs délais.",
  },
];

export const faqCategories = () => Array.from(new Set(faqs.map((f) => f.category)));
