import type { TopicPage } from "../types";

export const culture: TopicPage = {
  path: "/culture",
  label: "Culture",
  eyebrow: "Language, music & tradition",
  title: "A bilingual nation",
  dek: "In Paraguay an Indigenous language, Guaraní, is spoken by most of the population. Here is how language, music, crafts and festivals shape everyday life.",
  summary:
    "Paraguayan culture explained simply: the Guaraní language, identity, Indigenous peoples, harp music and guarania, dance, crafts and festivals.",
  image: "harp",
  intro: [
    "Most Paraguayans grow up with two languages, Spanish and Guaraní. They share customs like {gn:tereré}, celebrate saints’ days with fire and music, and remember a history that has built a strong sense of national identity.",
    "This culture is very much alive, from harp music on the radio to lace and pottery made in family workshops.",
  ],
  chapters: [
    {
      id: "guarani",
      eyebrow: "Language",
      title: "Guaraní, the language of the country",
      blocks: [
        {
          type: "lede",
          text: "Guaraní belongs to the Tupí-Guaraní family of languages. What makes Paraguay unusual is that it is spoken by most of the population, not only by Indigenous communities.",
        },
        {
          type: "p",
          text: "Since the **1992 Constitution**, Spanish and Guaraní have both been official languages, and schools must teach in both.",
        },
        {
          type: "facts",
          items: [
            { label: "Official languages", value: "Spanish and Guaraní (since 1992)" },
            { label: "Who speaks Guaraní", value: "Roughly 70–80% understand or speak it (estimates vary)" },
            { label: "Everyday mix", value: "{gn:Jopara}, a blend of Spanish and Guaraní" },
            { label: "Guaraní Language Day", value: "25 August" },
          ],
        },
        {
          type: "p",
          text: "In daily life many people switch between the two languages, or mix them in a style called {gn:jopara}. For a long time Spanish was the language of government and prestige, and Guaraní the language of home and the countryside. Guaraní faced stigma for generations, but its status has risen.",
        },
        {
          type: "note",
          tone: "info",
          text: "The Guaraní most Paraguayans speak is different from the languages of Indigenous Guaraní peoples such as the Mbya, Avá and Paĩ Tavyterã.",
        },
      ],
    },
    {
      id: "identity",
      eyebrow: "Identity",
      title: "What it means to be Paraguayan",
      blocks: [
        {
          type: "p",
          text: "Most Paraguayans are mestizo, of mixed Spanish and Guaraní descent, a society that took shape in colonial times. Four things come up again and again when people talk about national identity:",
        },
        {
          type: "list",
          items: [
            "The Guaraní language.",
            "The memory of two great wars, the [War of the Triple Alliance](/history#triple-alliance) and the [Chaco War](/history#chaco-war).",
            "Popular Catholic faith, from the Caacupé pilgrimage to patron-saint festivals.",
            "Shared customs, such as drinking {gn:tereré} together.",
          ],
        },
        {
          type: "p",
          text: "Immigrants have added to the mix: Italians, Germans, Swiss and Spaniards; Mennonites in the Chaco; Japanese settlers in La Colmena, founded in 1936; Koreans, Lebanese and Syrians; Ukrainians in Itapúa; and Brazilians in the east. A small, historic Afro-Paraguayan community lives on too, including Kamba Cuá near Asunción.",
        },
        {
          type: "p",
          text: "Some chapters of the past, such as the roles of Francia, the López family and Stroessner, are still debated. Our [history timeline](/history) separates facts from interpretations.",
        },
      ],
    },
    {
      id: "indigenous",
      eyebrow: "Indigenous heritage",
      title: "Nineteen peoples, five language families",
      blocks: [
        {
          type: "lede",
          text: "According to the 2022 Indigenous census, 140,206 people in Paraguay, about 2.3% of the population, belong to 19 Indigenous peoples in five language families.",
        },
        {
          type: "facts",
          items: [
            {
              label: "Guaraní family · 55.6%",
              value: "Mbya, Avá Guaraní, Paĩ Tavyterã, Aché, Guaraní Ñandeva, Western Guaraní",
            },
            {
              label: "Lengua Maskoy · 23.1%",
              value: "Enlhet Norte, Enxet Sur, Sanapaná, Angaité, Toba Maskoy, Guaná",
            },
            { label: "Mataco Mataguayo · 15.2%", value: "Nivaclé, Maká, Manjui" },
            { label: "Zamuco · 3.6%", value: "Ayoreo, Ybytoso, Tomárãho" },
            { label: "Guaicurú · 1.6%", value: "Qom" },
          ],
        },
        {
          type: "p",
          text: "The largest peoples are the Mbya Guaraní, Avá Guaraní, Nivaclé and Paĩ Tavyterã. In the northern Chaco, groups of Ayoreo Totobiegosode live in voluntary isolation, the only such people in South America outside the Amazon basin. Deforestation threatens their territory.",
        },
        {
          type: "p",
          text: "Many Indigenous communities today struggle with land rights, deforestation, poverty and access to health care and education. They are contemporary communities, each with its own language and culture, not a picture of the past.",
        },
      ],
    },
    {
      id: "music",
      eyebrow: "Music",
      title: "Harp, guitar and guarania",
      blocks: [
        {
          type: "p",
          text: "The **Paraguayan harp** is widely seen as the national instrument. It descends from European harps brought over in colonial times.",
        },
        {
          type: "p",
          text: "The guitar matters just as much. **Agustín Pío Barrios “Mangoré”** (1885–1944) is Paraguay’s most celebrated classical guitarist and composer.",
        },
        {
          type: "p",
          text: "The **polca paraguaya** developed in the 19th century and sounds quite different from a European polka. **Guarania** is slower and more melancholic. José Asunción Flores created it in 1925, and in December 2024 UNESCO added it to its list of the world’s Intangible Cultural Heritage.",
        },
        {
          type: "quote",
          text: "Two of the best-known guaranias are “India” and “Recuerdos de Ypacaraí.”",
        },
      ],
    },
    {
      id: "dance",
      eyebrow: "Dance",
      title: "Bottles, jars and galopa",
      blocks: [
        {
          type: "p",
          text: "In the **danza de la botella**, the bottle dance, dancers balance one or more bottles on their heads while they move. It is the country’s best-known folk dance.",
        },
        {
          type: "p",
          text: "The **galopa** is danced by women called {es:galoperas} at patron-saint festivals, often with jars balanced on their heads. Folk ballet groups perform stage versions, and dancers wear the traditional {gn:typói} blouse decorated with ñandutí or ao po’i.",
        },
      ],
    },
    {
      id: "crafts",
      eyebrow: "Crafts",
      title: "Lace, embroidery and clay",
      blocks: [
        {
          type: "p",
          text: "{gn:Ñandutí} means “spider web” in Guaraní. It is a round needle lace made in Itauguá and a few other towns.",
        },
        { type: "figure", image: "nanduti" },
        {
          type: "p",
          text: "{gn:Ao po’i}, meaning “fine cloth,” is hand-embroidered cotton from Yataity in Guairá. The **Poncho Para’i de 60 Listas**, a finely woven poncho from Piribebuy, joined UNESCO’s Intangible Cultural Heritage list in 2023.",
        },
        { type: "figure", image: "ceramics" },
        {
          type: "p",
          text: "Potters work in [Areguá](/destinations/aregua), Tobatí and Itá; silversmiths make filigree jewelry in Luque; and Indigenous artisans produce basketry and textiles. Buying directly from makers or cooperatives keeps the money in their communities.",
        },
      ],
    },
    {
      id: "festivals",
      eyebrow: "Festivals",
      title: "A year of celebrations",
      image: "san-juan-fire",
      blocks: [
        {
          type: "list",
          items: [
            "**January–February · Carnival** in [Encarnación](/destinations/encarnacion), the biggest in the country.",
            "**Holy Week ·** families bake {gn:chipa} in clay ovens called {gn:tatakua}.",
            "**14–15 May · Independence Day.** 15 May is also Mother’s Day.",
            "**12 June · Chaco Peace Day**, marking the 1935 armistice.",
            "**24 June · San Juan**, with fire games such as walking on embers and kicking a flaming ball ({gn:pelota tata}), plus festival foods.",
            "**Late June–July · Kamba Ra’anga** in Altos, a masked festival for Saints Peter and Paul that blends Catholic, Indigenous and Afro-Paraguayan traditions.",
            "**25 August · Guaraní Language Day.**",
            "**8 December · Virgen de Caacupé**, the biggest pilgrimage of the year. Hundreds of thousands of people walk or cycle to the basilica.",
          ],
        },
        {
          type: "note",
          tone: "verify",
          title: "Dates change",
          text: "Carnival and Holy Week move every year. Check local listings for exact dates.",
        },
      ],
    },
    {
      id: "customs",
      eyebrow: "Everyday life",
      title: "Customs worth knowing",
      blocks: [
        {
          type: "p",
          text: "**Tereré is shared.** One cup ({gn:guampa}) and one metal straw ({gn:bombilla}) go around the group. The person serving refills the cup and passes it on. Say “gracias” only when you don’t want any more.",
        },
        { type: "p", text: "**Sunday is for asado**, a family gathering around the grill." },
        {
          type: "p",
          text: "**The siesta:** outside the big cities, the middle of the day is often quiet, especially in the heat.",
        },
        {
          type: "p",
          text: "**Greetings:** a single kiss on the cheek is common among friends. Handshakes are used in business.",
        },
      ],
    },
  ],
  sources: ["S21", "S57", "S5", "S6", "S3", "S2", "S51", "S53", "S20", "S60"],
};
