import type { Metadata } from "next";
import { creditLine, getImage, heroVideo, images, type ImageId } from "@/data/images";
import { sources, type SourceId } from "@/data/sources";
import { site } from "@/data/site";
import { SourceList } from "@/components/editorial/SourceList";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Frame } from "@/components/ui/Frame";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatReviewed } from "@/lib/date";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About This Project",
  description:
    "Why this Paraguay website was made, how it was researched, and credits for every source and AI-generated illustration.",
  path: "/about",
});

const method = [
  {
    title: "Researched, then written plainly",
    text: "Every fact on this site comes from a research file built from government, UNESCO, conservation, academic and news sources. We wrote it in plain language for a general audience.",
  },
  {
    title: "Facts and debates kept apart",
    text: "Where historians disagree, for example about wartime population losses, we say so rather than picking a side.",
  },
  {
    title: "Honest images",
    text: "All images and the opening video are AI-generated illustrations of Paraguayan landscapes, food and crafts. They are not photographs of the specific places named on the pages.",
  },
  {
    title: "Time-sensitive details flagged",
    text: `Practical information was last reviewed in ${formatReviewed(site.lastReviewed)}. Visa rules, prices and schedules change, so always check official sources.`,
  },
];

export default function AboutPage() {
  const imageIds = Object.keys(images) as ImageId[];
  const allSources = Object.keys(sources) as SourceId[];

  return (
    <>
      <PageHero
        image="river-dusk"
        eyebrow="Behind the project"
        title="About this project"
        dek="A student project: a short, cinematic introduction to Paraguay, its land, people, food and history."
        crumbs={[{ name: "About", href: "/about" }]}
      />

      <Section tone="paper" labelledBy="why">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading id="why" eyebrow="Why Paraguay" title="One country, told simply" size="md" />
            </div>
            <div className="prose-editorial max-w-prose lg:col-span-6 lg:col-start-7">
              <p className="dropcap">
                This university project tells the story of one country: Paraguay, a landlocked nation in the heart of
                South America that many people know little about. We wanted to show its landscapes, its two languages,
                its food and its past in a way anyone can enjoy in a few minutes.
              </p>
              <p>
                The site is independent. It is not an official website of the Paraguayan government or any other
                organization.
              </p>
            </div>
          </div>

          <ol className="mt-section-sm grid gap-px border border-line bg-line md:grid-cols-2">
            {method.map((m, i) => (
              <li key={m.title} className="bg-surface p-8">
                <span className="font-serif text-3xl text-accent tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-2xl">{m.title}</h3>
                <p className="mt-3 font-sans leading-relaxed text-muted">{m.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="night" labelledBy="credits">
        <Container size="wide">
          <SectionHeading
            id="credits"
            eyebrow="Image credits"
            title="Every image, credited"
            dek={`All ${imageIds.length} images, plus the opening video (“${heroVideo.caption}”), were generated with Higgsfield (GPT Image 2.5 and Seedance 2.5).`}
          />
          <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {imageIds.map((id) => {
              const img = getImage(id);
              return (
                <li key={id}>
                  <Frame image={id} ratio="square" sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw" />
                  <p className="mt-3 font-sans text-xs leading-snug">{img.caption}</p>
                  <p className="mt-1 font-sans text-[0.68rem] tracking-wide text-muted uppercase">{creditLine(img)}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <SourceList ids={allSources} />
    </>
  );
}
