"use client";

import { useId, useMemo, useSyncExternalStore } from "react";
import type { ImageId } from "@/data/images";
import type { ExperienceId, RegionId } from "@/data/types";
import { Card } from "@/components/ui/Card";
import { imageSizes } from "@/components/ui/Frame";
import { departmentNames, ParaguayMap } from "@/components/ui/ParaguayMap";
import { cn } from "@/lib/cn";

export type ExplorerItem = {
  slug: string;
  name: string;
  department: string;
  region: RegionId;
  experiences: ExperienceId[];
  summary: string;
  image: ImageId;
};

type Props = {
  items: ExplorerItem[];
  regions: { id: RegionId; label: string; description: string }[];
  experiences: { id: ExperienceId; label: string }[];
};

const noop = () => () => {};

/*
 * Filters live in the URL (?region=chaco&experience=hiking&q=lake), so a filtered view can be
 * shared and survives the Back button. The server snapshot is empty, so the prerendered HTML
 * always shows every destination.
 */
const URL_EVENT = "destinations:filters";

function subscribeUrl(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener(URL_EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(URL_EVENT, onChange);
  };
}

function writeUrl(next: Record<string, string>) {
  const params = new URLSearchParams(window.location.search);
  for (const [key, value] of Object.entries(next)) {
    if (!value || value === "all") params.delete(key);
    else params.set(key, value);
  }
  const qs = params.toString();
  window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  window.dispatchEvent(new Event(URL_EVENT));
}

/** Normalize for accent-insensitive search ("nacunday" finds "Ñacunday"). */
const fold = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export function DestinationExplorer({ items, regions, experiences }: Props) {
  const hydrated = useSyncExternalStore(noop, () => true, () => false);
  const search = useSyncExternalStore(subscribeUrl, () => window.location.search, () => "");
  const searchId = useId();

  const params = new URLSearchParams(search);
  const regionParam = params.get("region");
  const experienceParam = params.get("experience");
  const region: RegionId | "all" = regions.find((r) => r.id === regionParam)?.id ?? "all";
  const experience: ExperienceId | "all" = experiences.find((e) => e.id === experienceParam)?.id ?? "all";
  const query = params.get("q") ?? "";

  const setRegion = (id: string) => writeUrl({ region: id });
  const setExperience = (id: string) => writeUrl({ experience: id });
  const setQuery = (q: string) => writeUrl({ q });

  const active = region !== "all" || experience !== "all" || query.trim() !== "";

  const results = useMemo(() => {
    const q = fold(query.trim());
    return items.filter(
      (d) =>
        (region === "all" || d.region === region) &&
        (experience === "all" || d.experiences.includes(experience)) &&
        (!q || fold(`${d.name} ${d.department} ${d.summary}`).includes(q)),
    );
  }, [items, region, experience, query]);

  const regionLabel = (id: RegionId) => regions.find((r) => r.id === id)?.label ?? "";

  const reset = () => writeUrl({ region: "all", experience: "all", q: "" });

  const card = (d: ExplorerItem) => (
    <Card
      key={d.slug}
      href={`/destinations/${d.slug}`}
      title={d.name}
      eyebrow={`${regionLabel(d.region)} · ${d.department}`}
      excerpt={d.summary}
      image={d.image}
      ratio="landscape"
      sizes={imageSizes.third}
    />
  );

  return (
    <div>
      <fieldset disabled={!hydrated} className="grid gap-6 border-y border-line py-6 lg:grid-cols-12 lg:items-end">
        <legend className="sr-only">Filter destinations</legend>
        <div className="lg:col-span-4">
          <label htmlFor={searchId} className="eyebrow text-muted">
            Search
          </label>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Town, park or department"
            autoComplete="off"
            className="mt-2 h-12 w-full border-b border-fg/30 bg-transparent font-sans text-base text-fg placeholder:text-muted/80 focus:border-accent focus:outline-none focus-visible:outline-none"
          />
        </div>
        <FilterGroup
          label="Region"
          className="lg:col-span-8"
          options={[{ id: "all", label: "All" }, ...regions.map((r) => ({ id: r.id, label: r.label }))]}
          value={region}
          onChange={setRegion}
        />
        <FilterGroup
          label="Experience"
          className="lg:col-span-12"
          options={[{ id: "all", label: "All" }, ...experiences]}
          value={experience}
          onChange={setExperience}
        />
      </fieldset>

      <div className="mt-6 flex min-h-11 items-center justify-between gap-4 font-sans text-sm text-muted">
        <p aria-live="polite">
          {active ? `Showing ${results.length} of ${items.length} destinations` : `${items.length} destinations`}
        </p>
        {active && (
          <button type="button" onClick={reset} className="eyebrow inline-flex h-11 items-center text-fg underline decoration-accent underline-offset-4">
            Clear filters
          </button>
        )}
      </div>

      {active ? (
        results.length > 0 ? (
          <section aria-labelledby="results-title">
            <h2 id="results-title" className="sr-only">
              Matching destinations
            </h2>
            <div className="mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">{results.map(card)}</div>
          </section>
        ) : (
          <p className="mt-16 max-w-md text-lg text-muted">
            No destinations match those filters.{" "}
            <button type="button" onClick={reset} className="link">
              Show all destinations
            </button>
            .
          </p>
        )
      ) : (
        <div className="mt-6 space-y-section-sm">
          {regions.map((r) => {
            const inRegion = items.filter((d) => d.region === r.id);
            if (inRegion.length === 0) return null;
            return (
              <section
                key={r.id}
                aria-labelledby={`region-${r.id}`}
                className="grid gap-10 border-t border-line pt-10 lg:grid-cols-12"
              >
                <div className="lg:col-span-3">
                  <div className="lg:sticky lg:top-[calc(var(--spacing-header)+2rem)]">
                    <p className="eyebrow text-accent tabular-nums">
                      {String(inRegion.length).padStart(2, "0")} {inRegion.length === 1 ? "place" : "places"}
                    </p>
                    <h2 id={`region-${r.id}`} className="mt-3 text-3xl">
                      {r.label}
                    </h2>
                    <p className="mt-3 max-w-xs font-sans text-sm text-muted">{r.description}</p>
                    {/* Decorative: the heading and description already say where the region is. */}
                    <ParaguayMap
                      highlight={[...new Set(inRegion.flatMap((d) => departmentNames(d.department)))]}
                      className="mt-6 w-24 lg:w-32"
                    />
                  </div>
                </div>
                <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">{inRegion.map(card)}</div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
  className,
}: {
  label: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
}) {
  return (
    <div className={className} role="group" aria-label={label}>
      <p aria-hidden="true" className="eyebrow text-muted">
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => {
          const pressed = value === o.id;
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => onChange(o.id)}
              className={cn(
                "inline-flex min-h-11 items-center border px-4 font-sans text-sm transition-colors",
                pressed ? "border-fg bg-fg text-surface" : "border-line text-fg hover:border-fg/60",
              )}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
