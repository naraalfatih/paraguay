import type { Destination } from "../types";

export const encarnacion: Destination = {
  slug: "encarnacion",
  name: "Encarnación",
  department: "Itapúa",
  region: "south",
  experiences: ["city", "water", "heritage"],
  summary:
    "Paraguay’s “summer capital” on the Paraná: a long Costanera with river beaches, the country’s biggest carnival and the Jesuit missions nearby.",
  dek: "A relaxed riverside city built for summer evenings, and the natural base for the UNESCO-listed Jesuit missions.",
  image: "river-beach",
  featured: true,
  overview: [
    "Encarnación faces Posadas, Argentina, across the Paraná. When the reservoir of the Yacyretá dam raised the river, the city rebuilt its waterfront as a long Costanera with public beaches. The most popular is Playa San José, and the city now markets itself as Paraguay’s summer capital.",
    "It is also the best base for the [Jesuit missions](/destinations/jesuit-missions) of Trinidad and Jesús, both UNESCO World Heritage Sites, and for San Cosme y Damián. All three are within about an hour.",
  ],
  whyVisit: [
    "Summer evenings on the Costanera and its river beaches.",
    "Paraguay’s largest carnival, usually held in January and February.",
    "Easy access to the most important colonial heritage in the country.",
  ],
  highlights: [
    {
      title: "The Costanera and Playa San José",
      text: "A long riverside promenade with sandy public beaches, busiest on summer evenings.",
    },
    {
      title: "Carnaval Encarnaceno",
      text: "The country’s biggest carnival, with parades and costumes through the summer season.",
    },
    {
      title: "The Jesuit missions",
      text: "Trinidad and Jesús de Tavarangue, UNESCO World Heritage Sites, within about an hour.",
    },
    {
      title: "The bridge to Posadas",
      text: "The San Roque González de Santa Cruz bridge links the city with Argentina.",
    },
  ],
  activities: [
    "Swim or stroll along the Costanera at sunset.",
    "Spend a day at Trinidad and Jesús. Trinidad has offered evening visits, so check whether they are running.",
    "If you travel in summer, check the carnival dates.",
    "Cross to Posadas, Argentina, after checking border requirements.",
  ],
  context: [
    "Jesuit missions were founded in this region in the 17th century. Much later, immigrants from many countries settled here, and Ukrainian and other Slavic communities are part of Itapúa’s mix today.",
    "Beach season peaks from December to February, when it is hot. Spring and autumn are more comfortable for sightseeing at the missions.",
  ],
  keyFacts: [
    { label: "Department", value: "Itapúa" },
    { label: "Across the river", value: "Posadas, Argentina" },
    { label: "Good for", value: "River beaches, carnival, missions" },
    { label: "Best time", value: "Summer for beaches; spring and autumn for sightseeing" },
  ],
  verify: ["Carnival dates for the current year.", "Border-crossing requirements for Argentina."],
  related: ["jesuit-missions", "ciudad-del-este", "asuncion"],
  sources: ["S1", "S60"],
};
