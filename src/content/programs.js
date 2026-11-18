// @ts-check

/**
 * Class programs.
 *
 * Carried over from the previous build. CLAUDE.md flags the old
 * "Adultos & Social" program as placeholder — the academy is niños y jóvenes —
 * so it is NOT listed here. Add it back only if the client confirms it exists.
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
    ageRange: '4 a 10 años',
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
