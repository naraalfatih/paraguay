import type { Itinerary } from "@/data/types";
import { RichText } from "@/components/editorial/RichText";
import { PlusIcon } from "@/components/ui/icons";

/** Accessible accordion of sample routes (native <details>; first one open). */
export function ItineraryList({ itineraries }: { itineraries: Itinerary[] }) {
  return (
    <div className="border-t border-line">
      {itineraries.map((it, i) => (
        <details key={it.id} id={it.id} open={i === 0} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center gap-6 py-7 [&::-webkit-details-marker]:hidden">
            <span className="eyebrow w-20 shrink-0 text-accent">{it.length}</span>
            <span className="flex-1">
              <span className="block text-2xl group-hover:text-accent md:text-3xl">{it.title}</span>
              <span className="mt-1 block font-sans text-sm text-muted">{it.summary}</span>
            </span>
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center border border-line"
            >
              <PlusIcon className="size-4 transition-transform duration-300 group-open:rotate-45" />
            </span>
          </summary>
          <ol className="grid gap-px pb-10 md:grid-cols-2 md:pl-26 lg:grid-cols-3">
            {it.days.map((day) => (
              <li key={day.label} className="border-l-2 border-accent/60 bg-surface py-2 pr-6 pl-5">
                <p className="eyebrow text-muted">{day.label}</p>
                <p className="mt-2 leading-relaxed">
                  <RichText text={day.text} />
                </p>
              </li>
            ))}
          </ol>
        </details>
      ))}
    </div>
  );
}
