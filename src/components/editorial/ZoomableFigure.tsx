"use client";

import Image from "next/image";
import { useRef } from "react";
import { getImage, type ImageId } from "@/data/images";
import { Frame, FrameCaption, imageSizes } from "@/components/ui/Frame";
import { CloseIcon, ExpandIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type ZoomableFigureProps = {
  image: ImageId;
  caption?: string;
  ratio?: "landscape" | "portrait" | "wide" | "cinema" | "square";
  sizes?: string;
  className?: string;
};

/** Figure that opens a full-screen lightbox (native <dialog>: focus trap and Esc for free). */
export function ZoomableFigure({ image, caption, ratio = "landscape", sizes = imageSizes.twoThirds, className }: ZoomableFigureProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const asset = getImage(image);
  const label = caption ?? asset.caption;

  return (
    <figure className={className}>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
        aria-label={`Enlarge image: ${label}`}
        className="group relative block w-full cursor-zoom-in"
      >
        <Frame image={image} ratio={ratio} sizes={sizes} zoomOnHover />
        <span
          aria-hidden="true"
          className="absolute top-3 right-3 z-10 grid size-10 place-items-center bg-night/70 text-cream opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <ExpandIcon />
        </span>
      </button>
      <FrameCaption image={image} text={caption} />

      <dialog
        ref={dialogRef}
        aria-label={label}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="tone-night m-0 h-dvh max-h-none w-full max-w-none bg-night/95 p-0 backdrop:bg-night/80 open:motion-safe:animate-fade"
      >
        <div className="flex h-full flex-col px-gutter py-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="eyebrow inline-flex h-11 items-center gap-2 px-2"
              autoFocus
            >
              <CloseIcon />
              Close
            </button>
          </div>
          <div className="relative min-h-0 flex-1">
            <Image
              src={asset.src}
              alt={asset.alt}
              fill
              sizes="100vw"
              className={cn("object-contain")}
            />
          </div>
          <FrameCaption image={image} text={caption} className="mx-auto max-w-3xl justify-center pt-3 text-center" />
        </div>
      </dialog>
    </figure>
  );
}
