// @ts-check

import { coaches } from './coaches.js';
import { venues } from './venues.js';

/**
 * "Nosotros" section.
 *
 * The three highlights carry over from the previous build; CLAUDE.md does not
 * flag them as placeholder. The venue line no longer names a single district:
 * the client's sheet lists three venues, so "Canchas en Monterrico" was only
 * true of one of them. See src/content/venues.js.
 *
 * `icon` is a key, not a component, so this file stays free of JSX.
 */
export const about = {
  eyebrow: 'Nosotros',
  title: 'Sobre',
  highlights: [
    {
      id: 'ambiente',
      icon: 'shield',
      title: 'Ambiente seguro y divertido',
      text: 'Un espacio donde cada jugador avanza a su ritmo, con acompañamiento cercano en cada clase.',
    },
    {
      id: 'entrenadores',
      icon: 'graduation',
      title: 'Entrenadores calificados',
      text: 'Metodología profesional enfocada en la técnica, la disciplina y el desarrollo de cada jugador.',
    },
    {
      id: 'instalaciones',
      icon: 'building',
      title: 'Instalaciones de primer nivel',
      text: 'Tres sedes en Lima para entrenar con comodidad, con iluminación para los turnos de la noche.',
    },
  ],
};

/**
 * Hard numbers for the "Nosotros" section.
 *
 * Every one is DERIVED from confirmed data rather than typed in, so none of
 * them can drift out of step with the file it comes from. The combined years
 * are simple arithmetic on the client's own staff table (26 + 14 + 9 + 2), not
 * a rounded-up marketing figure.
 */
export const stats = [
  {
    id: 'experiencia',
    value: String(coaches.reduce((sum, c) => sum + (c.yearsExperience ?? 0), 0)),
    label: 'años de experiencia combinada',
  },
  { id: 'entrenadores', value: String(coaches.length), label: 'entrenadores' },
  { id: 'sedes', value: String(venues.length), label: 'sedes en Lima' },
];
