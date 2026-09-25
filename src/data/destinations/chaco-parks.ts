import type { Destination } from "../types";

export const chacoParks: Destination = {
  slug: "chaco-parks",
  name: "The Chaco National Parks",
  department: "Alto Paraguay, Boquerón and Presidente Hayes",
  region: "chaco",
  experiences: ["nature"],
  summary:
    "Defensores del Chaco, Médanos del Chaco and Tinfunqué: huge, remote protected areas of thorn forest, dunes and floodplains, home to the jaguar.",
  dek: "Paraguay’s wildest country: vast parks where the jaguar and the Chacoan peccary still roam.",
  image: "chaco-night",
  overview: [
    "**Defensores del Chaco National Park**, created in 1975, is the largest protected area in Paraguay, covering roughly 720,000–780,000 hectares (figures vary). It is one of the best places in the country to find the rare Chacoan peccary, and jaguars live here too.",
    "Next to it, **Médanos del Chaco** (created in 2003, about 514,000 hectares) protects sand dunes and scrub where guanacos live. Together the two parks form a huge conservation corridor. Further south, **Tinfunqué** (about 280,000 hectares) is a Ramsar wetland flooded by the Pilcomayo River.",
  ],
  whyVisit: [
    "Vast, remote wilderness on a scale found nowhere else in Paraguay’s east.",
    "A chance to see Chaco wildlife such as the Chacoan peccary in its home range.",
    "The night skies over the flat Chaco are immense.",
  ],
  highlights: [
    { title: "Defensores del Chaco", text: "The largest park in Paraguay: dry forest, jaguar and Chacoan peccary." },
    { title: "Médanos del Chaco", text: "Dunes, scrub and guanacos near the Bolivian border." },
    { title: "Tinfunqué", text: "Seasonally flooded grasslands and a wetland of international importance." },
    {
      title: "The Chacoan peccary",
      text: "Known only from fossils until living animals were documented in the 1970s.",
    },
  ],
  activities: [
    "Travel with a licensed local guide who knows the tracks and the park rules.",
    "Watch for wildlife at dawn and dusk, from a respectful distance.",
    "Base yourself in [Filadelfia](/destinations/filadelfia) to plan the trip.",
  ],
  context: [
    "These parks are remote and have very few facilities. You need a 4×4, careful fuel and water planning, and usually a guide and permits.",
    "The Chaco has one of the fastest deforestation rates in the world, which makes these protected areas especially important. Read more in our [nature guide](/nature#conservation).",
    "Visit in the milder months from May to September. Summer heat can exceed 40 °C.",
  ],
  keyFacts: [
    { label: "Largest park", value: "Defensores del Chaco (created 1975)" },
    { label: "Wildlife", value: "Jaguar, Chacoan peccary, guanaco" },
    { label: "Access", value: "4×4, guide and permits" },
    { label: "Best time", value: "May–September" },
  ],
  verify: ["Permits, access roads and park conditions before you travel.", "Current guide and transport options."],
  related: ["filadelfia", "pantanal"],
  sources: ["S44", "S43", "S28", "S29"],
};
