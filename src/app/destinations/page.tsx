import type { Metadata } from "next";
import { destinations } from "@/data/destinations";
import { experiences, regionOrder, regions } from "@/data/regions";
import type { ExperienceId } from "@/data/types";
import { DestinationExplorer } from "@/components/destinations/DestinationExplorer";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/metadata";

const title = "Destinations in Paraguay";
const description =
  "Where to go in Paraguay: Asunción, the Jesuit missions, Encarnación, lakes and hills, the waterfalls of Alto Paraná and the Chaco.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/destinations" });

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
        image="river-meander"
        eyebrow="Destinations"
        title={
          <>
            Where to go, <em className="text-accent">region by region</em>
          </>
        }
        dek="From a riverside capital and mission ruins to waterfalls, lakes, forested hills and the vast Chaco. Filter by region or by what you want to do."
        crumbs={[{ name: "Destinations", href: "/destinations" }]}
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
    </>
  );
}
