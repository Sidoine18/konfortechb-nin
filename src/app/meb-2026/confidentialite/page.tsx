import type { Metadata } from "next";
import { MebPrivacy } from "../../../meb2026/components/MebPrivacy";

export const metadata: Metadata = {
  title: "Politique de confidentialité – Business Summit MEB 2026",
  description: "Comment les données d'inscription au Business Summit – MEB 2026 sont collectées, utilisées et protégées.",
  alternates: { canonical: "/meb-2026/confidentialite" },
};

export default function Page() {
  return <MebPrivacy />;
}
