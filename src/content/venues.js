// @ts-check

/**
 * Where classes happen. One venue, confirmed in CLAUDE.md.
 *
 * Note: the venue name contains "FAP" (Fuerza Aérea del Perú). That is the
 * official name of the complex and appears in the address, the map query and
 * the SEO copy. It is separate from the FAP crest, which is excluded from the
 * photo set. TODO (Marco): confirmar si el cliente también quiere evitar el
 * nombre; si es así, hay que reemplazarlo aquí y en index.html.
 *
 * @type {import('./types.js').Venue[]}
 */
export const venues = [
  {
    id: 'monterrico',
    name: 'Complejo Deportivo FAP Monterrico',
    address: 'Fundo Odría, Monterrico',
    city: 'Lima, Perú',
    /** District-level label, safe to show without naming the FAP complex. */
    shortLocation: 'Monterrico, Lima',
    hours: 'Lunes a viernes de 4:00 a 7:00 p. m. · Clases los fines de semana',
    mapQuery: 'Complejo Deportivo FAP Monterrico, Lima',
    confirmed: true,
  },
];

export const primaryVenue = venues[0];

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
