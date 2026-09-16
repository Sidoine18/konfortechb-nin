import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { servicesByPillar } from '@/data/services';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CtaBand } from '@/components/sections/CtaBand';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata = pageMetadata({
  title: 'À propos',
  description:
    "Découvrez KONFORTECH BÉNIN : une entreprise béninoise basée à Abomey qui conçoit des solutions techniques modernes, entre développement web, froid et climatisation.",
  path: '/a-propos',
});

const values = [
  { title: 'Sérieux', text: 'Des engagements tenus, du premier échange à la maintenance.' },
  { title: 'Expertise', text: 'Des solutions choisies pour leur pertinence technique, pas pour leur facilité.' },
  { title: 'Transparence', text: 'Des devis clairs et une communication directe, sans zones d’ombre.' },
  { title: 'Innovation', text: 'Une veille constante sur les meilleures pratiques techniques et technologiques.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une entreprise béninoise qui conçoit des solutions techniques modernes."
        lede="À la croisée de la technologie, du confort et de la performance."
      />
      <Breadcrumbs items={[{ name: 'À propos', path: '/a-propos' }]} />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow mb-3">Présentation</span>
            <h2 className="mb-5 text-3xl font-bold">Deux expertises, une seule exigence</h2>
            <p className="mb-4 text-slate-600">
              {SITE.name} est née d&apos;un constat simple : les entreprises et les particuliers
              béninois ont besoin à la fois d&apos;outils digitaux fiables et d&apos;installations
              techniques bien conçues, mais trouvent rarement les deux réunis chez un seul
              prestataire sérieux.
            </p>
            <p className="text-slate-600">
              Nous avons construit une structure capable de répondre aux deux : un pôle technologie
              tourné vers le développement web et les solutions numériques, et un pôle confort
              technique dédié au froid, à la climatisation et aux installations techniques.
            </p>
          </div>
          <div className="space-y-5">
            <div className="rounded-xl border border-line bg-white p-7">
              <h3 className="mb-2 text-lg font-semibold">Notre positionnement</h3>
              <p className="text-slate-600">
                {SITE.name} ne se présente pas comme une simple entreprise de dépannage. Nous
                concevons des solutions techniques pensées pour durer — pas uniquement pour réparer
                dans l&apos;urgence.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-7">
              <h3 className="mb-2 text-lg font-semibold">Notre implantation</h3>
              <p className="text-slate-600">
                Nous sommes basés à {SITE.address.display}. Selon la nature du projet, nous
                intervenons également dans d&apos;autres villes du Bénin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fog-100 py-16 sm:py-20">
        <div className="container-page grid gap-5 sm:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-lg font-semibold">Notre mission</h2>
            <p className="text-slate-600">
              Rendre accessibles, à toute organisation au Bénin, des solutions techniques et
              digitales de qualité professionnelle — conçues pour la réalité du terrain local.
            </p>
          </Card>
          <Card>
            <h2 className="mb-2 text-lg font-semibold">Notre vision</h2>
            <p className="text-slate-600">
              Devenir une référence béninoise reconnue pour sa capacité à réunir technologie et
              solutions techniques au service de la performance de ses clients.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <span className="eyebrow mb-3">Nos valeurs</span>
          <h2 className="mb-10 text-3xl font-bold">Ce qui guide chacune de nos interventions</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title}>
                <h3 className="mb-2 text-lg font-semibold">{v.title}</h3>
                <p className="text-sm text-slate-600">{v.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-night py-16 sm:py-20">
        <div className="container-page">
          <span className="eyebrow eyebrow-light mb-3">Nos domaines d&apos;intervention</span>
          <h2 className="mb-10 text-3xl font-bold text-white">Ce que nous faisons concrètement</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            <Card dark>
              <h3 className="mb-3 text-lg font-semibold text-white">Technologie & digital</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {servicesByPillar('digital').map((s) => (
                  <li key={s.slug}>• {s.title}</li>
                ))}
              </ul>
            </Card>
            <Card dark>
              <h3 className="mb-3 text-lg font-semibold text-white">Froid & installations techniques</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {servicesByPillar('technique').map((s) => (
                  <li key={s.slug}>• {s.title}</li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/services">Voir tous nos services</Button>
            <Button href="/equipe" variant="light">Rencontrer notre équipe</Button>
          </div>
        </div>
      </section>

      <CtaBand title="Envie de travailler avec nous ?" text="Parlons de votre projet, digital ou technique." />
    </>
  );
}
