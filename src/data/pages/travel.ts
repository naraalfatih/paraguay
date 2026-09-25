import type { Itinerary, RichText } from "../types";

export const travelPage = {
  path: "/travel-guide",
  eyebrow: "Plan your visit",
  title: "Planning a visit",
  dek: "When to go, how to get around, a few useful phrases and three simple routes through the country.",
  summary:
    "Plan a trip to Paraguay: climate and best time to visit, money, languages, getting around, safety, health, sample itineraries and useful phrases.",
  image: "palm-road",
  sources: ["S49", "S48", "S45", "S46", "S47", "S21"],
} as const;

export const seasons: { name: string; months: string; text: RichText; best?: string }[] = [
  {
    name: "Summer",
    months: "Dec–Feb",
    text: "Hot and humid. Asunción averages about 28 °C in January, highs of 38 °C or more are common, and the Chaco can pass 40 °C.",
    best: "Carnival, lakes and beaches",
  },
  {
    name: "Autumn",
    months: "Mar–May",
    text: "Temperatures ease. It is one of the rainier times of year, with heavy thunderstorms.",
    best: "City visits and the missions",
  },
  {
    name: "Winter",
    months: "Jun–Aug",
    text: "Mild and drier. Asunción averages about 18 °C in July, and occasional cold snaps bring frost to the south and east.",
    best: "The Chaco, wildlife and hiking",
  },
  {
    name: "Spring",
    months: "Sep–Nov",
    text: "Warming up again, with the second rainy peak of the year.",
    best: "All-round travel",
  },
];

export const practical: { id: string; title: string; items: RichText[] }[] = [
  {
    id: "money",
    title: "Money",
    items: [
      "The currency is the **Paraguayan guaraní** (PYG, ₲). Notes come in large denominations.",
      "Cash is widely used. Cards work in cities but less so in the countryside, and ATMs are common in towns.",
      "US dollars, Brazilian reais and Argentine pesos can be changed at {es:casas de cambio} in cities and border towns. We don’t publish exchange rates because they change daily.",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    items: [
      "**Spanish and Guaraní** are both official, and many people mix them.",
      "English is limited outside hotels and tourism businesses.",
      "Portuguese is common near the Brazilian border, and German and Plautdietsch are spoken in the Mennonite Chaco.",
    ],
  },
  {
    id: "getting-around",
    title: "Getting around",
    items: [
      "The main international airport is **Silvio Pettirossi (ASU)**, in Luque next to Asunción.",
      "**Long-distance buses** are the main way to travel between cities. They leave from the Asunción bus terminal.",
      "There is **no regular passenger rail**. Cars drive on the right, and Chaco parks need a 4×4, fuel planning and often a guide.",
      "Land borders include Encarnación–Posadas, Ciudad del Este–Foz do Iguaçu, Pedro Juan Caballero–Ponta Porã and Asunción–Clorinda.",
    ],
  },
  {
    id: "safety-health",
    title: "Safety and health",
    items: [
      "As of 2026, the US travel advisory rates Paraguay **Level 1 (normal precautions)**, with increased caution advised in Alto Paraná, Amambay, Canindeyú, Concepción and San Pedro departments.",
      "Petty theft happens in cities, so keep valuables out of sight.",
      "Use insect repellent, because dengue and chikungunya cause periodic outbreaks. Protect yourself from heat and sun, and see a travel clinic about vaccines before you go.",
      "Paraguay stays on **UTC−3 all year**. Clocks no longer change.",
    ],
  },
];

export const itineraries: Itinerary[] = [
  {
    id: "capital-and-lakes",
    title: "Asunción and the lakes",
    length: "3 days",
    summary: "History, crafts and forest, all close to the capital.",
    days: [
      {
        label: "Day 1",
        text: "Explore [Asunción](/destinations/asuncion): the historic center, the Museo del Barro and sunset on the Costanera.",
      },
      {
        label: "Day 2",
        text: "Pottery workshops in [Areguá](/destinations/aregua) (strawberries from July to October), then [San Bernardino](/destinations/san-bernardino) on the far shore of Lake Ypacaraí.",
      },
      {
        label: "Day 3",
        text: "Forest trails, waterfalls and the La Rosada ironworks in [Ybycuí National Park](/destinations/ybycui).",
      },
    ],
  },
  {
    id: "missions-and-waterfalls",
    title: "Missions and waterfalls",
    length: "5 days",
    summary: "The UNESCO missions of the south and the great falls of the east.",
    days: [
      { label: "Day 1", text: "Travel from Asunción to [Encarnación](/destinations/encarnacion) and walk the Costanera." },
      { label: "Day 2", text: "Spend the day at the [Jesuit missions](/destinations/jesuit-missions) of Trinidad and Jesús." },
      { label: "Day 3", text: "Visit San Cosme y Damián, then return for a swim at Playa San José." },
      { label: "Day 4", text: "Head north to [Ciudad del Este](/destinations/ciudad-del-este) and tour the Itaipú Dam." },
      {
        label: "Day 5",
        text: "See the [Saltos del Monday](/destinations/saltos-del-monday), and add [Ñacunday](/destinations/nacunday) if you have time.",
      },
    ],
  },
  {
    id: "into-the-chaco",
    title: "Into the Chaco",
    length: "7 days",
    summary: "From the capital into the vast, wild west. Best from May to September.",
    days: [
      { label: "Days 1–2", text: "[Asunción](/destinations/asuncion) and a day trip to [Areguá](/destinations/aregua)." },
      {
        label: "Days 3–5",
        text: "Take the Ruta Transchaco to [Filadelfia](/destinations/filadelfia). Visit its museums and join a guided trip toward the [Chaco parks](/nature#parks).",
      },
      { label: "Day 6", text: "Return to Asunción." },
      {
        label: "Day 7",
        text: "Head to Villarrica and hike [Cerro Akatĩ](/destinations/cerro-akati), or relax by the lake in [San Bernardino](/destinations/san-bernardino).",
      },
    ],
  },
];

export const phrases: { phrase: string; lang: "gn" | "es"; meaning: string }[] = [
  { phrase: "Mba’éichapa", lang: "gn", meaning: "Hello / How are you?" },
  { phrase: "Aguyje", lang: "gn", meaning: "Thank you" },
  { phrase: "Jajotopata", lang: "gn", meaning: "See you later" },
  { phrase: "Buen día", lang: "es", meaning: "Good morning" },
  { phrase: "Por favor", lang: "es", meaning: "Please" },
  { phrase: "Gracias", lang: "es", meaning: "Thank you" },
  { phrase: "¿Cuánto cuesta?", lang: "es", meaning: "How much is it?" },
  { phrase: "¿Dónde está…?", lang: "es", meaning: "Where is…?" },
];
