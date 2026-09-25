import type { ImageId } from "./images";
import { culture } from "./pages/culture";
import { destinationsPage } from "./pages/destinations";
import { foodPage } from "./pages/food";
import { historyPage } from "./pages/history";
import { nature } from "./pages/nature";
import { travelPage } from "./pages/travel";
import { mainNav } from "./site";

export type JourneyStop = { href: string; label: string; title: string; teaser: string; image: ImageId };

const stop = (href: string, title: string, image: ImageId): JourneyStop => {
  const nav = mainNav.find((n) => n.href === href);
  if (!nav) throw new Error(`No nav item for ${href}`);
  return { href, label: nav.label, title, teaser: nav.description, image };
};

/** The main sections in reading order. Each page ends with a "Next chapter" band to the following one. */
export const journey: JourneyStop[] = [
  stop(destinationsPage.path, `${destinationsPage.title.lead} ${destinationsPage.title.accent}`, destinationsPage.image),
  stop(culture.path, culture.title, culture.image),
  stop(foodPage.path, foodPage.title, foodPage.image),
  stop(nature.path, nature.title, nature.image),
  stop(historyPage.path, historyPage.title, historyPage.image),
  stop(travelPage.path, travelPage.title, travelPage.image),
];

/** The stop after `href`, wrapping from the last back to the first. */
export function nextStop(href: string) {
  const i = journey.findIndex((s) => s.href === href);
  return { stop: journey[(i + 1) % journey.length], number: ((i + 1) % journey.length) + 1 };
}

export const journeyCopy = { eyebrow: "Next chapter" };
