import { sources, type SourceId } from "@/data/sources";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

/** "Sources" footer for any page: builds trust and lets readers verify facts. */
export function SourceList({ ids, tone = "night-2" }: { ids: readonly SourceId[]; tone?: "night-2" | "sand" }) {
  const unique = [...new Set(ids)];
  return (
    <Section tone={tone} spacing="sm" labelledBy="sources-heading">
      <Container size="content">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="sources-heading" className="eyebrow text-accent">
              Sources
            </h2>
            <p className="mt-3 max-w-xs font-sans text-sm text-muted">
              Facts on this page were checked against these references. Time-sensitive details can change.
            </p>
          </div>
          <ol className="grid gap-x-10 gap-y-4 font-sans text-sm sm:grid-cols-2 lg:col-span-8">
            {unique.map((id) => {
              const s = sources[id];
              return (
                <li key={id} className="border-t border-line pt-3">
                  <a href={s.url} rel="noopener" className="group block">
                    <span className="block text-fg underline decoration-line underline-offset-4 group-hover:decoration-accent">
                      {s.title}
                    </span>
                    <span className="mt-1 block text-muted">{s.publisher}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
