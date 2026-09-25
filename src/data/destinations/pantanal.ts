import type { Destination } from "../types";

export const pantanal: Destination = {
  slug: "pantanal",
  name: "The Paraguayan Pantanal",
  department: "Alto Paraguay",
  region: "north",
  experiences: ["nature", "water"],
  summary:
    "Paraguay’s share of the world’s largest tropical wetland: flooded grasslands and gallery forest in the far north, rich in birds and wildlife.",
  dek: "A remote water world at the top of the country, on UNESCO’s Tentative List.",
  image: "wetland-dawn",
  featured: false,
  overview: [
    "The Pantanal is the world’s largest tropical wetland. Most of it lies in Brazil, but it also reaches into Bolivia and Paraguay. The Paraguayan part, in the far north of Alto Paraguay department around Bahía Negra and Río Negro National Park, is on UNESCO’s Tentative List for World Heritage status.",
    "It is a land of seasonal floods, flooded grasslands and gallery forest, rich in wildlife.",
  ],
  whyVisit: [
    "Rich wetland wildlife.",
    "Birds such as the hyacinth macaw and the jabiru stork.",
    "Remote, wild and rarely visited.",
  ],
  highlights: [
    { title: "Río Negro National Park", text: "A protected area in the Paraguayan Pantanal." },
    { title: "Birdlife", text: "Hyacinth macaw, jabiru stork, herons and many more." },
    { title: "Wetland wildlife", text: "Look for capybara, yacaré caiman and waterbirds." },
  ],
  activities: [
    "Look for birds and wildlife with a local guide, keeping a respectful distance.",
    "Travel by river along the upper Paraguay, if boats are running.",
    "Combine with the [Chaco national parks](/destinations/chaco-parks) on a longer trip.",
  ],
  context: [
    "Getting here takes time. Access is by river or a long road trip, and river-boat schedules are irregular.",
    "Water levels rise and fall with the seasons, which changes where you can go.",
  ],
  keyFacts: [
    { label: "Department", value: "Alto Paraguay" },
    { label: "Status", value: "On UNESCO’s Tentative List" },
    { label: "Access", value: "River or long road trip" },
    { label: "Good for", value: "Birds and wildlife" },
  ],
  verify: ["Boat schedules and road conditions.", "Guide and lodging availability."],
  related: ["chaco-parks", "filadelfia", "laguna-blanca"],
  sources: ["S31", "S32", "S27"],
};
