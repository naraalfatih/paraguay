/** Copy for the destinations index (/destinations). */
export const destinationsPage = {
  path: "/destinations",
  label: "Destinations",
  metaTitle: "Destinations in Paraguay",
  summary:
    "Where to go in Paraguay: Asunción, the Jesuit missions, Encarnación, lakes and hills, the waterfalls of Alto Paraná and the Chaco.",
  /** Hero kicker; `{count}` is replaced with the number of destinations. */
  eyebrow: "{count} places to begin",
  title: { lead: "Where to go,", accent: "region by region" },
  dek: "From a riverside capital and mission ruins to waterfalls, lakes, forested hills and the vast Chaco. Filter by region or by what you want to do.",
  image: "river-meander",
} as const;

/** Section headings on every destination page. */
export const destinationSections = {
  overview: { eyebrow: "Overview", title: "At a glance" },
  whyVisit: { eyebrow: "Why visit", title: "Reasons to go" },
  highlights: { eyebrow: "Highlights", title: "What not to miss" },
  activities: { eyebrow: "Activities", title: "Things to do" },
  context: { eyebrow: "Useful context", title: "Before you go" },
  related: { eyebrow: "Continue the journey", title: "Nearby and related", action: "All destinations" },
  keyFacts: "Key facts",
};
