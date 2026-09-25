import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";

export default function Home() {
  return (
    <PageHero image="red-earth-road" size="full" eyebrow="Test" title="Paraguay" dek="Foundation check.">
      <ButtonLink href="/destinations">Destinations</ButtonLink>
    </PageHero>
  );
}
