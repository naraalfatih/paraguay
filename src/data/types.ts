import type { ImageId } from "./images";
import type { SourceId } from "./sources";

/**
 * Inline syntax rendered by <RichText>:
 * *em*  **strong**  [label](/href)  {gn:Guaraní term}  {es:Spanish term}
 */
export type RichText = string;

export type RegionId = "asuncion" | "central-hills" | "south" | "east" | "chaco";

export type ExperienceId = "city" | "heritage" | "nature" | "water" | "hiking" | "crafts";

export type Highlight = { title: string; text: RichText };

export interface Destination {
  slug: string;
  name: string;
  department: string;
  region: RegionId;
  experiences: ExperienceId[];
  /** ≤ 155 characters. Used on cards and as the meta description. */
  summary: string;
  /** Standfirst shown under the title. */
  dek: string;
  image: ImageId;
  overview: RichText[];
  whyVisit: RichText[];
  highlights: Highlight[];
  activities: RichText[];
  context: RichText[];
  keyFacts: { label: string; value: RichText }[];
  verify?: RichText[];
  related: string[];
  sources: SourceId[];
  featured?: boolean;
}

export type Block =
  | { type: "p"; text: RichText }
  | { type: "lede"; text: RichText }
  | { type: "h3"; text: string }
  | { type: "list"; items: RichText[] }
  | { type: "quote"; text: RichText; cite?: string }
  | { type: "figure"; image: ImageId; caption?: RichText }
  | { type: "facts"; items: { label: string; value: RichText }[] }
  | { type: "note"; tone: "info" | "verify"; title?: string; text: RichText };

export interface Chapter {
  id: string;
  eyebrow?: string;
  title: string;
  blocks: Block[];
  image?: ImageId;
}

export interface TopicPage {
  path: string;
  /** Short name used in breadcrumbs. */
  label: string;
  /** Hero kicker above the title. */
  eyebrow: string;
  title: string;
  dek: string;
  /** ≤ 155 characters, meta description. */
  summary: string;
  image: ImageId;
  intro: RichText[];
  chapters: Chapter[];
  sources: SourceId[];
}

export interface Dish {
  id: string;
  name: string;
  kind: string;
  image: ImageId;
  what: RichText;
  context: RichText;
}

export interface Era {
  id: string;
  period: string;
  title: string;
  summary: string;
  facts: RichText[];
  interpretations: RichText[];
}

export interface Itinerary {
  id: string;
  title: string;
  length: string;
  summary: string;
  days: { label: string; text: RichText }[];
}
