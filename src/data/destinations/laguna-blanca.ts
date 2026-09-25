import type { Destination } from "../types";

export const lagunaBlanca: Destination = {
  slug: "laguna-blanca",
  name: "Laguna Blanca",
  department: "San Pedro",
  region: "north",
  experiences: ["water", "nature"],
  summary:
    "A clear lake over white sand in the cerrado savanna of San Pedro department, loved for swimming, camping and birdwatching.",
  dek: "Clear water, white sand and savanna woodland in the quiet north.",
  image: "white-sand-lake",
  overview: [
    "Laguna Blanca, in San Pedro department, is a clear lake whose bottom is covered in pale sand, set in cerrado, a savanna woodland found in the northeast of the country.",
    "It is a place for swimming, camping and birdwatching, far from the crowds of the lakes near Asunción.",
  ],
  whyVisit: [
    "Clear water over white sand.",
    "Cerrado landscapes you won’t see near the capital.",
    "Good birdwatching and a peaceful atmosphere.",
  ],
  highlights: [
    { title: "The lake", text: "Clear water over pale sand, ideal for a swim on a hot day." },
    { title: "Cerrado", text: "Savanna woodland with twisted trees and tall grasses." },
    { title: "Birds", text: "The mix of water and savanna attracts a wide variety of species." },
  ],
  activities: [
    "Swim in the lake and camp nearby.",
    "Go birdwatching at dawn or dusk.",
    "Walk through the surrounding cerrado.",
  ],
  context: [
    "San Pedro is one of the departments where, as of 2026, the US travel advisory recommends increased caution. Travel with local operators and keep valuables secure.",
    "Facilities are simple, so bring what you need and leave no trace.",
  ],
  keyFacts: [
    { label: "Department", value: "San Pedro" },
    { label: "Landscape", value: "Cerrado savanna woodland" },
    { label: "Good for", value: "Swimming, camping, birds" },
    { label: "Best time", value: "Warm months for swimming" },
  ],
  verify: ["Access, camping arrangements and current conditions.", "Current safety advice for San Pedro."],
  related: ["cerro-cora", "mbaracayu", "pantanal"],
  sources: ["S39b", "S46"],
};
