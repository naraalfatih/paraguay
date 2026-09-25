import Link from "next/link";
import { glance, mainNav, site } from "@/data/site";
import { FlagRule } from "@/components/ui/FlagRule";
import { Ornament } from "@/components/ui/Ornament";
import { formatReviewed } from "@/lib/date";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="tone-night-2 pb-10">
      <FlagRule />
      <Container size="wide" className="pt-section-sm">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Ornament className="size-10 text-accent" />
              <span className="font-serif text-4xl">Paraguay</span>
            </Link>
            <p className="mt-5 max-w-sm text-lg text-muted">{site.tagline}.</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div className="col-span-2">
              <h2 className="eyebrow text-muted">Explore</h2>
              <ul className="mt-4 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex min-h-11 items-center text-lg hover:text-accent">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow text-muted">At a glance</h2>
              <dl className="mt-4 space-y-3 font-sans text-sm">
                {glance.slice(0, 4).map((g) => (
                  <div key={g.label}>
                    <dt className="text-muted">{g.label}</dt>
                    <dd className="mt-0.5 text-fg">{g.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </nav>
        </div>

        <div className="mt-16 grid gap-4 border-t border-line pt-8 font-sans text-sm text-muted lg:grid-cols-12">
          <p className="lg:col-span-7">
            Images on this site are illustrative and do not show the specific places named on each page. Practical information was last reviewed in{" "}
            {formatReviewed(site.lastReviewed)}. Always check official sources before you travel.
          </p>
          <p className="lg:col-span-5 lg:text-right">
            An independent student project about Paraguay. Not affiliated with any government.
          </p>
        </div>
      </Container>
    </footer>
  );
}
