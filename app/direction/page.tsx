import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { directors } from '@/data/team';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CtaBand } from '@/components/sections/CtaBand';
import { Card } from '@/components/ui/Card';

export const metadata = pageMetadata({
  title: 'Direction',
  description: `Sidoine Ahizigbe dirige ${SITE.name}, entreprise béninoise de solutions techniques basée à ${SITE.address.display}.`,
  path: '/direction',
  image: '/gallery/team/sidoine-ahizigbe.jpg',
});

export default function DirectionPage() {
  const director = directors()[0];

  /**
   * JSON-LD Person — ne contient QUE des informations réelles.
   * Aucun diplôme, titre ou parcours n'est déclaré tant qu'il n'a pas
   * été fourni (voir data/team.ts).
   */
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: director?.name ?? 'Sidoine Ahizigbe',
    jobTitle: director?.role ?? 'Fondateur / Direction',
    worksFor: { '@id': `${SITE.url}/#organization` },
    url: `${SITE.url}/direction`,
    ...(director?.photo ? { image: `${SITE.url}${director.photo}` } : {}),
    ...(director?.linkedin ? { sameAs: [director.linkedin] } : {}),
  };

  return (
    <>
      <JsonLd data={personLd} />
      <PageHero
        eyebrow="Direction"
        title={director?.name ?? 'Sidoine Ahizigbe'}
        lede={`${director?.role ?? 'Fondateur / Direction'} de ${SITE.name}.`}
      />
      <Breadcrumbs items={[{ name: 'Direction', path: '/direction' }]} />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[320px_1fr] lg:items-start">
          {director?.photo && (
            <Image
              src={director.photo}
              alt={director.photoAlt ?? `${director.name}, ${director.role} de ${SITE.name}`}
              width={640}
              height={640}
              priority
              className="mx-auto w-full max-w-[320px] rounded-2xl object-cover shadow-[0_20px_48px_rgba(0,64,138,.16)]"
            />
          )}

          <div>
            <p className="text-lg leading-relaxed text-slate-600">
              {SITE.name} est dirigée par {director?.name ?? 'Sidoine Ahizigbe'}.
              L&apos;entreprise s&apos;est construite autour d&apos;une conviction simple : une
              solution technique n&apos;a de valeur que si elle continue de fonctionner
              correctement plusieurs années après son installation.
            </p>

            {director?.bio && (
              <p className="mt-4 text-slate-600">{director.bio}</p>
            )}

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <Card>
                <h2 className="mb-2 text-base font-semibold">Vision</h2>
                <p className="text-sm text-slate-600">
                  Faire de {SITE.name} une référence béninoise où technologie et solutions
                  techniques se rejoignent au service des clients.
                </p>
              </Card>
              <Card>
                <h2 className="mb-2 text-base font-semibold">Philosophie</h2>
                <p className="text-sm text-slate-600">
                  Comprendre avant de proposer, installer avec rigueur, rester disponible dans la
                  durée.
                </p>
              </Card>
              <Card>
                <h2 className="mb-2 text-base font-semibold">Engagement</h2>
                <p className="text-sm text-slate-600">
                  Ne jamais sacrifier la qualité technique à la rapidité d&apos;exécution.
                </p>
              </Card>
            </div>

            <p className="mt-10 text-slate-600">
              Découvrez également{' '}
              <Link href="/equipe" className="font-semibold text-brand-blue hover:underline">
                l&apos;équipe de {SITE.name}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Envie d'échanger avec notre équipe ?"
        text="Contactez-nous pour discuter de votre projet."
      />
    </>
  );
}
