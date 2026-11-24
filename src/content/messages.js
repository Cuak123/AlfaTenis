// @ts-check

/**
 * Every prefilled WhatsApp message on the site, in one place.
 *
 * Components reference these by key and never inline their own copy, so the
 * register (tú, es-PE) stays consistent and the client can reword in one file.
 * Encoding happens in `waLink()` — write these as plain readable Spanish.
 */

export const messages = {
  /** Floating button + anything generic. */
  general: 'Hola, quiero más información sobre las clases de Alfa Tenis.',

  /** Primary hero CTA. */
  trialClass: 'Hola, quiero agendar una clase de prueba en Alfa Tenis.',

  /** Per-program CTAs (see src/content/programs.js). */
  trialKids:
    'Hola, quiero agendar una clase de prueba para el programa de Mini Tenis & Kids.',
  trialYouth:
    'Hola, quiero agendar una clase de prueba para el programa de Jóvenes.',
  trialHighPerformance:
    'Hola, quiero una evaluación para el programa de Alto Rendimiento.',

  /** Pricing CTAs. Renamed 2026-11-23: the old keys described an "Escuela de
      Tenis" plan and "clases duales", neither of which is what the client's
      own flyers sell. */
  pricingGroup:
    'Hola, quiero información sobre los paquetes de clases grupales.',
  pricingIndividual:
    'Hola, quiero información sobre los paquetes de clases individuales.',

  /** Location / schedule. */
  schedule: 'Hola, quiero consultar los horarios disponibles.',

  /** Competición. Asks about the NEXT edition — the last one is over. */
  nextTournament:
    'Hola, quiero que me avisen cuando salga la convocatoria del próximo torneo de Alfa Tenis.',
};

/** @typedef {keyof typeof messages} MessageKey */
