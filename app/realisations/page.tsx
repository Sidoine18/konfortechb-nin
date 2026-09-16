import { ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { realizations } from '@/data/realizations';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata = pageMetadata({
  title: 'Réalisations',
  description:
    "Découvrez les réalisations de KONFORTECH BÉNIN : projets de développement web, solutions numériques et interventions techniques au Bénin.",
  path: '/realisations',
});

export default function RealizationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Nos projets, présentés avec exactitude."
        lede="Chaque réalisation publiée ici correspond à un projet réellement mené par KONFORTECH BÉNIN."
      />
      <Breadcrumbs items={[{ name: 'Réalisations', path: '/realisations' }]} />
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {realizations.map((r) => (
              <Card key={r.slug} href={`/realisations/${r.slug}`}>
                <span className="font-mono text-[11px] uppercase tracking-wider text-brand-orange">
                  {r.category}
                </span>
                <h2 className="mb-2 mt-2 text-lg font-semibold">{r.title}</h2>
                <p className="text-sm text-slate-600">{r.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                  Voir le projet
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Votre projet pourrait être le prochain ici."
        text="Parlons de ce que vous voulez construire ou installer."
      />
    </>
  );
}
