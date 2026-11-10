import type { Metadata } from "next";
import { MebLanding } from "../../meb2026/components/MebLanding";
import { EVENT } from "../../meb2026/data";

const TITLE = "Business Summit – MEB 2026 | Le déclic entrepreneurial – Inscription";
const DESC =
  "Inscris-toi au Business Summit du Mois de l'Entrepreneuriat au Bénin : 21 novembre 2026, 09h00, site universitaire d'Abomey. Entrepreneuriat technique et innovation numérique. 200 places.";
const OG = "https://konfortechbenin.online/meb-2026/og-meb-2026.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://konfortechbenin.online"),
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/meb-2026" },
  openGraph: { title: TITLE, description: DESC, type: "website", locale: "fr_FR", url: "/meb-2026", images: [OG] },
  twitter: { card: "summary_large_image", images: [OG] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Event", name: EVENT.name, description: DESC,
  startDate: EVENT.dateISO, eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: { "@type": "Place", name: "Site universitaire d'Abomey", address: { "@type": "PostalAddress", addressLocality: "Abomey", addressCountry: "BJ" } },
  organizer: { "@type": "Organization", name: "KONFORTECH BÉNIN", url: EVENT.website },
  maximumAttendeeCapacity: EVENT.capacity, image: OG, inLanguage: "fr",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MebLanding />
    </>
  );
}
