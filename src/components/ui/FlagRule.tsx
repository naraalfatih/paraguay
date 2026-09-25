import { cn } from "@/lib/cn";

/** Thin red–white–blue band from the Paraguayan flag. The site's single use of the national colors. */
export function FlagRule({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("flex w-full flex-col", className)}>
      <span className="h-[3px] bg-flag-red" />
      <span className="h-[3px] bg-cream" />
      <span className="h-[3px] bg-flag-blue" />
    </div>
  );
}
