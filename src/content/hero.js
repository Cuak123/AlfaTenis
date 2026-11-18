// @ts-check

/**
 * Hero copy and artwork.
 *
 * Photo: real client photo from the tournament archive
 * (src/assets/Gallery/image copy 5.png), converted to WebP. Chosen because it
 * is the only real landscape shot with no identifiable minors, no FAP crest
 * and no third-party brand marks.
 *
 * ⚠️ It is only 950x714, so it upscales on wide desktops. TODO (cliente):
 * pedir una foto horizontal de al menos 2000 px de ancho para el hero.
 *
 * Copy note: `subcopy` is a shortened form of `brand.tagline` — same facts,
 * fewer words, and it no longer repeats "Lima" straight after the eyebrow.
 * No claim here goes beyond the confirmed tagline.
 */
export const hero = {
  eyebrow: 'Academia de alto rendimiento · Lima',
  headline: 'Domina la cancha.',
  headlineAccent: 'Tu evolución empieza aquí.',
  subcopy:
    'Formamos a niños y jóvenes en un ambiente seguro y divertido, con entrenadores calificados.',
  ctaLabel: 'Agenda tu clase de prueba',
  ctaNote: 'Te respondemos por WhatsApp.',
  image: {
    src: '/images/hero-entrenamiento.webp',
    width: 950,
    height: 714,
    alt: 'Jugador de tenis ejecutando un golpe de derecha en una cancha de arcilla.',
  },
};
