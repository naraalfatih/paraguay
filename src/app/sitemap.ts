import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { site, staticRoutes } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (path: string) => new URL(path, site.url).toString();
  const lastModified = `${site.lastReviewed}-01`;
  return [
    ...staticRoutes.map((path) => ({ url: abs(path), lastModified })),
    ...destinations.map((d) => ({ url: abs(`/destinations/${d.slug}`), lastModified })),
  ];
}
