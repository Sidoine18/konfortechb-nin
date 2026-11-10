import type { CSSProperties, ReactNode } from "react";
import type { Viewport } from "next";
import { Manrope, Oswald } from "next/font/google";
import "../../meb2026/meb.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-manrope", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-oswald", display: "swap" });

export const viewport: Viewport = { themeColor: "#2fc4a8" };

export default function MebLayout({ children }: { children: ReactNode }) {
  // meb.css lit --meb-font-display / --meb-font-body : on les branche sur next/font.
  const fonts = { "--meb-font-display": "var(--font-oswald)", "--meb-font-body": "var(--font-manrope)" } as CSSProperties;
  return <div className={`${manrope.variable} ${oswald.variable}`} style={fonts}>{children}</div>;
}
