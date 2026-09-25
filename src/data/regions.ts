import type { ExperienceId, RegionId } from "./types";

export const regions: Record<RegionId, { label: string; description: string }> = {
  asuncion: {
    label: "Asunción",
    description: "The riverside capital and its museums, markets and history.",
  },
  "central-hills": {
    label: "Lakes & Hills",
    description: "Lake Ypacaraí, craft towns and forested hills within reach of the capital.",
  },
  south: {
    label: "The South & the Missions",
    description: "Encarnación, the Paraná and the Jesuit mission towns.",
  },
  east: {
    label: "The Paraná Frontier",
    description: "Ciudad del Este, Itaipú and the waterfalls of Alto Paraná.",
  },
  chaco: {
    label: "The Chaco",
    description: "The vast, sparsely populated west.",
  },
};

export const regionOrder: RegionId[] = ["asuncion", "central-hills", "south", "east", "chaco"];

export const experiences: Record<ExperienceId, string> = {
  city: "Cities",
  heritage: "Heritage",
  nature: "Nature",
  water: "Waterfalls & lakes",
  hiking: "Hiking",
  crafts: "Crafts & markets",
};
