import type { Metadata } from "next";
import { Bodoni_Moda, Figtree } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Al Shukr Dairy Farm | Purity Promised",
  description:
    "Fresh, carefully produced milk from Al Shukr Dairy Farm — committed to quality, animal care and purity. Farm to your door.",
  openGraph: {
    title: "Al Shukr Dairy Farm | Purity Promised",
    description:
      "Fresh milk. Thoughtfully produced. Delivered with care.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory text-ink font-sans">
        {/*
          THESIS: Premium Pakistani dairy designed as a luxury food brand —
          dark cinematic hero (logo black) into warm ivory editorial storytelling;
          refuses SaaS dashboards, card grids, and generic farm templates.
          OWN-WORLD: Ivory paper, charcoal ink, muted logo gold, olive secondary;
          Bodoni Moda display + Figtree body; hairline gold rules; milk-flow line.
          STORY: Pure farm milk → care → quality → home; primary action Order Fresh Milk.
          FIRST VIEWPORT: Full-bleed dark farm cinema, minimal nav, oversized Pure Milk
          headline, gold line draw, dual CTAs, scroll cue.
          FORM: Cinematic scroll landing (MotionSites-inspired); brief-pinned direction;
          seed key 3937907c (persuade); brief pin overrides assigned challenger roll.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the
          finish review, the verdict, and DESIGN.md
        */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
