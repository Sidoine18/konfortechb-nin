import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';
import { SITE, NAV } from '@/lib/site';
import { services } from '@/data/services';
import { sectors } from '@/data/sectors';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-night text-slate-300">
      <div className="container-page py-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <Image
                src={SITE.logo}
                alt={SITE.name}
                width={38}
                height={38}
                className="h-9 w-9 object-contain"
              />
              <b className="font-display text-white">{SITE.name}</b>
            </div>
            <p className="max-w-xs text-sm text-slate-400">{SITE.tagline}</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                <a href={`tel:${SITE.phoneE164}`} className="hover:text-white">{SITE.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-white">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                <span>{SITE.address.display}</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-2.5">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SITE.name} sur Facebook`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[.08] transition-colors hover:bg-brand-blue hover:text-white"
              >
                <Facebook className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SITE.name} sur LinkedIn`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[.08] transition-colors hover:bg-brand-blue hover:text-white"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <FooterCol title="Services">
            {services.slice(0, 7).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="block py-1.5 hover:text-white">
                {s.title}
              </Link>
            ))}
            <Link href="/services" className="block py-1.5 text-brand-orange hover:text-white">
              Tous les services →
            </Link>
          </FooterCol>

          <FooterCol title="Secteurs">
            {sectors.map((s) => (
              <Link key={s.slug} href={`/secteurs/${s.slug}`} className="block py-1.5 hover:text-white">
                {s.title}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Entreprise">
            {NAV.filter((n) => n.href !== '/').map((n) => (
              <Link key={n.href} href={n.href} className="block py-1.5 hover:text-white">
                {n.label}
              </Link>
            ))}
            <Link href="/direction" className="block py-1.5 hover:text-white">Direction</Link>
            <Link href="/equipe" className="block py-1.5 hover:text-white">Notre équipe</Link>
            <Link href="/faq" className="block py-1.5 hover:text-white">FAQ</Link>
            <Link href="/partenaires" className="block py-1.5 hover:text-white">Partenaires</Link>
          </FooterCol>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {SITE.name} — Tous droits réservés.</span>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="text-sm">
      <h2 className="mb-3 font-display text-[15px] text-white">{title}</h2>
      <div className="text-slate-400">{children}</div>
    </div>
  );
}
