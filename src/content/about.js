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
};

/*
 * `highlights` lived here until 2026-11-24: three cards saying "Ambiente
 * seguro y divertido", "Entrenadores calificados" and "Instalaciones de
 * primer nivel".
 *
 * They were removed, not moved. Every one of them is a claim any tennis
 * academy in Lima could make about itself, so they proved nothing while
 * costing about 1.2 phone screens of scrolling. What is actually Alfa Tenis's
 * own is directly below: 51 combined years, 4 coaches, 3 venues — figures
 * that come from the client's data and that a competitor cannot copy.
 *
 * This is the one cut in the length pass that makes the section shorter AND
 * stronger. If generic reassurance is wanted back, it belongs in the FAQ,
 * where someone is actually asking the question.
 */

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
