/**
 * Configuration centrale du site KONFORTECH BÉNIN.
 * ⚠️ TOUTES les coordonnées de l'entreprise viennent d'ici. Pour changer un
 * téléphone, un email ou un lien social, modifiez CE fichier uniquement —
 * le changement se propage sur tout le site (header, footer, contact,
 * JSON-LD, metadata).
 */

export const SITE = {
  name: 'KONFORTECH BÉNIN',
  tagline: 'Concepteur de Solutions Techniques | Web & Climatisation',
  description:
    "KONFORTECH BÉNIN conçoit et met en œuvre des solutions techniques modernes : développement web, applications, froid, climatisation, maintenance et installations techniques au Bénin.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://konfortechbenin.online',
  locale: 'fr_FR',
  lang: 'fr',

  // Coordonnées officielles
  phoneDisplay: '+229 01 54 16 30 67',
  phoneE164: '+2290154163067',
  whatsapp: '2290154163067',
  whatsappMessage:
    'Bonjour KONFORTECH BÉNIN, je souhaite obtenir des informations concernant vos services.',
  email: 'konfortechbenin@gmail.com',

  address: {
    locality: 'Abomey',
    region: 'Zou',
    country: 'BJ',
    countryName: 'Bénin',
    display: 'Abomey, Zou — Bénin',
  },

  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61592735126888',
    linkedin: 'https://www.linkedin.com/company/konfortech-b%C3%A9nin/',
  },

  logo: '/gallery/logo/konfortech-benin-logo.png',
  ogDefault: '/gallery/logo/konfortech-benin-logo.png',
} as const;

export const whatsappLink = () =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

/** Navigation principale — utilisée par la navbar ET le menu mobile. */
export const NAV = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/services', label: 'Services' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/secteurs', label: 'Secteurs' },
  { href: '/blog', label: 'Blog' },
  { href: '/carriere', label: 'Carrière' },
  { href: '/contact', label: 'Contact' },
] as const;
