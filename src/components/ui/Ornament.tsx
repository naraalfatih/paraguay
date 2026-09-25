import { cn } from "@/lib/cn";

const SPOKES = 24;

/** Ñandutí-inspired radial mark: the site's only decorative motif. Always decorative. */
export function Ornament({ className }: { className?: string }) {
  const spokes = Array.from({ length: SPOKES }, (_, i) => {
    const a = (i / SPOKES) * Math.PI * 2;
    return {
      x1: (50 + Math.cos(a) * 9).toFixed(2),
      y1: (50 + Math.sin(a) * 9).toFixed(2),
      x2: (50 + Math.cos(a) * 46).toFixed(2),
      y2: (50 + Math.sin(a) * 46).toFixed(2),
    };
  });
  const petals = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    return { cx: (50 + Math.cos(a) * 30).toFixed(2), cy: (50 + Math.sin(a) * 30).toFixed(2) };
  });

  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      {spokes.map((s, i) => (
        <line key={i} {...s} strokeWidth="0.8" />
      ))}
      <circle cx="50" cy="50" r="9" />
      <circle cx="50" cy="50" r="20" />
      {petals.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="6.5" />
      ))}
      <circle cx="50" cy="50" r="46" />
    </svg>
  );
}
