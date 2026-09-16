import { ExternalLink } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { activePartners } from '@/data/partners';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = pageMetadata({
  title: 'Partenaires',
  description: 'Découvrez les partenaires officiels de KONFORTECH BÉNIN au Bénin.',
  path: '/partenaires',
});

export default function PartnersPage() {
  const partners = activePartners();
  return (
    <>
      <PageHero
        eyebrow="Partenaires"
        title="Les partenaires de KONFORTECH BÉNIN"
        lede="Cette page présente exclusivement des partenariats réels et confirmés."
      />
      <Breadcrumbs items={[{ name: 'Partenaires', path: '/partenaires' }]} />
      <section className="py-16 sm:py-20">
        <div className="container-page">
          {partners.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-xl border border-dashed border-line bg-white p-10 text-center">
              <p className="font-semibold text-brand-night">
                Nos partenariats officiels seront présentés ici prochainement.
              </p>
              <p className="mt-2 text-slate-600">
                Vous êtes fournisseur, distributeur ou souhaitez devenir partenaire de
                KONFORTECH BÉNIN&nbsp;?
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="outline">Nous contacter</Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((p) => (
                <Card key={p.name}>
                  <h2 className="mb-2 text-lg font-semibold">{p.name}</h2>
                  {p.description && <p className="text-sm text-slate-600">{p.description}</p>}
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
                    >
                      Visiter le site <ExternalLink className="h-4 w-4" aria-hidden />
                    </a>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
