// @ts-check

/**
 * Where classes happen.
 *
 * SOURCE: "alumnos alfa.xlsx" (client-supplied, 2026-11-18), the SEDE /
 * DIRECCION / HORARIO table. It lists THREE venues — the site previously showed
 * only one, and with the wrong hours.
 *
 * ── On the hours ────────────────────────────────────────────────────────────
 * The sheet's HORARIO column is "06:00 am - 11 pm" for all three venues. That
 * is the column next to SEDE and DIRECCION, so it reads as when each venue is
 * OPEN, not when classes run. The old site copy said "Lunes a viernes de 4:00 a
 * 7:00 p. m. · Clases los fines de semana", which is a class timetable — a
 * different claim, and the two are not necessarily in conflict.
 *
 * So the venue hours are shown here labelled as opening hours, and the class
 * timetable is NOT asserted anywhere until the client confirms it.
 *
 * The sheet gives no days of the week, so none are claimed. "6:00 a. m. a
 * 11:00 p. m." with no day range is exactly what the client wrote.
 * TODO (cliente): ¿qué días aplica ese horario, y cuál es el horario de clases?
 *
 * ── On the primary venue's name ─────────────────────────────────────────────
 * Three names exist for the same place: "Complejo Deportivo FAP Monterrico"
 * (old site copy, via CLAUDE.md), "FUNDO ODRIA" (this sheet) and "Club Fundo
 * Odría FAP" (the client's own 2026 tournament flyer). The flyer wins: it is
 * the client's public-facing wording, and it carries the same street address
 * the sheet gives. "Monterrico" is kept as the district because the earlier
 * confirmed copy used it; the sheet gives no district for this venue.
 *
 * @type {import('./types.js').Venue[]}
 */
export const venues = [
  {
    id: 'fundo-odria',
    name: 'Club Fundo Odría FAP',
    address: 'Jr. José Nicolás Rodrigo 100',
    district: 'Monterrico',
    city: 'Lima, Perú',
    shortLocation: 'Monterrico, Lima',
    hours: '6:00 a. m. a 11:00 p. m.',
    mapQuery: 'Club Fundo Odría FAP, Jr. José Nicolás Rodrigo 100, Lima',
    isPrimary: true,
    confirmed: true,
  },
  {
    id: 'lima-polo-club',
    name: 'Lima Polo Club',
    address: 'Av. Lima Polo 380',
    district: 'Surco',
    city: 'Lima, Perú',
    shortLocation: 'Surco, Lima',
    hours: '6:00 a. m. a 11:00 p. m.',
    mapQuery: 'Lima Polo Club, Av. Lima Polo 380, Surco, Lima',
    isPrimary: false,
    confirmed: true,
  },
  {
    id: 'master-cup',
    name: 'Master Cup',
    address: 'Vía Láctea 391',
    district: 'Surco',
    city: 'Lima, Perú',
    shortLocation: 'Surco, Lima',
    hours: '6:00 a. m. a 11:00 p. m.',
    mapQuery: 'Master Cup, Vía Láctea 391, Surco, Lima',
    isPrimary: false,
    confirmed: true,
  },
];

export const primaryVenue = venues[0];

/** Shared opening hours — identical across all three in the client's sheet. */
export const openingHours = venues[0].hours;

/**
 * Short line for the hero: "3 sedes en Lima".
 * Derived, so it cannot drift out of step with the list above.
 */
export const venuesSummary = `${venues.length} sedes en Lima`;

/** Section copy. */
export const venuesSection = {
  eyebrow: 'Ubicación',
  heading: 'Nuestras',
  headingAccent: 'sedes',
  subcopy:
    'Entrenamos en tres clubes de Lima. Escríbenos y te decimos cuál te queda mejor según tu horario.',
};

/**
 * Google Maps links for a venue. Built here so no component hand-rolls a URL.
 * @param {import('./types.js').Venue} venue
 */
export function mapLinks(venue) {
  const q = encodeURIComponent(venue.mapQuery);
  return {
    search: `https://www.google.com/maps/search/${q}`,
    embed: `https://maps.google.com/maps?q=${q}&z=15&output=embed`,
  };
}
