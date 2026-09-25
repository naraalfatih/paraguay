import type { TopicPage } from "../types";

export const nature: TopicPage = {
  path: "/nature",
  label: "Nature",
  eyebrow: "Landscapes & wildlife",
  title: "Forest, scrub and water",
  dek: "From the dry thorn forest of the Chaco to the humid Atlantic Forest and the great wetlands, Paraguay holds strikingly different worlds within one country.",
  summary:
    "Paraguay’s nature explained: the Chaco, the Atlantic Forest, wetlands, rivers, waterfalls, national parks, wildlife and how to travel responsibly.",
  image: "wetland-dawn",
  intro: [
    "The Paraguay River splits the country in two. To the east lie hills, farmland and what remains of the Atlantic Forest. To the west stretches the vast plain of the Chaco. Rivers trace about four-fifths of Paraguay’s borders.",
  ],
  chapters: [
    {
      id: "chaco",
      eyebrow: "The west",
      title: "The Chaco",
      image: "chaco-dawn",
      blocks: [
        {
          type: "lede",
          text: "The Chaco covers about 60% of Paraguay but is home to fewer than 4% of its people. It is part of the Gran Chaco, a huge plain shared with Bolivia and Argentina.",
        },
        {
          type: "list",
          items: [
            "**Humid (Low) Chaco**, in the east: palm savanna and seasonal floods.",
            "**Central Chaco**: home to the Mennonite colonies around [Filadelfia](/destinations/filadelfia) and to many Indigenous communities.",
            "**Dry (High) Chaco**, in the northwest: thorn forest, cacti and bottle trees ({es:palo borracho}), with sand dunes near Bolivia.",
          ],
        },
        {
          type: "p",
          text: "The Dry Chaco is the second-largest forest biome in South America, after the Amazon.",
        },
      ],
    },
    {
      id: "atlantic-forest",
      eyebrow: "The east",
      title: "The Atlantic Forest",
      image: "atlantic-forest",
      blocks: [
        {
          type: "lede",
          text: "Humid subtropical forest once covered most of eastern Paraguay. More than 90% of it has been cleared, mostly since the 1970s, for soy, cattle and settlements.",
        },
        {
          type: "p",
          text: "The largest surviving block is the **Mbaracayú Forest Nature Reserve** (64,405 hectares), run by the Fundación Moisés Bertoni. Other remnants survive at San Rafael, [Ybycuí](/destinations/ybycui), [Ñacunday](/destinations/nacunday) and the Itaipú reserves.",
        },
      ],
    },
    {
      id: "wetlands",
      eyebrow: "Water",
      title: "Wetlands",
      blocks: [
        {
          type: "p",
          text: "In the far north, Paraguay shares the **Pantanal**, the world’s largest tropical wetland. The Paraguayan part is on UNESCO’s Tentative List for World Heritage status.",
        },
        {
          type: "p",
          text: "In the southwest, the **Ñeembucú wetlands** are a maze of marshes, lagoons and floating plants. **Lago Ypoá National Park**, about 100,000 hectares, has been a Ramsar Wetland of International Importance since 1995. Paraguay has six Ramsar sites in all.",
        },
        { type: "figure", image: "jabiru" },
      ],
    },
    {
      id: "rivers",
      eyebrow: "Water",
      title: "Rivers",
      image: "river-meander",
      blocks: [
        {
          type: "p",
          text: "The **Paraguay River** runs north to south through the middle of the country and was its main highway for centuries.",
        },
        {
          type: "p",
          text: "The **Paraná** forms the southern and eastern borders. Two huge binational dams stand on it: **Itaipú**, shared with Brazil, and **Yacyretá**, shared with Argentina.",
        },
        {
          type: "p",
          text: "The **Pilcomayo** marks the southwestern border with Argentina. It carries so much sediment that its course shifts, flooding the Low Chaco. The **Apa** forms part of the northern border with Brazil.",
        },
      ],
    },
    {
      id: "waterfalls",
      eyebrow: "Water",
      title: "Waterfalls",
      image: "waterfall",
      blocks: [
        {
          type: "p",
          text: "The best known are the [Saltos del Monday](/destinations/saltos-del-monday), about 45 meters high and 120 meters wide, near Ciudad del Este, and [Salto Ñacunday](/destinations/nacunday), roughly 40 meters high and 110 meters wide.",
        },
        {
          type: "p",
          text: "In the hills south of Asunción, [Ybycuí National Park](/destinations/ybycui) hides smaller falls and rock pools in the forest.",
        },
      ],
    },
    {
      id: "parks",
      eyebrow: "Protected areas",
      title: "National parks and reserves",
      blocks: [
        {
          type: "facts",
          items: [
            {
              label: "Defensores del Chaco",
              value: "Created 1975. The largest park in the country, roughly 720,000–780,000 ha. Jaguar and Chacoan peccary.",
            },
            { label: "Médanos del Chaco", value: "Created 2003. About 514,000 ha of dunes and scrub, home to guanacos." },
            {
              label: "Tinfunqué",
              value: "Created 1995. About 280,000 ha of wetlands fed by Pilcomayo floods. A Ramsar site.",
            },
            { label: "Mbaracayú Reserve", value: "Created 1991. 64,405 ha, the largest block of Atlantic Forest." },
            { label: "Ybycuí", value: "Created 1973. About 5,000 ha of forest, waterfalls and the La Rosada ironworks." },
            { label: "Ñacunday", value: "About 2,000 ha of Atlantic Forest around Salto Ñacunday." },
            { label: "Cerro Corá", value: "Site of the war’s final battle in 1870, with hills and rock art." },
            { label: "Lago Ypoá", value: "Created 1992. About 100,000 ha of wetlands. A Ramsar site since 1995." },
          ],
        },
        {
          type: "note",
          tone: "verify",
          text: "Most parks are managed by MADES, Paraguay’s Ministry of the Environment. Some are remote, with few facilities. Check access before you go.",
        },
      ],
    },
    {
      id: "wildlife",
      eyebrow: "Wildlife",
      title: "Who lives here",
      blocks: [
        {
          type: "p",
          text: "Paraguay is home to the **jaguar**, **giant anteater**, **giant armadillo**, **maned wolf**, **lowland tapir**, **marsh deer**, **capybara** and **yacaré caiman**.",
        },
        { type: "figure", image: "jaguar" },
        {
          type: "p",
          text: "Its best-known rarity is the **Chacoan peccary** ({gn:tagua}). Scientists knew it only from fossils until living animals were documented in the 1970s.",
        },
        {
          type: "p",
          text: "Around 690–715 bird species have been recorded, depending on the source. They include the **hyacinth macaw** of the Pantanal, the **greater rhea** ({gn:ñandú}), the **jabiru stork** and the **bare-throated bellbird**, often called the national bird.",
        },
        { type: "figure", image: "anteater" },
      ],
    },
    {
      id: "conservation",
      eyebrow: "Conservation",
      title: "Protecting what’s left",
      blocks: [
        {
          type: "lede",
          text: "The Chaco has one of the fastest deforestation rates in the world, driven mainly by cattle ranching and some soy farming.",
        },
        {
          type: "p",
          text: "Satellite studies show that a large share of the Chaco’s forest has been cleared since the 1980s, and it is still being lost despite new reserves.",
        },
        {
          type: "p",
          text: "In the east, a law against clearing forest has been in force since 2004. It slowed the loss, but illegal logging and illegal cannabis plots remain problems. Conservation is closely tied to the land rights of Indigenous peoples, especially the isolated Ayoreo.",
        },
      ],
    },
    {
      id: "responsible-travel",
      eyebrow: "Responsible travel",
      title: "Visiting with care",
      blocks: [
        {
          type: "list",
          items: [
            "Visit Chaco and Pantanal parks with **licensed local guides** and a suitable vehicle. Carry plenty of water and tell someone your route.",
            "Stay on trails, keep your distance from animals and never feed them.",
            "Never buy wildlife products such as skins, feathers or live animals.",
            "Don’t light fires in the dry season. Wildfires are a serious threat.",
            "Visit Indigenous communities only by invitation or through community-run projects, and always ask before taking photos.",
            "Buy crafts directly from makers or cooperatives, and choose locally owned lodging and guides.",
            "Check water conditions before swimming in lakes, especially Ypacaraí.",
          ],
        },
      ],
    },
  ],
  sources: ["S9", "S28", "S29", "S30", "S25", "S26", "S31", "S32", "S24", "S27", "S44", "S22", "S41", "S40", "S62", "S6"],
};
