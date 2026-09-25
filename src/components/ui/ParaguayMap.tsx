import { mapDepartments, mapRiver, mapViewBox } from "@/data/map";
import { mapLegend } from "@/data/site";
import { cn } from "@/lib/cn";

/** Department names used in the destination data that differ from the map's. */
const aliases: Record<string, string> = { "Capital District": "Asunción" };

/** "Alto Paraguay, Boquerón and Presidente Hayes" → the three map department names. */
export function departmentNames(department: string) {
  return department
    .split(/,\s*|\s+and\s+/)
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name) => aliases[name] ?? name);
}

/** "west" when every named department is in the Chaco, "east" when none are, otherwise null. */
export function mapRegionOf(names: string[]) {
  const regions = new Set(mapDepartments.filter((d) => names.includes(d.name)).map((d) => d.region));
  return regions.size === 1 ? [...regions][0] : null;
}

type ParaguayMapProps = {
  /** Map department names to fill with the accent color (see `departmentNames`). */
  highlight?: string[];
  /** Accessible name. Omit only when the map is decorative and nearby text says the same thing. */
  label?: string;
  /** Draw the Paraguay River between the Chaco and eastern Paraguay. */
  river?: boolean;
  className?: string;
};

/**
 * Outline map of Paraguay's departments (Natural Earth, public domain). Pure SVG, no JS.
 * The dry Chaco is tinted ochre and eastern Paraguay forest green; highlighted departments
 * take the accent and a marker, so even the tiny capital district stays visible.
 */
export function ParaguayMap({ highlight = [], label, river = true, className }: ParaguayMapProps) {
  const on = new Set(highlight);
  return (
    <svg
      viewBox={mapViewBox}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      className={cn("block h-auto w-full overflow-visible", className)}
    >
      {mapDepartments.map((dep) => (
        <path
          key={dep.name}
          d={dep.d}
          className={cn(
            "stroke-surface [stroke-linejoin:round] [stroke-width:1.25] [vector-effect:non-scaling-stroke]",
            on.has(dep.name) ? "fill-accent" : dep.region === "west" ? "fill-ocre-light/40" : "fill-monte-light/45",
          )}
        />
      ))}
      {river && (
        <path
          d={mapRiver}
          fill="none"
          className="stroke-rio-light [stroke-linecap:round] [stroke-width:2.5] [vector-effect:non-scaling-stroke]"
        />
      )}
      {mapDepartments
        .filter((dep) => on.has(dep.name))
        .map((dep) => (
          <g key={dep.name}>
            <circle
              cx={dep.center[0]}
              cy={dep.center[1]}
              r={52}
              fill="none"
              className="stroke-accent [stroke-width:1.5] [vector-effect:non-scaling-stroke]"
            />
            <circle
              cx={dep.center[0]}
              cy={dep.center[1]}
              r={22}
              className="fill-accent stroke-surface [stroke-width:1.5] [vector-effect:non-scaling-stroke]"
            />
          </g>
        ))}
    </svg>
  );
}

/** Key for the two regions and the river. Swatches match the map's tints. */
export function MapLegend({
  notes = false,
  highlight,
  className,
}: {
  notes?: boolean;
  /** Label for the accent color, e.g. "Itapúa department". */
  highlight?: string;
  className?: string;
}) {
  const items = [
    ...(highlight ? [{ key: "on", swatch: <span className="size-3 rounded-full bg-accent" />, label: highlight, note: undefined }] : []),
    { key: "west", swatch: <span className="size-3 bg-ocre-light/40" />, ...mapLegend.west },
    { key: "east", swatch: <span className="size-3 bg-monte-light/45" />, ...mapLegend.east },
    { key: "river", swatch: <span className="h-0.5 w-3 bg-rio-light" />, ...mapLegend.river, note: undefined },
  ];
  return (
    <ul className={cn("space-y-2 font-sans text-xs text-muted", className)}>
      {items.map((item) => (
        <li key={item.key} className="flex items-baseline gap-2.5">
          <span aria-hidden="true" className="inline-flex w-3 shrink-0 translate-y-px items-center">
            {item.swatch}
          </span>
          <span>
            <span className="text-fg">{item.label}</span>
            {notes && item.note && <span className="block">{item.note}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}
