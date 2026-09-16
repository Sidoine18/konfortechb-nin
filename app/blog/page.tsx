import { pageMetadata } from '@/lib/seo';
import { sortedArticles } from '@/data/blog';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata = pageMetadata({
  title: 'Blog — Conseils techniques & digitaux',
  description:
    "Le blog de KONFORTECH BÉNIN : conseils sur la climatisation, l'énergie, la maintenance, le développement web et le SEO pour les particuliers et les entreprises au Bénin.",
  path: '/blog',
});

export default function BlogPage() {
  const posts = sortedArticles();
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Conseils techniques et digitaux, sans jargon inutile."
        lede="Climatisation, énergie, maintenance, développement web et SEO — des articles pratiques pour les particuliers et les entreprises béninoises."
      />
      <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />
      <section className="py-16 sm:py-20">
        <div className="container-page">
          {posts.length === 0 ? (
            <p className="text-center text-slate-500">Aucun article publié pour l&apos;instant.</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((a) => (
                <Card key={a.slug} href={`/blog/${a.slug}`}>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-brand-orange">
                    {a.category} · {a.readingMinutes} min de lecture
                  </span>
                  <h2 className="mb-2 mt-2 text-lg font-semibold">{a.title}</h2>
                  <p className="text-sm text-slate-600">{a.excerpt}</p>
                  <time dateTime={a.datePublished} className="mt-4 block text-xs text-slate-400">
                    {new Date(a.datePublished).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </time>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      <CtaBand title="Une question technique ou digitale ?" text="Écrivez-nous, nous pourrions même en faire un futur article." />
    </>
  );
}
