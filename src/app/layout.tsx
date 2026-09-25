import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SkipLink } from "@/components/layout/SkipLink";
import { site } from "@/data/site";
import "./globals.css";

// "vietnamese" carries the Guaraní letters ẽ ĩ ỹ and the combining tilde used in g̃.
const newsreader = Newsreader({
  subsets: ["latin", "latin-ext", "vietnamese"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.title,
  openGraph: {
    siteName: site.title,
    locale: site.locale,
    type: "website",
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#0d110f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${inter.variable}`}
    >
      <body className="tone-night min-h-svh">
        <SkipLink />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
