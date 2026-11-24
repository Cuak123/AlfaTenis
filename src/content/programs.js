// @ts-check

/**
 * Class programs.
 *
 * Carried over from the previous build, which is also the build that invented
 * the prices and the testimonials — treat every unsourced detail here as
 * unverified until the client says otherwise.
 *
 * ── Minimum age: 3, not 4 ──────────────────────────────────────────────────
 * This card said "4 a 10 años". The client's own spreadsheet says "RANGOS DE
 * EDAD: A PARTIR DE LOS 3 AÑOS · PUNTO ROJO / PUNTO NARANJA". Three wins on
 * provenance: it comes from the client's operations sheet, while four appears
 * only in carried-over marketing copy from a build known to contain invented
 * figures. The site now says "desde los 3 años" in the title and the hero, so
 * leaving 4 here would have the page contradicting itself.
 * The upper bound of 10 is NOT sourced anywhere — it is carried over as-is.
 * TODO (cliente): confirmar edad mínima y máxima de Mini Tenis.
 *
 * There is no adults' programme card. The client clearly serves adults — their
 * own tournaments are adult categories and the price flyers are age-agnostic —
 * but nothing states what that programme is called or contains, so inventing a
 * fourth card is out. TODO (cliente): ¿cómo se llama y qué incluye?
 *
 * `icon` is a key, not a component, so this file stays free of JSX.
 *
 * @type {import('./types.js').Program[]}
 */
export const programs = [
  {
    id: 'mini-tenis',
    name: 'Mini Tenis & Kids',
    icon: 'baby',
    ageRange: '3 a 10 años', // 3 del cuadro del cliente; 10 sin fuente.
    summary:
      'Coordinación, diversión y los fundamentos del tenis con material adaptado a su tamaño.',
    features: [
      'Pelotas de baja presión',
      'Canchas adaptadas',
      'Metodología lúdica',
      'Evaluaciones trimestrales',
    ],
    messageKey: 'trialKids',
    confirmed: true,
  },
  {
    id: 'jovenes',
    name: 'Jóvenes',
    icon: 'users',
    ageRange: null, // TODO (cliente): confirmar el rango de edad de este grupo.
    summary:
      'Técnica, táctica y hábitos de entrenamiento para jugadores que ya dominan lo básico.',
    features: [
      'Grupos por nivel',
      'Trabajo técnico y táctico',
      'Preparación física',
    ],
    messageKey: 'trialYouth',
    confirmed: false, // TODO (cliente): confirmar nombre, edades y contenido.
  },
  {
    id: 'alto-rendimiento',
    name: 'Alto Rendimiento',
    icon: 'zap',
    ageRange: null, // TODO (cliente): confirmar.
    summary:
      'Entrenamiento intensivo para jugadores de competición, con enfoque físico, táctico y mental.',
    features: [
      'Planificación personalizada',
      'Preparación física específica',
      'Acompañamiento en torneos',
      'Videoanálisis',
    ],
    messageKey: 'trialHighPerformance',
    confirmed: true,
  },
];
