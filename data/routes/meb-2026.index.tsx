import { createFileRoute } from "@tanstack/react-router";
import mebCss from "@/meb2026/meb.css?url";
import { MebLanding } from "@/meb2026/components/MebLanding";
import { EVENT } from "@/meb2026/data";

const TITLE = "Business Summit – MEB 2026 | Le déclic entrepreneurial – Inscription";
const DESC =
  "Inscris-toi au Business Summit du Mois de l'Entrepreneuriat au Bénin : 21 novembre 2026, 09h00, site universitaire d'Abomey. Entrepreneuriat technique et innovation numérique. 200 places.";
const OG = "https://konfortechbenin.online/meb-2026/og-meb-2026.jpg";

export const Route = createFileRoute("/meb-2026/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:url", content: "/meb-2026" },
      { property: "og:image", content: OG },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG },
      { name: "theme-color", content: "#2fc4a8" },
    ],
    links: [
      { rel: "canonical", href: "/meb-2026" },
      { rel: "stylesheet", href: mebCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Oswald:wght@500;600;700&display=swap" },
      { rel: "preload", as: "image", href: "/meb-2026/hero-salle.webp" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "Event", name: EVENT.name, description: DESC,
        startDate: EVENT.dateISO, eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: { "@type": "Place", name: "Site universitaire d'Abomey", address: { "@type": "PostalAddress", addressLocality: "Abomey", addressCountry: "BJ" } },
        organizer: { "@type": "Organization", name: "KONFORTECH BÉNIN", url: EVENT.website },
        maximumAttendeeCapacity: EVENT.capacity, image: OG, inLanguage: "fr",
      }),
    }],
  }),
  component: MebLanding,
});
