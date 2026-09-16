import { pageMetadata } from '@/lib/seo';
import { services } from '@/data/services';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Web3Form } from '@/components/forms/Web3Form';

export const metadata = pageMetadata({
  title: 'Demander un devis',
  description:
    "Demandez un devis gratuit à KONFORTECH BÉNIN pour votre projet de développement web, climatisation, électricité, énergie solaire ou maintenance au Bénin.",
  path: '/demander-un-devis',
});

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Demande de devis"
        title="Décrivez votre projet, recevez une estimation claire."
        lede="Un membre de l'équipe KONFORTECH BÉNIN revient vers vous sous 24 à 48 heures ouvrées."
      />
      <Breadcrumbs items={[{ name: 'Demander un devis', path: '/demander-un-devis' }]} />

      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <Web3Form
            subject="Nouvelle demande de devis — Site KONFORTECH BÉNIN"
            submitLabel="Envoyer ma demande de devis"
            fields={[
              { name: 'nom', label: 'Nom complet', required: true, half: true, autoComplete: 'name' },
              { name: 'entreprise', label: 'Entreprise (si applicable)', half: true, autoComplete: 'organization' },
              { name: 'telephone', label: 'Téléphone', type: 'tel', required: true, half: true, autoComplete: 'tel' },
              { name: 'email', label: 'Email', type: 'email', required: true, half: true, autoComplete: 'email' },
              { name: 'localisation', label: 'Localisation', required: true, half: true, placeholder: 'Ville, quartier' },
              {
                name: 'service', label: 'Service recherché', type: 'select', required: true, half: true,
                options: [...services.map((s) => s.title), 'Autre / je ne sais pas encore'],
              },
              { name: 'besoin', label: 'Description du besoin', type: 'textarea', required: true, placeholder: 'Décrivez votre projet le plus précisément possible' },
              {
                name: 'budget', label: 'Budget indicatif', type: 'select', half: true,
                options: ['Non défini', 'Moins de 200 000 FCFA', '200 000 – 500 000 FCFA', '500 000 – 1 500 000 FCFA', 'Plus de 1 500 000 FCFA'],
              },
              {
                name: 'delai', label: 'Délai souhaité', type: 'select', half: true,
                options: ['Non défini', 'Urgent (sous 1 semaine)', 'Sous 1 mois', 'Dans les 3 mois', 'Pas de contrainte'],
              },
            ]}
            consentLabel="J'accepte que KONFORTECH BÉNIN me contacte au sujet de ma demande."
          />
          <p className="mt-6 text-center text-sm text-slate-500">
            Vous pouvez aussi nous écrire directement sur WhatsApp ou nous appeler.
          </p>
        </div>
      </section>
    </>
  );
}
