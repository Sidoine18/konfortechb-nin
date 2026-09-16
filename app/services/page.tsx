import { ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { servicesByPillar, services } from '@/data/services';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { CtaBand } from '@/components/sections/CtaBand';
import { Button } from '@/components/ui/Button';

export const metadata = pageMetadata({
  title: 'Nos Services',
  description:
    "Développement web, applications, SEO, climatisation, froid industriel, électricité, énergie solaire, plomberie et vidéosurveillance : découvrez tous les services de KONFORTECH BÉNIN au Bénin.",
  path: '/services',
});

export default function ServicesPage() {
  const digital = servicesByPillar('digital');
  const technique = servicesByPillar('technique');

  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Des solutions techniques et digitales, sous un même toit."
        lede={`Deux pôles d'expertise, ${services.length} domaines d'intervention — chacun avec sa page dédiée pour comprendre précisément ce que nous faisons.`}
      >
        <Button href="/demander-un-devis">Demander un devis</Button>
      </PageHero>
      <Breadcrumbs items={[{ name: 'Services', path: '/services' }]} />

      <ServiceGroup
        eyebrow="Pôle Technologie"
        title="Développement Web & Solutions digitales"
        items={digital}
      />
      <div className="bg-fog-100">
        <ServiceGroup
          eyebrow="Pôle Confort technique"
          title="Froid, Climatisation & Installations"
          items={technique}
        />
      </div>
      <CtaBand
        title="Vous ne savez pas par où commencer ?"
        text="Décrivez-nous simplement votre besoin — nous identifions ensemble le bon service."
      />
    </>
  );
}

function ServiceGroup({
  eyebrow, title, items,
}: {
  eyebrow: string; title: string;
  items: { slug: string; title: string; excerpt: string }[];
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <span className="eyebrow mb-3">{eyebrow}</span>
        <h2 className="mb-10 text-3xl font-bold sm:text-4xl">{title}</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <Card key={s.slug} href={`/services/${s.slug}`}>
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                Découvrir
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
