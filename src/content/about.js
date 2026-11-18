// @ts-check

/**
 * "Nosotros" section.
 *
 * The three highlights carry over from the previous build; CLAUDE.md does not
 * flag them as placeholder. The venue line was reworded from "el Complejo
 * Deportivo FAP Monterrico" to just "Monterrico" — same fact, and it keeps the
 * FAP name off the page while that question is open. See src/content/venues.js.
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
      text: 'Un espacio donde niños y jóvenes disfrutan aprendiendo, con acompañamiento cercano en cada clase.',
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
      text: 'Canchas en Monterrico para entrenar con comodidad, con iluminación para los turnos de la tarde.',
    },
  ],
};
