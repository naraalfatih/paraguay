import type { Metadata } from "next";
import { destinations } from "@/data/destinations";
import { destinationsPage as page } from "@/data/pages/destinations";
import { experiences, regionOrder, regions } from "@/data/regions";
import type { ExperienceId } from "@/data/types";
import { DestinationExplorer } from "@/components/destinations/DestinationExplorer";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { NextChapter } from "@/components/ui/NextChapter";
import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ title: page.metaTitle, description: page.summary, path: page.path });

export default function DestinationsPage() {
  const items = destinations.map(({ slug, name, department, region, experiences: exp, summary, image }) => ({
    slug,
    name,
    department,
    region,
    experiences: exp,
    summary,
    image,
  }));

  return (
    <>
      <PageHero
        image={page.image}
        eyebrow={page.eyebrow.replace("{count}", String(destinations.length))}
        title={
          <>
            {page.title.lead} <em className="text-accent">{page.title.accent}</em>
          </>
        }
        dek={page.dek}
        crumbs={[{ name: page.label, href: page.path }]}
      />
      <Section tone="paper" spacing="sm">
        <Container size="wide">
          <DestinationExplorer
            items={items}
            regions={regionOrder.map((id) => ({ id, ...regions[id] }))}
            experiences={(Object.keys(experiences) as ExperienceId[]).map((id) => ({ id, label: experiences[id] }))}
          />
        </Container>
      </Section>
      <NextChapter from={page.path} />
    </>
  );
}
