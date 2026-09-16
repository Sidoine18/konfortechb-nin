import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Page introuvable',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page max-w-2xl text-center">
        <span className="eyebrow justify-center">Erreur 404</span>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Cette page semble avoir pris un autre chemin.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-slate-600">
          Le lien que vous avez suivi est peut-être incorrect, ou la page a été déplacée.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Retour à l&apos;accueil</Button>
          <Button href="/services" variant="outline">Découvrir nos services</Button>
          <Button href="/contact" variant="ghost">Nous contacter</Button>
        </div>
      </div>
    </section>
  );
}
