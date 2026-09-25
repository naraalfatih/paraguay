import type { Destination } from "../types";

export const sanBernardino: Destination = {
  slug: "san-bernardino",
  name: "San Bernardino",
  department: "Cordillera",
  region: "central-hills",
  experiences: ["water", "heritage"],
  summary:
    "A lakeside resort on Lake Ypacaraí, founded by German and Swiss settlers in 1881: summer villas, clubs and lively seasonal nightlife.",
  dek: "Asunción’s classic summer escape: busy in the hot months, quiet the rest of the year.",
  image: "lake-summer",
  overview: [
    "San Bernardino was founded on 24 August 1881 by German and Swiss immigrants on the eastern shore of Lake Ypacaraí. It was named in honor of Bernardino Caballero, president at the time, and became the classic summer resort for families from Asunción.",
    "In summer the lakeside clubs, villas and nightlife fill up. Out of season the town is much quieter.",
  ],
  whyVisit: [
    "A summer lake atmosphere close to the capital.",
    "The heritage of 19th-century European immigration.",
    "A base for exploring the Cordillera hills and nearby Caacupé.",
  ],
  highlights: [
    { title: "The lakeshore", text: "Clubs, beaches and villas along the eastern shore of Lake Ypacaraí." },
    { title: "Immigrant heritage", text: "A town laid out by German and Swiss settlers in the 1880s." },
    { title: "Summer nights", text: "The town’s bars and clubs are busiest from December to February." },
    {
      title: "Caacupé, nearby",
      text: "Home to the basilica of the Virgen de los Milagros, which draws Paraguay’s largest pilgrimage every 8 December.",
    },
  ],
  activities: [
    "Spend a summer afternoon by the lake.",
    "Visit the basilica in Caacupé. Around 8 December, expect very large pilgrimage crowds.",
    "Pair the trip with [Areguá](/destinations/aregua), across the lake.",
  ],
  context: [
    "Weekends and the December–February holidays are the busiest times. As elsewhere on Lake Ypacaraí, check water conditions before swimming.",
    "The [Caacupé pilgrimage](/culture#festivals) is the biggest religious event of the year. Hundreds of thousands of people walk or cycle to the basilica, and traffic in the Cordillera is heavily affected.",
  ],
  keyFacts: [
    { label: "Department", value: "Cordillera" },
    { label: "Founded", value: "24 August 1881" },
    { label: "Good for", value: "Summer lake days and nightlife" },
    { label: "Busiest", value: "December–February" },
  ],
  verify: ["Lake water conditions before swimming."],
  related: ["aregua", "asuncion", "cerro-akati"],
  sources: ["S61", "S53"],
};
