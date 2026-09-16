import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { MobileCtaBar } from '@/components/layout/MobileCtaBar';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationLd, websiteLd, localBusinessLd } from '@/lib/jsonld';
import { SITE } from '@/lib/site';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
});
const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  icons: { icon: SITE.logo, apple: SITE.logo },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0066CC',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.lang} className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        <JsonLd data={[organizationLd(), websiteLd(), localBusinessLd()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-orange focus:px-4 focus:py-3 focus:text-white"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="main" className="pb-16 sm:pb-0">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileCtaBar />
      </body>
    </html>
  );
}
