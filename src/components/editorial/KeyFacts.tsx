import { cn } from "@/lib/cn";
import { RichText } from "./RichText";

export function KeyFacts({
  items,
  columns = 2,
  className,
}: {
  items: { label: string; value: string }[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid gap-px overflow-hidden border border-line bg-line",
        // An odd last item spans the row instead of leaving an empty cell.
        columns === 2 && "sm:grid-cols-2 sm:[&>:last-child:nth-child(odd)]:col-span-2",
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.label} className="bg-surface p-5">
          <dt className="eyebrow text-muted">{item.label}</dt>
          <dd className="mt-2 font-serif text-lg leading-snug">
            <RichText text={item.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
