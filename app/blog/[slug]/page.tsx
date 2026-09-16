import { notFound } from 'next/navigation';
import { getArticle, articleSlugs, sortedArticles } from '@/data/blog';
import { getService } from '@/data/services';
import { pageMetadata } from '@/lib/seo';
import { articleLd } from '@/lib/jsonld';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Card } from '@/components/ui/Card';

export function generateStaticParams() {
  return articleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) return pageMetadata({ title: 'Article introuvable', description: '', path: '/blog', noIndex: true });
  return pageMetadata({
    title: a.seoTitle,
    description: a.seoDescription,
    path: `/blog/${a.slug}`,
    image: a.image,
    type: 'article',
    publishedTime: a.datePublished,
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const linkedServices = article.relatedServices.map(getService).filter(Boolean);
  const others = sortedArticles().filter((a) => a.slug !== article.slug).slice(0, 3);
  const dateLabel = new Date(article.datePublished).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <>
      <JsonLd
        data={articleLd({
          title: article.title,
          description: article.seoDescription,
          path: `/blog/${article.slug}`,
          datePublished: article.datePublished,
          author: article.author,
          image: article.image,
        })}
      />
      <PageHero
        eyebrow={`${article.category} · ${article.readingMinutes} min de lecture`}
        title={article.title}
        lede={`Par ${article.author} — publié le ${dateLabel}`}
      />
      <Breadcrumbs
        items={[
          { name: 'Blog', path: '/blog' },
          { name: article.title, path: `/blog/${article.slug}` },
        ]}
      />

      <article className="py-16 sm:py-20">
        <div className="container-page prose-page max-w-3xl">
          {article.content.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
            if (block.type === 'ul')
              return (
                <ul key={i}>
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            return <p key={i}>{block.text}</p>;
          })}

          {article.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-6">
              {article.tags.map((t) => (
                <span key={t} className="rounded-full bg-fog-200 px-3 py-1.5 text-xs">#{t}</span>
              ))}
            </div>
          )}
        </div>
      </article>

      {linkedServices.length > 0 && (
        <section className="bg-fog-100 py-16 sm:py-20">
          <div className="container-page">
            <span className="eyebrow mb-3">Services liés</span>
            <h2 className="mb-8 text-3xl font-bold">Nous pouvons vous accompagner</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {linkedServices.map((s) => (
                <Card key={s!.slug} href={`/services/${s!.slug}`}>
                  <h3 className="mb-2 text-lg font-semibold">{s!.title}</h3>
                  <p className="text-sm text-slate-600">{s!.excerpt}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="container-page">
            <span className="eyebrow mb-3">À lire aussi</span>
            <h2 className="mb-8 text-3xl font-bold">Autres articles</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((a) => (
                <Card key={a.slug} href={`/blog/${a.slug}`}>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-brand-orange">{a.category}</span>
                  <h3 className="mb-2 mt-2 text-lg font-semibold">{a.title}</h3>
                  <p className="text-sm text-slate-600">{a.excerpt}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
