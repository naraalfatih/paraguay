import type { Era } from "../types";

export const historyPage = {
  path: "/history",
  eyebrow: "Before 1537 to today",
  title: "Five centuries in seven chapters",
  dek: "From Guaraní villages and Jesuit missions to two devastating wars, a long dictatorship and a young democracy.",
  summary:
    "A visual timeline of Paraguay’s history, from before 1537 to today, separating well-documented facts from the interpretations historians still debate.",
  image: "lapacho-tree",
  sources: ["S60", "S1", "S10", "S11", "S12", "S13", "S14", "S15", "S16", "S17", "S18"],
} as const;

export const eras: Era[] = [
  {
    id: "before-1537",
    period: "Before 1537",
    title: "Before the Spanish",
    summary: "Farming villages in the east, hunter-gatherer peoples in the Chaco.",
    facts: [
      "People have lived in the region for thousands of years.",
      "In the east, Guaraní-speaking peoples farmed maize, cassava, beans and squash, and lived in villages.",
      "In the Chaco, peoples of other language families, the ancestors of today’s Nivaclé, Enlhet, Ayoreo, Qom and others, lived by hunting, gathering and seasonal farming.",
      "Many staples of today’s food, including cassava, corn and yerba mate, come from Guaraní traditions.",
    ],
    interpretations: [
      "There was no single, unified “Guaraní nation.” Guaraní groups were politically decentralized.",
      "Population estimates at the time of contact are uncertain. Figures of roughly 100,000–200,000 people appear in the literature.",
    ],
  },
  {
    id: "colonial",
    period: "1537–1811",
    title: "Colony and missions",
    summary: "Asunción is founded, a Spanish–Guaraní society forms, and the Jesuit missions rise and fall.",
    facts: [
      "15 August 1537: Asunción is founded on the Paraguay River and becomes a hub of Spanish expansion in the region.",
      "Unions between Spanish men and Guaraní women produce a mestizo, Guaraní-speaking society.",
      "Forced-labor systems ({es:encomienda}) exploit Guaraní people.",
      "1609–1767: the Jesuits run [mission towns](/destinations/jesuit-missions) that gather tens of thousands of Guaraní, until the order is expelled in 1767.",
      "1717–1735: the Comuneros revolt in Asunción challenges colonial authorities.",
    ],
    interpretations: [
      "The Jesuit missions are described both as a “utopia” that protected the Guaraní from enslavement and as tools of religious and cultural change. Most historians see both.",
    ],
  },
  {
    id: "independence",
    period: "1811–1862",
    title: "Independence and isolation",
    summary: "A new republic, first closed to the world, then opened and modernized.",
    facts: [
      "14–15 May 1811: Paraguay declares independence, rejecting both Spanish rule and the authority of Buenos Aires.",
      "1814–1840: José Gaspar Rodríguez de Francia, “El Supremo,” rules as dictator. He isolates the country and restricts trade and travel.",
      "1844–1862: Carlos Antonio López opens the country and modernizes it with a railway, the telegraph, shipyards and the La Rosada ironworks at [Ybycuí](/destinations/ybycui).",
    ],
    interpretations: [
      "Francia is remembered as a defender of independence, as a tyrant, or as both.",
      "The idea that pre-war Paraguay was an equal, self-sufficient model state comes from later nationalist writing and is disputed.",
    ],
  },
  {
    id: "triple-alliance",
    period: "1864–1870",
    title: "The War of the Triple Alliance",
    summary: "Paraguay fights Brazil, Argentina and Uruguay, and suffers catastrophic losses.",
    facts: [
      "Paraguay, led by Francisco Solano López, fights Brazil, Argentina and Uruguay.",
      "The war grows out of a crisis in Uruguay and regional rivalry. Paraguay’s attacks on Brazilian and then Argentine territory start the fighting.",
      "Key places include the Humaitá fortress and Curupayty, where Paraguay won a battle in 1866.",
      "The war ends when López is killed at Cerro Corá on 1 March 1870.",
      "Paraguay loses territory to Argentina and Brazil and is occupied for several years.",
    ],
    interpretations: [
      "Population losses were catastrophic, but estimates vary widely. Many historians put the loss at half or more of the population, while one demographic study argued for about 8–19%.",
      "López is seen as a reckless aggressor, as a national hero, or as both.",
      "The popular idea that Britain caused the war is not supported by most modern historians.",
      "The saying that “only women and children survived” is an exaggeration. Adult men did die in far greater numbers, and women led much of the rebuilding.",
    ],
  },
  {
    id: "chaco-war",
    period: "1932–1935",
    title: "The Chaco War",
    summary: "Paraguay and Bolivia fight over the Chaco, and Paraguay keeps most of it.",
    facts: [
      "Bolivia and Paraguay go to war over the Chaco Boreal.",
      "Around 100,000 people die on both sides.",
      "Paraguay, the smaller country, adapts better to the harsh terrain and wins most of the fighting.",
      "An armistice is signed on 12 June 1935, and a peace treaty in Buenos Aires on 21 July 1938.",
      "Paraguay keeps most of the disputed land, and Bolivia gains a corridor to the Paraguay River.",
    ],
    interpretations: [
      "The claim that oil companies caused the war is common but debated. The border dispute is much older.",
      "The roles of Mennonite and Indigenous communities in the war are often left out of the story.",
    ],
  },
  {
    id: "dictatorship",
    period: "1936–1989",
    title: "Instability and dictatorship",
    summary: "Unrest, a civil war, then 34 years of military rule.",
    facts: [
      "1936–1954: a period of political instability, including a civil war in 1947.",
      "1954: General Alfredo Stroessner takes power and rules until 3 February 1989, more than 34 years, backed by the army and the Colorado Party.",
      "His regime persecutes opponents through torture, disappearances and exile, and takes part in Operation Condor.",
      "1973: Paraguay and Brazil agree to build the Itaipú Dam.",
      "1989: Stroessner is overthrown in a coup.",
      "In the early 1990s, secret police files known as the “Archives of Terror” are found in Asunción. UNESCO now lists them in its Memory of the World register.",
    ],
    interpretations: [
      "Some Paraguayans remember the Stroessner years for stability and new infrastructure. Human-rights investigations documented systematic abuse. Public memory remains divided.",
    ],
  },
  {
    id: "democracy",
    period: "1989–today",
    title: "Democracy",
    summary: "A new constitution, a truth commission and peaceful changes of government.",
    facts: [
      "1992: a new democratic Constitution makes Spanish and Guaraní official languages.",
      "2004–2008: a Truth and Justice Commission documents about 10,000 victims of the dictatorship.",
      "2008: Fernando Lugo’s election ends about six decades of Colorado Party rule.",
      "2012: Congress removes Lugo from office by impeachment in about two days.",
      "2023: Santiago Peña of the Colorado Party wins the presidential election and takes office on 15 August.",
      "Today Paraguay is a major exporter of soybeans, beef and hydroelectric power.",
    ],
    interpretations: [
      "Critics and several neighboring governments called Lugo’s removal a “parliamentary coup.” Supporters say it followed the Constitution.",
    ],
  },
];
