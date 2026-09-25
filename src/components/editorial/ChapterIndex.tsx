import type { Chapter } from "@/data/types";
import { cn } from "@/lib/cn";

/** "On this page" chapter list, like a film's scene selection. Plain anchor links, no JS. */
export function ChapterIndex({ chapters, className }: { chapters: Pick<Chapter, "id" | "title">[]; className?: string }) {
  return (
    <nav aria-label="On this page" className={className}>
      <p className="eyebrow text-muted">On this page</p>
      <ol className={cn("mt-4 grid border-t border-line sm:grid-cols-2")}>
        {chapters.map((c, i) => (
          <li key={c.id} className="border-b border-line">
            <a href={`#${c.id}`} className="group flex min-h-12 items-baseline gap-4 py-3 hover:text-accent">
              <span className="eyebrow w-6 text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-lg">{c.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
