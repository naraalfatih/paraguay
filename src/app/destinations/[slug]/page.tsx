import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations, getDestination, getRelated } from "@/data/destinations";
import { getImage } from "@/data/images";
import { regions } from "@/data/regions";
import { KeyFacts } from "@/components/editorial/KeyFacts";
import { Note } from "@/components/editorial/Note";
import { RichText } from "@/components/editorial/RichText";
import { SourceList } from "@/components/editorial/SourceList";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { imageSizes } from "@/components/ui/Frame";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { destinationJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/destinations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  return pageMetadata({ title: d.name, description: d.summary, path: `/destinations/${d.slug}` });
}

export default async function DestinationPage({ params }: PageProps<"/destinations/[slug]">) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const region = regions[d.region];
  const related = getRelated(d);
  const path = `/destinations/${d.slug}`;

  return (
    <>
      <JsonLd
        data={destinationJsonLd({
          name: d.name,
          description: d.summary,
          path,
          department: d.department,
          image: getImage(d.image).src,
        })}
      />

      <PageHero
        image={d.image}
        eyebrow={`${region.label} · ${d.department}`}
        title={d.name}
        dek={d.dek}
        crumbs={[
          { name: "Destinations", href: "/destinations" },
          { name: d.name, href: path },
        ]}
      />

      {/* Overview */}
      <Section tone="paper" labelledBy="overview">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading id="overview" eyebrow="Overview" title="At a glance" size="md" />
              <div className="prose-editorial mt-8 max-w-prose">
                {d.overview.map((p, i) => (
                  <p key={i} className={i === 0 ? "dropcap" : undefined}>
                    <RichText text={p} />
                  </p>
                ))}
              </div>
            </div>
            <aside aria-label="Key facts" className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-[calc(var(--spacing-header)+2rem)]">
                <KeyFacts items={d.keyFacts} columns={1} />
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Why visit */}
      <Section tone="night" labelledBy="why-visit">
        <Container size="wide">
          <SectionHeading id="why-visit" eyebrow="Why visit" title="Reasons to go" />
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {d.whyVisit.map((reason, i) => (
              <li key={i} className="reveal border-t border-line pt-6">
                <span className="eyebrow text-accent tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-4 text-xl leading-snug">
                  <RichText text={reason} />
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Highlights */}
      <Section tone="paper" labelledBy="highlights">
        <Container size="wide">
          <SectionHeading id="highlights" eyebrow="Highlights" title="What not to miss" />
          <ul className="mt-12 grid gap-x-16 md:grid-cols-2">
            {d.highlights.map((h) => (
              <li key={h.title} className="reveal border-t border-line py-7">
                <h3 className="text-2xl">{h.title}</h3>
                <p className="mt-3 max-w-prose font-sans leading-relaxed text-muted">
                  <RichText text={h.text} />
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Activities + context */}
      <Section tone="sand" labelledBy="things-to-do">
        <Container size="wide">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading id="things-to-do" eyebrow="Activities" title="Things to do" size="md" />
              <ul className="mt-8 space-y-5">
                {d.activities.map((a, i) => (
                  <li key={i} className="relative pl-8 text-lg leading-snug">
                    <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-4 bg-accent" />
                    <RichText text={a} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <SectionHeading eyebrow="Useful context" title="Before you go" size="md" />
              <div className="prose-editorial mt-8">
                {d.context.map((p, i) => (
                  <p key={i}>
                    <RichText text={p} />
                  </p>
                ))}
              </div>
              {d.verify && d.verify.length > 0 && <Note tone="verify" items={d.verify} className="mt-10" />}
            </div>
          </div>
        </Container>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section tone="night" labelledBy="related">
          <Container size="wide">
            <SectionHeading
              id="related"
              eyebrow="Continue the journey"
              title="Nearby and related"
              action={{ href: "/destinations", label: "All destinations" }}
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Card
                  key={r.slug}
                  href={`/destinations/${r.slug}`}
                  title={r.name}
                  eyebrow={regions[r.region].label}
                  excerpt={r.summary}
                  image={r.image}
                  variant="overlay"
                  ratio="portrait"
                  sizes={imageSizes.third}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <SourceList ids={d.sources} />
    </>
  );
}
