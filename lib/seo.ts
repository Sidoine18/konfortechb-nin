import type { Metadata } from 'next';
import { SITE } from './site';

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  noIndex?: boolean;
};

/**
 * Générateur de metadata unique et réutilisable.
 * Chaque page l'appelle pour obtenir automatiquement : title, description,
 * canonical, Open Graph et Twitter Card cohérents.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  publishedTime,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image ? `${SITE.url}${image}` : `${SITE.url}${SITE.ogDefault}`;
  // Le template du layout racine ajoute déjà « | KONFORTECH BÉNIN ».
  // On garde donc le titre brut ici pour éviter une duplication du suffixe,
  // et on ne construit le titre complet que pour Open Graph / Twitter.
  const fullTitle = path === '/' ? title : `${title} | ${SITE.name}`;

  return {
    // Sur l'accueil, on impose le titre exact (absolute) pour ne pas
    // déclencher le template du layout.
    title: path === '/' ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE.name }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
