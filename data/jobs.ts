/**
 * OFFRES D'EMPLOI — source unique de vérité.
 * ▶ POUR AJOUTER UNE OFFRE : ajoutez un objet ci-dessous avec active: true.
 * ⚠️ Ne publiez que des postes réellement ouverts. Le JSON-LD JobPosting
 *   n'est généré que pour les offres actives.
 */

export type Job = {
  slug: string;
  title: string;
  type: string;
  location: string;
  active: boolean;
  excerpt: string;
  missions: string[];
  profile: string[];
  datePosted: string;
};

/** Aucune offre ouverte actuellement — la page Carrière propose la candidature spontanée. */
export const jobs: Job[] = [];

export const activeJobs = () => jobs.filter((j) => j.active);
export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);
export const jobSlugs = () => activeJobs().map((j) => j.slug);
