import type { Metadata } from "next";
import { getImage } from "@/data/images";
import { itineraries, phrases, practical, seasons, travelPage, travelSections } from "@/data/pages/travel";
import { site } from "@/data/site";
import { Note } from "@/components/editorial/Note";
import { RichText } from "@/components/editorial/RichText";
import { SourceList } from "@/components/editorial/SourceList";
import { NextChapter } from "@/components/ui/NextChapter";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ItineraryList } from "@/components/travel/ItineraryList";
import { OpenDetailsFromHash } from "@/components/ui/OpenDetailsFromHash";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatReviewed } from "@/lib/date";
import { articleJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Travel: When to Go, Getting Around & Itineraries",
  description: travelPage.summary,
  path: travelPage.path,
});

export default function TravelPage() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: travelPage.title,
          description: travelPage.summary,
          path: travelPage.path,
          image: getImage(travelPage.image).src,
        })}
      />
      <PageHero
        image={travelPage.image}
        eyebrow={travelPage.eyebrow}
        title={travelPage.title}
        dek={travelPage.dek}
        crumbs={[{ name: "Travel", href: travelPage.path }]}
      />

      {/* Seasons */}
      <Section tone="paper" labelledBy="when-to-go">
        <Container size="wide">
          <Note
            tone="verify"
            title={`${travelSections.reviewed} ${formatReviewed(site.lastReviewed)}`}
            text={travelSections.entry}
            className="mb-section-sm max-w-3xl"
          />
          <SectionHeading
            id="when-to-go"
            index="01"
            eyebrow={travelSections.seasons.eyebrow}
            title={travelSections.seasons.title}
            dek={travelSections.seasons.dek}
          />
          <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((s) => (
              <li key={s.name} className="reveal flex flex-col bg-surface p-7">
                <p className="eyebrow text-muted">{s.months}</p>
                <h3 className="mt-3 text-3xl">{s.name}</h3>
                <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-muted">
                  <RichText text={s.text} />
                </p>
                {s.best && (
                  <p className="mt-6 border-t border-line pt-4 font-sans text-sm">
                    <span className="eyebrow block text-accent">Best for</span>
                    <span className="mt-1 block">{s.best}</span>
                  </p>
                )}
              </li>
            ))}
          </ol>
          <p className="mt-6 font-sans text-sm text-muted">
            Expect crowds and busy roads around Holy Week and 8 December, the day of the Caacupé pilgrimage.
          </p>
        </Container>
      </Section>

      {/* Practical */}
      <Section tone="night" labelledBy="practical">
        <Container size="wide">
          <SectionHeading
            id="practical"
            index="02"
            eyebrow={travelSections.practical.eyebrow}
            title={travelSections.practical.title}
          />
          <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {practical.map((block) => (
              <section key={block.id} id={block.id} aria-labelledby={`${block.id}-title`} className="reveal border-t border-line pt-6">
                <h3 id={`${block.id}-title`} className="text-2xl">
                  {block.title}
                </h3>
                <ul className="mt-5 space-y-3 font-sans leading-relaxed text-cream/85">
                  {block.items.map((item, i) => (
                    <li key={i} className="relative pl-6">
                      <span aria-hidden="true" className="absolute top-[0.8em] left-0 h-px w-3 bg-accent" />
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </Section>

      {/* Itineraries */}
      <Section tone="paper" labelledBy="itineraries">
        <Container size="wide">
          <SectionHeading
            id="itineraries"
            index="03"
            eyebrow={travelSections.routes.eyebrow}
            title={travelSections.routes.title}
            dek={travelSections.routes.dek}
          />
          <div className="mt-12">
            <ItineraryList itineraries={itineraries} />
            <OpenDetailsFromHash />
          </div>
        </Container>
      </Section>

      {/* Phrases */}
      <Section tone="sand" labelledBy="phrases">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                id="phrases"
                index="04"
                eyebrow={travelSections.phrases.eyebrow}
                title={travelSections.phrases.title}
                dek={travelSections.phrases.dek}
                size="md"
              />
            </div>
            <table className="w-full border-collapse text-left lg:col-span-7 lg:col-start-6">
              <caption className="sr-only">{travelSections.phrases.caption}</caption>
              <thead>
                <tr className="eyebrow text-muted">
                  <th scope="col" className="pb-3 font-medium">
                    Phrase
                  </th>
                  <th scope="col" className="pb-3 font-medium">
                    Language
                  </th>
                  <th scope="col" className="pb-3 font-medium">
                    Meaning
                  </th>
                </tr>
              </thead>
              <tbody>
                {phrases.map((p) => (
                  <tr key={p.phrase} className="border-t border-line">
                    <th scope="row" className="py-4 pr-4 text-xl font-normal">
                      <span lang={p.lang}>{p.phrase}</span>
                    </th>
                    <td className="py-4 pr-4 font-sans text-sm text-muted">{p.lang === "gn" ? "Guaraní" : "Spanish"}</td>
                    <td className="py-4 font-sans">{p.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <SourceList ids={travelPage.sources} />
      <NextChapter from={travelPage.path} />
    </>
  );
}
