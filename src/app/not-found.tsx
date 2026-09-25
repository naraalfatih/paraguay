import type { Metadata } from "next";
import { mainNav } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Ornament } from "@/components/ui/Ornament";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="tone-night flex min-h-svh items-center pt-header">
      <Container size="content" className="py-section-sm">
        <Ornament className="size-16 text-accent/60" />
        <p className="eyebrow mt-10 text-accent">Error 404</p>
        <h1 className="mt-4 max-w-3xl text-4xl">This road ends in red earth.</h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          The page you were looking for doesn’t exist or has moved. Try one of the main sections instead.
        </p>
        <ul className="mt-10 flex flex-wrap gap-3">
          <li>
            <ButtonLink href="/">Home</ButtonLink>
          </li>
          {mainNav.map((item) => (
            <li key={item.href}>
              <ButtonLink href={item.href} variant="secondary" arrow={false}>
                {item.label}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
