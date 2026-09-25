import type { Block } from "@/data/types";
import { cn } from "@/lib/cn";
import { ZoomableFigure } from "./ZoomableFigure";
import { KeyFacts } from "./KeyFacts";
import { Note } from "./Note";
import { PullQuote } from "./PullQuote";
import { RichText } from "./RichText";

/** Renders structured article blocks from src/data. */
export function Blocks({ blocks, className }: { blocks: Block[]; className?: string }) {
  return (
    <div className={cn("prose-editorial", className)}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i}>
                <RichText text={block.text} />
              </p>
            );
          case "lede":
            return (
              <p key={i} className="text-xl leading-snug text-fg">
                <RichText text={block.text} />
              </p>
            );
          case "h3":
            return (
              <h3 key={i} className="pt-6 text-2xl">
                {block.text}
              </h3>
            );
          case "list":
            return (
              <ul key={i} className="space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="relative pl-6">
                    <span aria-hidden="true" className="absolute left-0 top-[0.72em] h-px w-3 bg-accent" />
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return <PullQuote key={i} text={block.text} cite={block.cite} />;
          case "figure":
            return <ZoomableFigure key={i} image={block.image} caption={block.caption} className="py-4" />;
          case "facts":
            return <KeyFacts key={i} items={block.items} />;
          case "note":
            return <Note key={i} tone={block.tone} title={block.title} text={block.text} />;
        }
      })}
    </div>
  );
}
