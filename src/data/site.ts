const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  name: "Paraguay",
  title: "Paraguay — Land, Culture & Travel",
  tagline: "A cinematic portrait of the heart of South America",
  description:
    "Discover Paraguay, the heart of South America: its landscapes, destinations, Guaraní culture, food, nature and history.",
  /** Guaraní greeting used as the home-page kicker. */
  greeting: { gn: "Mba’éichapa", en: "Welcome to Paraguay" },
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"),
  locale: "en_US",
  /** Date the time-sensitive content was last checked (YYYY-MM). */
  lastReviewed: "2026-09",
} as const;

export type NavItem = { href: string; label: string; description: string };

export const mainNav: NavItem[] = [
  {
    href: "/destinations",
    label: "Destinations",
    description: "Cities, missions, waterfalls, lakes and the Chaco.",
  },
  {
    href: "/culture",
    label: "Culture",
    description: "A bilingual nation: Guaraní, music, crafts and festivals.",
  },
  {
    href: "/food",
    label: "Food",
    description: "Cassava, corn, cheese and the ritual of tereré.",
  },
  {
    href: "/nature",
    label: "Nature",
    description: "Dry forest, Atlantic Forest, wetlands and rivers.",
  },
  {
    href: "/history",
    label: "History",
    description: "From Guaraní villages to a modern democracy.",
  },
  {
    href: "/travel-guide",
    label: "Travel",
    description: "When to go, getting around, itineraries and phrases.",
  },
];

/** Static routes for the sitemap (destination pages are added from data). */
export const staticRoutes = ["/", ...mainNav.map((n) => n.href)];

/** Quick facts (research §0). Used in the footer and on the home page. */
export const glance: { label: string; value: string }[] = [
  { label: "Capital", value: "Asunción" },
  { label: "Languages", value: "Spanish and Guaraní" },
  { label: "Currency", value: "Paraguayan guaraní (₲)" },
  { label: "Population", value: "About 6.1 million (2022 census)" },
  { label: "Area", value: "About 406,750 km², landlocked" },
  { label: "Neighbors", value: "Argentina, Brazil and Bolivia" },
  { label: "Time zone", value: "UTC−3 all year" },
  { label: "UNESCO heritage", value: "Jesuit missions (1993), tereré (2020), Poncho Para’i (2023), guarania (2024)" },
];
