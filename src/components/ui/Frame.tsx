import Image from "next/image";
import { creditLine, getImage, type ImageId } from "@/data/images";
import { cn } from "@/lib/cn";
import { Ornament } from "./Ornament";

const ratios = {
  cinema: "aspect-[4/3] md:aspect-[21/9]",
  wide: "aspect-[16/9]",
  landscape: "aspect-[3/2]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  fill: "absolute inset-0",
} as const;

export const imageSizes = {
  full: "100vw",
  half: "(min-width: 1024px) 50vw, 100vw",
  third: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  twoThirds: "(min-width: 1024px) 66vw, 100vw",
} as const;

/** Darkening under the header and behind the text column so hero text stays legible over any image. */
export const heroScrim = "scrim-hero absolute inset-0";

/** Set NEXT_PUBLIC_OFFLINE_IMAGES=1 to render placeholder art when the image CDN is unreachable. */
const offline = process.env.NEXT_PUBLIC_OFFLINE_IMAGES === "1";

type FrameProps = {
  image: ImageId;
  ratio?: keyof typeof ratios;
  sizes?: string;
  /** Above-the-fold hero (LCP): load eagerly with high fetch priority. */
  eager?: boolean;
  /** Darkening gradient so overlaid text stays legible. */
  scrim?: "none" | "bottom" | "hero";
  /** Slow scale-in on load (hero images). */
  settle?: boolean;
  zoomOnHover?: boolean;
  /** "contain" shows the whole image (lightbox); default crops to fill. */
  fit?: "cover" | "contain";
  alt?: string;
  className?: string;
  imgClassName?: string;
};

/** Cinematic image frame: art-directed crop, optional scrim, subtle grain, graceful placeholder. */
export function Frame({
  image,
  ratio = "landscape",
  sizes = imageSizes.full,
  eager = false,
  scrim = "none",
  settle = false,
  zoomOnHover = false,
  fit = "cover",
  alt,
  className,
  imgClassName,
}: FrameProps) {
  const asset = getImage(image);

  return (
    <div
      className={cn(
        "grain overflow-hidden bg-night-2",
        // "fill" frames are absolutely positioned; every other ratio sizes itself.
        ratio === "fill" ? ratios.fill : cn("relative", ratios[ratio]),
        className,
      )}
    >
      {offline ? (
        <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
          <Ornament className="size-24 text-cream/10" />
        </div>
      ) : (
        <Image
          src={asset.src}
          alt={alt ?? asset.alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          style={asset.focus ? { objectPosition: asset.focus } : undefined}
          className={cn(
            fit === "cover" ? "object-cover" : "object-contain",
            settle && "motion-safe:animate-settle",
            zoomOnHover && "transition-transform duration-[1.2s] ease-cinema group-hover:scale-[1.04]",
            imgClassName,
          )}
        />
      )}
      {scrim === "bottom" && (
        <div aria-hidden="true" className="scrim-bottom absolute inset-0" />
      )}
      {scrim === "hero" && <div aria-hidden="true" className={heroScrim} />}
    </div>
  );
}

/** Caption, plus a credit line when the image has one. Use `as="p"` outside a <figure>. */
export function FrameCaption({
  image,
  text,
  as: Tag = "figcaption",
  className,
}: {
  image: ImageId;
  text?: string;
  as?: "figcaption" | "p";
  className?: string;
}) {
  const asset = getImage(image);
  const credit = creditLine(asset);
  return (
    <Tag className={cn("mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-sans text-xs text-muted", className)}>
      <span>{text ?? asset.caption}</span>
      {credit && (
        <>
          <span aria-hidden="true" className="opacity-50">
            /
          </span>
          <span className="uppercase tracking-[0.14em]">{credit}</span>
        </>
      )}
    </Tag>
  );
}
