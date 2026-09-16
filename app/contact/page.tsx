import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { SITE, whatsappLink } from '@/lib/site';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Web3Form } from '@/components/forms/Web3Form';

export const metadata = pageMetadata({
  title: 'Contact',
  description: `Contactez KONFORTECH BÉNIN à ${SITE.address.display} par téléphone, WhatsApp, email ou formulaire pour votre projet technique ou digital.`,
  path: '/contact',
});

export default function ContactPage() {
  const channels = [
    { icon: Phone, title: 'Téléphone', value: SITE.phoneDisplay, href: `tel:${SITE.phoneE164}` },
    { icon: Mail, title: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MessageCircle, title: 'WhatsApp', value: 'Réponse rapide', href: whatsappLink(), external: true },
    { icon: MapPin, title: 'Localisation', value: SITE.address.display },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet."
        lede="Par téléphone, WhatsApp, email ou formulaire — choisissez ce qui vous convient le mieux."
      />
      <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {channels.map(({ icon: Icon, title, value, href, external }) => {
                const inner = (
                  <>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-[10px] bg-fog-100 text-brand-blue">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h2 className="text-base font-semibold">{title}</h2>
                    <p className="mt-1 break-words text-sm text-slate-600">{value}</p>
                  </>
                );
                const cls = 'rounded-xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(18,22,28,.10)]';
                return href ? (
                  <a key={title} href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {inner}
                  </a>
                ) : (
                  <div key={title} className={cls}>{inner}</div>
                );
              })}
            </div>
            <div className="mt-5 rounded-xl border border-line bg-fog-100 p-6">
              <h2 className="mb-2 text-base font-semibold">Délai de réponse</h2>
              <p className="text-sm text-slate-600">
                Nous revenons généralement vers vous sous 24 à 48 heures ouvrées. Pour une urgence
                technique, privilégiez le téléphone ou WhatsApp.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-2xl font-bold">Envoyer un message</h2>
            <Web3Form
              subject="Nouveau message depuis le site KONFORTECH BÉNIN"
              submitLabel="Envoyer le message"
              fields={[
                { name: 'nom', label: 'Nom complet', required: true, half: true, autoComplete: 'name' },
                { name: 'telephone', label: 'Téléphone', type: 'tel', half: true, autoComplete: 'tel' },
                { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
                { name: 'sujet', label: 'Sujet', required: true },
                { name: 'message', label: 'Votre message', type: 'textarea', required: true },
              ]}
              consentLabel="J'accepte que KONFORTECH BÉNIN me contacte au sujet de ma demande."
            />
          </div>
        </div>
      </section>
    </>
  );
}
