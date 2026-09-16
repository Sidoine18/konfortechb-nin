import { notFound } from 'next/navigation';
import { ExternalLink, Check } from 'lucide-react';
import { getRealization, realizationSlugs } from '@/data/realizations';
import { getService } from '@/data/services';
import { pageMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function generateStaticParams() {
  return realizationSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const r = getRealization(params.slug);
  if (!r) return pageMetadata({ title: 'Réalisation introuvable', description: '', path: '/realisations', noIndex: true });
  return pageMetadata({
    title: r.seoTitle,
    description: r.seoDescription,
    path: `/realisations/${r.slug}`,
    image: r.image,
  });
}

export default function RealizationPage({ params }: { params: { slug: string } }) {
  const r = getRealization(params.slug);
  if (!r) notFound();
  const linkedServices = r.relatedServices.map(getService).filter(Boolean);

  return (
    <>
      <PageHero eyebrow={r.category} title={r.title} lede={r.excerpt}>
        {r.externalUrl && (
          <Button href={r.externalUrl} variant="light" external>
            Visiter le site <ExternalLink className="h-4 w-4" aria-hidden />
          </Button>
        )}
      </PageHero>
      <Breadcrumbs
        items={[
          { name: 'Réalisations', path: '/realisations' },
          { name: r.title, path: `/realisations/${r.slug}` },
        ]}
      />

      <article className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          {r.client && (
            <p className="mb-6 inline-block rounded-full bg-fog-200 px-4 py-2 font-mono text-xs uppercase tracking-wider">
              Client : {r.client}
            </p>
          )}
          <h2 className="text-2xl font-bold">Contexte</h2>
          <p className="mt-3 text-slate-600">{r.context}</p>

          <h2 className="mt-10 text-2xl font-bold">Le problème</h2>
          <p className="mt-3 text-slate-600">{r.problem}</p>

          <h2 className="mt-10 text-2xl font-bold">La solution apportée</h2>
          <p className="mt-3 text-slate-600">{r.solution}</p>

          <h2 className="mt-10 text-2xl font-bold">Ce qui a été livré</h2>
          <ul className="mt-4 space-y-3">
            {r.features.map((f) => (
              <li key={f} className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden />
                <span className="text-slate-700">{f}</span>
              </li>
            ))}
          </ul>

          {r.technologies && r.technologies.length > 0 && (
            <>
              <h2 className="mt-10 text-2xl font-bold">Technologies utilisées</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {r.technologies.map((t) => (
                  <span key={t} className="rounded-full bg-fog-200 px-3.5 py-1.5 text-sm">{t}</span>
                ))}
              </div>
            </>
          )}

          {/* Résultats : affichés UNIQUEMENT s'ils sont réellement documentés */}
          {r.results && r.results.length > 0 && (
            <>
              <h2 className="mt-10 text-2xl font-bold">Résultats</h2>
              <ul className="mt-4 space-y-3">
                {r.results.map((res) => (
                  <li key={res} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                    <span className="text-slate-700">{res}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {r.externalUrl && (
            <div className="mt-10">
              <Button href={r.externalUrl} variant="outline" external>
                Visiter le site <ExternalLink className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          )}
        </div>
      </article>

      {linkedServices.length > 0 && (
        <section className="bg-fog-100 py-16 sm:py-20">
          <div className="container-page">
            <span className="eyebrow mb-3">Services mobilisés</span>
            <h2 className="mb-8 text-3xl font-bold">Ce que nous avons mis en œuvre</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {linkedServices.map((s) => (
                <Card key={s!.slug} href={`/services/${s!.slug}`}>
                  <h3 className="mb-2 text-lg font-semibold">{s!.title}</h3>
                  <p className="text-sm text-slate-600">{s!.excerpt}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title="Un projet similaire en tête ?" text="Décrivez-nous votre besoin, nous vous proposons une solution concrète." />
    </>
  );
}
