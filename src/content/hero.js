// @ts-check

/**
 * Hero copy and artwork.
 *
 * Photo: from the client's tournament batch, 2026-11-19
 * (assets-source/inbox/torneos-alumnos/6e89e875…jpg, 3024x4032). A single
 * adult player mid-forehand with the ball in the air — the subject sits at
 * 31–48% of the width, which is why the copy went to the right and the
 * gradient with it. No minors, no FAP crest, no third-party brand mark.
 * (The windscreen carries faint "FUERZA AÉREA DEL PERÚ" lettering. That is the
 * venue's own name, which the client prints on its tournament flyers; it is
 * the crest that the brief rules out, not the name.)
 *
 * Cropped 3024x1701 at y=1150 for 16:9, then 1800px wide at WebP q78 — never
 * upscaled, asserted at conversion. q78 rather than the usual 85 because this
 * is the LCP element and the clay texture is noisy: 85 cost 321 KB for no
 * visible gain, 78 costs 229 KB.
 *
 * This replaces a 950x714 crop that upscaled on any wide desktop — the TODO
 * that asked for a ≥2000px landscape source is now closed.
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
    'Formamos jugadores desde los 3 años, de principiantes a competitivos, con entrenadores de circuito nacional.',
  ctaLabel: 'Agenda tu clase de prueba',
  ctaNote: 'Te respondemos por WhatsApp.',
  image: {
    src: '/images/hero-forehand.webp',
    width: 1800,
    height: 1012,
    alt: 'Jugador de tenis a punto de golpear de derecha en una cancha de arcilla, con la pelota en el aire.',
  },
};
