import { cn } from "@/lib/cn";
import { RichText } from "./RichText";

export function PullQuote({ text, cite, className }: { text: string; cite?: string; className?: string }) {
  return (
    <figure className={cn("py-6", className)}>
      <blockquote className="border-t border-line pt-8 font-serif text-3xl leading-[1.15] italic">
        <RichText text={text} />
      </blockquote>
      {cite && <figcaption className="eyebrow mt-5 text-muted">{cite}</figcaption>}
    </figure>
  );
}
