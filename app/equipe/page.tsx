import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { sortedTeam, staff, directors } from '@/data/team';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CtaBand } from '@/components/sections/CtaBand';
import { MemberCard } from '@/components/team/MemberCard';
import { Button } from '@/components/ui/Button';

export const metadata = pageMetadata({
  title: 'Notre équipe',
  description: `Découvrez l'équipe de ${SITE.name}, entreprise béninoise de solutions techniques basée à ${SITE.address.display}.`,
  path: '/equipe',
});

export default function TeamPage() {
  const all = sortedTeam();
  const others = staff();
  const leads = directors();

  return (
    <>
      <PageHero
        eyebrow="Notre équipe"
        title="Les femmes et les hommes derrière KONFORTECH BÉNIN"
        lede="Une équipe qui réunit compétences numériques et savoir-faire technique de terrain."
      />
      <Breadcrumbs items={[{ name: 'Notre équipe', path: '/equipe' }]} />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          {leads.length > 0 && (
            <div className="mb-16">
              <span className="eyebrow mb-3">Direction</span>
              <h2 className="mb-8 text-3xl font-bold">À la tête de l&apos;entreprise</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {leads.map((m) => (
                  <MemberCard key={m.slug} member={m} />
                ))}
              </div>
            </div>
          )}

          {others.length > 0 && (
            <div>
              <span className="eyebrow mb-3">Équipe</span>
              <h2 className="mb-8 text-3xl font-bold">Nos collaborateurs</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {others.map((m) => (
                  <MemberCard key={m.slug} member={m} />
                ))}
              </div>
            </div>
          )}

          {all.length <= 1 && (
            <div className="mt-12 rounded-xl border border-dashed border-line bg-fog-100 p-8 text-center">
              <h2 className="mb-2 text-lg font-semibold">L&apos;équipe s&apos;agrandit</h2>
              <p className="mx-auto max-w-lg text-slate-600">
                KONFORTECH BÉNIN est une structure en construction. Les nouveaux membres seront
                présentés ici au fur et à mesure des recrutements.
              </p>
              <div className="mt-6">
                <Button href="/carriere" variant="outline">Voir nos opportunités</Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title="Envie de travailler avec nous ?"
        text="Parlons de votre projet, ou rejoignez l'équipe."
      />
    </>
  );
}
