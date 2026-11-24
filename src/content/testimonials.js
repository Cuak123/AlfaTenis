// @ts-check

/**
 * Testimonials.
 *
 * SOURCE: the TESTIMONIOS table in the client's spreadsheet "alumnos alfa.xlsx"
 * (2026-11-18). Seven rows, every one marked `AUTORIZACION = SI`, and Marco
 * confirmed on 2026-11-23 that these students are adults — which is what
 * unblocked the section. If any of them were minors, the consent would have had
 * to come from a parent, not from the student.
 *
 * Five of the seven are here. Juan Robles and Diana Caceres gave authorisation
 * but left the COMENTARIOS cell empty, and a testimonial with no words is not a
 * testimonial. Writing one for them would be exactly the invention this file
 * was emptied to stop: the previous build shipped three with fabricated names
 * and AI-generated portraits.
 *
 * ── On the text ────────────────────────────────────────────────────────────
 * The sheet is ALL CAPS and unaccented. The quotes are set in sentence case
 * with normal Spanish accents ("iluminacion" → "iluminación"), because those
 * are ordinary words and their spelling is not in question.
 *
 * SURNAMES ARE LEFT EXACTLY AS THE SHEET WROTE THEM. Maravi, Nuñez and Caceres
 * are almost certainly Maraví, Núñez and Cáceres, but guessing how someone
 * spells their own name is inventing it — the same rule the coaches' names
 * follow. TODO (cliente): confirmar la grafía con tildes.
 *
 * No photos: none exist, and nobody consented to one.
 *
 * `role` is the sheet's own ALUMNO O PADRE column. `tenure` is TIEMPO EN ALFA.
 *
 * @type {import('./types.js').Testimonial[]}
 */
export const testimonials = [
  {
    id: 'bruno-garro',
    name: 'Bruno Garro Montenegro',
    role: 'Alumno',
    level: 'Intermedio',
    tenure: '1 año',
    quote:
      'Las clases son divertidas y he vuelto a aprender aspectos técnicos muy importantes.',
    consent: true,
  },
  {
    id: 'paulo-nunez',
    name: 'Paulo Ernesto Nuñez Benavente',
    role: 'Alumno',
    level: 'Intermedio',
    tenure: '1 año',
    quote: 'Ambiente muy agradable y aprendí mucho con los profesores.',
    consent: true,
  },
  {
    id: 'bryan-valdez',
    name: 'Bryan Valdez Sanchez',
    role: 'Alumno',
    level: 'Intermedio',
    tenure: '1 año',
    quote: 'Excelente ambiente, buenos profesores y dinámicas.',
    consent: true,
  },
  {
    id: 'andree-flores',
    name: 'Andree Flores Maravi',
    role: 'Alumno',
    level: 'Intermedio',
    tenure: '5 años',
    quote: 'Academia con buenas instalaciones e iluminación.',
    consent: true,
  },
  {
    id: 'diego-romero',
    name: 'Diego Alonso Romero Figueroa',
    role: 'Alumno',
    level: 'Intermedio - Avanzado',
    tenure: '18 meses',
    quote: 'Academia con excelentes profesores.',
    consent: true,
  },
];

/** Section copy. */
export const testimonialsSection = {
  eyebrow: 'Testimonios',
  heading: 'Lo que dicen',
  headingAccent: 'nuestros alumnos',
  subcopy:
    'Alumnos que entrenan con nosotros, en sus propias palabras.',
};

/** @type {import('./types.js').Pending} */
export const testimonialsStatus = {
  confirmed: true,
  note: 'Cinco testimonios reales con autorización del cliente. Falta confirmar la grafía con tildes de los apellidos.',
};
