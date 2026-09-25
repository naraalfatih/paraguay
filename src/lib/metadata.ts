import type { Metadata } from "next";
import { site } from "@/data/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

// A page's own `openGraph` replaces the inherited one, so point every page at the static share card explicitly.
const shareImage = { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.title}: ${site.tagline}` };

export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "article",
      siteName: site.title,
      locale: site.locale,
      images: [shareImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [shareImage.url] },
  };
}
