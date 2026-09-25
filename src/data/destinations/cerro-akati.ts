import type { Destination } from "../types";

export const cerroAkati: Destination = {
  slug: "cerro-akati",
  name: "Cerro Akatĩ",
  department: "Guairá",
  region: "central-hills",
  experiences: ["hiking", "nature"],
  summary:
    "A hill in Guairá’s Ybytyruzú range with a panoramic viewpoint over the countryside, near the farming town of Colonia Independencia.",
  dek: "A rewarding climb in the Ybytyruzú hills, with wide views over Guairá.",
  image: "hills-view",
  overview: [
    "Cerro Akatĩ, often spelled Akatí, rises in the Ybytyruzú range of Guairá department, near Colonia Independencia and not far from Villarrica. From its natural viewpoint you look out over farmland, forest fragments and the hills of central Paraguay.",
    "It is a real hike, not a roadside lookout. Parts of the route are open and exposed, and the reward is a sweeping view over the Guairá countryside.",
  ],
  whyVisit: [
    "Wide views over the Guairá countryside.",
    "A proper hike rather than a quick stop.",
    "It combines easily with Colonia Independencia and Villarrica.",
  ],
  highlights: [
    { title: "The summit viewpoint", text: "A natural lookout over farmland and hills." },
    { title: "The Ybytyruzú hills", text: "A rugged range in the heart of Guairá department." },
    {
      title: "Colonia Independencia",
      text: "A nearby farming town of German descent, known for its wine and cider.",
    },
  ],
  activities: [
    "Hike to the viewpoint, ideally with a local guide.",
    "Start early. The light is best in the morning and before sunset, and much of the route is unshaded.",
    "Visit Colonia Independencia afterward.",
  ],
  context: [
    "Paths are partly unshaded and not always waymarked. Carry plenty of water and an offline map, and consider hiring a local guide.",
    "Access roads can be rough after rain. The mild months from May to September are the most comfortable for hiking.",
  ],
  keyFacts: [
    { label: "Department", value: "Guairá" },
    { label: "Range", value: "Ybytyruzú" },
    { label: "Elevation", value: "Roughly 700 m (figures vary)" },
    { label: "Nearby", value: "Colonia Independencia, Villarrica" },
  ],
  verify: ["Trail conditions and access roads, especially after rain.", "Availability of local guides."],
  related: ["ybycui", "san-bernardino", "asuncion"],
  sources: ["S42"],
};
