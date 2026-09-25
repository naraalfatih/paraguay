# Paraguay Website — Architecture

> **Final state (v1, Sep 2026).** Where this document and the code differ, the code and `CLAUDE.md` win. Key changes from the original plan:
> - **Project:** a Paraguay-themed university project for a general audience. There is no event or UN framing.
> - **Look:** a cinematic, dark-first visual direction with forest-green night surfaces, a red-earth accent and a thin national-tricolor rule in the footer. The tokens in `src/app/globals.css` supersede §6.2.
> - **Images:** AI illustrations and a silent hero loop generated with Higgsfield, served from its CDN via `src/data/images.ts`. No specific landmark is depicted.
> - **Pages:** all built: home, destinations and 11 destination pages, culture, food, nature, history (interactive timeline), travel (called "Travel", at `/travel-guide`) and about (sources and image credits).

**Status:** v1 implemented (all pages). See the note above for changes from the original plan.
**Stack (verified Sep 2026):**
- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- Node 22, npm

**Goal:** An English-language editorial guide to Paraguay that feels like a premium travel magazine. It should be fast, accessible, statically generated, cheap to host, and cheap to extend with Claude Code.

---

## 1. Principles

1. **Static first.** Every route is prerendered at build time. No database, CMS, API routes, server actions, auth, or client-side data fetching.
2. **Content lives in data, not in components.**
   - Copy is typed TypeScript in `src/data/`.
   - Components only render it.
   - Facts come from `content/paraguay-research.md`, which is the single source of truth.
3. **Few dependencies.**
   - Runtime: `next`, `react`, `react-dom` only.
   - Dev: TypeScript, Tailwind, ESLint (create-next-app defaults).
   - Any new package needs explicit approval.
4. **Minimal client JS.** The only client components are the mobile nav, active-link detection, and the error boundary. Everything else is a Server Component.
5. **Export-compatible.** Don't use request-time features (cookies, headers, ISR, route handlers with runtime logic). This keeps a move to `output: 'export'` possible later.
6. **Editorial, not template.**
   - Large photography, serif typography, generous whitespace, asymmetric grids.
   - Captions with credits, hairline rules, restrained color.
   - No stock "tourism" gradients, carousels, or icon soup.

---

## 2. Page structure

| Route | Purpose | Key sections (top → bottom) |
|---|---|---|
| `/` | Magazine cover | Full-bleed hero + masthead title → intro lede → featured destinations (1 large + 2 small, asymmetric) → "Two Paraguays" split (Eastern region vs Chaco) → culture pull-quote → food strip (scroll-snap row) → history timeline teaser → nature feature → travel essentials cards |
| `/destinations` | Index | Page header → region map (Phase 7, optional) → destinations grouped by region (region heading + card grid) |
| `/destinations/[slug]` | Destination article | Breadcrumbs → hero (image, title, dek, credit) → key facts panel (department, region, best time, time needed) → article blocks → "Getting there / practical" → "Check before you go" note → related destinations → sources |
| `/culture` | Long-form feature | Page hero → on-this-page TOC → Guaraní & bilingualism → identity → Indigenous peoples → music → dance → crafts → festivals calendar → customs → sources |
| `/food` | Food & drink guide | Page hero → intro → dish entries (image, name, Guaraní/Spanish name, what it is, context) → tereré feature (UNESCO) → sources |
| `/nature` | Nature | Page hero → ecosystems → protected areas → wildlife → conservation → responsible travel → sources |
| `/history` | Timeline | Page hero → era chapters (numbered, each with **Facts** and **Interpretations**) → sources |
| `/travel-guide` | Practical info | Page hero → "last reviewed" banner → climate/when to go → money → language → getting around → safety & health → entry requirements (generic + official links only) |
| `/about` | Trust page | About the site → editorial method → sources list → image credits (generated from the image registry) |
| `not-found` / `error` | System | Friendly message and links back to the main sections |

**v1 destination pages (11):**
- `asuncion`
- `ciudad-del-este`
- `encarnacion`
- `jesuit-missions` (Trinidad, Jesús, San Cosme y Damián)
- `aregua`
- `san-bernardino`
- `filadelfia`
- `ybycui`
- `saltos-del-monday`
- `nacunday`
- `cerro-akati`

**Phase-2 candidates:** caacupe, chaco-national-parks, pantanal, mbaracayu, laguna-blanca, cerro-cora, humaita, itaugua.

**Regions** (used for grouping and the map):

| id | Label | Destinations |
|---|---|---|
| `asuncion` | Asunción | asuncion |
| `central-hills` | Lakes & Hills | aregua, san-bernardino, ybycui, cerro-akati |
| `south` | The South & the Missions | encarnacion, jesuit-missions |
| `east` | The Paraná Frontier | ciudad-del-este, saltos-del-monday, nacunday |
| `chaco` | The Chaco | filadelfia |
| `north` | The North | (phase 2) |

---

## 3. Routing

```
src/app/
  layout.tsx            root layout: fonts, header, footer, skip link, global metadata
  page.tsx              /
  not-found.tsx         404
  error.tsx             error boundary (client)
  sitemap.ts            generated from site config + destination data
  robots.ts
  icon.svg              favicon (ñandutí mark)
  opengraph-image.tsx   default OG card (next/og, built statically)
  destinations/
    page.tsx
    [slug]/page.tsx     generateStaticParams + dynamicParams = false
  culture/page.tsx
  food/page.tsx
  nature/page.tsx
  history/page.tsx
  travel-guide/page.tsx
  about/page.tsx
  styleguide/page.tsx   dev-only component preview; 404 in production
```

- **Slugs:** ASCII, lowercase, hyphenated, no diacritics (`cerro-akati`, not `cerro-akatĩ`).
- **Unknown slugs:** Return 404 (`dynamicParams = false`).
- **No `loading.tsx`:** Every page is static and prefetched, so a loading UI would never meaningfully show.
- **No i18n in v1:** Adding Spanish later would mean a `[locale]` segment. Don't build it now.

---

## 4. Content model (`src/data/`)

Everything is typed TypeScript. There are no Markdown or MDX dependencies. Prose uses a tiny inline syntax, rendered by `<RichText>` (Phase 2):

| Syntax | Renders |
|---|---|
| `*text*` | `<em>` |
| `**text**` | `<strong>` |
| `[label](/path)` | link |
| `{gn:tereré}` | `<i lang="gn">` (Guaraní term) |
| `{es:casas de cambio}` | `<i lang="es">` (Spanish term) |

```ts
// src/data/types.ts (Phase 2)
type RichText = string;
type ImageId = keyof typeof images;   // from the image registry
type SourceId = keyof typeof sources; // S1, S2 … (mirror of content/sources.md)
type RegionId = 'asuncion' | 'central-hills' | 'south' | 'east' | 'chaco' | 'north';

type Block =
  | { type: 'p'; text: RichText }
  | { type: 'h2' | 'h3'; text: string; id: string }
  | { type: 'figure'; image: ImageId; caption?: RichText; wide?: boolean }
  | { type: 'quote'; text: RichText; cite?: string }
  | { type: 'facts'; items: { label: string; value: RichText }[] }
  | { type: 'note'; tone: 'info' | 'verify'; text: RichText }
  | { type: 'list'; items: RichText[]; ordered?: boolean };

interface Destination {
  slug: string; name: string; department: string; region: RegionId;
  summary: string;        // ≤ 155 chars; used on cards and as the meta description
  dek: string;            // standfirst under the title
  hero: ImageId; gallery?: ImageId[];
  coordinates: [lat: number, lon: number];
  keyFacts: { bestTime?: string; timeNeeded?: string; fromAsuncion?: string };
  body: Block[];
  practical?: Block[];
  verify?: RichText[];    // "check before you go" items (from [!] flags)
  related: string[];      // slugs
  sources: SourceId[];
  lastReviewed: string;   // 'YYYY-MM'
  featured?: boolean;
}

interface TopicPage {     // culture, nature, travel-guide
  title: string; dek: string; hero: ImageId; summary: string;
  sections: { id: string; title: string; blocks: Block[] }[];
  sources: SourceId[]; lastReviewed: string;
}
// food.ts → Dish[] { id, name, altNames?, image?, what: RichText, context: RichText, sources }
// history.ts → Era[] { id, period, title, summary, facts: RichText[], interpretations: RichText[], image? }
```

**File layout (one file per destination keeps Claude edits small):**

```
src/data/
  site.ts                 name, URL, nav, footer links, lastReviewed  ← Phase 1
  types.ts
  images.ts               image registry (see §10)
  sources.ts              subset of content/sources.md used on the site
  regions.ts
  destinations/
    index.ts              imports all destinations → array + getDestination(slug)
    asuncion.ts …
  pages/
    home.ts culture.ts food.ts nature.ts history.ts travel-guide.ts about.ts
```

**Rules**
- Every factual block must trace to `content/paraguay-research.md`. List the `sources` IDs for each destination and page.
- Items flagged `[!]` in the research must go in `verify` or `note tone:'verify'`, or be left out. Never state them as fact.
- Time-sensitive pages show `lastReviewed`.

---

## 5. Component hierarchy

```
RootLayout
├─ SkipLink
├─ SiteHeader ─ Wordmark · NavLinks (client, aria-current) · MobileNav (client, <dialog>)
├─ <main id="main">
│   └─ page
│       ├─ PageHeader / PageHero (Phase 2)
│       ├─ Section (tone: paper | sand | night) → Container (prose | content | wide)
│       │   ├─ SectionHeading (eyebrow/index, title, dek, action)
│       │   ├─ Card grid (Card: default | feature | compact)
│       │   ├─ Blocks → RichText, Figure, PullQuote, KeyFacts, Note   (Phase 2)
│       │   └─ Timeline, DishEntry, TableOfContents, SourceList        (Phase 4)
│       └─ Breadcrumbs (+ BreadcrumbList JSON-LD)
└─ SiteFooter (tone night)
```

**Folders**
- `src/components/layout/` — Container, Section, SkipLink, SiteHeader, NavLinks, MobileNav, SiteFooter
- `src/components/ui/` — Button/ButtonLink, Card, SectionHeading, Eyebrow, PageHeader, Breadcrumbs, Ornament, ImagePlaceholder, icons
- `src/components/editorial/` — RichText, Blocks, Figure, PullQuote, KeyFacts, Note, TableOfContents, SourceList (Phase 2+)
- `src/components/seo/` — JsonLd
- `src/lib/` — `metadata.ts` (pageMetadata), `jsonld.ts`, `cn.ts`

---

## 6. Design system

The design system lives in `src/app/globals.css`, in a Tailwind 4 `@theme` block.

- **Palette lock-in:** Tailwind's default palette is disabled (`--color-*: initial`), so only brand tokens can be used.
- **Tone-aware semantic colors:** A `Section` sets a tone class (`tone-paper`, `tone-sand`, `tone-night`) that redefines `--fg`, `--muted`, `--accent`, `--line`, and `--surface`. Components use `text-fg`, `text-muted`, `text-accent`, `border-line` and `bg-surface`, so they adapt to light and dark sections without extra props.

### 6.1 Typography

| Role | Font | Notes |
|---|---|---|
| Display, headings, body prose | **Newsreader** (variable, optical-size axis 6–72, italic) | Editorial serif. Optical sizing makes it crisp at 18 px and elegant at 100 px. |
| UI: nav, eyebrows, buttons, captions, meta | **Inter** (variable) | Neutral and legible at small sizes. |

- **Loading:** Both are self-hosted by `next/font/google` at build time, with no runtime request to Google.
- **Guaraní glyphs:** Subsets are `latin`, `latin-ext`, `vietnamese`. The Vietnamese subset carries **ẽ ĩ ỹ** and the combining tilde needed for **g̃**. `/styleguide` includes a test string.

**Type scale (fluid, clamp-based):**

| Token | Size | Use |
|---|---|---|
| `text-xs` | 12 px | Captions, credits |
| `text-sm` | 14 px | UI, meta |
| `text-base` | 16 px | UI text |
| `text-body` | 18 → 19 px (line-height 1.65) | Prose |
| `text-lg` | 20 px | Lede |
| `text-xl` | 22 → 26 px | h4 |
| `text-2xl` | 26 → 36 px | h3 |
| `text-3xl` | 32 → 48 px | h2 |
| `text-4xl` | 40 → 68 px | Page titles |
| `text-display` | 48 → 112 px | Home and hero titles |

**Conventions**
- Headings: weight 400–500, slight negative tracking, `text-wrap: balance`.
- Prose: `text-wrap: pretty`, measure ≈ 68 characters (`max-w-prose`).
- Eyebrows: Inter 12–13 px, uppercase, tracking 0.14em.
- Italics mark Guaraní and Spanish terms (with a `lang` attribute).
- A drop cap (`.dropcap`) is used once per long-form article.

### 6.2 Color

Palette inspired by the land, not the flag:
- red earth (*tierra colorada*)
- Atlantic forest (*monte*)
- rivers
- Chaco ochre
- lapacho blossom
- ñandutí cream

| Token | Hex | Use | Contrast (verified) |
|---|---|---|---|
| `paper` | `#F6F1E7` | Page background | — |
| `sand` | `#ECE3D3` | Alternate section background | — |
| `ink` | `#1D1B18` | Text | 15.3 : 1 on paper |
| `stone` | `#5A534B` | Muted text | 6.7 on paper, 6.0 on sand |
| `rule` | `#D8CDBA` | Hairlines (decorative only) | — |
| `tierra` | `#9B3A1E` | Primary accent, links, primary button | 6.2 on paper, 5.5 on sand; paper-on-tierra 6.2 |
| `tierra-deep` | `#7A2C15` | Hover and pressed states | 8.5 on paper |
| `monte` | `#2E4A3B` | Secondary accent (nature) | 8.6 on paper |
| `rio` | `#245865` | Tertiary accent (rivers, info notes) | 7.0 on paper |
| `ocre` | `#B9832F` | **Decorative only** on light backgrounds | 2.9 (fails as text) |
| `ocre-light` | `#E0B066` | Accent on night | 8.4 on night |
| `lapacho` | `#C9577A` | **Decorative only** on light backgrounds | 3.6 (fails as text) |
| `lapacho-light` | `#E48CA8` | Accent on night | 6.8 on night |
| `night` | `#18201B` | Dark sections, footer | paper-on-night 14.8 |
| `night-muted` | `#C9C0B0` | Muted text on night | 9.2 |

- **Text over photos:** Always add a scrim, at least a black gradient reaching ≥55% opacity behind the text (≈4.7 : 1 worst case). Never place body copy over busy images.
- **No dark mode in v1** (deliberate, to save budget). All colors are CSS variables, so a dark theme can be added later by redefining the tones.

### 6.3 Spacing and layout

- **Base unit:** Tailwind 4 spacing (`--spacing: 0.25rem`).
- **Semantic tokens:**
  - `gutter` = clamp(16 px → 40 px): page side padding
  - `section` = clamp(64 px → 128 px): vertical rhythm between major sections
  - `section-sm` = clamp(40 px → 72 px)
- **Containers:**

| Size | Width | Use |
|---|---|---|
| `prose` | 42 rem (~68 ch) | Articles |
| `content` | 75 rem (1200 px) | Grids |
| `wide` | 90 rem (1440 px) | Hero and feature layouts |
| `full` | — | Full-bleed images |

- **Grids:** A 12-column editorial grid at `lg`. Use asymmetric splits (7/5, 8/4) for features, and 1 → 2 → 3 column card grids.

### 6.4 Breakpoints

Tailwind defaults, mobile-first, not customized:

| Name | Width |
|---|---|
| `sm` | 640 px |
| `md` | 768 px |
| `lg` | 1024 px |
| `xl` | 1280 px |
| `2xl` | 1536 px |

- **Verification widths:** 360, 768, 1280 and 1440 px.
- **Desktop nav** appears at `lg`. Below that, the mobile `<dialog>` menu is used.

---

## 7. Image strategy

- **Format:** Local static imports with `next/image`. These give automatic width/height (no CLS), a blur placeholder, a responsive `srcset`, and AVIF/WebP. Configured in `next.config.ts`.
- **Pipeline:**
  1. Originals go in `images-src/` (git-ignored).
  2. `scripts/prepare-images.mjs` resizes them to a 2400 px long edge (JPEG q82) in `src/assets/images/<id>.jpg`, and writes 1200×630 OG crops to `public/og/`. It uses `sharp`, which Next already installs.
  3. Commit only the processed files.
- **Registry (`src/data/images.ts`):** Every image has `{ src, alt, credit, license, sourceUrl, focal? }`.
  - Components take an `ImageId`, never a raw path.
  - `alt` is required. Decorative images use `alt: ''` explicitly.
  - The `/about` credits list is generated from this registry, which satisfies CC-BY-SA attribution.
- **`sizes` presets:**
  - Hero: `100vw`
  - Card: `(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw`
  - Feature: `(min-width:1024px) 60vw, 100vw`
- **LCP:** Only the page's hero image is marked high-priority (preload).
- **Until photos exist:** `ImagePlaceholder` (a sand panel with the ñandutí ornament) keeps layouts final.
- **Sourcing** ⚠: Wikimedia Commons is **blocked** from this Claude environment. Photos must be supplied by the owner, or the environment's network policy must allow `commons.wikimedia.org` and `upload.wikimedia.org`. Preferred sources: Wikimedia Commons (CC-BY / CC-BY-SA / PD), the owner's own photos, or SENATUR press images with permission. Never hotlink.
- **Budget:** Hero ≤ 250 KB at mobile width (AVIF); card images ≤ 80 KB.

---

## 8. SEO strategy

- **Metadata API**
  - Root: `metadataBase` (from `NEXT_PUBLIC_SITE_URL`, falling back to the Vercel production URL), title template `%s · Paraguay`, default description, Open Graph, Twitter `summary_large_image`.
  - Per page: `pageMetadata({ title, description, path, image })` sets the canonical URL and OG.
- **Structured data (JSON-LD via `<JsonLd>`):**
  - `WebSite` on home
  - `BreadcrumbList` on every inner page
  - `TouristDestination` (with `geo`) on destination pages
  - `Article` on long-form topic pages
  - No review or rating markup.
- **Crawling:**
  - `sitemap.ts` is generated from `site.ts` routes plus destination data. `lastModified` comes from `lastReviewed`.
  - `robots.ts` allows all and points to the sitemap. Vercel preview deployments are automatically `noindex`.
- **On-page:** One `h1` per page, logical heading order, descriptive link text, and dense internal linking (topic pages ↔ destinations).
- **Content:** Original, cited, non-generic text; E-E-A-T is served by `/about` with its sources and method. Meta descriptions come from each item's `summary` (≤ 155 chars).
- **OG images:** A default typographic card (`opengraph-image.tsx`), plus per-page hero crops from `public/og/` once photos exist.

---

## 9. Accessibility strategy (target: WCAG 2.2 AA)

- **Structure:** Skip link, landmarks (`header`, `nav`, `main`, `footer`), one `h1`, sequential headings.
- **Contrast:** Every text/background pair in §6.2 is verified. `ocre` and `lapacho` are never used as text on light backgrounds.
- **Focus:** A visible `:focus-visible` ring (2 px `--accent`, 3 px offset). Touch targets ≥ 44 px.
- **Mobile menu:** Native `<dialog>` with `showModal()`, which provides a focus trap, Esc to close, and inert background. The trigger has `aria-expanded` and `aria-controls`. Page scroll is locked while open.
- **Links:** Current page is marked `aria-current="page"`. Prose links are always underlined.
- **Language:** `lang="en"` on `<html>`. Guaraní and Spanish terms carry `lang="gn"` / `lang="es"` (WCAG 3.1.2).
- **Images:** `alt` is required by type. Decorative ornaments are `aria-hidden`.
- **Motion:** All motion respects `prefers-reduced-motion`. Content is never hidden waiting for JS or animation.
- **Semantic data:** Tables use `<th scope>`. Key facts use `<dl>`.
- **Checks per phase:** Lighthouse (Accessibility 100 target) and keyboard walkthrough, plus axe via Playwright where available (run ad hoc, not added as a dependency).

---

## 10. Animation strategy

CSS only. No animation libraries.

| Utility | Effect | Where |
|---|---|---|
| `motion-safe:animate-rise` | Fade and 12 px rise on load, 700 ms | Hero and page-header text (stagger with `[animation-delay:…]`) |
| `motion-safe:animate-fade` | Opacity fade | Images and secondary elements |
| `.reveal` | Scroll-driven fade/rise via `animation-timeline: view()` inside `@supports` | Section content. Visible by default in browsers without support. |
| Card hover | Image `scale(1.03)` over 600 ms, underline on title | Cards |
| Link underline | Animated `text-decoration-color` | Nav and prose |

- **Easing:** `cubic-bezier(.2,.7,.2,1)`. Durations 150–700 ms.
- **Reduced motion:** A global `prefers-reduced-motion: reduce` rule neutralizes all animations and transitions.
- **Not used:** Parallax, scroll-jacking, carousels that autoplay.

---

## 11. Performance budget

| Metric | Target |
|---|---|
| LCP (mobile 4G) | < 2.5 s |
| CLS | < 0.05 |
| INP | < 200 ms |
| First-load JS | ≈ framework baseline; no page adds more than ~5 KB of its own client JS |
| Fonts | 2 variable families, subsetted, `display: swap` |
| Lighthouse mobile | Performance ≥ 90; Accessibility, Best Practices and SEO ≥ 95 |

---

## 12. Hosting and deployment

- **Host:** **Vercel Hobby** (free). It provides zero-config Next.js, image optimization and per-branch preview deploys.
- **Deploy method:** Connect the GitHub repo in the Vercel dashboard. The Vercel API/CLI is blocked from this Claude environment, so deploys happen from GitHub pushes.
- **Hobby terms:** Hobby is for **non-commercial** use. If the site ever monetizes, move to Vercel Pro, or to Cloudflare Pages with `output: 'export'` plus pre-sized images (the site stays export-compatible, §1).
- **Environment:** `NEXT_PUBLIC_SITE_URL` must be set to the production domain once one exists.

---

## 13. Implementation sequence

Budget shares assume ~$100 total, with roughly 15% already spent on research and planning.

| Phase | Scope | Budget |
|---|---|---|
| **1. Foundation** ✅ | Scaffold, tokens, fonts, layout primitives, header/nav/mobile nav/footer, Button, Card, SectionHeading, PageHeader, Breadcrumbs, SEO base (metadata, sitemap, robots, OG, icon), 404/error, `/styleguide` | ~12% |
| **2. Content engine** | `types.ts`, `images.ts`, `sources.ts`, `regions.ts`, RichText, Blocks (Figure, PullQuote, KeyFacts, Note), PageHero, SourceList, `prepare-images.mjs` | ~10% |
| **3. Destinations** | `/destinations/[slug]` template built with **Asunción** as the reference page, then `/destinations` index. Then the remaining 10 destination data files, text only, in batches of 3–4 per session. | ~20% |
| **4. Topic pages** | One page per session, in this order: history (Timeline) → food (DishEntry) → culture (TOC) → nature → travel-guide | ~22% |
| **5. Home** | Built last, because it aggregates teasers from all sections | ~8% |
| **6. SEO and trust** | `/about` (method, sources, image credits), JSON-LD per type, per-page OG | ~5% |
| **7. Photos and polish** | Owner supplies images → process → wire into the registry. Optional SVG region map (Natural Earth, public domain). | ~8% |
| **8. QA and launch** | Lighthouse and axe on all templates, Playwright screenshots at 360/768/1280, fixes, Vercel connect | ~10% |

**Token-saving tactics**
- Read `CLAUDE.md` and this file instead of re-exploring the repo.
- Use a cheaper model for mechanical data entry (Phase 3 batches).
- Build templates once and only add data afterwards.
- Run `npm run build`, which checks types and prerendering together, instead of many separate checks.

---

## 14. Open decisions (owner)

1. **Site name and domain.** "Paraguay" is a placeholder in `src/data/site.ts`.
2. **Photo supply.** Own photos, manual Wikimedia downloads, or allowing Wikimedia in the environment's network policy.
3. **Analytics.** None in v1. If wanted, use Vercel Web Analytics (no cookies).
