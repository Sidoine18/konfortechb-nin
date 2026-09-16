import { ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { sectors } from '@/data/sectors';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata = pageMetadata({
  title: "Secteurs d'activité",
  description:
    "KONFORTECH BÉNIN accompagne hôtels, restaurants, entreprises, écoles, industries, commerces et particuliers avec des solutions techniques et digitales adaptées.",
  path: '/secteurs',
});

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Secteurs d'activité"
        title="Des solutions adaptées à la réalité de votre secteur."
        lede="Chaque secteur a ses contraintes propres. Nous adaptons nos solutions en conséquence."
      />
      <Breadcrumbs items={[{ name: 'Secteurs', path: '/secteurs' }]} />
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <Card key={s.slug} href={`/secteurs/${s.slug}`}>
              <h2 className="mb-2 text-lg font-semibold">{s.title}</h2>
              <p className="text-sm text-slate-600">{s.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                Découvrir
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Card>
          ))}
        </div>
      </section>
      <CtaBand title="Votre secteur n'est pas listé ?" text="Contactez-nous : nous accompagnons aussi les institutions, ONG et promoteurs immobiliers." />
    </>
  );
}
