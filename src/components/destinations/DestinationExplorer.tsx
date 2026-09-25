"use client";

import { useId, useMemo, useState, useSyncExternalStore } from "react";
import type { ImageId } from "@/data/images";
import type { ExperienceId, RegionId } from "@/data/types";
import { Card } from "@/components/ui/Card";
import { imageSizes } from "@/components/ui/Frame";
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

/** Normalize for accent-insensitive search ("nacunday" finds "Ñacunday"). */
const fold = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export function DestinationExplorer({ items, regions, experiences }: Props) {
  const hydrated = useSyncExternalStore(noop, () => true, () => false);
  const [region, setRegion] = useState<RegionId | "all">("all");
  const [experience, setExperience] = useState<ExperienceId | "all">("all");
  const [query, setQuery] = useState("");
  const searchId = useId();

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

  const reset = () => {
    setRegion("all");
    setExperience("all");
    setQuery("");
  };

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
          onChange={(v) => setRegion(v as RegionId | "all")}
        />
        <FilterGroup
          label="Experience"
          className="lg:col-span-12"
          options={[{ id: "all", label: "All" }, ...experiences]}
          value={experience}
          onChange={(v) => setExperience(v as ExperienceId | "all")}
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
          <div className="mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">{results.map(card)}</div>
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
              <section key={r.id} aria-labelledby={`region-${r.id}`} className="border-t border-line pt-10">
                <div className="grid gap-4 lg:grid-cols-12">
                  <h2 id={`region-${r.id}`} className="text-3xl lg:col-span-5">
                    {r.label}
                  </h2>
                  <p className="font-sans text-muted lg:col-span-5 lg:col-start-8 lg:pt-3">{r.description}</p>
                </div>
                <div className="mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">{inRegion.map(card)}</div>
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
