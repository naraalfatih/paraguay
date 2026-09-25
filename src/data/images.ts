/**
 * Image registry. Components take an ImageId, never a raw path.
 *
 * All current images are AI-generated illustrations (Higgsfield, GPT Image 2.5): moods of
 * landscapes, food and crafts, never presented as photographs of a specific named place.
 * They are served from the generator's CDN (allowed in next.config.ts `remotePatterns`). To self-host,
 * download each file into public/images/ and change `src` to "/images/<file>"; nothing else changes.
 */
const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3IcnjIyrilAoNvFlEquouraatLL";

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Short descriptive caption; the credit line is added automatically. */
  caption: string;
  /** CSS object-position for art direction when cropped. */
  focus?: string;
  credit: "ai" | { text: string; license: string; url?: string };
};

const wide = { width: 2688, height: 1152 } as const;
const portrait = { width: 1792, height: 2240 } as const;
const landscape = { width: 2048, height: 1360 } as const;

export const images = {
  "red-earth-road": {
    src: `${CDN}/hf_20260925_025430_0f98ca71-7524-4827-b992-48466a02d13d.png`,
    ...wide,
    alt: "A straight red-earth road runs through green farmland toward a line of forest, with pink-flowering trees in golden light.",
    caption: "Red earth and lapacho blossom in the eastern countryside",
    credit: "ai",
  },
  "river-dusk": {
    src: `${CDN}/hf_20260925_025741_d1dc9ae7-3704-497a-b282-1c744ae714bc.png`,
    ...wide,
    alt: "A wide, still river at dusk reflects an orange and violet sky, with palms silhouetted along the bank and a small wooden boat.",
    caption: "A broad river at dusk",
    credit: "ai",
  },
  "chaco-dawn": {
    src: `${CDN}/hf_20260925_025741_e0202265-791f-46eb-91f1-507b51630214.png`,
    ...wide,
    alt: "Flat thorn scrub stretches to the horizon at dawn, with swollen-trunked bottle trees and tall cacti under a pink sky.",
    caption: "Dry Chaco scrub and bottle trees at dawn",
    credit: "ai",
  },
  "chaco-night": {
    src: `${CDN}/hf_20260925_025741_bab982f3-ddb4-4062-9a0a-030306e65c55.png`,
    ...wide,
    alt: "The Milky Way arcs over the silhouettes of bottle trees on a perfectly flat horizon.",
    caption: "Night sky over the Chaco plain",
    focus: "50% 40%",
    credit: "ai",
  },
  "wetland-dawn": {
    src: `${CDN}/hf_20260925_030026_4fb90a14-ba98-408e-a265-90c5c9140bb4.png`,
    ...wide,
    alt: "Mist drifts over a still wetland with floating plants, reeds and distant palms; a lone stork stands in the shallows.",
    caption: "A subtropical wetland at first light",
    credit: "ai",
  },
  "atlantic-forest": {
    src: `${CDN}/hf_20260925_025741_8968a38e-1b9b-4909-9727-b397c7596c86.png`,
    ...wide,
    alt: "Shafts of morning light fall through mist inside a dense green forest of tall trees, lianas and tree ferns.",
    caption: "Inside a humid Atlantic Forest",
    credit: "ai",
  },
  waterfall: {
    src: `${CDN}/hf_20260925_025741_6072deb8-e349-4674-836f-3b2b812e6184.png`,
    ...wide,
    alt: "A broad waterfall pours over dark basalt ledges into a misty pool surrounded by green forest.",
    caption: "A basalt waterfall in subtropical forest",
    credit: "ai",
  },
  "river-gorge": {
    src: `${CDN}/hf_20260925_025741_d57f5c8d-34ce-4dc4-8c86-85b8ab3a5535.png`,
    ...wide,
    alt: "A wide brown river winds through a gorge of dark cliffs covered in dense forest, seen from a high hill.",
    caption: "A forested river gorge in late light",
    credit: "ai",
  },
  "river-beach": {
    src: `${CDN}/hf_20260925_030026_a5bff73e-3012-4c3e-992d-bc06a09d9218.png`,
    ...wide,
    alt: "An empty sandy riverbank with palm trees at sunset, the wide water glowing amber and pink.",
    caption: "A sandy river beach at sunset",
    credit: "ai",
  },
  "lake-dusk": {
    src: `${CDN}/hf_20260925_025741_3c3134a0-4a15-4ec0-aeb2-82f849a286e7.png`,
    ...wide,
    alt: "A calm lake at dusk with mist on the water, low forested hills and an old wooden jetty.",
    caption: "A lake among low hills at dusk",
    credit: "ai",
  },
  "lake-summer": {
    src: `${CDN}/hf_20260925_030227_be1086ff-60c0-446a-94aa-19d2f4385ce0.png`,
    ...wide,
    alt: "A small white sailboat on a calm lake on a hazy summer afternoon, with wooded shores and hills behind.",
    caption: "A summer afternoon on the lake",
    credit: "ai",
  },
  "hills-view": {
    src: `${CDN}/hf_20260925_025741_6bca20b4-7e7d-44d5-8edc-3a297e6a66a6.png`,
    ...wide,
    alt: "View from a rocky hilltop over rolling green hills, farmland and patches of forest, with a red-earth track below.",
    caption: "Rolling hills from a summit viewpoint",
    credit: "ai",
  },
  "forest-stream": {
    src: `${CDN}/hf_20260925_030227_cbe8b5f9-bf2b-48c5-9aac-7d8df7333688.png`,
    ...wide,
    alt: "A clear stream cascades over mossy rocks in small falls and pools inside a fern-filled forest.",
    caption: "A forest stream in the hills",
    credit: "ai",
  },
  "river-meander": {
    src: `${CDN}/hf_20260925_030938_0b6b2aad-ec14-4725-9802-1112a5761f3f.png`,
    ...wide,
    alt: "Aerial view at sunrise of a brown river looping through a vast green floodplain of forest and grassland, mist in the hollows.",
    caption: "A river meandering across the lowlands",
    credit: "ai",
  },
  "lapacho-tree": {
    src: `${CDN}/hf_20260925_030938_3624481d-c057-4963-bbf9-1ebe906658dc.png`,
    ...wide,
    alt: "A single large tree in full pink bloom stands in a green pasture at dusk, petals scattered on the grass.",
    caption: "A lapacho in bloom at dusk",
    credit: "ai",
  },
  "palm-road": {
    src: `${CDN}/hf_20260925_030938_736b3241-b64d-4251-833c-e307feed4ac5.png`,
    ...wide,
    alt: "An empty straight road lined with tall, slender fan palms runs toward the horizon in warm evening light.",
    caption: "A palm-lined country road at dusk",
    credit: "ai",
  },
  harp: {
    src: `${CDN}/hf_20260925_025741_35709538-5b45-4bd0-9ecf-811ac34dd66e.png`,
    ...wide,
    alt: "Close-up of hands plucking the strings of a light wooden folk harp in warm light against a dark background.",
    caption: "The harp, heart of Paraguayan folk music",
    focus: "60% 50%",
    credit: "ai",
  },
  terere: {
    src: `${CDN}/hf_20260925_025741_c7d5a519-3fb0-43ec-9772-cc3d888047cf.png`,
    ...wide,
    alt: "A cup packed with yerba mate and a metal straw beside a thermos jug, fresh herbs and a wooden mortar on a table in dappled shade.",
    caption: "Tereré: yerba mate, cold water and fresh herbs",
    credit: "ai",
  },
  chipa: {
    src: `${CDN}/hf_20260925_030026_cf1d06e6-0d24-4154-b075-8feb3bbe42cc.png`,
    ...portrait,
    alt: "Ring- and horseshoe-shaped golden cheese breads piled in a woven basket lined with white cloth.",
    caption: "Chipa, the everyday cassava-and-cheese bread",
    credit: "ai",
  },
  "sopa-paraguaya": {
    src: `${CDN}/hf_20260925_030026_36ff50fd-05ea-421d-894d-4ef18f810200.png`,
    ...portrait,
    alt: "Thick golden squares of savory cornbread on a ceramic plate, one cut to show a moist yellow crumb.",
    caption: "Sopa paraguaya: a “soup” you eat with a fork",
    credit: "ai",
  },
  mbeju: {
    src: `${CDN}/hf_20260925_030026_c29ebe3c-ad67-4878-9acd-5a0da77314b8.png`,
    ...portrait,
    alt: "A round, flat, pale griddle cake with toasted spots on a cast-iron griddle beside a mug of hot drink.",
    caption: "Mbejú, a griddle cake of cassava starch and cheese",
    credit: "ai",
  },
  "vori-vori": {
    src: `${CDN}/hf_20260925_030026_726ef75c-06ec-4053-998f-4886ecdc6fa3.png`,
    ...portrait,
    alt: "A clay bowl of thick yellow chicken soup filled with small round dumplings and green onion.",
    caption: "Vori vori, soup with little balls of cornmeal and cheese",
    credit: "ai",
  },
  "pastel-mandio": {
    src: `${CDN}/hf_20260925_030227_d03b8e4b-5298-4a6d-a819-f55efc6487ea.png`,
    ...portrait,
    alt: "Golden half-moon fried pastries on a wooden board, one broken open to show a seasoned meat filling.",
    caption: "Pastel mandi'o, fried cassava-dough pastries",
    credit: "ai",
  },
  "chipa-guasu": {
    src: `${CDN}/hf_20260925_030227_a183ab8c-3f68-41d6-a29e-99e09c9f54e6.png`,
    ...portrait,
    alt: "A square of soft corn casserole lifted from a baking dish, showing whole corn kernels and melted cheese.",
    caption: "Chipa guasu, made with fresh corn",
    credit: "ai",
  },
  asado: {
    src: `${CDN}/hf_20260925_030227_6ab12417-b320-44b7-8525-928c57c6cd4e.png`,
    ...portrait,
    alt: "Beef ribs and sausages on a grill over glowing embers at dusk, with boiled cassava on a side plate.",
    caption: "Asado over wood embers",
    credit: "ai",
  },
  cocido: {
    src: `${CDN}/hf_20260925_030227_e094f686-91db-4dbd-84a8-497423991b1d.png`,
    ...portrait,
    alt: "A steaming mug of milky, caramel-colored drink on a table in early morning light, a pot on a wood stove behind.",
    caption: "Cocido, toasted yerba mate for breakfast",
    credit: "ai",
  },
  nanduti: {
    src: `${CDN}/hf_20260925_030309_3c8cdc07-a098-4b01-bc58-e336badbf11d.png`,
    ...portrait,
    alt: "Close-up of circular lace medallions with radiating, web-like stitching in white and muted colors on dark wood.",
    caption: "Ñandutí, the “spider web” lace",
    credit: "ai",
  },
  ceramics: {
    src: `${CDN}/hf_20260925_025803_57aae0af-dab6-4605-8548-a1afe3df7373.png`,
    ...portrait,
    alt: "Clay-covered hands shape a pot on a wheel in front of shelves of red terracotta vessels drying in the sun.",
    caption: "Terracotta, the clay craft of the central hills",
    credit: "ai",
  },
  "san-juan-fire": {
    src: `${CDN}/hf_20260925_025803_0ff2d81e-fb8f-4b1c-992b-c6cfd466824d.png`,
    ...landscape,
    alt: "A bonfire and a path of glowing embers at a night festival, sparks rising, with distant blurred figures.",
    caption: "Fire games on the night of San Juan",
    credit: "ai",
  },
  jaguar: {
    src: `${CDN}/hf_20260925_025803_c393b489-99ad-40c8-b4ff-e51026eea81a.png`,
    ...landscape,
    alt: "A jaguar rests calmly in dappled shade at the edge of a dry forest.",
    caption: "A jaguar at rest, seen from a respectful distance",
    credit: "ai",
  },
  jabiru: {
    src: `${CDN}/hf_20260925_025803_299cfb67-c54e-4fc5-b83a-b4e713cc159f.png`,
    ...landscape,
    alt: "Large white storks with black heads and red neck bands wade with egrets in a shallow golden marsh.",
    caption: "Jabiru storks and egrets in a marsh",
    credit: "ai",
  },
  anteater: {
    src: `${CDN}/hf_20260925_025803_b419e2ec-619a-43b5-8c5a-883be6f9a4e0.png`,
    ...landscape,
    alt: "A giant anteater with a long bushy tail walks through tall golden grass at dawn.",
    caption: "A giant anteater in savanna grassland",
    credit: "ai",
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageId = keyof typeof images;

export function getImage(id: ImageId): ImageAsset {
  return images[id];
}

export function creditLine(asset: ImageAsset) {
  return asset.credit === "ai" ? "AI-generated illustration" : `${asset.credit.text} · ${asset.credit.license}`;
}

/** Silent, seamless 5-second loop animated from "red-earth-road" (AI-generated, Seedance 2.5). */
export const heroVideo = {
  src: `${CDN}/hf_20260925_031715_80a1fd4d-94fa-4e76-a852-614d786c12ff.mp4`,
  poster: "red-earth-road" as ImageId,
  caption: "Breeze over the red-earth countryside",
};
