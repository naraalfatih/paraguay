"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";

const QUERY = "(prefers-reduced-motion: no-preference)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

/** "auto" = may autoplay; "manual" = reduced motion or data saver, so wait for a click. */
function playMode() {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  return window.matchMedia(QUERY).matches && !nav.connection?.saveData ? "auto" : "manual";
}

/**
 * Silent background film layered over the hero's still image.
 * Autoplays when allowed. With reduced motion, data saver or blocked autoplay
 * (e.g. low-power mode) it shows a "Play film" button instead. Always pausable (WCAG 2.2.2).
 */
export function HeroVideo({ src }: { src: string }) {
  const mode = useSyncExternalStore(subscribe, playMode, () => null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [failed, setFailed] = useState(false);

  // Autoplay refused (e.g. low-power mode) → offer the button; anything else (unsupported, network) → give up.
  const onPlayError = (err: unknown) => {
    if (err instanceof DOMException && err.name === "AbortError") return;
    if (err instanceof DOMException && err.name === "NotAllowedError") setBlocked(true);
    else setFailed(true);
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v || mode !== "auto") return;
    v.play().catch(onPlayError);
  }, [mode, src]);

  // If the film can't load, the still image stays and no dead "Play film" button is shown.
  if (!mode || failed || process.env.NEXT_PUBLIC_OFFLINE_IMAGES === "1") return null;

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(onPlayError);
    } else {
      v.pause();
    }
  };

  const showButton = playing || started || mode === "manual" || blocked;

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        autoPlay={mode === "auto"}
        preload={mode === "auto" ? "auto" : "none"}
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={() => {
          setStarted(true);
          setPlaying(true);
          setBlocked(false);
        }}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
        className={cn(
          "absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-[1.6s]",
          started ? "opacity-100" : "opacity-0",
        )}
      />
      {showButton && (
        <button
          type="button"
          onClick={toggle}
          aria-pressed={!playing}
          className="eyebrow absolute top-[calc(var(--spacing-header)+1rem)] right-gutter z-10 inline-flex h-11 items-center gap-2 border border-cream/40 bg-night/40 px-4 text-cream hover:border-cream"
        >
          <span aria-hidden="true" className="text-[0.6rem]">
            {playing ? "❚❚" : "▶"}
          </span>
          {playing ? "Pause film" : "Play film"}
        </button>
      )}
    </>
  );
}
