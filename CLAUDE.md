# CLAUDE.md — Paraguay website

@AGENTS.md

A cinematic, **Paraguay-themed** website all about Paraguay, made as a university project.
- **Audience:** the general public, so write in plain language.
- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind 4. Every route is statically generated.
- **References:** design in `docs/architecture.md`; facts in `content/paraguay-research.md` (source IDs in `content/sources.md`).

## Commands
- `npm run dev` — local dev server
- `npm run build` — type-checks and prerenders every route. **Run before every commit.**
- `npm run lint` — ESLint
- `NEXT_PUBLIC_OFFLINE_IMAGES=1 npm run build` — renders placeholder frames instead of remote images. Use it where the image CDN is blocked, such as Claude cloud sessions.

## Hard rules
- **No new dependencies** without the owner's approval. Runtime deps are only `next`, `react` and `react-dom`.
- **Static only.** No API routes, server actions, database, CMS, cookies/headers or client-side data fetching.
- **Copy lives in `src/data/`**, never hard-coded in components.
- **Facts come only from `content/paraguay-research.md`.** Never invent facts, numbers or superlatives. Items marked `[!]` there must be phrased cautiously or left out.
- **Never state visa or entry rules, fees, exchange rates or schedules as fact.** Link to official sources.
- **Paraguay-themed, not event-themed.** No United Nations framing or branding. Guaraní greetings, red earth, forest greens and the ñandutí motif carry the identity. The national tricolor appears only as the thin `FlagRule`.
- **Reuse components** in `src/components/` before creating new ones.
- **Client components only for real interactivity.** Current ones: header scroll state, nav, mobile menu, destination filters, lightbox, hero video, timeline controls, hash opener. Essential content must work without JS.

## Images
- **Registry:** every image goes through `src/data/images.ts` and components take an `ImageId`.
  - `alt` and `caption` are required.
  - Don’t label images “AI-generated” on the site (owner’s request). The footer notes that images are illustrative and don’t show the specific places named. Real photos get a credit line via `credit`. There is no About page.
- **AI illustrations:** current images are AI-generated with Higgsfield and hosted on its CDN (`next.config.ts` `remotePatterns`).
  - They depict moods: landscapes, food, crafts, wildlife.
  - **Never** generate or present an AI image as a photograph of a specific named landmark.
- **Hero videos:** `videos` in `src/data/images.ts` maps an image ID to a silent, seamless loop. Any `PageHero` using that image plays it over the still. The home hero plays `homeFilm`, a 15-second film re-encoded to ~3.7 MB. Keep hero videos small (≤ 4 MB, **H.264 8-bit** yuv420p, faststart, no audio). Generators often output 10-bit HEVC, which many browsers can't play, so always re-encode (e.g. in the Higgsfield sandbox with ffmpeg) and re-host before registering. Videos autoplay muted. With reduced motion, data saver or blocked autoplay they show a "Play film" button instead, and they are always pausable. A video that fails to load hides itself and leaves the still.

## Maps and navigation
- **Maps:** `src/data/map.ts` is generated from Natural Earth admin-1 boundaries (public domain, S65); don't edit it by hand. Render it with `ParaguayMap` (highlight departments with `departmentNames(d.department)`) and `MapLegend`. It's pure SVG with no JS. The river line is the shared border between the Chaco and eastern departments.
- **Next chapter:** `src/data/journey.ts` sets the reading order of the main sections. Each section page ends with `<NextChapter from={path} />`.
- **Destination filters** live in the URL (`?region=&experience=&q=`), so filtered views can be shared and survive the Back button. The prerendered HTML always lists every destination.

## Design system (`src/app/globals.css`)
- **Look:** dark-first and cinematic: forest-green `night` surfaces for images, `paper`/`sand` bands for reading, and a red-earth (`tierra`) accent. Wrap content in `<Section tone="night|night-2|paper|sand">`.
- **Colors:** use tone-aware tokens only: `text-fg`, `text-muted`, `text-accent`, `bg-surface`, `border-line`. Tailwind's default palette is disabled.
- **Fonts:** `font-serif` (Newsreader) for headings and prose. `font-sans` (Inter) and `.eyebrow` for UI.
- **Motion:** CSS only (`motion-safe:animate-rise`, `.reveal`, `animate-settle`), and it must respect reduced motion.
- **Avoid:** gradients (except photo scrims), glassmorphism, heavy shadows and rounded "app" cards.

## Content conventions
- **Spelling:** American English.
- **Terms:** Guaraní and Spanish terms go in `RichText` as `{gn:tereré}` / `{es:asado}`.
- **Slugs:** ASCII only (`cerro-akati`, `nacunday`). `#anchor` links must match real ids; the link check in QA catches mistakes.

## Accessibility (target WCAG 2.2 AA)
- **Structure:** one `h1` per page, with headings in order.
- **Interaction:** visible focus, touch targets ≥ 44 px.
- **Semantics:** `<dialog>` for overlays, `<details>` for accordions, real `<button>`s.
- **Checks:** run axe and a keyboard pass after UI changes.
