import type { Metadata } from "next";
import { MebConfirmation } from "../../../meb2026/components/MebConfirmation";

export const metadata: Metadata = {
  title: "Inscription confirmée – Business Summit MEB 2026",
  description: "Confirmation de ton inscription au Business Summit – MEB 2026 à Abomey.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <MebConfirmation />;
}
