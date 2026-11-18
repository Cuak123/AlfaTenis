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

  /** Pricing CTAs. */
  pricingSchool: 'Hola, quiero información sobre los planes de la Escuela de Tenis.',
  pricingPacks: 'Hola, quiero información sobre los paquetes de clases duales.',

  /** Location / schedule. */
  schedule: 'Hola, quiero consultar los horarios disponibles.',
};

/** @typedef {keyof typeof messages} MessageKey */
