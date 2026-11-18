// @ts-check

/**
 * Competition — tournaments the academy has organised.
 *
 * SOURCE: two client flyers for the same event, received 2026-11-18.
 * Everything below is copied from them. Nothing is inferred.
 *
 * ── Why this is framed as a PAST event ──────────────────────────────────────
 * The flyer reads "Sábado 03 de Octubre" with "2026" in the title. 3 October
 * 2026 was indeed a Saturday, and it was 46 days before this was written, so
 * the tournament has already happened. Presenting it as upcoming would be
 * wrong on the day the page was built and would rot further every day after.
 * Marco chose the past framing on 2026-11-18.
 *
 * Anything with a date therefore lives behind `isPast`, and the section's CTA
 * asks about the NEXT edition rather than inviting anyone to this one.
 *
 * ── The one conflict between the flyers ─────────────────────────────────────
 * The detailed poster says "Categoría: 5B Mixto". The teaser says "Cat 5A &
 * 5B". Same event name, same date, so the likeliest reading is that the event
 * ran both categories and the poster covers the 5B draw. Both strings are kept
 * verbatim in `rawCategories`; the displayed value is the broader one.
 * TODO (cliente): confirmar si el torneo tuvo 5A y 5B o solo 5B mixto.
 *
 * ── Deliberately excluded ───────────────────────────────────────────────────
 * - The Wilson logo on the teaser. Marco's brief rules it out, so sponsors are
 *   credited generically as the flyer itself also does ("nuestros
 *   patrocinadores").
 * - Every tournament photograph. They show identifiable minors with no
 *   parental consent on file. See src/assets/Tournaments/ and archive/README.md.
 * - Results, winners and participant counts. No flyer records them and no
 *   result sheet exists in the project.
 *
 * @type {import('./types.js').Tournament[]}
 */
export const tournaments = [
  {
    id: 'relampago-2026',
    name: 'Torneo Relámpago Alfa Tenis 2026',
    /** ISO so it can be compared and reformatted; display string below. */
    date: '2026-10-03',
    dateLabel: 'Sábado 3 de octubre de 2026',
    time: '12:00 p. m.',
    categories: 'Categorías 5A y 5B',
    rawCategories: ['Cat 5A & 5B', 'Categoría: 5B Mixto'],
    categoriesNeedReview: true,
    venueName: 'Club Fundo Odría FAP',
    venueAddress: 'Jr. José Nicolás Rodrigo 100',
    surface: 'Cancha de arcilla',
    format: [
      'Round Robin',
      'Short sets (mejor de 4 games)',
      'Punto de oro',
      'Sorteo de contrincantes',
      'Ingreso al club con DNI obligatorio',
      'La puntualidad es obligatoria: la tardanza implica eliminación automática.',
    ],
    /* The last two are not placements, so they carry no `award` and render on
       their own line rather than as "Patrocinadores · Premios de nuestros
       patrocinadores". Wording follows the flyer's four prize boxes. */
    prizes: [
      { place: '1er puesto', award: 'Trofeo' },
      { place: '2do puesto', award: 'Medalla' },
      { place: 'Media beca Alfa Tenis', award: null },
      { place: 'Premios de nuestros patrocinadores', award: null },
    ],
    isPast: true,
    confirmed: true,
  },
];

/** The most recent tournament, or null when none is recorded. */
export const latestTournament = tournaments[0] ?? null;

/** Section copy. The academy's own slogan, taken from the flyer. */
export const competitionSection = {
  eyebrow: 'Competición',
  heading: 'Nuestro último',
  headingAccent: 'torneo',
  subcopy:
    'Organizamos torneos propios para que los alumnos compitan en cancha. Así se jugó la última edición.',
  motto: 'Pasión · Disciplina · Resultados',
  ctaLabel: 'Avísame del próximo torneo',
  ctaNote: 'Te escribimos por WhatsApp cuando salga la convocatoria.',
};

/** @type {import('./types.js').Pending} */
export const tournamentsStatus = {
  confirmed: true,
  note:
    'Datos tomados de los flyers del cliente. Sin resultados ni ganadores: no están registrados en ninguna parte.',
};
