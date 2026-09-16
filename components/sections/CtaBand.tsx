import { Button } from '@/components/ui/Button';
import { SITE } from '@/lib/site';

export function CtaBand({
  title = 'Un projet technique en tête ?',
  text = 'Décrivez votre besoin, nous revenons vers vous avec une solution concrète et un devis clair.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-7 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-deep p-9 sm:p-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            <p className="mt-3 max-w-lg text-blue-50">{text}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button href="/demander-un-devis">Demander un devis</Button>
            <Button href={`tel:${SITE.phoneE164}`} variant="light">Appeler maintenant</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
