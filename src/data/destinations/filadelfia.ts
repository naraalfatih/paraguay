import type { Destination } from "../types";

export const filadelfia: Destination = {
  slug: "filadelfia",
  name: "Filadelfia",
  department: "Boquerón",
  region: "chaco",
  experiences: ["heritage", "nature"],
  summary:
    "The main town of the central Chaco, founded in 1930 by Mennonite settlers: museums, a multilingual community and the gateway to the Chaco’s parks.",
  dek: "A frontier town in the middle of the Chaco, and the starting point for the country’s wildest landscapes.",
  image: "chaco-dawn",
  featured: true,
  overview: [
    "Filadelfia was founded in 1930 as the center of the Fernheim Colony. The name means “home far away,” and the founders were Mennonites of Russian-German origin who had fled the Soviet Union. It is now the largest town in the central Chaco, alongside the neighboring colonies of Menno (Loma Plata) and Neuland.",
    "Spanish, German, Plautdietsch, Guaraní and several Indigenous languages are spoken in the region. It is also home to Nivaclé, Enlhet and other Indigenous communities.",
  ],
  whyVisit: [
    "Museums on colony history, Chaco nature and the region’s Indigenous peoples.",
    "It is the best base for trips into the Chaco and its national parks.",
    "You can see how many different communities share this vast region.",
  ],
  highlights: [
    {
      title: "The colony museums",
      text: "Collections on the Mennonite settlement, the natural history of the Chaco and the region’s Indigenous cultures.",
    },
    {
      title: "Gateway to the parks",
      text: "Defensores del Chaco and Médanos del Chaco are among the largest protected areas in the country. They are remote, and visiting needs planning.",
    },
    {
      title: "The Ruta Transchaco",
      text: "The main road into the Chaco (PY09), running northwest from the Asunción area.",
    },
  ],
  activities: [
    "Visit the town’s museums to understand the Chaco’s history and its peoples.",
    "Arrange a guided trip toward the [Chaco parks](/nature#parks). You will need a 4×4, careful fuel planning and local knowledge.",
    "Watch for birds and wildlife at dawn and dusk on the roads outside town.",
  ],
  context: [
    "The Mennonite colonies are one part of the Chaco’s story. The land was already home to Indigenous peoples, and questions about land and development are still debated. Indigenous land rights remain a live issue across the region.",
    "The Chaco is hot, and summer temperatures can exceed 40 °C. The milder, drier months from May to September are the most comfortable time to visit.",
  ],
  keyFacts: [
    { label: "Department", value: "Boquerón" },
    { label: "Founded", value: "1930 (Fernheim Colony)" },
    { label: "Main road", value: "Ruta Transchaco (PY09)" },
    { label: "Best time", value: "May–September" },
  ],
  verify: [
    "Road conditions on the Transchaco and park access roads, especially after rain.",
    "Museum opening hours.",
  ],
  related: ["asuncion", "ybycui"],
  sources: ["S35", "S36", "S44", "S6"],
};
