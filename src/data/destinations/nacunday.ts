import type { Destination } from "../types";

export const nacunday: Destination = {
  slug: "nacunday",
  name: "Ñacunday National Park",
  department: "Alto Paraná",
  region: "east",
  experiences: ["nature", "water"],
  summary:
    "A small national park protecting Atlantic Forest in Alto Paraná, home to Salto Ñacunday, a waterfall roughly 40 meters high and 110 meters wide.",
  dek: "A waterfall that feels remote, in a pocket of the once-vast Atlantic Forest.",
  image: "atlantic-forest",
  overview: [
    "Ñacunday National Park covers about 2,000 hectares in the Ñacunday district of Alto Paraná. It protects a fragment of the Upper Paraná Atlantic Forest, an ecosystem that once covered most of eastern Paraguay and is now heavily fragmented.",
    "Its centerpiece is Salto Ñacunday, roughly 40 meters high and 110 meters wide. Sources give slightly different heights.",
  ],
  whyVisit: [
    "A quieter, more remote waterfall than the Saltos del Monday.",
    "You can walk in Atlantic Forest, an ecosystem that has lost most of its original cover.",
    "A worthwhile detour for anyone interested in forest birds.",
  ],
  highlights: [
    { title: "Salto Ñacunday", text: "A broad curtain of water about 110 meters wide." },
    { title: "Atlantic Forest", text: "A protected remnant of the forest that once covered the east." },
    { title: "Birdlife", text: "Forest birds are easiest to see and hear in the early morning." },
  ],
  activities: [
    "Walk to the viewpoints over the falls.",
    "Watch for forest birds.",
    "Plan it as a day trip from Ciudad del Este or Encarnación. Road conditions vary.",
  ],
  context: [
    "More than 90% of Paraguay’s Atlantic Forest has been cleared, mostly since the 1970s. That makes even small protected areas like Ñacunday important. Read more in our [nature guide](/nature#atlantic-forest).",
    "The park is managed by MADES, Paraguay’s Ministry of the Environment and Sustainable Development.",
  ],
  keyFacts: [
    { label: "Department", value: "Alto Paraná" },
    { label: "Area", value: "About 2,000 ha" },
    { label: "Waterfall", value: "About 40 m high, 110 m wide" },
    { label: "Managed by", value: "MADES (Ministry of the Environment)" },
  ],
  verify: ["Road conditions and access, especially after rain.", "Park facilities and opening hours."],
  related: ["saltos-del-monday", "ciudad-del-este", "ybycui"],
  sources: ["S22", "S26"],
};
