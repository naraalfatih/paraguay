import type { Destination } from "../types";

export const aregua: Destination = {
  slug: "aregua",
  name: "Areguá",
  department: "Central",
  region: "central-hills",
  experiences: ["crafts", "water"],
  summary:
    "A hillside town above Lake Ypacaraí known for its pottery workshops, strawberry season and old summer villas. An easy day trip from Asunción.",
  dek: "Clay, strawberries and a view over the lake, a short trip from the capital.",
  image: "lake-dusk",
  overview: [
    "Areguá climbs a hillside above Lake Ypacaraí, roughly 30 km from Asunción. Family pottery workshops line its main road, and during strawberry season (roughly July to October) stalls and a strawberry fair take over the town.",
    "Old summer villas and a church on the hilltop recall the years when families from the capital spent the hot months by the lake.",
  ],
  whyVisit: [
    "You can buy ceramics directly from the people who make them.",
    "In season, the town is at its liveliest, with strawberry stalls and a fair.",
    "It makes an easy half-day or day trip from Asunción.",
  ],
  highlights: [
    {
      title: "The pottery workshops",
      text: "Terracotta pots, planters and figures, many made and sold by the same family on the main road.",
    },
    {
      title: "Strawberry season",
      text: "Roughly July to October, with roadside stalls and a strawberry fair.",
    },
    { title: "The hilltop church and villas", text: "A glimpse of the town’s past as a lakeside retreat." },
    { title: "Lake Ypacaraí", text: "Wide views over the lake made famous by the song “Recuerdos de Ypacaraí.”" },
  ],
  activities: [
    "Walk the main road of workshops and watch potters at work.",
    "Visit in strawberry season, around July to October.",
    "Combine the trip with [San Bernardino](/destinations/san-bernardino) on the far shore, or with Itauguá, home of [ñandutí lace](/culture#crafts).",
  ],
  context: [
    "Ceramics are one of Paraguay’s living craft traditions, alongside ñandutí lace and ao po’i embroidery. Buying directly from workshops keeps the money in the town.",
    "Algal blooms periodically affect the water quality of Lake Ypacaraí. Check local advice before you swim.",
  ],
  keyFacts: [
    { label: "Department", value: "Central" },
    { label: "From Asunción", value: "Roughly 30 km" },
    { label: "Good for", value: "Ceramics, strawberries, lake views" },
    { label: "Best time", value: "July–October for strawberries" },
  ],
  verify: ["Lake water conditions before swimming.", "Strawberry-fair dates."],
  related: ["san-bernardino", "asuncion", "ybycui"],
  sources: ["S61b", "S60"],
};
