// @ts-check

/**
 * Shared shapes for everything under `src/content/`.
 *
 * Rule for this folder: nothing is invented. A fact the client has not
 * confirmed is `null` (or an empty array) and carries a `pending` note, so a
 * component can render an honest "por confirmar" state instead of a made-up
 * value. Grep for `pending` to find everything still open.
 */

/**
 * @typedef {Object} Pending
 * @property {false} confirmed      Always false — the client has not signed this off.
 * @property {string} note          What exactly is missing, in plain words.
 */

/**
 * @typedef {Object} Program
 * @property {string} id
 * @property {string} name
 * @property {string} icon
 * @property {string|null} ageRange     `null` = age band not confirmed.
 * @property {string} summary
 * @property {string[]} features
 * @property {string} messageKey        Key into `messages` (src/content/messages.js).
 * @property {boolean} confirmed        false = copy still needs client sign-off.
 */

/**
 * @typedef {Object} PriceOption
 * @property {string} id
 * @property {string} label
 * @property {string} detail
 * @property {number|null} soles        `null` = price not confirmed. Never guess.
 * @property {number|null} solesDescuento Reduced rate, same rule.
 */

/**
 * @typedef {Object} PricePlan
 * @property {string} id
 * @property {string} name
 * @property {'mensual'|'paquete'} kind
 * @property {PriceOption[]} options
 * @property {string[]} includes
 * @property {string} messageKey
 */

/**
 * @typedef {Object} Coach
 * @property {string} id
 * @property {string} name
 * @property {string|null} role
 * @property {string|null} bio
 * @property {string[]} credentials     Empty until the client supplies them.
 * @property {string|null} photo        Path under /images, or null.
 * @property {boolean} confirmed
 */

/**
 * @typedef {Object} Venue
 * @property {string} id
 * @property {string} name
 * @property {string} address
 * @property {string} city
 * @property {string} shortLocation
 * @property {string|null} hours
 * @property {string} mapQuery          Fed to Google Maps; keep it searchable.
 * @property {boolean} confirmed
 */

/**
 * @typedef {Object} Testimonial
 * @property {string} id
 * @property {string} name
 * @property {string|null} role
 * @property {string} quote
 * @property {string|null} photo
 * @property {boolean} consent          Written permission to publish. No consent, no render.
 */

/**
 * @typedef {Object} Tournament
 * @property {string} id
 * @property {string} name
 * @property {string|null} date
 * @property {string|null} venue
 * @property {string|null} result
 * @property {string|null} photo
 * @property {boolean} confirmed
 */

/**
 * @typedef {Object} Faq
 * @property {string} id
 * @property {string} question
 * @property {string} answer
 */

export {};
