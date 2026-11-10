import { createFileRoute } from "@tanstack/react-router";
import mebCss from "@/meb2026/meb.css?url";
import { MebConfirmation } from "@/meb2026/components/MebConfirmation";

export const Route = createFileRoute("/meb-2026/confirmation")({
  head: () => ({
    meta: [
      { title: "Inscription confirmée – Business Summit MEB 2026" },
      { name: "description", content: "Confirmation de ton inscription au Business Summit – MEB 2026 à Abomey." },
      { property: "og:title", content: "Inscription confirmée – Business Summit MEB 2026" },
      { property: "og:description", content: "Confirmation d'inscription au Business Summit – MEB 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      { rel: "stylesheet", href: mebCss },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Oswald:wght@500;600;700&display=swap" },
    ],
  }),
  component: MebConfirmation,
});
