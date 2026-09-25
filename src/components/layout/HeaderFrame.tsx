"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/**
 * Transparent over the hero at the top of the page, solid once scrolled.
 * Server/no-JS render is solid, so the header is always readable.
 */
export function HeaderFrame({ children }: { children: React.ReactNode }) {
  const atTop = useSyncExternalStore(
    subscribe,
    () => window.scrollY < 32,
    () => false,
  );

  return (
    <header
      data-at-top={atTop}
      className="tone-night fixed inset-x-0 top-0 z-50 h-header border-b border-line transition-[background-color,border-color] duration-500 data-[at-top=true]:border-transparent data-[at-top=true]:bg-transparent"
    >
      {children}
    </header>
  );
}
