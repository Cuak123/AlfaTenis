// @ts-check

/**
 * Testimonials.
 *
 * Deliberately EMPTY. The previous build shipped three with invented names
 * ("María Fernanda P.", "Carlos Rodriguez", "Andrea Vargas") and AI-generated
 * portraits — CLAUDE.md flags them as fake. They are not carried over.
 *
 * Before adding a real one, two things are required:
 *   1. The person's own words, as they gave them.
 *   2. Written consent to publish their name and photo (Ley N.° 29733).
 *      If the author is a minor, consent comes from the parent or guardian.
 *
 * A component must handle the empty array by hiding the section entirely.
 *
 * @type {import('./types.js').Testimonial[]}
 */
export const testimonials = [];

/** @type {import('./types.js').Pending} */
export const testimonialsStatus = {
  confirmed: false,
  note: 'Sin testimonios reales. La sección no se renderiza hasta tener texto y consentimiento por escrito.',
};
