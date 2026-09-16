import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { serviceSlugs } from '@/data/services';
import { realizationSlugs } from '@/data/realizations';
import { sectorSlugs } from '@/data/sectors';
import { articles } from '@/data/blog';
import { jobSlugs } from '@/data/jobs';

/**
 * SITEMAP AUTOMATIQUE.
 * Toute entrée ajoutée dans data/*.ts apparaît ici sans aucune modification
 * manuelle de ce fichier.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (p: string) => `${SITE.url}${p}`;

  const staticPages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1, freq: 'weekly' },
    { path: '/a-propos', priority: 0.8, freq: 'monthly' },
    { path: '/direction', priority: 0.6, freq: 'yearly' },
    { path: '/equipe', priority: 0.6, freq: 'monthly' },
    { path: '/services', priority: 0.9, freq: 'monthly' },
    { path: '/realisations', priority: 0.9, freq: 'weekly' },
    { path: '/secteurs', priority: 0.8, freq: 'monthly' },
    { path: '/blog', priority: 0.8, freq: 'weekly' },
    { path: '/carriere', priority: 0.6, freq: 'monthly' },
    { path: '/contact', priority: 0.8, freq: 'yearly' },
    { path: '/demander-un-devis', priority: 0.9, freq: 'yearly' },
    { path: '/faq', priority: 0.7, freq: 'monthly' },
    { path: '/partenaires', priority: 0.5, freq: 'monthly' },
    { path: '/mentions-legales', priority: 0.2, freq: 'yearly' },
    { path: '/politique-confidentialite', priority: 0.2, freq: 'yearly' },
  ];

  return [
    ...staticPages.map((p) => ({
      url: url(p.path),
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...serviceSlugs().map((s) => ({
      url: url(`/services/${s}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...realizationSlugs().map((s) => ({
      url: url(`/realisations/${s}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...sectorSlugs().map((s) => ({
      url: url(`/secteurs/${s}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: url(`/blog/${a.slug}`),
      lastModified: new Date(a.datePublished),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...jobSlugs().map((s) => ({
      url: url(`/carriere/${s}`),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];
}
