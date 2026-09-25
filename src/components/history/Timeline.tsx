import type { Era } from "@/data/types";
import { RichText } from "@/components/editorial/RichText";
import { PlusIcon } from "@/components/ui/icons";

/**
 * Vertical, expandable timeline. Each era is a native <details>, so it works
 * without JavaScript and is keyboard accessible by default.
 */
export function Timeline({ eras }: { eras: Era[] }) {
  return (
    <ol className="relative">
      <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-line md:left-[calc(9rem+7px)]" />
      {eras.map((era, i) => (
        <li key={era.id} className="relative pb-4">
          <details id={era.id} data-era open={i === 0} className="group">
            <summary className="grid cursor-pointer list-none grid-cols-[1.5rem_1fr] gap-x-4 py-5 md:grid-cols-[9rem_1.5rem_1fr] [&::-webkit-details-marker]:hidden">
              <span className="eyebrow col-start-2 row-start-1 text-muted tabular-nums md:col-start-1 md:pt-3 md:text-right">
                {era.period}
              </span>
              <span
                aria-hidden="true"
                className="col-start-1 row-span-2 row-start-1 mt-1.5 size-[15px] rounded-full border-2 border-accent bg-surface transition-colors group-open:bg-accent md:col-start-2 md:mt-3.5"
              />
              <span className="col-start-2 flex items-start justify-between gap-6 md:col-start-3">
                <span>
                  <span className="block text-3xl group-hover:text-accent">{era.title}</span>
                  <span className="mt-2 block font-sans text-sm text-muted">{era.summary}</span>
                </span>
                <span aria-hidden="true" className="mt-2 grid size-10 shrink-0 place-items-center border border-line">
                  <PlusIcon className="size-4 transition-transform duration-300 group-open:rotate-45" />
                </span>
              </span>
            </summary>

            <div className="grid gap-10 pt-2 pb-10 pl-10 md:grid-cols-2 md:pl-[calc(9rem+3.5rem)]">
              <section aria-label={`${era.title}: facts`}>
                <h3 className="eyebrow flex items-center gap-2 text-accent">
                  <span aria-hidden="true" className="size-2 bg-accent" />
                  Facts
                </h3>
                <ul className="mt-4 space-y-3">
                  {era.facts.map((f, j) => (
                    <li key={j} className="border-t border-line pt-3 leading-relaxed">
                      <RichText text={f} />
                    </li>
                  ))}
                </ul>
              </section>
              <section aria-label={`${era.title}: interpretations`}>
                <h3 className="eyebrow flex items-center gap-2 text-muted">
                  <span aria-hidden="true" className="size-2 rounded-full border border-current" />
                  Interpretations and debates
                </h3>
                <ul className="mt-4 space-y-3">
                  {era.interpretations.map((f, j) => (
                    <li key={j} className="border-t border-dashed border-line pt-3 leading-relaxed text-muted italic">
                      <RichText text={f} />
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}
