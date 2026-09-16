import { pageMetadata } from '@/lib/seo';
import { faqs, faqCategories } from '@/data/faqs';
import { services } from '@/data/services';
import { faqLd } from '@/lib/jsonld';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata = pageMetadata({
  title: 'Questions fréquentes',
  description:
    "Toutes les réponses aux questions fréquentes sur KONFORTECH BÉNIN : services, zones d'intervention, devis, maintenance et urgences techniques.",
  path: '/faq',
});

export default function FaqPage() {
  // On agrège la FAQ générale + les FAQ de chaque service : toutes visibles
  // sur la page, donc légitimes dans le JSON-LD FAQPage.
  const serviceFaqs = services.flatMap((s) =>
    s.faq.map((f) => ({ ...f, category: s.title }))
  );
  const all = [...faqs, ...serviceFaqs];
  const categories = [...faqCategories(), ...services.filter((s) => s.faq.length).map((s) => s.title)];

  return (
    <>
      <JsonLd data={faqLd(all)} />
      <PageHero
        eyebrow="FAQ"
        title="Questions fréquentes"
        lede="Les réponses aux questions que nos clients nous posent le plus souvent."
      />
      <Breadcrumbs items={[{ name: 'FAQ', path: '/faq' }]} />

      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          {categories.map((cat) => {
            const items = all.filter((f) => f.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} className="mb-12">
                <h2 className="mb-5 font-mono text-sm uppercase tracking-wider text-brand-blue">{cat}</h2>
                {items.map((f) => (
                  <details key={f.question} className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display font-semibold [&::-webkit-details-marker]:hidden">
                      {f.question}
                      <span className="shrink-0 text-2xl font-light text-brand-orange transition-transform group-open:rotate-45" aria-hidden>+</span>
                    </summary>
                    <p className="pb-5 text-slate-600">{f.answer}</p>
                  </details>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand title="Vous n'avez pas trouvé votre réponse ?" text="Posez-nous directement votre question, nous y répondons rapidement." />
    </>
  );
}
