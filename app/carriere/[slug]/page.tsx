import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Check, Star, Wallet, Clock } from 'lucide-react';
import { getJob, jobSlugs } from '@/data/jobs';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { Web3Form } from '@/components/forms/Web3Form';
import { Card } from '@/components/ui/Card';

export function generateStaticParams() {
  return jobSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const job = getJob(params.slug);
  if (!job || !job.active) {
    return pageMetadata({ title: 'Offre introuvable', description: '', path: '/carriere', noIndex: true });
  }
  return pageMetadata({
    title: job.title,
    description: job.seoDescription,
    path: `/carriere/${job.slug}`,
    image: job.ogImage ?? job.image,
  });
}

const employmentTypeMap: Record<string, string> = {
  'Temps plein': 'FULL_TIME',
  'Temps partiel': 'PART_TIME',
  Stage: 'INTERN',
  Freelance: 'CONTRACTOR',
};

function formatDeadline(iso: string) {
  const d = new Date(iso);
  const datePart = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  const timePart = d
    .toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Porto-Novo' })
    .replace(':', 'h');
  return `${datePart} à ${timePart}`;
}

export default function JobPage({ params }: { params: { slug: string } }) {
  const job = getJob(params.slug);
  if (!job || !job.active) notFound();

  const isPast = new Date(job.deadline).getTime() < Date.now();

  const jobPostingLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.seoDescription,
    datePosted: job.datePosted,
    validThrough: job.deadline,
    employmentType: employmentTypeMap[job.type] ?? 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: SITE.name,
      sameAs: SITE.url,
      logo: `${SITE.url}${SITE.logo}`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        addressCountry: SITE.address.country,
      },
    },
    directApply: true,
  };

  return (
    <>
      <JsonLd data={jobPostingLd} />
      <PageHero
        eyebrow={`${job.type} · ${job.location}`}
        title={job.title}
        lede={job.excerpt}
      />
      <Breadcrumbs
        items={[
          { name: 'Carrière', path: '/carriere' },
          { name: job.title, path: `/carriere/${job.slug}` },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            {job.image && (
              <Image
                src={job.image}
                alt={job.imageAlt ?? `Affiche de recrutement — ${job.title}`}
                width={1024}
                height={1536}
                className="mb-10 w-full rounded-xl border border-line object-cover"
                priority
              />
            )}

            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-fog-100 text-brand-blue">
                <Check className="h-4 w-4" aria-hidden />
              </span>
              Vos missions
            </h2>
            <ul className="mb-10 space-y-3">
              {job.missions.map((m) => (
                <li key={m} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                  <span className="text-slate-700">{m}</span>
                </li>
              ))}
            </ul>

            <h2 className="mb-4 text-2xl font-bold">Profil recherché</h2>
            <ul className="mb-10 space-y-3">
              {job.profile.map((p) => (
                <li key={p} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                  <span className="text-slate-700">{p}</span>
                </li>
              ))}
            </ul>

            {job.perks && job.perks.length > 0 && (
              <div className="mb-10 rounded-xl border border-line bg-fog-100 p-6">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                  <Star className="h-5 w-5 text-brand-orange" aria-hidden /> Atouts appréciés
                </h2>
                <ul className="space-y-2.5">
                  {job.perks.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.compensation && job.compensation.length > 0 && (
              <div className="mb-10 rounded-xl border border-line bg-[#EEF6FF] p-6">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-brand-deep">
                  <Wallet className="h-5 w-5" aria-hidden /> Rémunération
                </h2>
                <ul className="space-y-2.5">
                  {job.compensation.map((c) => (
                    <li key={c} className="flex gap-2.5 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.whyJoin && job.whyJoin.length > 0 && (
              <div>
                <h2 className="mb-5 text-2xl font-bold">Pourquoi nous rejoindre</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {job.whyJoin.map((w) => (
                    <Card key={w}>
                      <p className="text-sm font-medium text-slate-700">{w}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Colonne latérale : deadline + formulaire */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div
              className={`mb-6 flex items-start gap-3 rounded-xl border p-5 ${
                isPast ? 'border-red-200 bg-red-50' : 'border-amber-200 bg-amber-50'
              }`}
            >
              <Clock className={`mt-0.5 h-5 w-5 shrink-0 ${isPast ? 'text-red-600' : 'text-amber-600'}`} aria-hidden />
              <p className={`text-sm ${isPast ? 'text-red-800' : 'text-amber-900'}`}>
                {isPast ? (
                  <>Les candidatures pour ce poste sont closes depuis le {formatDeadline(job.deadline)}.</>
                ) : (
                  <>
                    Candidatures ouvertes jusqu&apos;au <strong>{formatDeadline(job.deadline)}</strong>.
                  </>
                )}
              </p>
            </div>

            {!isPast && (
              <>
                <h2 className="mb-4 text-xl font-bold">Postuler à cette offre</h2>
                <Web3Form
                  subject={`Candidature — ${job.title} — Site KONFORTECH BÉNIN`}
                  submitLabel="Envoyer ma candidature"
                  hiddenFields={{ poste: job.title }}
                  fields={[
                    { name: 'prenom', label: 'Prénom', required: true, half: true, autoComplete: 'given-name' },
                    { name: 'nom', label: 'Nom', required: true, half: true, autoComplete: 'family-name' },
                    { name: 'email', label: 'Email', type: 'email', required: true, half: true, autoComplete: 'email' },
                    { name: 'telephone', label: 'Téléphone', type: 'tel', required: true, half: true, autoComplete: 'tel' },
                    {
                      name: 'experience', label: "Niveau d'expérience", type: 'select', required: true,
                      options: ['Débutant', '1 à 3 ans', '3 à 5 ans', 'Plus de 5 ans'],
                    },
                    {
                      name: 'cv_lien', label: 'Lien vers votre CV', required: true,
                      hint: 'Google Drive, Dropbox, LinkedIn…',
                      placeholder: 'https://…',
                    },
                    { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'Présentez-vous en quelques lignes' },
                  ]}
                  consentLabel="J'accepte que KONFORTECH BÉNIN conserve ma candidature pour ce recrutement."
                />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
