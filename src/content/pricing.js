// @ts-check

/**
 * Plans and rates.
 *
 * ⚠️ NOTHING HERE IS CONFIRMED. CLAUDE.md marks every price and the
 * "10% de descuento" promo as placeholder. The previous build shipped these
 * numbers, which are internally inconsistent (the 12-class pack worked out
 * dearer per class than the 8-class pack), so they are recorded below as
 * comments only and `soles` is `null` until the client supplies real figures.
 *
 * A component must render a "Precio por confirmar" state when `soles` is null
 * — never a zero, never a guess.
 */

/** @type {import('./types.js').Pending} */
export const pricingStatus = {
  confirmed: false,
  note: 'Precios y promoción pendientes de confirmación con el cliente. No publicar.',
};

/**
 * TODO (cliente): confirmar si existe una tarifa reducida y para quién.
 * The previous build showed a second, lower rate per option.
 */
export const hasDiscountRate = false;

/** @type {import('./types.js').PricePlan[]} */
export const plans = [
  {
    id: 'escuela',
    name: 'Escuela de Tenis',
    kind: 'mensual',
    options: [
      // Previous placeholder values, unconfirmed: S/ 160 (reducida S/ 140)
      { id: '1x', label: '1 vez por semana', detail: '4 clases al mes', soles: null, solesDescuento: null },
      // Previous placeholder values, unconfirmed: S/ 280 (reducida S/ 260)
      { id: '2x', label: '2 veces por semana', detail: '8 clases al mes', soles: null, solesDescuento: null },
      // Previous placeholder values, unconfirmed: S/ 380 (reducida S/ 340)
      { id: '3x', label: '3 veces por semana', detail: '12 clases al mes', soles: null, solesDescuento: null },
    ],
    includes: ['Vacantes limitadas', 'Grupos por nivel'],
    messageKey: 'pricingSchool',
  },
  {
    id: 'duales',
    name: 'Clases Duales',
    kind: 'paquete',
    options: [
      // Previous placeholder values, unconfirmed: S/ 200 (S/ 50 por clase)
      { id: 'pack-4', label: 'Pack 4 clases', detail: '', soles: null, solesDescuento: null },
      // Previous placeholder values, unconfirmed: S/ 320 (S/ 40 por clase)
      { id: 'pack-8', label: 'Pack 8 clases', detail: '', soles: null, solesDescuento: null },
      // Previous placeholder values, unconfirmed: S/ 560 (S/ 46 por clase — inconsistente)
      { id: 'pack-12', label: 'Pack 12 clases', detail: '', soles: null, solesDescuento: null },
    ],
    includes: [],
    messageKey: 'pricingPacks',
  },
];
