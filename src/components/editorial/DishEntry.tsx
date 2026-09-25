import type { Dish } from "@/data/types";
import { cn } from "@/lib/cn";
import { RichText } from "./RichText";
import { ZoomableFigure } from "./ZoomableFigure";

/** One dish: portrait image on one side, text on the other; sides alternate. */
export function DishEntry({ dish, index }: { dish: Dish; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article id={dish.id} aria-labelledby={`${dish.id}-name`} className="grid items-center gap-10 border-t border-line py-14 lg:grid-cols-12 lg:gap-16">
      <ZoomableFigure
        image={dish.image}
        ratio="portrait"
        sizes="(min-width: 1024px) 38vw, 100vw"
        className={cn("reveal lg:col-span-5", flip && "lg:order-2 lg:col-start-8")}
      />
      <div className={cn("reveal lg:col-span-6", flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7")}>
        <p className="eyebrow flex items-center gap-3 text-accent">
          <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
          {dish.kind}
        </p>
        <h2 id={`${dish.id}-name`} className="mt-4 text-4xl">
          {dish.name}
        </h2>
        <dl className="mt-8 space-y-6">
          <div>
            <dt className="eyebrow text-muted">What it is</dt>
            <dd className="mt-2 text-lg leading-relaxed">
              <RichText text={dish.what} />
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-muted">Where it fits</dt>
            <dd className="mt-2 font-sans leading-relaxed text-muted">
              <RichText text={dish.context} />
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
