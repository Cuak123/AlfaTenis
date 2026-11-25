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
    'Academia de tenis en Lima, desde los 3 años y de principiantes a competitivos. Entrenadores con trayectoria en circuito nacional.',
  /** The angle the whole site sells on. */
  angle: 'alto rendimiento',
};

export const contact = {
  email: 'alfa.tenis.peru@gmail.com',
  /** Human-readable. The dialable digits live in `whatsapp.phone`. */
  phone: '+51 997 222 869',
  city: 'Lima, Perú',
};

/*
 * `address` and `hours` used to live here and were removed on 2026-11-18.
 * Both were single-venue facts: one address, and a "Lunes a viernes de 4:00 a
 * 7:00 p. m." class timetable. The client's own sheet lists THREE venues, so
 * addresses and opening hours now live in src/content/venues.js, one per venue,
 * and nothing reads them from here. Do not re-add them — two sources for the
 * same fact is how the site ended up advertising the wrong hours.
 */

export const whatsapp = {
  /** Country code + number, digits only. Every CTA on the site funnels here. */
  phone: '51997222869',
};

/**
 * TODO (cliente): pegar las URLs reales de los perfiles.
 * An empty string hides the link — a component must never render a dead `#`.
 */
export const social = {
  /* Taken from the client's own live site, alfatenis.com, on 2026-11-23.
     An empty string hides the link rather than rendering a dead `#`. */
  instagram: 'https://www.instagram.com/alfa.tenis.peru',
  facebook: 'https://www.facebook.com/AcademiaAlfaTenis',
  tiktok: 'https://www.tiktok.com/@alfa.tenis',
};

/**
 * Anchor targets must match a section `id` rendered on the page.
 * Only `inicio` exists so far — the rest land with their sections.
 */
/**
 * Must stay in the order App.jsx renders the sections: the footer lists these
 * in two columns on a phone, where a link sitting several places from where
 * the section actually is reads as an error. Precios and Testimonios were out
 * of place here from before they existed as sections.
 *
 * `contacto` is last and is the footer's own id, not a section — it is the
 * only entry here that does not correspond to one.
 */
export const nav = [
  { label: 'Inicio', id: 'inicio', ready: true },
  { label: 'Nosotros', id: 'nosotros', ready: true },
  { label: 'Programas', id: 'programas', ready: true },
  { label: 'Precios', id: 'precios', ready: true },
  { label: 'Profesores', id: 'profesores', ready: true },
  { label: 'Testimonios', id: 'testimonios', ready: true },
  { label: 'Competición', id: 'competicion', ready: true },
  { label: 'Galería', id: 'galeria', ready: true },
  { label: 'Ubicación', id: 'ubicacion', ready: true },
  { label: 'Preguntas', id: 'faq', ready: true },
  { label: 'Contacto', id: 'contacto', ready: true },
];

/** SEO basics. The og-image is generated from a real client photo. */
export const seo = {
  /** Live host. Mirrored in index.html, robots.txt and sitemap.xml —
      all four change together if a custom domain lands. */
  domain: 'https://alfa-tenis.vercel.app',
  ogImage: '/images/og-image.jpg',
  titleDefault: 'Alfa Tenis | Academia de tenis en Lima · desde los 3 años',
  descriptionDefault:
    'Clases de tenis en Lima desde los 3 años, de principiantes a competitivos. Tres sedes y entrenadores de circuito nacional. Agenda tu clase de prueba.',
};
