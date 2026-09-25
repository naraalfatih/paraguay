import Link from "next/link";
import type { ImageId } from "@/data/images";
import { cn } from "@/lib/cn";
import { ArrowRight } from "./icons";
import { Frame, imageSizes } from "./Frame";

type CardProps = {
  href: string;
  title: string;
  eyebrow?: string;
  excerpt?: string;
  image?: ImageId;
  ratio?: "portrait" | "landscape" | "wide" | "square";
  /** "stacked": image above text. "overlay": text set over the image (cinematic tile). */
  variant?: "stacked" | "overlay";
  headingLevel?: "h2" | "h3";
  sizes?: string;
  className?: string;
};

/**
 * Editorial card. The whole card is clickable via a stretched title link,
 * so screen readers get a single, well-named link.
 */
export function Card({
  href,
  title,
  eyebrow,
  excerpt,
  image,
  ratio = "portrait",
  variant = "stacked",
  headingLevel: Heading = "h3",
  sizes = imageSizes.third,
  className,
}: CardProps) {
  const link = (
    <Link href={href} className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none">
      {title}
    </Link>
  );

  if (variant === "overlay" && image) {
    return (
      <article
        className={cn(
          "group relative isolate overflow-hidden has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent",
          className,
        )}
      >
        <Frame image={image} ratio={ratio} sizes={sizes} scrim="bottom" zoomOnHover />
        <div className="tone-night text-halo absolute inset-x-0 bottom-0 bg-transparent p-6 md:p-8">
          {eyebrow && <p className="eyebrow text-accent">{eyebrow}</p>}
          <Heading className="mt-3 text-2xl text-cream">{link}</Heading>
          {excerpt && <p className="mt-3 line-clamp-3 max-w-md font-sans text-sm text-cream/80">{excerpt}</p>}
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group relative flex flex-col has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-8 has-[a:focus-visible]:outline-accent",
        className,
      )}
    >
      {image && <Frame image={image} ratio={ratio} sizes={sizes} zoomOnHover />}
      <div className={cn("flex flex-1 flex-col", image && "pt-5")}>
        {eyebrow && <p className="eyebrow text-accent">{eyebrow}</p>}
        <Heading className="mt-2 text-2xl transition-colors group-hover:text-accent">{link}</Heading>
        {excerpt && <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{excerpt}</p>}
        <span aria-hidden="true" className="eyebrow mt-5 inline-flex items-center gap-2 text-fg/70 group-hover:text-fg">
          Read
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
