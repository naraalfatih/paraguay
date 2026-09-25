import type { Metadata } from "next";
import { culture } from "@/data/pages/culture";
import { TopicArticle } from "@/components/editorial/TopicArticle";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Culture: Guaraní, Music, Crafts & Festivals",
  description: culture.summary,
  path: culture.path,
});

export default function CulturePage() {
  return <TopicArticle page={culture} />;
}
