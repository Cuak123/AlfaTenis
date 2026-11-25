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
  images/             # hero-forehand.webp (1800px), og-image.jpg (1200x630)
  images/coaches/     # three 384px headshots
  images/gallery/     # ten photos: nine 800px portraits + one 1300px landscape
  favicon.svg, apple-touch-icon.png, robots.txt, sitemap.xml
assets-source/        # client originals, NOT published — see its README
archive/              # kept but NOT published (flyer_2026.html) — see archive/README.md
tailwind.config.js    # brand colors + fonts + maxWidth.content
embed_image.py        # stale one-off, marked do-not-run
PREGUNTAS-CLIENTE.md  # the open questions for the client, sendable as-is
```

`dist/` is **gitignored and untracked**. It is build output; never hand-edit it.

**Live sections** are whatever `App.jsx` imports and renders, in order:

`SiteHeader → Hero → About → Programs → Pricing → Coaches → Testimonials →
Competition → Gallery → Location → FAQ → Footer`, plus `FloatingWhatsApp`.

The order is deliberate: what we teach, what it costs, who teaches it, who
vouches for it, then the proof (tournaments, photos), then logistics and
objections. Precios sits right after Programas because "how much" is the
question that follows "what classes are there".

Section ids: `inicio`, `nosotros`, `programas`, `precios`, `profesores`,
`testimonios`, `competicion`, `galeria`, `ubicacion`, `faq`, `contacto` (on the
footer). `About.jsx` is "Nosotros"; `Coaches.jsx` is "Profesores".

**`Header.jsx` is the last pre-rebuild orphan** — tracked, NOT imported, still
reading the legacy `src/config/site.js`, tree-shaken out of the bundle. Don't
edit it expecting to change the site. `Pricing.jsx`, `Testimonials.jsx` and
`Gallery.jsx` were orphans too and have all been rewritten onto the content
layer. (`PendingBadge.jsx` was never an orphan — it is a shared helper.)

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
| `gallery.js` | the six gallery photos, with alt text |
| `messages.js` | every prefilled WhatsApp message, by key |
| `pricing.js` | group and individual packs, plus the socio-FAP rate |
| `testimonials.js` | five authorised quotes from the client's sheet |

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
- **One disclosure pattern: native `<details>`.** Profesores, Programas,
  Competición and the FAQ all use it. No flip cards, no JS accordions. It has a
  visible affordance, works on touch and keyboard, needs no JavaScript, and —
  the reason it was chosen over the flip cards that were asked for — the
  content stays in the DOM and in document order when collapsed, so crawlers
  and screen readers still get it.
- **Horizontal strips, never rotating carousels.** Galería and Testimonios are
  `snap-x snap-mandatory` strips with `.custom-scrollbar`. Everything stays in
  the DOM, nothing auto-advances away from someone mid-read, and a carousel
  would mean most visitors see one item instead of all of them. Two traps:
  a strip must be focusable with an accessible name or it cannot be scrolled
  from a keyboard; and **`scroll-snap-type: mandatory` eats a scroll
  container's left padding** — the first item snaps past it and pins
  `scrollLeft` to the padding value. Keep strips inside the page container
  rather than bleeding them with their own padding.
- **Page length is a measured budget.** The page was 22.6 phone screens on
  2026-11-24 and is tracked down from there (13.2 on 2026-11-25); the price
  must stay near the top of the scroll — it is at screen 3.5. Measure with
  section heights over `window.innerHeight` at 375x812 before and after, and
  put both numbers in the commit. Measure *inside* a section before cutting
  it: twice now the obvious-looking target (bullet lists) turned out not to be
  the bulk, and padding was.
- **Every section is `py-14 sm:py-28`.** All nine share it, so the vertical
  rhythm is one decision, not nine. At 375px that spacing alone was 1.8
  screens of the page. A new section copies the same pair rather than picking
  its own.
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
  emitted) and the flyer in `archive/`. **Do not move them back**, and never add
  a client photo to `public/` without first looking at who is in it.
  See `archive/README.md`.
- **Client photo originals go in `assets-source/`, never `public/`.** Nothing
  imports that folder, so Vite never emits it. Its README holds the full
  original→new filename mapping.
- **Photo staging lives OUTSIDE the project**, at `~/alfa-tenis-fotos/`
  (`inbox-torneos-alumnos/`, `restricted/`). New photos are dropped there and
  reviewed; only optimised web versions come into `public/images/`. Photos with
  identifiable minors stay in `restricted/` and never enter the repo: this repo
  is public, so committing one would publish it on `raw.githubusercontent.com`
  at every path forever, and a later deletion would not take it back.
- **Never put a large media batch inside this project folder.** It sits under
  `~/Documents`, which macOS syncs to iCloud. 275 MB of client photos in
  `assets-source/` took `npm run build` from 1.3 s to **9 min 10 s** and
  `npm run lint` from ~2 s to minutes; moving them out restored 1.28 s —
  measured both ways. The signature is `du` (blocks on disk) far below `stat`
  (logical size): iCloud has dematerialised the files and every read pulls them
  back over the network. There are no `.icloud` stubs on modern macOS, so their
  absence proves nothing. `eslint.config.js` ignores `assets-source` and
  `archive` for the same reason — ESLint walks a directory even when its
  `files` glob would skip everything in it.
- **No parental consent is on file for any photo of a minor** (Ley N.° 29733).
  Every photo must be checked for who is in the frame, including the
  background — several portraits were set aside only because children were
  playing on the next court.
- **`src/config/site.js` is legacy.** The live config is `src/content/site.js`.
  Only the four orphan components still read the old one. Don't add to it.
- **`index.html` SEO is real and done** — canonical, OG image (1200×630 at
  `/images/og-image.jpg`), favicon, `robots.txt`, `sitemap.xml`, JSON-LD.
  The host `https://alfa-tenis.vercel.app` is repeated in **four** places:
  `index.html`, `robots.txt`, `sitemap.xml` and `seo.domain` in
  `src/content/site.js`. A custom domain means changing all four.
  The JSON-LD carries `priceRange` (checked against the real extremes in
  `pricing.js`) and `sameAs` (read off the client's own live site). Both were
  removed in November as unsupported claims and came back on 2026-11-24 once
  evidenced. It still omits geo tags and `openingHoursSpecification` — those
  remain unsupported, and a wrong one is worse than none.
- **`alfatenis.com` already exists** — a live WordPress site with the same
  phone and email, which this project is meant to replace. Until the domain is
  repointed, two sites would compete for the same brand, so `vercel.json`
  serves `X-Robots-Tag: noindex, nofollow` **only when the host matches
  `*.vercel.app`**. That condition is the point: when `alfatenis.com` is added
  to this Vercel project it serves indexable with no edit, so nobody has to
  remember to remove a `noindex` on launch day.
  **`robots.txt` stays `Allow: /` on purpose.** Blocking crawling would stop
  search engines from ever reading the `noindex`, which is how a staging URL
  gets stuck in the index instead of leaving it.
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
- **Coach photos** — three of four, from the client's photo batch. The portraits
  were grouped by person (a visual reading) and each group took the name from
  the client's own filename inside it; Marco confirmed the grouping on
  2026-11-18 before anything was wired in. `coaches.js` records which source
  file each one came from, so the mapping can be re-checked rather than trusted.
- **Gallery** — ten photos. Six adults from the client's Instagram and four
  showing minors, added 2026-11-24 after Marco relayed the client's permission.
  What is on file is the academy's permission, not each parent's, which Ley
  N.° 29733 is what actually requires; Marco made that call. `gallery-10` is
  the lesson photo the original brief excluded by name — held back, asked
  about, and cleared. Children are spread through the strip on purpose, not
  grouped at the end.
- **Prices** — group and individual packs plus a socio-FAP rate, from three
  client flyers (2026-11-23). The FAP rate is restricted eligibility, NOT a
  discount, and the UI must keep labelling it that way: someone who is not a
  socio arriving expecting S/ 140 is a wasted first contact.
- **Testimonials** — five of the seven authorised rows. Two left the comment
  cell empty and are not published. Marco confirmed the students are adults.
- **Social URLs** — Instagram, Facebook and TikTok, read off alfatenis.com.
- **Messaging** — the site says "desde los 3 años, de principiantes a
  competitivos" rather than "niños y jóvenes". Both facts come from the
  client's sheet, and the old wording excluded the adults who are plainly a
  large part of the business.

Blocked, waiting on the client:

**`PREGUNTAS-CLIENTE.md` at the repo root is this list as something Marco
can actually send.** It is grouped by what it blocks, it says in each case
what the site currently asserts, and it keeps the already-decided items in a
closing section so they do not get re-asked. Keep the two in sync: this
section is the working note, that file is the client-facing version.

- **Minimum age** — the site says 3, from the client's spreadsheet
  ("A PARTIR DE LOS 3 AÑOS"). Carried-over copy said 4. Three won on
  provenance, but it is the first thing to confirm.
- **"Semiprivadas (2 personas)"** — offered in the FAQ, but the client's own
  price flyers list only grupales and individuales. It may be offering
  something that does not exist. Left in place rather than deleted on a guess.
- **The rest of `faqs.js`** — material provided, rain policy, the 24-hour
  make-up rule and the payment methods all state specific operational policy
  that appears in no client source. Same provenance as the invented prices.
- **Whether packs expire**, whether individual classes have a socio-FAP rate,
  and whether the price changes at Lima Polo Club and Master Cup. All three
  flyers name only Fundo Odría / FAP Monterrico.
- **Which programme each price buys** — Programas is organised by age and
  level, Precios by format. Nothing maps one onto the other, so Programas
  links to Precios rather than asserting a correspondence.
- **"Av." or "Jr."** José Nicolás Rodrigo 100 — three flyers say Av., the
  spreadsheet says Jr., and venues.js publishes Jr.
- **A photo of Rómulo** — no fourth person appears anywhere in the client's
  batch, so his card renders the initials monogram. That is the designed
  fallback, not a hole to fill with a stock face; when a photo arrives it is one
  line in `coaches.js`.
- **The accented spelling** of the four coaches' names. The client's sheet is
  ALL CAPS with no accents, so they are published unaccented — very likely
  André / Vílchez / Pérez / Rómulo / Dávila.
- **Tournament categories** — three conflicting sources: the detailed flyer says
  `5B Mixto`, the teaser says `Cat 5A & 5B`, and the trophy in `gallery-05`
  reads `CATEGORÍA 4ta · SURCO — 2026`. The site shows `5A y 5B`. This is why
  the trophy photo is in the gallery and not beside the Competición copy.
- **The logo** as PNG or SVG with transparency. `assets-source/brand/` has it
  only as a JPEG on pure black, which would render as a black rectangle on the
  navy surface.
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
