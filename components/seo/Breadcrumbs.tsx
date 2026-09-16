import Link from 'next/link';
import { JsonLd } from './JsonLd';
import { breadcrumbLd } from '@/lib/jsonld';

export type Crumb = { name: string; path: string };

/** Fil d'Ariane visuel + JSON-LD BreadcrumbList correspondant. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: 'Accueil', path: '/' }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbLd(all)} />
      <nav aria-label="Fil d'Ariane" className="border-b border-line bg-white">
        <div className="container-page flex flex-wrap items-center gap-1.5 py-4 font-mono text-xs text-slate-500">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <span key={c.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="text-brand-night">{c.name}</span>
                ) : (
                  <>
                    <Link href={c.path} className="hover:text-brand-blue">{c.name}</Link>
                    <span aria-hidden>/</span>
                  </>
                )}
              </span>
            );
          })}
        </div>
      </nav>
    </>
  );
}
