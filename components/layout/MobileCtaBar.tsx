import { Phone } from 'lucide-react';
import { SITE } from '@/lib/site';
import { Button } from '@/components/ui/Button';

/** Barre CTA fixe en bas d'écran sur mobile — accessible au pouce, ne masque pas le contenu. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-line bg-white px-4 py-2.5 shadow-[0_-6px_20px_rgba(18,22,28,.08)] sm:hidden">
      <Button href={`tel:${SITE.phoneE164}`} variant="ghost" className="flex-1 px-4 py-3 text-sm">
        <Phone className="h-4 w-4" aria-hidden /> Appeler
      </Button>
      <Button href="/demander-un-devis" className="flex-1 px-4 py-3 text-sm">
        Demander un devis
      </Button>
    </div>
  );
}
