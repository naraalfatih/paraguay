import { site } from "@/data/site";

export type Crumb = { name: string; href: string };

const abs = (path: string) => new URL(path, site.url).toString();

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.title,
    url: abs("/"),
    description: site.description,
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

export function articleJsonLd(input: { title: string; description: string; path: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: abs(input.path),
    inLanguage: "en",
    ...(input.image && { image: input.image }),
    dateModified: site.lastReviewed,
    publisher: { "@type": "Organization", name: site.title, url: abs("/") },
  };
}

export function destinationJsonLd(input: {
  name: string;
  description: string;
  path: string;
  department: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: input.name,
    description: input.description,
    url: abs(input.path),
    ...(input.image && { image: input.image }),
    address: {
      "@type": "PostalAddress",
      addressRegion: input.department,
      addressCountry: "PY",
    },
  };
}
