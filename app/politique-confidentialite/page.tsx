import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata = pageMetadata({
  title: 'Politique de confidentialité',
  description: `Politique de confidentialité et traitement des données personnelles sur le site de ${SITE.name}.`,
  path: '/politique-confidentialite',
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Vos données" title="Politique de confidentialité" />
      <Breadcrumbs items={[{ name: 'Politique de confidentialité', path: '/politique-confidentialite' }]} />
      <section className="py-16 sm:py-20">
        <div className="container-page prose-page max-w-3xl">
          <h2>Données collectées</h2>
          <p>
            {SITE.name} collecte uniquement les données que vous transmettez volontairement via les
            formulaires du site : formulaire de contact, demande de devis et candidature. Il
            s&apos;agit typiquement de votre nom, de vos coordonnées (email, téléphone), de votre
            localisation et du contenu de votre message.
          </p>

          <h2>Finalité du traitement</h2>
          <p>
            Ces données servent exclusivement à traiter votre demande et à vous recontacter. Elles
            ne sont ni vendues, ni louées, ni transmises à des tiers à des fins commerciales.
          </p>

          <h2>Transmission technique des formulaires</h2>
          <p>
            Les formulaires de ce site sont transmis via le service Web3Forms, qui achemine leur
            contenu vers notre adresse email. Les données transitent donc par ce prestataire au
            moment de l&apos;envoi. Aucune base de données de visiteurs n&apos;est constituée sur ce
            site.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les demandes reçues sont conservées dans notre messagerie le temps nécessaire au
            traitement de votre demande et au suivi de la relation commerciale. Les candidatures
            sont conservées pour la durée de nos besoins de recrutement.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site ne dépose pas de cookie publicitaire ni de cookie de suivi comportemental. Si un
            outil de mesure d&apos;audience est ajouté ultérieurement, cette page sera mise à jour
            en conséquence.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l&apos;accès, la rectification ou la suppression des données vous
            concernant en écrivant à <a href={`mailto:${SITE.email}`} className="text-brand-blue hover:underline">{SITE.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
