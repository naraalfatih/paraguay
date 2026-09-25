# CLAUDE.md — Paraguay website

An editorial travel guide to Paraguay, built with Next.js 16 (App Router), React 19, TypeScript and Tailwind 4. Every page is statically generated.
Full design: `docs/architecture.md`. Facts: `content/paraguay-research.md` (source IDs in `content/sources.md`).

## Commands
- `npm run dev` — local dev server
- `npm run build` — type-checks and prerenders every route. **Run before every commit.**
- `npm run lint` — ESLint

## Hard rules
- **No new dependencies** without the owner's approval. Runtime deps are only `next`, `react` and `react-dom`.
- **Static only.** No API routes, server actions, database, CMS, cookies/headers, ISR or client-side data fetching.
- **Copy lives in `src/data/`**, never hard-coded in components. Components render data.
- **Facts come only from `content/paraguay-research.md`.** Never invent facts, numbers, dates or superlatives.
  - Items marked `[!]` there must be phrased cautiously, put in a "check before you go" note, or left out.
  - Don't do web research unless the owner asks.
- **Never state visa or entry rules, fees, exchange rates or schedules as fact.** Link to official sources instead.
- **Reuse existing components** in `src/components/` before creating new ones. Don't duplicate markup patterns.
- **Keep client components minimal** (`"use client"` only for real interactivity). Essential content must work without JS.
- **Don't refactor or restyle** working code unless asked.

## Design system (see `src/app/globals.css`)
- **Colors:** Use brand tokens only. Tailwind's default palette is disabled.
  - Semantic, tone-aware: `text-fg`, `text-muted`, `text-accent`, `bg-surface`, `border-line`.
  - Tones: wrap content in `<Section tone="paper|sand|night">`.
  - `ocre` and `lapacho` are decorative only on light backgrounds (they fail contrast as text).
- **Fonts:** `font-serif` (Newsreader) for headings and prose. `font-sans` (Inter) for UI, eyebrows, buttons and meta.
- **Layout:** Use `Container` sizes `prose | content | wide`. Spacing uses the `gutter`, `section` and `section-sm` tokens.
- **Motion:** CSS only (`motion-safe:animate-rise`, `.reveal`). Always respect reduced motion. No animation libraries.
- **Look:** Editorial. Serif headlines, hairline rules, square-ish corners, generous whitespace. Avoid gradients (except photo scrims), glassmorphism, heavy shadows and pill-shaped cards.

## Content conventions
- **Spelling:** American English for site copy.
- **Terms:** Guaraní and Spanish terms go in `RichText` as `{gn:tereré}` / `{es:asado}`, which renders italics with a `lang` attribute.
- **Slugs:** ASCII only (`cerro-akati`, `nacunday`).
- **Images:** Go through the registry `src/data/images.ts` (`alt` required, credit and license required for real photos). Entries without `src` render a designed placeholder panel.
- **Time-sensitive pages** show `lastReviewed` (in `src/data/site.ts`).

## Accessibility
- **Target:** WCAG 2.2 AA.
- **Headings:** One `h1` per page, with headings in order.
- **Interaction:** Visible focus, 44 px touch targets, `aria-current` on nav.
- **Semantics:** `<dialog>` for overlays, `<details>` for accordions, real `<button>`s for actions.

## Workflow (budget-conscious)
- Read this file and `docs/architecture.md`. Don't re-explore the repo.
- Make small, focused diffs. One page or feature per task.
- Before committing, run `npm run build`, then check the page in a browser (Playwright/Chromium is available).
