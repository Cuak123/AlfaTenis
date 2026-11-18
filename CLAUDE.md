# CLAUDE.md — Alfa Tenis landing

Guidance for working in this repo. Keep it in sync when conventions change.
Personal defaults (commit style, attribution, when to commit) live in
`~/.claude/CLAUDE.md` — not repeated here.

## What this is

Single-page marketing landing for **Alfa Tenis**, a tennis academy in Lima, Perú
(es-PE), built on the client's own data.

- **Goal:** drive **class enrollment / signups** — every CTA funnels to
  **WhatsApp**, through `waLink()`.
- **Differentiator / angle:** **high-performance coaching**.
- **Repo:** `github.com/Cuak123/AlfaTenis`. Working branch is **`main`**.
- **Deploy:** **Vercel**, auto-deploying on every push to `main`
  (`vercel.json`). Live at **https://alfa-tenis.vercel.app**. A push to `main`
  ships to production in about 10 seconds.
- **The repo is PUBLIC.** Anything committed is downloadable by anyone from
  `raw.githubusercontent.com`, at every historical path. Marco knows and has
  chosen to leave it public for now.

The old "genericize into a reusable template" direction is **dead**. The branch
`feature/generic-template` still exists locally but is not the working branch,
and the site is back to real Alfa Tenis content.

## Stack

package.json is the source of exact versions; below are the major versions.

| | |
|---|---|
| Build tool | **Vite 7** (`@vitejs/plugin-react`, Babel Fast Refresh) |
| UI | **React 19** — plain **JSX, no TypeScript**, no React Compiler |
| Styling | **Tailwind CSS 3** (`tailwind.config.js` + PostCSS + autoprefixer) |
| Icons | `lucide-react` |
| Lint | **ESLint 9** flat config (`eslint.config.js`) |
| Runtime / PM | Node + **npm** (`package-lock.json` committed) |
| Deploy | **Vercel** (`vercel.json`) |

Tailwind is **v3** (classic `tailwind.config.js` + `@tailwind` directives in
`src/index.css`), **not** the v4 `@theme` setup used in other repos.

## Commands

```bash
npm install         # deps
npm run dev         # Vite dev server (HMR) → http://localhost:5173
npm run build       # production build → dist/  (must pass before "done")
npm run preview     # serve the built dist/ on http://localhost:4173
npm run lint        # ESLint over the repo
```

There is **no `deploy` script** — Vercel builds from `main` on push. There is no
`.env` and no env vars; nothing to configure to run locally. `README.md` is
still the default Vite template readme, not project docs.

`.claude/launch.json` defines `alfa-tenis-dev` (5173) and `alfa-tenis-preview`
(4173) for the preview tooling.

**Never run `npm run build` while a dev server is up** — both use `dist/` and
the build fails with `ENOTEMPTY`. Stop the server first.

## Structure

```
index.html            # entry + ALL SEO/meta/JSON-LD (real values, see SEO below)
vercel.json           # framework + SPA catch-all rewrite to /index.html
src/
  main.jsx            # React root (StrictMode)
  App.jsx             # assembles sections in order; controls the live section set
  index.css           # Google Fonts import + @tailwind + base layer
  content/            # THE CONTENT LAYER — one file per section, data only, no JSX
  lib/whatsapp.js     # waLink() / waLinkProps(): the only place a wa.me URL is built
  components/         # one component per section; copy comes from content/
  config/site.js      # LEGACY — only the orphan components still read this
  assets/             # imported images: Gallery/, Staff/, Testimonials/, Tournaments/
public/               # copied verbatim to the site root — see the privacy note
  images/             # hero-entrenamiento.webp, og-image.jpg
  favicon.svg, apple-touch-icon.png, robots.txt, sitemap.xml
archive/              # kept but NOT published (flyer_2026.html) — see archive/README.md
tailwind.config.js    # brand colors + fonts + maxWidth.content
embed_image.py        # stale one-off, marked do-not-run
```

`dist/` is **gitignored and untracked**. It is build output; never hand-edit it.

**Live sections** are whatever `App.jsx` imports and renders, in order:

`SiteHeader → Hero → About → Programs → Coaches → Competition → Location → FAQ
→ Footer`, plus `FloatingWhatsApp`.

Section ids: `inicio`, `nosotros`, `programas`, `profesores`, `competicion`,
`ubicacion`, `faq`, `contacto` (on the footer). `About.jsx` is "Nosotros";
`Coaches.jsx` is "Profesores"; `Competition.jsx` is "Competición".

**Orphan components — tracked but NOT imported**, left from the pre-rebuild
site: `Header.jsx`, `Pricing.jsx`, `Testimonials.jsx`, `Gallery.jsx`. All four
still import the legacy `src/config/site.js`. They are tree-shaken out of the
bundle. Do not edit them expecting to change the site; if you revive one, port
it to `src/content/` first. (`PendingBadge.jsx` is not an orphan — it is a
shared helper used by several live sections.)

## The content layer

**All copy and data live in `src/content/*.js`. Components contain no hardcoded
strings beyond structural labels.** Each file starts with `// @ts-check` and
uses JSDoc typedefs from `src/content/types.js` — typed data without a
TypeScript migration.

| file | holds |
|---|---|
| `site.js` | brand, contact (email/phone/city), `whatsapp.phone`, `social`, `nav`, `seo` |
| `hero.js`, `about.js`, `programs.js`, `faqs.js` | section copy |
| `coaches.js` | the four coaches, from the client's spreadsheet |
| `venues.js` | the three venues, `openingHours`, `venuesSummary`, `mapLinks()` |
| `tournaments.js` | the 2026 Torneo Relámpago |
| `messages.js` | every prefilled WhatsApp message, by key |
| `pricing.js`, `testimonials.js` | present but EMPTY / null — see Blocked below |

**The core rule, documented in `types.js`: anything the client has not
confirmed is `null` or an empty array, never a plausible-looking placeholder.**
Components render conditionally, so an unconfirmed field disappears instead of
shipping as fact. `PendingBadge` marks such fields **in dev only** — it returns
`null` in production, so a badge can never reach a visitor.

WhatsApp CTAs must go through `waLink(key)` / `waLinkProps(key)` with a key from
`messages.js`. Never inline a `wa.me` URL or a message string in a component.

## Conventions

- **Lint:** ESLint flat config (`js.recommended` + react-hooks + react-refresh;
  `dist` ignored; unused vars error, `^[A-Z_]` exempted). No Prettier — match
  surrounding style: 2-space indent, single quotes.
  **There is no `eslint-plugin-react`**, so `react/jsx-uses-vars` never runs and
  a variable used *only* as `<Icon />` is reported as unused. `varsIgnorePattern`
  exempts variables, not destructured params. Work around it with
  `{Icon ? <Icon /> : null}`, or add the plugin.
- **Components:** `.jsx`, default export, `function Name()`, one per file,
  PascalCase filename.
- **Styling:** Tailwind utilities inline. Use the **brand tokens**, not raw hex:
  `brand-dark` `#0f172a`, `brand-blue` `#0066FF` (+`brand-blue-dark`),
  `brand-neon` `#ccff00` (+`brand-neon-hover`), `whatsapp` `#25D366`.
  Fonts: `font-sans` = Inter, `font-display` = Montserrat (imported in
  `index.css`). `max-w-content` = 72rem is the shared page width — use it so
  every section's left edge lines up. Dark theme is the default.
  **White on `whatsapp` green is ~1.8:1 and fails the 3:1 non-text minimum** —
  pair that green with a `brand-dark` glyph.
- **Animations:** the only custom one is `animate-fade-in-up`, defined in
  `src/index.css` with a blanket `prefers-reduced-motion` guard — currently
  defined but unused. Add new keyframe classes there, not in the Tailwind config.
  **Never animate the hero copy in** — it gates LCP and leaves the headline
  invisible if the animation does not run.
- **Focus:** a global `:focus-visible` ring is set in `index.css`. Don't
  re-implement it per component; don't remove it.
- **Assets:** components import from `src/assets/**` (Vite only emits what is
  imported); `public/` files are referenced by absolute path and are **always
  published**.

## Tests

**There is no test suite.** Don't go looking for one. Verify by running
`npm run build` + `npm run preview` and checking the browser at 375px and
desktop.

## Constraints, gotchas & don't-touch

- **`public/` is published verbatim.** Anything placed there is reachable by URL
  on the live site whether or not a page links to it. Two tournament photos of
  identifiable minors shipped this way for months before being moved out on
  2026-11-18. They now live in `src/assets/Tournaments/` (unimported, so never
  emitted) and the flyer in `archive/`. **Do not move them back**, and do not
  add client photos to `public/` without checking who is in them.
  See `archive/README.md`.
- **No parental consent is on file for any photo of a minor** (Ley N.° 29733).
  That blocks the gallery and any tournament photography.
- **`src/config/site.js` is legacy.** The live config is `src/content/site.js`.
  Only the four orphan components still read the old one. Don't add to it.
- **`index.html` SEO is real and done** — canonical, OG image (1200×630 at
  `/images/og-image.jpg`), favicon, `robots.txt`, `sitemap.xml`, JSON-LD.
  The host `https://alfa-tenis.vercel.app` is repeated in **four** places:
  `index.html`, `robots.txt`, `sitemap.xml` and `seo.domain` in
  `src/content/site.js`. A custom domain means changing all four.
  The JSON-LD deliberately omits `priceRange`, `sameAs`, geo tags and
  `openingHoursSpecification` — each was an unsupported claim.
- **`vite.config.js` has `base: '/'`, which is correct for Vercel.** The old
  GitHub Pages project-site caveat no longer applies: the `gh-pages` branch was
  deleted on 2026-11-18 (archived locally as `gh-pages-archive`) and the Pages
  site now 404s. It had been publishing invented prices for ~11 months.
- **`embed_image.py` is a stale one-off**, already run, with paths that are now
  wrong twice over. It carries a do-not-run header. Don't wire it into anything.
- **Duplicated / messy assets:** `src/assets/Staff/` has both `.jpeg` and `.png`
  of the same people plus several `image copy N.png`. Verify what a component
  actually imports before deleting.
- **No legal/consent layer:** no cookie banner, no privacy page. The Google Maps
  embed in `Location.jsx` is therefore **click-to-load** — it must stay that way
  until a consent layer exists, so nothing third-party loads unasked.
- **Don't commit** real client PII beyond what is already intentionally public —
  and remember the repo is public. The client's spreadsheet of students and the
  tournament flyers are **source material, not repo content**.

## Client data: what is confirmed, what is not

Confirmed and live (from the client's spreadsheet and flyers, 2026-11-18):

- **Coaches** — four, in `coaches.js`. **Carlos Bartra is deliberately not
  listed**: he does not appear in the client's own staff table. Earlier versions
  of this file called him head coach; that was wrong.
- **Venues** — three: Club Fundo Odría FAP (Jr. José Nicolás Rodrigo 100,
  Monterrico), Lima Polo Club (Surco), Master Cup (Surco).
- **Hours** — `6:00 a. m. a 11:00 p. m.`, which is **venue opening hours**, not a
  class timetable. The old "Lunes a viernes de 4:00 a 7:00 p. m." was a class
  timetable and is no longer asserted anywhere.
- **Tournament** — Torneo Relámpago Alfa Tenis 2026, shown as a **past** edition
  (3 October 2026). The `isPast` flag drives the wording.

Blocked, waiting on the client:

- **Prices** — every figure in `pricing.js` is `null`; there is no Precios
  section. The old numbers (S/ 160/280/380, 200/320/560) were invented and were
  internally inconsistent.
- **Testimonials** — `testimonials.js` is empty. The client's sheet has seven
  quotes marked `AUTORIZACION = SI`, but it is not established whether those
  students are minors; if so, consent must come from a parent.
- **Coach photos**, and the **accented spelling** of the four coaches' names
  (the sheet is ALL CAPS with no accents, so they are published unaccented).
- **Tournament categories** — the two flyers disagree (`5A & 5B` vs `5B Mixto`).
- **Social URLs** — all empty in `site.js`; empty hides the link rather than
  rendering a dead `#`.
- **The Wilson logo is excluded by Marco's brief**, even though it appears on a
  client flyer. Credit sponsors generically.

## Definition of done — satisfy before saying a task is complete

- [ ] `npm run build` passes and `npm run lint` is clean.
- [ ] Verified in the browser on a **production** build (`npm run preview`), no
      console errors.
- [ ] Responsive checked — 375px and desktop, no horizontal overflow.
- [ ] Brand tokens used (no stray hex); copy stays es-PE.
- [ ] No invented client data. Unconfirmed values are `null`/empty, not
      plausible placeholders.
- [ ] Nothing added to `public/` that should not be publicly reachable.
- [ ] Edited a **live** component, not one of the four orphans; didn't
      hand-edit `dist/`.
- [ ] If the domain changed: all **four** copies of the host updated.
