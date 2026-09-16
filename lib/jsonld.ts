import { SITE } from './site';

/**
 * Générateurs JSON-LD. Règle stricte : ces données doivent TOUJOURS
 * correspondre à du contenu réellement visible sur la page. Aucune note,
 * aucun avis, aucune certification inventée.
 */

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}${SITE.logo}`,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phoneE164,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    sameAs: [SITE.social.facebook, SITE.social.linkedin],
  };
}

export function localBusinessLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.name,
    image: `${SITE.url}${SITE.logo}`,
    url: SITE.url,
    telephone: SITE.phoneE164,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: { '@type': 'Country', name: 'Bénin' },
    sameAs: [SITE.social.facebook, SITE.social.linkedin],
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: 'fr-FR',
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function serviceLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'Bénin' },
  };
}

export function articleLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    author: { '@type': 'Person', name: input.author },
    publisher: { '@id': `${SITE.url}/#organization` },
    ...(input.image ? { image: `${SITE.url}${input.image}` } : {}),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}${input.path}` },
  };
}

/** FAQPage — uniquement si les questions/réponses sont visibles sur la page. */
export function faqLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
