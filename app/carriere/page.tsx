import { pageMetadata } from '@/lib/seo';
import { activeJobs } from '@/data/jobs';
import { SITE } from '@/lib/site';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Web3Form } from '@/components/forms/Web3Form';
import { Card } from '@/components/ui/Card';

export const metadata = pageMetadata({
  title: 'Carrière & recrutement',
  description: `Rejoignez KONFORTECH BÉNIN à ${SITE.address.display} : postes ouverts et candidature spontanée dans les métiers du froid, de la climatisation et du numérique.`,
  path: '/carriere',
});

export default function CareerPage() {
  const jobs = activeJobs();
  return (
    <>
      <PageHero
        eyebrow="Carrière"
        title="Rejoindre KONFORTECH BÉNIN"
        lede="Nous recrutons des profils techniques et numériques qui aiment le travail bien fait."
      />
      <Breadcrumbs items={[{ name: 'Carrière', path: '/carriere' }]} />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-3">
            <Card>
              <h2 className="mb-2 text-lg font-semibold">Deux univers techniques</h2>
              <p className="text-sm text-slate-600">
                Travailler chez nous, c&apos;est évoluer entre solutions numériques et installations
                techniques — rarement la même journée deux fois.
              </p>
            </Card>
            <Card>
              <h2 className="mb-2 text-lg font-semibold">Exigence et autonomie</h2>
              <p className="text-sm text-slate-600">
                Nous privilégions des interventions bien faites plutôt que rapides, et laissons de
                l&apos;autonomie à ceux qui la prennent au sérieux.
              </p>
            </Card>
            <Card>
              <h2 className="mb-2 text-lg font-semibold">Ancrage local</h2>
              <p className="text-sm text-slate-600">
                Une structure béninoise en construction, où chaque recrutement compte réellement
                dans la trajectoire de l&apos;entreprise.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-fog-100 py-16 sm:py-20">
        <div className="container-page">
          <span className="eyebrow mb-3">Postes ouverts</span>
          <h2 className="mb-8 text-3xl font-bold">Nos offres en cours</h2>
          {jobs.length === 0 ? (
            <div className="rounded-xl border border-dashed border-line bg-white p-10 text-center">
              <p className="font-semibold text-brand-night">
                Aucune offre n&apos;est ouverte actuellement.
              </p>
              <p className="mt-2 text-slate-600">
                Vous pouvez néanmoins nous adresser une candidature spontanée ci-dessous : nous
                conservons les profils intéressants pour nos prochains besoins.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((j) => (
                <Card key={j.slug} href={`/carriere/${j.slug}`}>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-brand-orange">
                    {j.type} · {j.location}
                  </span>
                  <h3 className="mb-2 mt-2 text-lg font-semibold">{j.title}</h3>
                  <p className="text-sm text-slate-600">{j.excerpt}</p>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <span className="eyebrow mb-3">Candidature</span>
          <h2 className="mb-3 text-3xl font-bold">Envoyer votre candidature</h2>
          <p className="mb-8 text-slate-600">
            Partagez-nous votre profil. Pour joindre un CV, indiquez un lien de téléchargement
            (Google Drive, Dropbox, LinkedIn…) dans le champ prévu — cela nous permet de le
            consulter sans limite de taille de fichier.
          </p>
          <Web3Form
            subject="Nouvelle candidature — Site KONFORTECH BÉNIN"
            submitLabel="Envoyer ma candidature"
            fields={[
              { name: 'prenom', label: 'Prénom', required: true, half: true, autoComplete: 'given-name' },
              { name: 'nom', label: 'Nom', required: true, half: true, autoComplete: 'family-name' },
              { name: 'email', label: 'Email', type: 'email', required: true, half: true, autoComplete: 'email' },
              { name: 'telephone', label: 'Téléphone', type: 'tel', required: true, half: true, autoComplete: 'tel' },
              { name: 'poste', label: 'Poste recherché', required: true, half: true },
              { name: 'localisation', label: 'Localisation', half: true },
              {
                name: 'experience', label: "Niveau d'expérience", type: 'select', half: true,
                options: ['Débutant', '1 à 3 ans', '3 à 5 ans', 'Plus de 5 ans'],
              },
              {
                name: 'cv_lien', label: 'Lien vers votre CV ou portfolio', half: true,
                hint: 'Google Drive, Dropbox, LinkedIn, site personnel…',
                placeholder: 'https://…',
              },
              { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'Présentez-vous en quelques lignes' },
            ]}
            consentLabel="J'accepte que KONFORTECH BÉNIN conserve ma candidature pour ses besoins de recrutement."
          />
        </div>
      </section>
    </>
  );
}
