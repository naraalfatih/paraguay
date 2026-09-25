import type { Metadata } from "next";
import { getImage } from "@/data/images";
import { eras, historyPage } from "@/data/pages/history";
import { SourceList } from "@/components/editorial/SourceList";
import { Timeline } from "@/components/history/Timeline";
import { TimelineControls } from "@/components/history/TimelineControls";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { OpenDetailsFromHash } from "@/components/ui/OpenDetailsFromHash";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "History of Paraguay: A Visual Timeline",
  description: historyPage.summary,
  path: historyPage.path,
});

export default function HistoryPage() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: historyPage.title,
          description: historyPage.summary,
          path: historyPage.path,
          image: getImage(historyPage.image).src,
        })}
      />
      <PageHero
        image={historyPage.image}
        eyebrow={historyPage.eyebrow}
        title={historyPage.title}
        dek={historyPage.dek}
        crumbs={[{ name: "History", href: historyPage.path }]}
      />

      <Section tone="paper" spacing="sm">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="text-3xl">How to read this timeline</h2>
              <p className="mt-5 max-w-2xl text-lg text-muted">
                Each chapter separates <strong className="font-semibold text-fg">facts</strong>, which are well
                documented, from <strong className="font-semibold text-fg">interpretations</strong>, which historians
                still debate. Open a chapter to read more.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
              <TimelineControls />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="night" spacing="sm" labelledBy="timeline-title">
        <Container size="wide">
          <h2 id="timeline-title" className="sr-only">
            Timeline
          </h2>
          <Timeline eras={eras} />
          <OpenDetailsFromHash />
        </Container>
      </Section>

      <SourceList ids={historyPage.sources} />
    </>
  );
}
