import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, type Crumb } from "@/lib/jsonld";
import { cn } from "@/lib/cn";

/** Visible trail + BreadcrumbList structured data. The last crumb is the current page. */
export function Breadcrumbs({ crumbs, className }: { crumbs: Crumb[]; className?: string }) {
  const all: Crumb[] = [{ name: "Home", href: "/" }, ...crumbs];
  return (
    <>
      <nav aria-label="Breadcrumb" className={cn("eyebrow text-cream/80", className)}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-cream">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="inline-flex min-h-6 items-center hover:text-cream">
                      {c.name}
                    </Link>
                    <span aria-hidden="true" className="opacity-50">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(all)} />
    </>
  );
}
