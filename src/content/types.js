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
 * @property {number} classes            Classes in the pack; drives price-per-class.
 * @property {string} label
 * @property {number|null} soles         Standard rate. `null` = not confirmed.
 * @property {number|null} solesDescuento Reduced rate, or null when the flyer
 *                                        lists none for this tier. Never a copy
 *                                        of a neighbouring tier.
 */

/**
 * @typedef {Object} PricePlan
 * @property {string} id
 * @property {string} name
 * @property {'mensual'|'paquete'} kind
 * @property {string} summary
 * @property {PriceOption[]} options
 * @property {string[]} includes         Empty when the client states nothing.
 * @property {string} messageKey
 */

/**
 * @typedef {Object} Coach
 * @property {string} id
 * @property {string} name                  Title-cased from the client's sheet.
 * @property {string|null} role
 * @property {number|null} yearsExperience
 * @property {string[]} levels              Levels this coach teaches.
 * @property {string[]} credentials         Empty means none on file, not unknown.
 * @property {string} [rawCertifications]   Verbatim sheet value, kept for audit.
 * @property {string[]} clubs               Where they have coached.
 * @property {string|null} playerBackground Their own playing record.
 * @property {string|null} photo            Path under /images, or null.
 * @property {boolean} [displayNameNeedsReview] True while accents are unconfirmed.
 * @property {boolean} confirmed
 */

/**
 * @typedef {Object} Venue
 * @property {string} id
 * @property {string} name
 * @property {string} address          Street address as the client wrote it.
 * @property {string|null} district    Null when the client gave none.
 * @property {string} city
 * @property {string} shortLocation    District-level label for tight spaces.
 * @property {string|null} hours       Opening hours, NOT a class timetable.
 * @property {string} mapQuery
 * @property {boolean} isPrimary
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
 * @typedef {Object} TournamentPrize
 * @property {string} place
 * @property {string|null} award
 *
 * @typedef {Object} Tournament
 * @property {string} id
 * @property {string} name
 * @property {string} date                  ISO date.
 * @property {string} dateLabel             Display string, es-PE.
 * @property {string|null} time
 * @property {string} categories            Displayed categories.
 * @property {string[]} rawCategories       Verbatim flyer strings, for audit.
 * @property {boolean} [categoriesNeedReview]
 * @property {string} venueName
 * @property {string|null} venueAddress
 * @property {string|null} surface
 * @property {string[]} format
 * @property {TournamentPrize[]} prizes
 * @property {boolean} isPast               Gates the past/upcoming wording.
 * @property {boolean} confirmed
 */

/**
 * @typedef {Object} Faq
 * @property {string} id
 * @property {string} question
 * @property {string} answer
 */

export {};
