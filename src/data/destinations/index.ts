import type { Destination } from "../types";
import { aregua } from "./aregua";
import { asuncion } from "./asuncion";
import { cerroAkati } from "./cerro-akati";
import { ciudadDelEste } from "./ciudad-del-este";
import { encarnacion } from "./encarnacion";
import { filadelfia } from "./filadelfia";
import { jesuitMissions } from "./jesuit-missions";
import { nacunday } from "./nacunday";
import { saltosDelMonday } from "./saltos-del-monday";
import { sanBernardino } from "./san-bernardino";
import { ybycui } from "./ybycui";

export const destinations: Destination[] = [
  asuncion,
  aregua,
  sanBernardino,
  ybycui,
  cerroAkati,
  encarnacion,
  jesuitMissions,
  ciudadDelEste,
  saltosDelMonday,
  nacunday,
  filadelfia,
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export function getRelated(d: Destination) {
  return d.related.map(getDestination).filter((x): x is Destination => Boolean(x));
}
