const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  name: "Paraguay",
  title: "Paraguay — Land, Culture & Travel",
  tagline: "An editorial guide to the heart of South America",
  description:
    "An independent, carefully sourced guide to Paraguay: destinations, Guaraní culture, food, nature, history and practical travel advice.",
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
    label: "Travel Guide",
    description: "Seasons, money, getting around and itineraries.",
  },
];

export const footerNav: NavItem[] = [
  {
    href: "/about",
    label: "About & sources",
    description: "How this guide is researched, and image credits.",
  },
];

/** Static routes for the sitemap (destination pages are added from data). */
export const staticRoutes = ["/", ...mainNav.map((n) => n.href), "/about"];
