# assets-source/

Original client photos. **Nothing here is published.**

Vite only emits files that a module imports, and nothing imports this folder, so
these are source material: the full-resolution originals to crop and optimise
from. The web-ready versions live in `public/images/`.

These arrived on 2026-11-18 as `public/images/profe images/`. That path would
have published all 9 MB verbatim — a `.DS_Store`, a 2.3 MB untouched camera
original, WhatsApp filenames with timestamps, and five photos showing minors.
They were moved out before any of it was committed.

## Rules

- **Never put a client photo in `public/` without checking who is in it.**
  `public/` is copied verbatim to the site root and is reachable by URL whether
  or not a page links to it.
- **This repo is public.** Anything committed is downloadable by anyone from
  `raw.githubusercontent.com`, at every path it has ever had. Deleting it later
  does not take it back.
- Optimise to WebP at q85–90, max ~2000px, and **never upscale**.

## `restricted/` — gitignored, do not commit

Five photos with identifiable minors in frame. No parental consent is on file,
which Ley N.° 29733 requires, so they are excluded from git entirely rather than
merely from the build. They stay on disk so the client still has them.

| file | what is in it |
|---|---|
| `Alumnos 3.jpeg` | 4032×3024. A coach and a child mid-lesson; the child's face is clear and in the foreground. This is the "kid-lesson photo" the original brief ruled out. |
| `Profe andre 2.jpeg` | Portrait, with a child playing on the court behind. |
| `WhatsApp … 18.14.46.jpeg` | Portrait, children on the adjacent court behind. |
| `WhatsApp … 18.14.46 (1).jpeg` | Portrait, two children behind. |
| `WhatsApp … 18.14.46 (2).jpeg` | Portrait, two children behind. |

Original filenames kept, so the client can match them against their own copies.

Some could be rescued by cropping the children out. That is a decision, not a
cleanup — ask before doing it.

## `coaches/named-by-client/`

The client's own filename said who this is. All 1200×1600.

| file | was | background |
|---|---|---|
| `arnold-01.jpeg` | `Profe Arnold.jpeg` | busy — apartment block, floodlights, players on the far court |
| `andre-01.jpeg` | `Profe andre.jpeg` | **clean** — plain green mesh |
| `luis-01.jpeg` | `Profe Luis.jpeg` | **clean** — plain green mesh |
| `luis-02.jpeg` | `Profe Luis 2.jpeg` | busy — dusk, apartment block, players behind |
| `luis-03.jpeg` | `Profe Luis 3.jpeg` | **clean** — plain green mesh |
| `luis-04.jpeg` | `Profe luis 4.jpeg` | **clean** — plain green mesh, wider framing |

## `coaches/unnamed/`

Six portraits whose source filenames were only WhatsApp timestamps. All
1200×1600, no minors in frame.

| file | was | background |
|---|---|---|
| `portrait-01.jpeg` | `WhatsApp … 18.14.46 (3).jpeg` | **clean** |
| `portrait-02.jpeg` | `WhatsApp … 18.14.47.jpeg` | **clean** |
| `portrait-03.jpeg` | `WhatsApp … 18.14.49.jpeg` | **clean** |
| `portrait-04.jpeg` | `WhatsApp … 18.14.49 (1).jpeg` | **clean**, tightest framing of the set |
| `portrait-05.jpeg` | `WhatsApp … 18.14.49 (2).jpeg` | busy — dusk, apartment block |
| `portrait-06.jpeg` | `WhatsApp … 18.14.50 (1).jpeg` | **clean** |

**These are not matched to names on purpose.** Three distinct men appear across
all twelve portraits, and the only evidence of who is who is the client's three
filenames. Putting the wrong name under a real person's face on a public site is
not a defect you fix with an apology, so the mapping has to come from the client
or from Marco, not from me reading faces.

What is worth knowing when that mapping arrives: **the unnamed portraits are
generally the better photographs.** They are shot against plain green mesh and
framed tighter. Compare `arnold-01.jpeg` (apartment block behind him) with
`portrait-03`, `portrait-04` and `portrait-06`, which are the same man against
nothing but green.

**Rómulo Vicente Rojas Manrique is missing.** He is in the client's staff table
with 26 years' experience, the most senior of the four, and no photo in this
batch is a fourth person.

## `academy/`

| file | was | notes |
|---|---|---|
| `group-court-01.jpeg` | `Alumnos.jpeg` | 1600×1200, five adults on the clay court |
| `group-court-02.jpeg` | `Alumnos 2.jpeg` | 1600×1200, same group, different frame |

The only **landscape** photos in the batch, and the only ones wider than 1200px.
That makes them the realistic source for a new `og-image.jpg` (1200×630), which
is currently composed from the hero photo. Adults only.

## `brand/`

`logo-on-black.jpeg` — was `Logo alfa tenis.jpeg`, 739×1600.

The real Alfa Tenis mark, but as a **JPEG on pure black** with large black bars
above and below. The site's surface is `brand-dark` `#0f172a`, a navy — so this
would render as a visible black rectangle in the header.

**Ask the designer for the logo as PNG or SVG with transparency.** Keying the
black out of a JPEG leaves fringing on the racket strings and the ball.
