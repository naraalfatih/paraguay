import Link from "next/link";
import { journeyCopy, nextStop } from "@/data/journey";
import { Container } from "@/components/layout/Container";
import { Frame } from "./Frame";
import { ArrowRight } from "./icons";

/**
 * Closing "next scene" band: the following section's hero image, its title and one link.
 * The whole band is clickable through the link's stretched hit area.
 */
export function NextChapter({ from }: { from: string }) {
  const { stop, number } = nextStop(from);
  return (
    <nav
      aria-label={journeyCopy.eyebrow}
      className="group tone-night relative isolate flex min-h-[60svh] items-end overflow-hidden has-[a:focus-visible]:outline-2 has-[a:focus-visible]:-outline-offset-8 has-[a:focus-visible]:outline-cream md:min-h-[70svh]"
    >
      <Frame image={stop.image} ratio="fill" scrim="bottom" zoomOnHover className="-z-10" />
      <Container size="wide" className="text-halo pt-section pb-14 md:pb-20">
        <p className="eyebrow flex items-center gap-3 text-accent">
          <span className="tabular-nums">{String(number).padStart(2, "0")}</span>
          <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
          {journeyCopy.eyebrow}
        </p>
        <Link
          href={stop.href}
          className="mt-5 block max-w-4xl after:absolute after:inset-0 focus-visible:outline-none"
        >
          <span className="block text-4xl leading-[1.02] text-cream md:text-[clamp(3rem,1.8rem+4.2vw,5.75rem)]">
            {stop.title}
          </span>{" "}
          <span className="mt-5 block max-w-xl text-lg text-cream/85">{stop.teaser}</span>{" "}
          <span className="eyebrow mt-8 inline-flex items-center gap-3 border-b border-accent pb-1 text-cream">
            {stop.label}
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </Container>
    </nav>
  );
}
