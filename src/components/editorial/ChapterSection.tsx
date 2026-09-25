import type { Chapter } from "@/data/types";
import { Container } from "@/components/layout/Container";
import { Section, type Tone } from "@/components/layout/Section";
import { Frame, FrameCaption } from "@/components/ui/Frame";
import { Blocks } from "./Blocks";

/**
 * One chapter of a long-form page: an optional cinematic image band,
 * then a sticky chapter title beside the reading column.
 */
export function ChapterSection({ chapter, index, tone }: { chapter: Chapter; index: number; tone: Tone }) {
  const number = String(index + 1).padStart(2, "0");
  return (
    <Section tone={tone} id={chapter.id} labelledBy={`${chapter.id}-title`} spacing="none">
      {chapter.image && (
        <figure className="reveal">
          <Frame image={chapter.image} ratio="cinema" />
          <Container size="wide">
            <FrameCaption image={chapter.image} />
          </Container>
        </figure>
      )}
      <Container size="wide" className="py-section-sm">
        <div className="grid gap-10 lg:grid-cols-12">
          <header className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--spacing-header)+2rem)]">
              <p className="eyebrow flex items-center gap-3 text-accent">
                <span className="tabular-nums">{number}</span>
                <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
                {chapter.eyebrow && <span>{chapter.eyebrow}</span>}
              </p>
              <h2 id={`${chapter.id}-title`} className="mt-4 text-3xl">
                {chapter.title}
              </h2>
            </div>
          </header>
          <Blocks blocks={chapter.blocks} className="reveal max-w-prose lg:col-span-7 lg:col-start-6" />
        </div>
      </Container>
    </Section>
  );
}
