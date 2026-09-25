"use client";

import { Container } from "@/components/layout/Container";
import { Button, ButtonLink } from "@/components/ui/Button";

export default function Error({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <section className="tone-night flex min-h-svh items-center pt-header">
      <Container size="content" className="py-section-sm">
        <p className="eyebrow text-accent">Something went wrong</p>
        <h1 className="mt-4 max-w-3xl text-4xl">This page didn’t load properly.</h1>
        <p className="mt-6 max-w-xl text-lg text-muted">Try again, or head back to the start.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button variant="primary" onClick={() => retry()}>
            Try again
          </Button>
          <ButtonLink href="/" variant="secondary">
            Home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
