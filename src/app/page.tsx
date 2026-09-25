import type { Metadata } from "next";
import Link from "next/link";
import { destinations, getDestination } from "@/data/destinations";
import { heroVideo } from "@/data/images";
import { cocido, dishes } from "@/data/pages/food";
import { eras } from "@/data/pages/history";
import { home } from "@/data/pages/home";
import { itineraries } from "@/data/pages/travel";
import { regions } from "@/data/regions";
import { site } from "@/data/site";
import type { Destination } from "@/data/types";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Frame, FrameCaption, imageSizes } from "@/components/ui/Frame";
import { ArrowRight } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { websiteJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: home.summary,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = home.featured.map(getDestination).filter((d): d is Destination => Boolean(d));
  const [lead, ...rest] = featured;
  const foodStrip = [...dishes, cocido];

  return (
    <>
      <JsonLd data={websiteJsonLd()} />

      {/* 1 · Title sequence */}
      <PageHero
        image={heroVideo.poster}
        video={heroVideo.src}
        size="full"
        eyebrow={site.occasion}
        title={home.title}
        dek={home.dek}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#welcome" size="lg">
            Begin the journey
          </ButtonLink>
          <ButtonLink href="/destinations" variant="secondary" size="lg" arrow={false}>
            Explore destinations
          </ButtonLink>
        </div>
      </PageHero>

      {/* 2 · Welcome + numbers */}
      <Section tone="paper" id="welcome" labelledBy="welcome-title">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-12">
            <p className="eyebrow text-accent lg:col-span-3">{home.intro.eyebrow}</p>
            <div className="lg:col-span-9">
              <h2 id="welcome-title" className="reveal text-3xl leading-tight">
                {home.intro.statement}
              </h2>
              <p className="reveal mt-8 max-w-2xl text-lg text-muted">{home.intro.text}</p>
            </div>
          </div>
          <dl className="mt-section-sm grid grid-cols-2 border-t border-line lg:grid-cols-4">
            {home.stats.map((s) => (
              <div
                key={s.label}
                className="reveal flex flex-col border-b border-line py-8 pr-6 lg:border-r lg:border-b-0 lg:pl-6 lg:first:pl-0 lg:last:border-r-0"
              >
                <dt className="order-2 mt-2 font-sans text-sm font-medium">{s.label}</dt>
                <dd className="order-1 font-serif text-4xl tabular-nums">{s.value}</dd>
                <dd className="order-3 mt-1 font-sans text-xs text-muted">{s.note}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* 3 · Featured destinations: asymmetric */}
      <Section tone="night" labelledBy="featured-title">
        <Container size="wide">
          <SectionHeading
            id="featured-title"
            index="01"
            eyebrow="Destinations"
            title="Where to begin"
            dek="Mission ruins in the south, a riverside summer city and a frontier town in the Chaco."
            action={{ href: "/destinations", label: `All ${destinations.length} destinations` }}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            {lead && (
              <Card
                href={`/destinations/${lead.slug}`}
                title={lead.name}
                eyebrow={regions[lead.region].label}
                excerpt={lead.summary}
                image={lead.image}
                variant="overlay"
                ratio="square"
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="lg:col-span-7"
              />
            )}
            <div className="grid gap-6 lg:col-span-5">
              {rest.map((d) => (
                <Card
                  key={d.slug}
                  href={`/destinations/${d.slug}`}
                  title={d.name}
                  eyebrow={regions[d.region].label}
                  excerpt={d.summary}
                  image={d.image}
                  variant="overlay"
                  ratio="landscape"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4 · Nature: full-bleed band */}
      <section aria-labelledby="nature-title" className="tone-night relative isolate flex min-h-[85svh] items-end overflow-hidden">
        <Frame image="chaco-dawn" ratio="fill" scrim="bottom" className="-z-10" />
        <Container size="wide" className="pt-section pb-14">
          <p className="eyebrow flex items-center gap-3 text-accent">
            <span className="tabular-nums">02</span>
            <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
            {home.nature.eyebrow}
          </p>
          <h2 id="nature-title" className="reveal mt-4 max-w-3xl text-4xl">
            {home.nature.title}
          </h2>
          <p className="reveal mt-6 max-w-xl text-lg text-cream/85">{home.nature.text}</p>
        </Container>
      </section>
      <Section tone="night-2" spacing="sm">
        <Container size="wide">
          <ul className="grid gap-8 md:grid-cols-3">
            {home.nature.points.map((p) => (
              <li key={p.title} className="reveal">
                <Link href={p.href} className="group block border-t border-line pt-6">
                  <h3 className="text-2xl group-hover:text-accent">{p.title}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{p.text}</p>
                  <span className="eyebrow mt-5 inline-flex items-center gap-2 text-fg/70 group-hover:text-fg">
                    Read more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <ButtonLink href="/nature" variant="secondary">
              Explore nature
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* 5 · Culture: split with pull quote */}
      <Section tone="sand" labelledBy="culture-title">
        <Container size="wide">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span className="tabular-nums">03</span>
                <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
                {home.culture.eyebrow}
              </p>
              <h2 id="culture-title" className="reveal mt-6 text-4xl italic">
                “{home.culture.quote}”
              </h2>
              <p className="reveal mt-8 max-w-lg text-lg text-muted">{home.culture.text}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {home.culture.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-flex min-h-11 items-center border border-fg/25 px-4 font-sans text-sm transition-colors hover:border-fg hover:bg-fg hover:text-surface"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="reveal lg:col-span-5 lg:col-start-8">
              <Frame image="nanduti" ratio="portrait" sizes={imageSizes.half} />
              <FrameCaption image="nanduti" />
            </figure>
          </div>
        </Container>
      </Section>

      {/* 6 · Food: horizontal strip */}
      <Section tone="night" labelledBy="food-title">
        <Container size="wide">
          <SectionHeading
            id="food-title"
            index="04"
            eyebrow={home.food.eyebrow}
            title={home.food.title}
            dek={home.food.text}
            action={{ href: "/food", label: "The food guide" }}
          />
        </Container>
        <div className="mt-12 overflow-x-auto overscroll-x-contain pb-6 [scrollbar-color:var(--line)_transparent] [scrollbar-width:thin]">
          <ul className="flex snap-x snap-mandatory gap-5 px-gutter lg:px-[max(var(--spacing-gutter),calc((100vw-var(--container-wide))/2+var(--spacing-gutter)))]">
            {foodStrip.map((d) => (
              <li key={d.id} className="w-[68vw] shrink-0 snap-start sm:w-[40vw] lg:w-[22vw] lg:max-w-80">
                <Card
                  href={`/food#${d.id}`}
                  title={d.name}
                  eyebrow={d.kind}
                  image={d.image}
                  ratio="portrait"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 68vw"
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 7 · History: horizontal timeline */}
      <Section tone="paper" labelledBy="history-title">
        <Container size="wide">
          <SectionHeading
            id="history-title"
            index="05"
            eyebrow={home.history.eyebrow}
            title={home.history.title}
            dek={home.history.text}
            action={{ href: "/history", label: "The full timeline" }}
          />
          <ol className="mt-14 grid gap-0 lg:grid-cols-7">
            {eras.map((era, i) => (
              <li key={era.id} className="reveal relative">
                <Link
                  href={`/history#${era.id}`}
                  className="group flex gap-5 border-l border-line py-5 pl-6 lg:block lg:border-t lg:border-l-0 lg:pt-8 lg:pr-4 lg:pl-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-7 -left-[5px] size-2.5 rounded-full bg-accent lg:top-[-5px] lg:left-0"
                  />
                  <span className="eyebrow block w-28 shrink-0 text-muted tabular-nums lg:w-auto">{era.period}</span>
                  <span className="block text-xl leading-snug group-hover:text-accent lg:mt-3">
                    <span className="sr-only">{`Chapter ${i + 1}: `}</span>
                    {era.title}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 8 · Travel inspiration: panels over a band */}
      <section aria-labelledby="journeys-title" className="tone-night relative isolate overflow-hidden py-section">
        <Frame image="palm-road" ratio="fill" className="-z-10 opacity-45" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-night/55" />
        <Container size="wide">
          <SectionHeading
            id="journeys-title"
            index="06"
            eyebrow={home.journeys.eyebrow}
            title={home.journeys.title}
            dek={home.journeys.text}
          />
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {itineraries.map((it) => (
              <li key={it.id} className="reveal">
                <Link
                  href={`/travel-guide#${it.id}`}
                  className="group flex h-full flex-col border border-line bg-night/80 p-7 transition-colors hover:border-accent"
                >
                  <span className="eyebrow text-accent">{it.length}</span>
                  <span className="mt-4 text-2xl">{it.title}</span>
                  <span className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted">{it.summary}</span>
                  <span className="eyebrow mt-6 inline-flex items-center gap-2 text-fg/70 group-hover:text-fg">
                    See the route
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 9 · Facts */}
      <Section tone="paper" labelledBy="facts-title">
        <Container size="wide">
          <SectionHeading id="facts-title" index="07" eyebrow={home.facts.eyebrow} title={home.facts.title} />
          <ol className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {home.facts.items.map((fact, i) => (
              <li key={i} className="reveal border-t border-line pt-6">
                <span className="font-serif text-3xl text-accent tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-4 text-lg leading-snug">{fact}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 10 · Closing */}
      <section aria-labelledby="closing-title" className="tone-night relative isolate flex min-h-[80svh] items-center overflow-hidden">
        <Frame image="chaco-night" ratio="fill" className="-z-10" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgb(13_17_15/0.35),rgb(13_17_15/0.8))]" />
        <Container size="content" className="py-section text-center">
          <p className="eyebrow text-accent">{home.closing.eyebrow}</p>
          <h2 id="closing-title" className="reveal mx-auto mt-6 max-w-4xl text-4xl">
            {home.closing.title}
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg text-cream/85">{home.closing.text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/destinations" size="lg">
              Explore destinations
            </ButtonLink>
            <ButtonLink href="/culture" variant="secondary" size="lg" arrow={false}>
              Meet the culture
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
