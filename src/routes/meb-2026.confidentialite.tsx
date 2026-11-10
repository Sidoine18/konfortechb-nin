import { createFileRoute } from "@tanstack/react-router";
import mebCss from "@/meb2026/meb.css?url";
import { MebPrivacy } from "@/meb2026/components/MebPrivacy";

export const Route = createFileRoute("/meb-2026/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité – Business Summit MEB 2026" },
      { name: "description", content: "Comment les données d'inscription au Business Summit – MEB 2026 sont collectées, utilisées et protégées." },
      { property: "og:title", content: "Politique de confidentialité – MEB 2026" },
      { property: "og:description", content: "Traitement des données personnelles des participants au MEB 2026." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "/meb-2026/confidentialite" },
      { rel: "stylesheet", href: mebCss },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Oswald:wght@500;600;700&display=swap" },
    ],
  }),
  component: MebPrivacy,
});
