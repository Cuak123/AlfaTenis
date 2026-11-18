// @ts-check

/**
 * Brand, contact and navigation. Single source of truth — no component may
 * hardcode any of this.
 *
 * Confirmed by the client (per CLAUDE.md): brand name, email, address, phone,
 * class hours. Everything else is marked below.
 */

export const brand = {
  name: 'Alfa Tenis',
  /** Rendered two-tone as `{0} {1}` in the header and footer. */
  nameParts: /** @type {[string, string]} */ (['Alfa', 'Tenis']),
  tagline:
    'Academia de tenis para niños y jóvenes en Lima. Formamos jugadores en un ambiente seguro y divertido, con entrenadores calificados.',
  /** The angle the whole site sells on. */
  angle: 'alto rendimiento',
};

export const contact = {
  email: 'alfa.tenis.peru@gmail.com',
  /** Human-readable. The dialable digits live in `whatsapp.phone`. */
  phone: '+51 997 222 869',
  address: 'Complejo Deportivo FAP Monterrico, Fundo Odría, Lima, Perú',
  city: 'Lima, Perú',
  hours: 'Lunes a viernes de 4:00 a 7:00 p. m. · Clases los fines de semana',
};

export const whatsapp = {
  /** Country code + number, digits only. Every CTA on the site funnels here. */
  phone: '51997222869',
};

/**
 * TODO (cliente): pegar las URLs reales de los perfiles.
 * An empty string hides the link — a component must never render a dead `#`.
 */
export const social = {
  instagram: '',
  facebook: '',
  tiktok: '',
};

/**
 * Anchor targets must match a section `id` rendered on the page.
 * Only `inicio` exists so far — the rest land with their sections.
 */
export const nav = [
  { label: 'Inicio', id: 'inicio', ready: true },
  { label: 'Nosotros', id: 'nosotros', ready: true },
  { label: 'Programas', id: 'programas', ready: true },
  { label: 'Precios', id: 'precios', ready: false },
  { label: 'Ubicación', id: 'ubicacion', ready: true },
  { label: 'Contacto', id: 'contacto', ready: true },
];

/**
 * TODO (antes del lanzamiento): dominio real, og-image 1200x630 y favicon.
 * Leave `domain` empty rather than guessing — a wrong canonical is worse than none.
 */
export const seo = {
  domain: '',
  ogImage: '/images/og-image.jpg',
  titleDefault: 'Alfa Tenis | Academia de tenis para niños y jóvenes en Lima',
  descriptionDefault:
    'Academia de tenis para niños y jóvenes en Lima, con entrenadores calificados y enfoque en alto rendimiento. Agenda tu clase de prueba.',
};
