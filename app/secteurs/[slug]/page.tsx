import { notFound } from 'next/navigation';
import { AlertTriangle, Check } from 'lucide-react';
import { getSector, sectorSlugs } from '@/data/sectors';
import { getService } from '@/data/services';
import { pageMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function generateStaticParams() {
  return sectorSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getSector(params.slug);
  if (!s) return pageMetadata({ title: 'Secteur introuvable', description: '', path: '/secteurs', noIndex: true });
  return pageMetadata({ title: s.seoTitle, description: s.seoDescription, path: `/secteurs/${s.slug}`, image: s.image });
}

export default function SectorPage({ params }: { params: { slug: string } }) {
  const sector = getSector(params.slug);
  if (!sector) notFound();
  const linkedServices = sector.relatedServices.map(getService).filter(Boolean);

  return (
    <>
      <PageHero eyebrow="Secteur" title={sector.title} lede={sector.excerpt}>
        <Button href="/demander-un-devis">Demander un devis</Button>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: 'Secteurs', path: '/secteurs' },
          { name: sector.title, path: `/secteurs/${sector.slug}` },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="text-lg text-slate-600">{sector.intro}</p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-line bg-[#FFF6EF] p-8">
            <h2 className="mb-5 flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-[#C15A00]">
              <AlertTriangle className="h-4 w-4" aria-hidden /> Défis fréquents
            </h2>
            <ul className="space-y-3">
              {sector.challenges.map((c) => (
                <li key={c} className="text-slate-700">• {c}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-[#EEF6FF] p-8">
            <h2 className="mb-5 flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-brand-blue">
              <Check className="h-4 w-4" aria-hidden /> Notre réponse
            </h2>
            <ul className="space-y-3">
              {sector.answers.map((a) => (
                <li key={a} className="flex gap-2.5 text-slate-700">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-fog-100 py-16 sm:py-20">
        <div className="container-page">
          <span className="eyebrow mb-3">Services mobilisés</span>
          <h2 className="mb-8 text-3xl font-bold">Ce que nous mettons en œuvre pour ce secteur</h2>
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

      <CtaBand title={`Un projet pour votre ${sector.title.toLowerCase()} ?`} text="Décrivez votre contexte, nous vous proposons une solution concrète." />
    </>
  );
}
