// @ts-check

/**
 * Tournament results and competition history.
 *
 * Deliberately EMPTY. The tournament section was removed from the previous
 * build and no verified results exist in the project.
 *
 * The photo archive hints at these, but a name legible in a photograph is not
 * a confirmed fact — no dates, categories or results are recorded from it:
 *   • "ATP Alfa Tenis Open — Surco", categoría 5A mixto (trofeos)
 *   • "Raquetón" (vale de consumo S/ 100)
 *   • "Next Gen Series" — flyer de torneo juvenil, 12–13 de diciembre,
 *     Club de Tenis Lima. The flyer art is AI-generated.
 *
 * ⚠️ Most competition photos show identifiable minors, and one
 * (public/assets/torneoconcarlos.jpeg) shows a child's full name on a
 * certificate. None may be published without written parental consent.
 *
 * @type {import('./types.js').Tournament[]}
 */
export const tournaments = [];

/** @type {import('./types.js').Pending} */
export const tournamentsStatus = {
  confirmed: false,
  note: 'Sin resultados verificados. Las fotos disponibles muestran menores identificables y requieren consentimiento de los padres.',
};
