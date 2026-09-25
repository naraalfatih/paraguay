import { cn } from "@/lib/cn";
import { RichText } from "./RichText";

type NoteProps = {
  tone?: "info" | "verify";
  title?: string;
  text?: string;
  items?: string[];
  className?: string;
};

/** Aside for context or for time-sensitive details readers should check before travel. */
export function Note({ tone = "info", title, text, items, className }: NoteProps) {
  const heading = title ?? (tone === "verify" ? "Check before you go" : "Good to know");
  return (
    <aside
      className={cn(
        "border-l-2 py-1 pl-5 font-sans text-[0.95rem] leading-relaxed",
        tone === "verify" ? "border-accent" : "border-line",
        className,
      )}
    >
      <p className="eyebrow text-accent">{heading}</p>
      {text && (
        <p className="mt-2">
          <RichText text={text} />
        </p>
      )}
      {items && (
        <ul className="mt-2 space-y-1.5">
          {items.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
