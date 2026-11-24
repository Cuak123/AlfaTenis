// @ts-check

/**
 * Plans and rates.
 *
 * SOURCE: three client flyers received 2026-11-23 — "Escuela de Tenis ·
 * Clases grupales" in a socio-FAP and a standard version, and "Clases
 * individuales". Every figure below is read off those flyers.
 *
 * This replaces the placeholder state. The numbers the previous build shipped
 * (S/ 160 / 280 / 380 and S/ 200 / 320 / 560) were invented and were
 * internally inconsistent — the 12-class pack worked out dearer per class than
 * the 8-class one. These three ladders were checked and every one of them gets
 * cheaper per class as the pack grows, which is what a real price list does.
 *
 * ── The FAP rate is NOT a general discount ─────────────────────────────────
 * The flyer says "Precio exclusivo para SOCIO FAP · Fuerza Aérea del Perú".
 * It is restricted eligibility, not a promotion, so the UI must label it that
 * way. Someone who is not a socio turning up expecting S/ 140 is a bad first
 * contact, and that is on the page, not on them.
 *
 * ── What the flyers do NOT say ─────────────────────────────────────────────
 * - Whether the individual-class prices also have a socio-FAP rate. That flyer
 *   carries the FAP crest and the Monterrico venue but no "exclusivo" line, so
 *   it is published as a single rate. TODO (cliente): confirmar.
 * - Over what period a pack has to be used. "4 clases" could be a month or
 *   open-ended; nothing states it, so nothing is claimed.
 * - Whether these rates apply at Lima Polo Club and Master Cup. All three
 *   flyers name only Fundo Odría / Complejo FAP Monterrico.
 *   TODO (cliente): confirmar si el precio cambia por sede.
 * - What a class includes (racket, balls, duration). Not stated anywhere, so
 *   `includes` is empty rather than filled with plausible-sounding bullets.
 *
 * ── Address discrepancy noticed here ───────────────────────────────────────
 * These flyers write "Av. José Nicolás Rodrigo 100"; the client's spreadsheet
 * writes "Jr. José Nicolás Rodrigo 100", which is what venues.js publishes.
 * Three flyers against one cell. Left as-is pending confirmation rather than
 * changed on a hunch. TODO (cliente): ¿Av. o Jr.?
 */

/** @type {import('./types.js').Pending} */
export const pricingStatus = {
  confirmed: true,
  note: 'Tomado de los tres flyers del cliente (2026-11-23). Falta confirmar vigencia del paquete y si el precio cambia por sede.',
};

/**
 * The reduced rate and who it is for. `available: false` would hide every
 * mention of it rather than leave an unexplained second column.
 */
export const reducedRate = {
  available: true,
  label: 'Socio FAP',
  explanation:
    'Tarifa exclusiva para socios de la Fuerza Aérea del Perú. Para el resto aplica la tarifa regular.',
};

/** @type {import('./types.js').PricePlan[]} */
export const plans = [
  {
    id: 'grupales',
    name: 'Clases grupales',
    kind: 'paquete',
    summary: 'Escuela de tenis, en grupo y por paquete de clases.',
    options: [
      { id: 'g4', classes: 4, label: '4 clases', soles: 180, solesDescuento: 140 },
      { id: 'g8', classes: 8, label: '8 clases', soles: 340, solesDescuento: 260 },
      { id: 'g12', classes: 12, label: '12 clases', soles: 480, solesDescuento: 340 },
      // El flyer de socio FAP no lista un paquete de 16; por eso va sin tarifa
      // reducida en vez de repetir la de 12.
      { id: 'g16', classes: 16, label: '16 clases', soles: 600, solesDescuento: null },
    ],
    includes: [],
    messageKey: 'pricingGroup',
  },
  {
    id: 'individuales',
    name: 'Clases individuales',
    kind: 'paquete',
    summary: 'Uno a uno con el entrenador, al ritmo que necesites.',
    options: [
      { id: 'i1', classes: 1, label: '1 clase', soles: 80, solesDescuento: null },
      { id: 'i4', classes: 4, label: '4 clases', soles: 310, solesDescuento: null },
      { id: 'i8', classes: 8, label: '8 clases', soles: 600, solesDescuento: null },
      { id: 'i12', classes: 12, label: '12 clases', soles: 880, solesDescuento: null },
    ],
    includes: [],
    messageKey: 'pricingIndividual',
  },
];

/** Section copy. */
export const pricingSection = {
  eyebrow: 'Precios',
  heading: 'Planes y',
  headingAccent: 'tarifas',
  subcopy:
    'Paquetes de clases grupales e individuales. Mientras más clases, menor el precio por clase.',
  currency: 'S/',
  ctaNote: 'Inscripciones abiertas.',
};

/**
 * Price per class, computed rather than stored, so it can never drift out of
 * step with the figure above it.
 * @param {number} soles
 * @param {number} classes
 */
export function perClass(soles, classes) {
  const value = soles / classes;
  // Whole soles stay whole; anything else keeps two decimals (28.33, not 28.3).
  return Number.isInteger(value) ? String(value) : value.toFixed(2);
}
