import type { Metadata } from "next";
import { getImage } from "@/data/images";
import { alsoTry, cocido, dishes, foodPage, terere } from "@/data/pages/food";
import { DishEntry } from "@/components/editorial/DishEntry";
import { Note } from "@/components/editorial/Note";
import { RichText } from "@/components/editorial/RichText";
import { SourceList } from "@/components/editorial/SourceList";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Ornament } from "@/components/ui/Ornament";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Food & Drink: from Chipa to Tereré",
  description: foodPage.summary,
  path: foodPage.path,
});

export default function FoodPage() {
  const menu = [...dishes, { id: terere.id, name: terere.name }, cocido];

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: foodPage.title,
          description: foodPage.summary,
          path: foodPage.path,
          image: getImage(foodPage.image).src,
        })}
      />
      <PageHero
        image={foodPage.image}
        eyebrow={foodPage.eyebrow}
        title={foodPage.title}
        dek={foodPage.dek}
        crumbs={[{ name: "Food & drink", href: foodPage.path }]}
      />

      <Section tone="paper" spacing="sm">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12">
            <p className="dropcap text-xl leading-normal lg:col-span-6">
              <RichText text={foodPage.intro} />
            </p>
            <nav aria-label="On the menu" className="lg:col-span-5 lg:col-start-8">
              <p className="eyebrow text-muted">On the menu</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {menu.map((d) => (
                  <li key={d.id}>
                    <a
                      href={`#${d.id}`}
                      className="inline-flex min-h-11 items-center border border-fg/25 px-4 font-sans text-sm transition-colors hover:border-fg hover:bg-fg hover:text-surface"
                    >
                      {d.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-section-sm">
            {dishes.map((dish, i) => (
              <DishEntry key={dish.id} dish={dish} index={i} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Tereré feature */}
      <Section tone="night" id={terere.id} labelledBy="terere-title">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span className="tabular-nums">{String(dishes.length + 1).padStart(2, "0")}</span>
                <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
                The national drink
              </p>
              <h2 id="terere-title" className="mt-4 text-display">
                {terere.name}
              </h2>
              <p className="reveal mt-8 max-w-2xl text-xl leading-relaxed">
                <RichText text={terere.what} />
              </p>
              <p className="reveal mt-6 max-w-2xl text-lg text-muted">
                <RichText text={terere.context} />
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Ornament className="mb-8 hidden size-24 text-accent/50 lg:block" />
              <h3 className="eyebrow text-accent">How to share it</h3>
              <ol className="mt-5 space-y-5">
                {terere.etiquette.map((step, i) => (
                  <li key={i} className="flex gap-4 border-t border-line pt-5 text-lg">
                    <span className="font-serif text-2xl text-accent tabular-nums">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="sm">
        <Container size="wide">
          <DishEntry dish={cocido} index={dishes.length + 1} />
          <Note title="Also worth trying" text={alsoTry} className="mt-4 border-t-0" />
        </Container>
      </Section>

      <SourceList ids={foodPage.sources} />
    </>
  );
}
