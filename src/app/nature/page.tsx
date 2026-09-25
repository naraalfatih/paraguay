import type { Metadata } from "next";
import { nature } from "@/data/pages/nature";
import { TopicArticle } from "@/components/editorial/TopicArticle";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Nature: the Chaco, Atlantic Forest, Wetlands & Wildlife",
  description: nature.summary,
  path: nature.path,
});

export default function NaturePage() {
  return <TopicArticle page={nature} />;
}
