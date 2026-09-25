import { getImage } from "@/data/images";
import type { TopicPage } from "@/data/types";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { NextChapter } from "@/components/ui/NextChapter";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd } from "@/lib/jsonld";
import { ChapterIndex } from "./ChapterIndex";
import { ChapterSection } from "./ChapterSection";
import { RichText } from "./RichText";
import { SourceList } from "./SourceList";

/** Long-form page template: hero, intro with chapter index, chapters, sources. */
export function TopicArticle({ page }: { page: TopicPage }) {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: page.title,
          description: page.summary,
          path: page.path,
          image: getImage(page.image).src,
        })}
      />
      <PageHero
        image={page.image}
        eyebrow={page.eyebrow}
        title={page.title}
        dek={page.dek}
        crumbs={[{ name: page.label, href: page.path }]}
      />

      <Section tone="paper" spacing="sm">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="prose-editorial max-w-prose lg:col-span-6">
              {page.intro.map((p, i) => (
                <p key={i} className={i === 0 ? "dropcap text-xl leading-normal" : undefined}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
            <ChapterIndex chapters={page.chapters} className="lg:col-span-5 lg:col-start-8" />
          </div>
        </Container>
      </Section>

      {page.chapters.map((chapter, i) => (
        <ChapterSection key={chapter.id} chapter={chapter} index={i} tone={i % 2 === 0 ? "paper" : "sand"} />
      ))}

      <SourceList ids={page.sources} />
      <NextChapter from={page.path} />
    </>
  );
}
