// @ts-check

/**
 * Coaching staff.
 *
 * SOURCE: "alumnos alfa.xlsx" (client-supplied, 2026-11-18), sheet Hoja1,
 * table "ENTRENADORES". Every field below is copied from that sheet. Nothing
 * here is inferred, rounded or embellished.
 *
 * Carlos Bartra is deliberately NOT listed: he does not appear in the client's
 * own staff table, and Marco confirmed on 2026-11-18 to use this list instead.
 * (CLAUDE.md still names him as head coach — that note is out of date.)
 *
 * Three normalisations were applied to make the data presentable. All three are
 * reversible and flagged for the client:
 *
 *   1. ALL CAPS -> title case. Accents were NOT added, because the source has
 *      none and guessing them would invent spelling. "Andre", "Vilchez",
 *      "Perez", "Romulo" and "Davila" are very likely André / Vílchez / Pérez /
 *      Rómulo / Dávila — see `displayNameNeedsReview`.
 *   2. Level abbreviations expanded: PRIN -> Principiantes, SEMI COMPE ->
 *      Semicompetitivos, COMPE -> Competitivos. The sheet's own "NIVELES DE
 *      ENSEÑANZA" list is Principiantes / Intermedios / Avanzados /
 *      Competitivos, so "Semicompetitivos" is the one label not taken verbatim
 *      from it.
 *   3. "PLAY TENNS" (coach 4) read as the "PLAY TENNIS" certification that
 *      coach 1 also holds. Kept as `rawCertifications` so the typo is visible.
 *
 * NOT in the sheet, so absent here: bios, and any head-coach or seniority
 * ranking. The order below is the sheet's order and implies nothing.
 *
 * ── Photos ──────────────────────────────────────────────────────────────────
 * Added 2026-11-18 from the client's photo batch (see assets-source/README.md).
 * Twelve portraits showed three men; the grouping by person is a visual reading
 * and the name on each group came from the client's own filename inside it.
 * Marco confirmed the three groups before any photo was wired in.
 *
 *   arnold-davila  <- coaches/unnamed/portrait-04.jpeg
 *   andre-vilchez  <- coaches/unnamed/portrait-02.jpeg
 *   luis-priale    <- coaches/named-by-client/luis-03.jpeg
 *
 * Each is a 780px head-and-shoulders square from a 1200x1600 original,
 * downscaled to 384px WebP q85 — never upscaled, asserted at conversion.
 *
 * Romulo has NO photo: no fourth person appears anywhere in the batch. His
 * card keeps the initials monogram, which is the honest fallback.
 *
 * @type {import('./types.js').Coach[]}
 */
export const coaches = [
  {
    id: 'andre-vilchez',
    name: 'Andre Alexander Vilchez Perez',
    role: 'Entrenador',
    yearsExperience: 14,
    levels: ['Principiantes', 'Semicompetitivos', 'Competitivos'],
    credentials: ['Play Tennis'],
    rawCertifications: 'PLAY TENNIS',
    clubs: ['Arraya Tenis', 'Regatas'],
    playerBackground: 'Circuito nacional, categoría competitiva',
    photo: '/images/coaches/andre-vilchez.webp',
    displayNameNeedsReview: true,
    confirmed: true,
  },
  {
    id: 'romulo-rojas',
    name: 'Romulo Vicente Rojas Manrique',
    role: 'Entrenador',
    yearsExperience: 26,
    levels: ['Principiantes', 'Semicompetitivos', 'Competitivos'],
    // Sheet records "-" for certifications: none on file, not "unknown".
    credentials: [],
    rawCertifications: '-',
    clubs: ['FAP', 'Master', 'Boca Raton', 'Arraya Tennis'],
    playerBackground: 'Circuito nacional, categoría competitiva',
    photo: null,
    displayNameNeedsReview: true,
    confirmed: true,
  },
  {
    id: 'arnold-davila',
    name: 'Arnold Davila Navarro',
    role: 'Entrenador',
    yearsExperience: 9,
    levels: ['Principiantes', 'Semicompetitivos', 'Competitivos'],
    credentials: ['Play & Stay', 'ITF Nivel 1'],
    rawCertifications: 'PLAY & STAY / ITF NIVEL 1',
    clubs: ['FAP'],
    playerBackground: 'Circuito de tercera categoría',
    photo: '/images/coaches/arnold-davila.webp',
    displayNameNeedsReview: true,
    confirmed: true,
  },
  {
    id: 'luis-priale',
    name: 'Luis Fernando Priale Breña',
    role: 'Entrenador',
    yearsExperience: 2,
    levels: ['Principiantes', 'Semicompetitivos'],
    credentials: ['Play Tennis'],
    rawCertifications: 'PLAY TENNS',
    clubs: ['Master', 'Boca Raton', 'Polo'],
    playerBackground: 'Circuito de tercera categoría',
    photo: '/images/coaches/luis-priale.webp',
    displayNameNeedsReview: true,
    confirmed: true,
  },
];

/** Section copy. */
export const coachesSection = {
  eyebrow: 'Nuestro equipo',
  heading: 'Profesores',
  headingAccent: 'Alfa Tenis',
  subcopy:
    'Entrenadores con trayectoria en circuito nacional y clubes de Lima. Cada uno trabaja niveles distintos, desde quien recién empieza hasta competencia.',
};

/** @type {import('./types.js').Pending} */
export const coachesStatus = {
  confirmed: true,
  note:
    'Datos tomados del cuadro ENTRENADORES del cliente. Faltan fotos y la grafía con tildes de los nombres.',
};

/**
 * Initials for the avatar placeholder used while `photo` is null.
 * First name + first surname, so "Luis Fernando Priale Breña" -> "LP".
 * @param {string} name
 */
export function initialsOf(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return '';
  const first = parts[0][0] ?? '';
  // Surnames start after the given names; for these records the surname block
  // is the last two words, so take the first of those.
  const surname = parts.length >= 3 ? parts[parts.length - 2] : parts[parts.length - 1];
  return (first + (surname?.[0] ?? '')).toUpperCase();
}
