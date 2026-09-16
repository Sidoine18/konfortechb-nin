import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata = pageMetadata({
  title: 'Mentions légales',
  description: `Mentions légales du site officiel de ${SITE.name}.`,
  path: '/mentions-legales',
});

/**
 * ⚠️ À COMPLÉTER : les informations juridiques (forme juridique, numéro
 * d'immatriculation RCCM, IFU, hébergeur exact) ne sont volontairement PAS
 * inventées. Remplacez les blocs « À compléter » par les données réelles.
 */
export default function LegalPage() {
  return (
    <>
      <PageHero eyebrow="Informations légales" title="Mentions légales" />
      <Breadcrumbs items={[{ name: 'Mentions légales', path: '/mentions-legales' }]} />
      <section className="py-16 sm:py-20">
        <div className="container-page prose-page max-w-3xl">
          <h2>Éditeur du site</h2>
          <p>
            {SITE.name}<br />
            {SITE.tagline}<br />
            {SITE.address.display}<br />
            Téléphone : {SITE.phoneDisplay}<br />
            Email : {SITE.email}
          </p>

          
          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images, logo, éléments
            graphiques) est la propriété de {SITE.name}, sauf mention contraire. Toute reproduction
            ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.
          </p>

          <h2>Liens externes</h2>
          <p>
            Ce site peut contenir des liens vers des sites tiers. {SITE.name} n&apos;exerce aucun
            contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>
        </div>
      </section>
    </>
  );
}
