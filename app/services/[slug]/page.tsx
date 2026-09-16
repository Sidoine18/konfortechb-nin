import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { getService, serviceSlugs, services } from '@/data/services';
import { getSector } from '@/data/sectors';
import { realizations } from '@/data/realizations';
import { pageMetadata } from '@/lib/seo';
import { serviceLd, faqLd } from '@/lib/jsonld';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function generateStaticParams() {
  return serviceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) return pageMetadata({ title: 'Service introuvable', description: '', path: '/services', noIndex: true });
  return pageMetadata({
    title: s.seoTitle,
    description: s.seoDescription,
    path: `/services/${s.slug}`,
    image: s.image,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = service.related.map(getService).filter(Boolean);
  const linkedSectors = service.sectors.map(getSector).filter(Boolean);
  const linkedProjects = realizations.filter((r) => r.relatedServices.includes(service.slug));

  return (
    <>
      <JsonLd
        data={[
          serviceLd({ name: service.title, description: service.seoDescription, path: `/services/${service.slug}` }),
          ...(service.faq.length ? [faqLd(service.faq)] : []),
        ]}
      />
      <PageHero eyebrow={service.title} title={service.excerpt} lede={service.seoDescription}>
        <Button href="/demander-un-devis">Demander un devis</Button>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />

      {/* Problème / solution */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-line bg-[#FFF6EF] p-8">
            <h2 className="mb-3 font-mono text-sm uppercase tracking-wider text-[#C15A00]">
              Le problème
            </h2>
            <p className="text-slate-700">{service.problem}</p>
          </div>
          <div className="rounded-xl border border-line bg-[#EEF6FF] p-8">
            <h2 className="mb-3 font-mono text-sm uppercase tracking-wider text-brand-blue">
              Notre réponse
            </h2>
            <p className="text-slate-700">{service.solution}</p>
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="bg-fog-100 py-16 sm:py-20">
        <div className="container-page">
          <span className="eyebrow mb-3">Ce que nous proposons</span>
          <h2 className="mb-10 text-3xl font-bold">Notre offre {service.title.toLowerCase()}</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-3 rounded-xl border border-line bg-white p-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden />
                <span className="text-[15px]">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Avantages + process */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow mb-3">Pourquoi nous confier ce projet</span>
            <h2 className="mb-6 text-3xl font-bold">Les avantages KONFORTECH BÉNIN</h2>
            <ul className="space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-brand-orange" aria-hidden />
                  <span className="text-slate-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow mb-3">Notre processus</span>
            <h2 className="mb-6 text-3xl font-bold">Comment nous intervenons</h2>
            <ol className="space-y-4">
              {service.process.map((p, i) => (
                <li key={p.step} className="flex gap-4 rounded-xl border border-line bg-white p-5">
                  <span className="font-mono text-sm text-brand-orange">0{i + 1}</span>
                  <div>
                    <h3 className="text-base font-semibold">{p.step}</h3>
                    <p className="mt-1 text-sm text-slate-600">{p.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Secteurs concernés — maillage interne */}
      {linkedSectors.length > 0 && (
        <section className="bg-fog-100 py-16 sm:py-20">
          <div className="container-page">
            <span className="eyebrow mb-3">Secteurs concernés</span>
            <h2 className="mb-8 text-3xl font-bold">Qui fait appel à ce service</h2>
            <div className="flex flex-wrap gap-3">
              {linkedSectors.map((s) => (
                <Link
                  key={s!.slug}
                  href={`/secteurs/${s!.slug}`}
                  className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  {s!.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Réalisations liées */}
      {linkedProjects.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="container-page">
            <span className="eyebrow mb-3">Réalisations</span>
            <h2 className="mb-8 text-3xl font-bold">Projets liés à ce service</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {linkedProjects.map((p) => (
                <Card key={p.slug} href={`/realisations/${p.slug}`}>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-brand-orange">{p.category}</span>
                  <h3 className="mb-2 mt-2 text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-600">{p.excerpt}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="bg-fog-100 py-16 sm:py-20">
          <div className="container-page max-w-3xl">
            <span className="eyebrow mb-3">FAQ</span>
            <h2 className="mb-8 text-3xl font-bold">Questions fréquentes</h2>
            {service.faq.map((f) => (
              <details key={f.question} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display font-semibold [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <span className="shrink-0 text-2xl font-light text-brand-orange transition-transform group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="pb-5 text-slate-600">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Autres services */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="container-page">
            <span className="eyebrow mb-3">Autres services</span>
            <h2 className="mb-8 text-3xl font-bold">Ils complètent souvent ce projet</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Card key={r!.slug} href={`/services/${r!.slug}`}>
                  <h3 className="mb-2 text-lg font-semibold">{r!.title}</h3>
                  <p className="text-sm text-slate-600">{r!.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                    Découvrir <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Prêt à lancer votre projet ${service.title.toLowerCase()} ?`}
        text="Recevez un devis détaillé sous 24 à 48 heures ouvrées."
      />
    </>
  );
}
