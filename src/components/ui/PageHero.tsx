import { creditLine, getImage, type ImageId } from "@/data/images";
import type { Crumb } from "@/lib/jsonld";
import { cn } from "@/lib/cn";
import { Breadcrumbs } from "./Breadcrumbs";
import { Frame, heroScrim } from "./Frame";
import { HeroVideo } from "./HeroVideo";

type PageHeroProps = {
  image: ImageId;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  dek?: React.ReactNode;
  crumbs?: Crumb[];
  size?: "full" | "tall";
  /** Optional ambient video loop layered over the still image. */
  video?: string;
  children?: React.ReactNode;
};

/** Full-bleed opening "title sequence" used at the top of every page. */
export function PageHero({ image, eyebrow, title, dek, crumbs, size = "tall", video, children }: PageHeroProps) {
  const asset = getImage(image);
  return (
    <section
      className={cn(
        "tone-night relative isolate flex items-end overflow-hidden",
        size === "full" ? "min-h-svh" : "min-h-[82svh] md:min-h-[88svh]",
      )}
    >
      <Frame image={image} ratio="fill" eager settle className="-z-10" />
      {video && <HeroVideo src={video} />}
      <div aria-hidden="true" className={cn(heroScrim, "-z-10")} />

      <div className="mx-auto w-full max-w-wide px-gutter pt-[calc(var(--spacing-header)+3rem)] pb-12 md:pb-20">
        {crumbs && <Breadcrumbs crumbs={crumbs} className="mb-8 motion-safe:animate-fade" />}
        {eyebrow && (
          <p className="eyebrow flex items-center gap-3 text-accent motion-safe:animate-rise">
            <span aria-hidden="true" className="hidden h-px w-10 bg-current sm:block" />
            {eyebrow}
          </p>
        )}
        <h1
          className={cn(
            "mt-5 max-w-5xl text-cream motion-safe:animate-rise motion-safe:[animation-delay:120ms]",
            size === "full" ? "text-display" : "text-4xl md:text-[clamp(3rem,1.8rem+4.6vw,6.25rem)] md:leading-[0.98]",
          )}
        >
          {title}
        </h1>
        {dek && (
          <p className="mt-6 max-w-2xl text-lg text-cream/85 motion-safe:animate-rise motion-safe:[animation-delay:240ms]">
            {dek}
          </p>
        )}
        {children && <div className="mt-9 motion-safe:animate-rise motion-safe:[animation-delay:360ms]">{children}</div>}
      </div>

      <p className="absolute right-gutter bottom-5 hidden max-w-xs text-right font-sans text-[0.68rem] tracking-wide text-cream/60 md:block">
        {asset.caption} — {creditLine(asset)}
      </p>
    </section>
  );
}
