import Link from "next/link";
import { Fragment } from "react";
import type { RichText as RichTextString } from "@/data/types";

const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)\s]+\)|\{(?:gn|es):[^}]+\})/g;

/**
 * Renders the tiny inline syntax used in src/data:
 * **strong**, *em*, [label](href), {gn:Guaraní term}, {es:Spanish term}.
 */
export function RichText({ text }: { text: RichTextString }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("{gn:") || part.startsWith("{es:")) {
          return (
            <i key={i} lang={part.slice(1, 3)}>
              {part.slice(4, -1)}
            </i>
          );
        }
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
        const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part);
        if (link) {
          const [, label, href] = link;
          return href.startsWith("/") ? (
            <Link key={i} href={href} className="link">
              {label}
            </Link>
          ) : (
            <a key={i} href={href} className="link" rel="noopener">
              {label}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
