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

/** Top and bottom darkening so the header and hero text stay legible over any image. */
export const heroScrim =
  "absolute inset-0 bg-[linear-gradient(to_bottom,rgb(11_21_16/0.7)_0%,rgb(11_21_16/0)_22%,rgb(11_21_16/0)_45%,rgb(11_21_16/0.9)_100%)]";

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
    <div className={cn("grain relative overflow-hidden bg-night-2", ratios[ratio], className)}>
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
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-night/85 via-night/25 to-transparent" />
      )}
      {scrim === "hero" && <div aria-hidden="true" className={heroScrim} />}
    </div>
  );
}

/** Caption, plus a credit line when the image has one. */
export function FrameCaption({ image, text, className }: { image: ImageId; text?: string; className?: string }) {
  const asset = getImage(image);
  const credit = creditLine(asset);
  return (
    <figcaption className={cn("mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-sans text-xs text-muted", className)}>
      <span>{text ?? asset.caption}</span>
      {credit && (
        <>
          <span aria-hidden="true" className="opacity-50">
            /
          </span>
          <span className="uppercase tracking-[0.14em]">{credit}</span>
        </>
      )}
    </figcaption>
  );
}
