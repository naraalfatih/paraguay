import type { Dish } from "../types";

export const foodPage = {
  path: "/food",
  eyebrow: "The Paraguayan table",
  title: "Cassava, corn and cheese",
  dek: "Hearty, simple and made to share: Paraguayan food mixes Guaraní staples like cassava and corn with the cheese and beef that arrived with the Spanish.",
  summary:
    "Paraguayan food explained: sopa paraguaya, chipa, mbejú, vori vori, pastel mandi’o, chipa guasu, asado, tereré and cocido.",
  image: "terere",
  intro:
    "Five ingredients do most of the work: cassava ({gn:mandi’o}), corn, fresh cheese ({es:queso Paraguay}), beef and yerba mate. Many dishes combine Guaraní ingredients with Spanish additions such as cheese, eggs and beef.",
  sources: ["S54", "S2", "S18", "S20"],
} as const;

export const dishes: Dish[] = [
  {
    id: "sopa-paraguaya",
    name: "Sopa paraguaya",
    kind: "Cornbread",
    image: "sopa-paraguaya",
    what: "A savory, dense cornbread made from cornmeal, onion, cheese, eggs, milk and fat. The name means “Paraguayan soup,” but it is solid, and you eat it with a fork.",
    context:
      "The standard side dish at asados and celebrations. Popular stories say a cook once made a soup too thick, but these are legends, not documented history.",
  },
  {
    id: "chipa",
    name: "Chipa",
    kind: "Bread",
    image: "chipa",
    what: "A baked bread of cassava starch, cheese, egg and fat, often flavored with anise and shaped into rings or rolls.",
    context:
      "You find chipa everywhere, sold by {es:chiperas} on roadsides and buses. During Holy Week families bake it in clay ovens. There are many regional versions, and the town of Eusebio Ayala is especially famous for it.",
  },
  {
    id: "mbeju",
    name: "Mbejú",
    kind: "Griddle cake",
    image: "mbeju",
    what: "A flat cake of cassava starch, cheese and fat, cooked on a griddle until crisp outside and chewy inside.",
    context: "A breakfast or afternoon snack, often with cocido. It is considered one of the oldest recipes, with Guaraní roots.",
  },
  {
    id: "vori-vori",
    name: "Vori vori",
    kind: "Soup",
    image: "vori-vori",
    what: "A thick soup, usually made with chicken, full of small balls of cornmeal and cheese.",
    context: "Comfort food, especially in winter.",
  },
  {
    id: "pastel-mandio",
    name: "Pastel mandi’o",
    kind: "Street food",
    image: "pastel-mandio",
    what: "Half-moon pastries of cassava-and-corn dough, filled with seasoned meat and fried.",
    context: "A favorite street food, and a classic at festivals such as San Juan.",
  },
  {
    id: "chipa-guasu",
    name: "Chipa guasu",
    kind: "Corn bake",
    image: "chipa-guasu",
    what: "A savory bake of fresh corn kernels (not cornmeal), cheese, eggs and milk. It is moister than sopa paraguaya. {gn:Guasu} means “big.”",
    context: "Another favorite side at asados and on holidays.",
  },
  {
    id: "asado",
    name: "Asado",
    kind: "The grill",
    image: "asado",
    what: "Beef, plus pork and sausages, grilled slowly over wood or charcoal.",
    context:
      "A weekend ritual for family and friends, served with boiled cassava, sopa paraguaya, chipa guasu and salad. Paraguay is a major beef exporter.",
  },
];

export const terere = {
  id: "terere",
  name: "Tereré",
  image: "terere",
  what: "Ice-cold water poured over yerba mate in a cup ({gn:guampa}) and sipped through a metal straw ({gn:bombilla}). The water is often mixed with crushed medicinal herbs, {gn:pohã ñana}.",
  context:
    "In 2020 UNESCO added the practices and knowledge of tereré to its list of the world’s Intangible Cultural Heritage. It is shared in a circle, with its own etiquette, and it is a strong everyday symbol of Paraguay.",
  etiquette: [
    "One cup goes around the whole group.",
    "The person serving refills it and passes it on.",
    "Say “gracias” only when you don’t want any more.",
  ],
} as const;

export const cocido: Dish = {
  id: "cocido",
  name: "Cocido",
  kind: "Hot drink",
  image: "cocido",
  what: "Yerba mate toasted with sugar, traditionally caramelized with a hot coal ({es:cocido quemado}), then boiled, often with milk.",
  context: "A breakfast and afternoon drink, usually with chipa or mbejú.",
};

export const alsoTry =
  "Also worth trying: {gn:so’o yosopy} (a beef soup), {es:kosereva} (a bitter-orange sweet) and {es:dulce de mamón}.";
