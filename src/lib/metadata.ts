import type { Metadata } from "next";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

/** Per-page metadata. The Open Graph image comes from app/opengraph-image.tsx (file-based, inherited). */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}
