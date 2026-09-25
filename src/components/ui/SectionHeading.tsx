import { cn } from "@/lib/cn";
import { ButtonLink } from "./Button";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  /** Chapter-style index shown before the eyebrow, e.g. "02". */
  index?: string;
  title: React.ReactNode;
  dek?: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "lg" | "md";
  align?: "left" | "center";
  action?: { href: string; label: string };
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  index,
  title,
  dek,
  as: Tag = "h2",
  size = "lg",
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        action && align === "left" && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {(eyebrow || index) && (
          <p className="eyebrow flex items-center gap-3 text-accent">
            {index && <span className="tabular-nums">{index}</span>}
            {index && eyebrow && <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />}
            {eyebrow && <span>{eyebrow}</span>}
          </p>
        )}
        <Tag id={id} className={cn("mt-4", size === "lg" ? "text-3xl" : "text-2xl")}>
          {title}
        </Tag>
        {dek && <p className="mt-5 max-w-2xl text-lg text-muted">{dek}</p>}
      </div>
      {action && (
        <ButtonLink href={action.href} variant="text" className="shrink-0">
          {action.label}
        </ButtonLink>
      )}
    </div>
  );
}
