import type { Destination } from "../types";

export const humaita: Destination = {
  slug: "humaita",
  name: "Humaitá",
  department: "Ñeembucú",
  region: "south",
  experiences: ["heritage", "water"],
  summary:
    "A riverside town in Ñeembucú with the ruins of the San Carlos church and a fortress that was central to the War of the Triple Alliance.",
  dek: "Ruins on the riverbank, and a quiet corner of the southwestern wetlands.",
  image: "river-dusk",
  overview: [
    "Humaitá, on the Paraguay River in Ñeembucú department, keeps the ruins of the church of San Carlos and the remains of a riverside fortress. During the War of the Triple Alliance (1864–1870), the fortress was central to Paraguay’s defense of the river route to Asunción.",
    "Ñeembucú is also a land of wetlands: marshes, lagoons and floating plants that make up one of the country’s most important wetland regions.",
  ],
  whyVisit: [
    "The ruins are one of the most evocative war sites in Paraguay.",
    "It sits in a quiet riverside setting far from the tourist trail.",
    "It is a gateway to the wetlands of the southwest.",
  ],
  highlights: [
    { title: "The San Carlos ruins", text: "The remains of the church, a symbol of the war." },
    { title: "The fortress", text: "Traces of the defenses that guarded the river." },
    { title: "Ñeembucú wetlands", text: "Marshes and lagoons rich in birdlife." },
  ],
  activities: [
    "Walk around the church ruins and the riverbank.",
    "Look for birds in the surrounding wetlands.",
    "Read the [War of the Triple Alliance chapter](/history#triple-alliance) of our timeline before you go.",
  ],
  context: [
    "The war’s population losses were catastrophic, though estimates vary widely. Our history page explains the debate.",
    "Services in the area are limited, so plan transport and lodging in advance.",
  ],
  keyFacts: [
    { label: "Department", value: "Ñeembucú" },
    { label: "River", value: "Paraguay" },
    { label: "Known for", value: "San Carlos church ruins, war fortress" },
    { label: "Nearby", value: "Ñeembucú wetlands" },
  ],
  verify: ["Transport and lodging options in the area."],
  related: ["cerro-cora", "asuncion", "encarnacion"],
  sources: ["S37", "S38", "S10"],
};
