"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";

const QUERY = "(prefers-reduced-motion: no-preference)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function canPlay() {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  return window.matchMedia(QUERY).matches && !nav.connection?.saveData;
}

/**
 * Ambient background loop layered over the hero's still image.
 * Skipped with reduced motion or data saver; can be paused (WCAG 2.2.2).
 */
export function HeroVideo({ src }: { src: string }) {
  const enabled = useSyncExternalStore(subscribe, canPlay, () => false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);

  if (!enabled || process.env.NEXT_PUBLIC_OFFLINE_IMAGES === "1") return null;

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        onCanPlay={() => setReady(true)}
        onPlaying={() => setReady(true)}
        className={cn(
          "absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-[1.6s]",
          ready ? "opacity-100" : "opacity-0",
        )}
      />
      {ready && (
        <button
          type="button"
          onClick={toggle}
          aria-pressed={paused}
          className="eyebrow absolute top-[calc(var(--spacing-header)+1rem)] right-gutter z-10 inline-flex h-10 items-center gap-2 border border-cream/30 px-3 text-cream/80 hover:border-cream hover:text-cream"
        >
          <span aria-hidden="true" className="text-[0.6rem]">
            {paused ? "▶" : "❚❚"}
          </span>
          {paused ? "Play motion" : "Pause motion"}
        </button>
      )}
    </>
  );
}
