import { cn } from "@/lib/cn";

export type Tone = "night" | "night-2" | "paper" | "sand";

const toneClass: Record<Tone, string> = {
  night: "tone-night",
  "night-2": "tone-night-2",
  paper: "tone-paper",
  sand: "tone-sand",
};

const spacingClass = {
  default: "py-section",
  sm: "py-section-sm",
  none: "",
} as const;

type SectionProps = {
  tone?: Tone;
  spacing?: keyof typeof spacingClass;
  id?: string;
  labelledBy?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  tone = "night",
  spacing = "default",
  id,
  labelledBy,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(toneClass[tone], spacingClass[spacing], "relative", className)}
    >
      {children}
    </section>
  );
}
