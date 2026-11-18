// @ts-check

/**
 * "Galería" — photos from the academy's own Instagram.
 *
 * SOURCE: six photos from the client's Instagram post about the Torneo 4ta
 * Categoría at Club Fundo Odría, supplied by Marco on 2026-11-18. All six are
 * used.
 *
 * ── On the Wilson logo ──────────────────────────────────────────────────────
 * Three of these show a Wilson banner or a Wilson ball. The brief rules out
 * USING the Wilson logo as a brand mark; Marco confirmed on 2026-11-18 that a
 * sponsor banner appearing in the background of a court photo is a different
 * thing and is fine. That distinction still holds: do not lift the logo out of
 * a photo, put it in the footer, or present Wilson as a partner in copy.
 *
 * ── On consent ──────────────────────────────────────────────────────────────
 * Everyone pictured is an adult; no minors appear in any of the six, which is
 * why a gallery is possible at all. They are still identifiable people, and
 * the academy posting a photo to its own Instagram is not the same as each
 * player agreeing to appear on a commercial site. Marco accepted that on
 * 2026-11-18. If anyone objects, remove their record here — nothing else
 * references these files.
 *
 * ── On the trophy photo ─────────────────────────────────────────────────────
 * `gallery-05` reads "TORNEO RELÁMPAGO 2026 · CAMPEÓN · CATEGORÍA 4ta ·
 * SURCO — 2026". That is the best visual proof the tournament happened, but it
 * is NOT in the Competición section on purpose: that section currently says
 * "Categorías 5A y 5B", taken from the flyers, and putting the photo beside it
 * would show the page contradicting itself. Here it is fine — the gallery
 * claims only "nuestros torneos", plural. Move it once the category question
 * is settled. See src/content/tournaments.js.
 *
 * ── Processing ──────────────────────────────────────────────────────────────
 * Instagram serves ~1100px. Each was downscaled to 800px wide at WebP q85
 * (never upscaled — asserted at conversion time), which is ~2.2x the largest
 * cell the grid renders. 85–156 KB each, all below the fold and lazy.
 *
 * ── Order ───────────────────────────────────────────────────────────────────
 * Deliberate, and independent of the file numbering: the trophy sits second so
 * the first row is not three near-identical group shots. Reorder freely by
 * moving records; the `src` values do not have to follow the array.
 *
 * @typedef {Object} GalleryImage
 * @property {string} id
 * @property {string} src      Path under /images/gallery.
 * @property {string} alt      Describes the photo; never the file name.
 * @property {number} width
 * @property {number} height
 *
 * @type {GalleryImage[]}
 */
export const gallery = [
  {
    id: 'grupo-cuatro-jugadores',
    src: '/images/gallery/gallery-01.webp',
    alt: 'Cuatro jugadores posan con sus raquetas junto a la red, en la cancha de arcilla, delante del banner de Alfa Tenis.',
    width: 800,
    height: 969,
  },
  {
    id: 'trofeo-campeon',
    src: '/images/gallery/gallery-05.webp',
    alt: 'Trofeo de campeón del Torneo Relámpago de Alfa Tenis, junto a una copa pequeña rematada con una pelota de tenis.',
    width: 800,
    height: 1062,
  },
  {
    id: 'finalistas-marcador',
    src: '/images/gallery/gallery-02.webp',
    alt: 'Dos jugadores abrazados junto a la red al terminar su partido, con el marcador de la cancha a un lado.',
    width: 800,
    height: 931,
  },
  {
    id: 'rivales-en-la-red',
    src: '/images/gallery/gallery-04.webp',
    alt: 'Dos jugadores con sus raquetas a ambos lados de la red, en la cancha de arcilla.',
    width: 800,
    height: 963,
  },
  {
    id: 'jugadores-sonrientes',
    src: '/images/gallery/gallery-03.webp',
    alt: 'Dos jugadores sonríen con sus raquetas frente a la red, en la cancha de arcilla de Club Fundo Odría.',
    width: 800,
    height: 1089,
  },
  {
    id: 'dupla-posando',
    src: '/images/gallery/gallery-06.webp',
    alt: 'Dos jugadores posan abrazados con sus raquetas al borde de la cancha de arcilla.',
    width: 800,
    height: 1082,
  },
];

/** Section copy. */
export const gallerySection = {
  eyebrow: 'Galería',
  heading: 'Así se vive',
  headingAccent: 'la cancha',
  subcopy:
    'Momentos de nuestros torneos y del día a día en la academia.',
};
