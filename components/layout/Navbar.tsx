'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { SITE, NAV, whatsappLink } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu à chaque changement de page et bloque le scroll quand ouvert.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 border-b border-line bg-white/92 backdrop-blur transition-shadow',
          scrolled && 'shadow-[0_4px_16px_rgba(18,22,28,.06)]'
        )}
      >
        <div className="container-page flex h-[72px] items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${SITE.name} — accueil`}>
            <Image
              src={SITE.logo}
              alt={`Logo ${SITE.name}`}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
            <span className="font-display text-[15px] font-bold leading-tight text-brand-night">
              KONFORTECH <span className="text-brand-blue">BÉNIN</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigation principale">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'whitespace-nowrap rounded-full px-3 py-2 text-[14px] font-medium transition-colors',
                  isActive(item.href)
                    ? 'bg-fog-200 text-brand-blue'
                    : 'text-slate-600 hover:bg-fog-100 hover:text-brand-blue'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneE164}`}
              className="hidden items-center gap-2 whitespace-nowrap font-mono text-[13px] text-slate-600 hover:text-brand-blue xl:flex"
            >
              <Phone className="h-4 w-4 text-brand-orange" aria-hidden />
              {SITE.phoneDisplay}
            </a>
            <Button href="/demander-un-devis" className="hidden whitespace-nowrap px-5 py-2.5 text-sm sm:inline-flex">
              Demander un devis
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="rounded-lg p-2 text-brand-night lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile plein écran */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-white px-5 pb-28 pt-4 transition-all lg:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <nav className="flex flex-col" aria-label="Navigation mobile">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'border-b border-line py-4 font-display text-lg font-semibold',
                isActive(item.href) ? 'text-brand-blue' : 'text-brand-night'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex flex-col gap-3">
          <Button href="/demander-un-devis" className="w-full">
            Demander un devis
          </Button>
          <Button href={`tel:${SITE.phoneE164}`} variant="ghost" className="w-full">
            <Phone className="h-4 w-4" aria-hidden /> Appeler {SITE.phoneDisplay}
          </Button>
          <Button href={whatsappLink()} variant="outline" className="w-full" external>
            Écrire sur WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
}
