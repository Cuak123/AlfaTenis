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
 * The first six show adults only. They are identifiable people, and the
 * academy posting a photo to its own Instagram is not the same as each player
 * agreeing to appear on a commercial site. Marco accepted that on 2026-11-18.
 *
 * The last three show MINORS, added 2026-11-24 after Marco said the client had
 * confirmed photos of children may be published. Recorded precisely, because
 * the distinction matters if it is ever questioned: what is on file is the
 * academy's permission, relayed by Marco. Under Ley N.° 29733 the consent that
 * counts for a minor is the parent's or guardian's, which is not the same
 * thing. I raised that once; Marco made the call and it is his client
 * relationship. If a parent objects, delete that record here and the file in
 * public/images/gallery — nothing else references either.
 *
 * `gallery-10` is `Alumnos 3.jpeg`, the only photo in the whole batch showing
 * an actual lesson in progress — a coach feeding balls to a child. It is by
 * far the most persuasive image here for a parent: everything else is poses
 * and prizes, this is the academy doing its job.
 *
 * It is also, word for word, the "kid-lesson photo" that Marco's original
 * brief excluded by name. A later general permission for children's photos
 * does not automatically override a specific exclusion, so it was held back
 * and asked about; Marco cleared it on 2026-11-24.
 *
 * It is the one landscape frame in a set of portraits, and the distance
 * between coach and child is the whole story, so it runs first and is never
 * cropped. Since 2026-11-24 the section is a horizontal strip with a fixed
 * height and automatic widths, so it simply occupies a wider slot — the
 * `wide` flag that used to make it span two grid columns is no longer read
 * by the component and is kept only as a note about the frame.
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
 * ── Processing and the two sizes ────────────────────────────────────────────
 * Instagram serves ~1100px. Each was downscaled to 800px wide at WebP q85
 * (never upscaled — asserted at conversion time).
 *
 * That size is right for a desktop and twice what a phone can use, and until
 * 2026-11-25 the phone was the one paying: `loading="lazy"` only defers until
 * an image is NEAR the viewport, and in a horizontal strip all ten are near
 * at once, so a phone pulled all 1,604 KB the moment Galería scrolled in.
 *
 * Each file now has a 640px-tall twin, `<name>-640.webp`. The set drops to
 * 854 KB — 47% less — and a desktop still gets the full-size files. 900px was
 * measured too and saved only 7%, because the originals are already about
 * 1000px tall.
 *
 * 640 rather than the 600 that exactly matches the strip at DPR 2, because
 * exact turned out to be dangerous. The first attempt used 600 and declared
 * the slot from the <li>'s 300px height; the li has a 1px border top and
 * bottom, so the image is really 298px tall. Two CSS pixels of error put
 * gallery-01's requirement at 496px against a 495px file and the browser
 * silently fell back to the 800px original — no warning, just the weight
 * back. 640 leaves 30–60px of headroom, which costs 85 KB across the set and
 * means a small future drift in these numbers cannot quietly undo the whole
 * change.
 *
 * `srcSetFor` and `sizesFor` below derive both attributes from each record's
 * own width and height, so the browser is told the real slot width per photo
 * rather than one average that is wrong for every aspect ratio in the set.
 *
 * ── Order ───────────────────────────────────────────────────────────────────
 * Deliberate, and independent of the file numbering. Two rules: the trophy
 * sits second so the first row is not three near-identical group shots, and
 * the children are spread through the grid rather than grouped at the end.
 * That second one is the point of adding them — a gallery where the adults
 * come first and the kids are an afterthought still tells a parent this place
 * is not for them. Reorder freely by moving records; `src` need not follow.
 *
 * @typedef {Object} GalleryImage
 * @property {string} id
 * @property {string} src      Path under /images/gallery.
 * @property {string} alt      Describes the photo; never the file name.
 * @property {number} width
 * @property {number} height
 * @property {boolean} [wide]  Spans two columns from `sm`. For landscape
 *                             photos that a portrait cell would ruin.
 *
 * @type {GalleryImage[]}
 */
export const gallery = [
  {
    id: 'clase-con-entrenador',
    src: '/images/gallery/gallery-10.webp',
    alt: 'Un entrenador alcanza bolas desde un cesto mientras un niño se prepara para devolver el golpe, en la cancha de arcilla.',
    width: 1300,
    height: 975,
    wide: true,
  },
  {
    id: 'grupo-cuatro-jugadores',
    src: '/images/gallery/gallery-01.webp',
    alt: 'Cuatro jugadores posan con sus raquetas junto a la red, en la cancha de arcilla, delante del banner de Alfa Tenis.',
    width: 800,
    height: 969,
  },
  {
    id: 'ninas-con-entrenador',
    src: '/images/gallery/gallery-07.webp',
    alt: 'Un entrenador posa en la cancha de arcilla con tres niñas que sostienen sus raquetas.',
    width: 800,
    height: 1067,
  },
  {
    id: 'trofeo-campeon',
    src: '/images/gallery/gallery-05.webp',
    alt: 'Trofeo de campeón del Torneo Relámpago de Alfa Tenis, junto a una copa pequeña rematada con una pelota de tenis.',
    width: 800,
    height: 1062,
  },
  {
    id: 'grupo-juvenil',
    src: '/images/gallery/gallery-08.webp',
    alt: 'Grupo de jugadores jóvenes con sus raquetas, alineados a lo largo de la red de la cancha.',
    width: 800,
    height: 1067,
  },
  {
    id: 'finalistas-marcador',
    src: '/images/gallery/gallery-02.webp',
    alt: 'Dos jugadores abrazados junto a la red al terminar su partido, con el marcador de la cancha a un lado.',
    width: 800,
    height: 931,
  },
  {
    id: 'dos-ninas-sonriendo',
    src: '/images/gallery/gallery-09.webp',
    alt: 'Dos niñas sonríen en la cancha de arcilla, con sus raquetas y gorras, al terminar la clase.',
    width: 800,
    height: 1067,
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

/**
 * The strip is a fixed height with automatic width, so a photo's displayed
 * WIDTH is its aspect ratio times that height.
 *
 * These are the CONTENT heights, two pixels under the h-[300px]/h-[380px]/
 * h-[420px] on the <li> in Gallery.jsx, because that element has a 1px border
 * top and bottom. Getting this wrong by those two pixels is what made the
 * browser reject a variant and reload the full-size file. If the h-[...]
 * classes or the border change, change these with them.
 */
const STRIP_HEIGHTS = { base: 298, sm: 378, lg: 418 };

/** @param {GalleryImage} image */
export function srcSetFor(image) {
  const small = image.src.replace(/\.webp$/, '-640.webp');
  const smallWidth = Math.round((image.width * 640) / image.height);
  return `${small} ${smallWidth}w, ${image.src} ${image.width}w`;
}

/**
 * Width descriptors are useless without telling the browser how wide the slot
 * actually is: left to its own devices it assumes 100vw and picks the large
 * file every time.
 * @param {GalleryImage} image
 */
export function sizesFor(image) {
  const widthAt = (h) => Math.round((image.width * h) / image.height);
  return [
    `(min-width: 1024px) ${widthAt(STRIP_HEIGHTS.lg)}px`,
    `(min-width: 640px) ${widthAt(STRIP_HEIGHTS.sm)}px`,
    `${widthAt(STRIP_HEIGHTS.base)}px`,
  ].join(', ');
}

/** Section copy. */
export const gallerySection = {
  eyebrow: 'Galería',
  heading: 'Así se vive',
  headingAccent: 'la cancha',
  subcopy:
    'Momentos de nuestros torneos y del día a día en la academia.',
};
