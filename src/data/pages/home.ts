import type { RichText } from "../types";

export const home = {
  title: "Paraguay",
  dek: "The heart of South America: one country, two languages, two very different landscapes and a remarkable history.",
  summary:
    "A cinematic portrait of Paraguay, the heart of South America: its landscapes, destinations, Guaraní culture, food, nature and history.",
  intro: {
    eyebrow: "Welcome",
    statement:
      "Landlocked between Argentina, Brazil and Bolivia, Paraguay is split in two by the Paraguay River: green hills and red earth to the east, the vast Chaco plain to the west.",
    text: "Most Paraguayans speak both Spanish and Guaraní, an Indigenous language that is part of everyday life. This site is a short, cinematic introduction to the country: its places, its people, its food and its past.",
  },
  stats: [
    { value: "6.1 M", label: "people", note: "2022 census" },
    { value: "2", label: "official languages", note: "Spanish and Guaraní" },
    { value: "60%", label: "of the land is Chaco", note: "home to under 4% of people" },
    { value: "19", label: "Indigenous peoples", note: "2022 Indigenous census" },
  ],
  nature: {
    eyebrow: "Nature",
    title: "Two worlds, one river",
    text: "West of the Paraguay River lies the Chaco: dry thorn forest, bottle trees and huge skies. East of it, the remains of the humid Atlantic Forest, waterfalls and wetlands.",
    points: [
      { title: "The Chaco", text: "South America’s second-largest forest biome after the Amazon.", href: "/nature#chaco" },
      { title: "Atlantic Forest", text: "Humid forest, more than 90% of it lost since the 1970s.", href: "/nature#atlantic-forest" },
      { title: "Wetlands", text: "A share of the Pantanal, plus the marshes of Ñeembucú.", href: "/nature#wetlands" },
    ],
  },
  culture: {
    eyebrow: "Culture",
    quote: "Guaraní is not only an Indigenous language here. Most of the country speaks it.",
    text: "Harp music and guarania, ñandutí lace, fire festivals on the night of San Juan and a cup of tereré passed around the circle: Paraguayan culture is lived every day.",
    links: [
      { label: "Language", href: "/culture#guarani" },
      { label: "Music", href: "/culture#music" },
      { label: "Crafts", href: "/culture#crafts" },
      { label: "Festivals", href: "/culture#festivals" },
      { label: "Indigenous peoples", href: "/culture#indigenous" },
    ],
  },
  food: {
    eyebrow: "Food & drink",
    title: "A taste of Paraguay",
    text: "Cassava, corn and cheese, baked, fried or simmered, and cold tereré to wash it down.",
  },
  history: {
    eyebrow: "History",
    title: "Five centuries at a glance",
    text: "Seven chapters, from Guaraní villages to a young democracy. Tap any era to read the full story.",
  },
  journeys: {
    eyebrow: "Travel inspiration",
    title: "Three ways to see the country",
    text: "Short, realistic routes for a first visit, from a long weekend near the capital to a week in the Chaco.",
  },
  facts: {
    eyebrow: "Did you know?",
    title: "Six things about Paraguay",
    items: [
      "Guaraní is an official language alongside Spanish, and most Paraguayans understand it.",
      "Tereré, cold yerba mate with medicinal herbs, is on UNESCO’s list of Intangible Cultural Heritage (2020).",
      "Guarania, a music genre created in 1925, joined the same UNESCO list in 2024.",
      "The Chacoan peccary was known only from fossils until living animals were documented in the 1970s.",
      "Itaipú, shared with Brazil, is one of the largest hydroelectric plants in the world by output.",
      "The Jesuit missions of Trinidad and Jesús have been UNESCO World Heritage Sites since 1993.",
    ] satisfies RichText[],
  },
  closing: {
    eyebrow: { gn: "Aguyje", en: "Thank you for visiting" },
    title: "Come for the landscapes. Stay for the tereré.",
    text: "Big skies, red earth and two languages. Start with one story.",
  },
  featured: ["jesuit-missions", "encarnacion", "filadelfia"],
} as const;
