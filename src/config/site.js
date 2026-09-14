// Single source of truth for site-wide config.
// Swap these values per client — components must NOT hardcode any of them.

export const brand = {
  // Rendered two-tone in the header/footer as `{parts[0]} {parts[1]}`.
  name: 'Alfa Tenis',
  nameParts: ['Alfa', 'Tenis'],
  tagline:
    'Academia de tenis para niños y jóvenes en Lima. Formamos jugadores en un ambiente seguro y divertido, con entrenadores calificados y magníficas instalaciones.',
};

export const whatsapp = {
  // Digits only, with country code, no '+' or spaces (e.g. Perú: 51 + 9 digits).
  phone: '51997222869',
  defaultMessage: 'Hola, quiero más información sobre las clases.',
};

// Build a wa.me / api.whatsapp deep link with a prefilled message.
export const waLink = (message = whatsapp.defaultMessage) =>
  `https://api.whatsapp.com/send/?phone=${whatsapp.phone}&text=${encodeURIComponent(message)}`;

export const contact = {
  address: 'Complejo Deportivo FAP Monterrico, Fundo Odría, Lima, Perú',
  email: 'alfa.tenis.peru@gmail.com',
  // Display phone (formatted for humans). WhatsApp uses `whatsapp.phone`.
  phone: '+51 997 222 869',
  // Class hours shown in the "Nosotros" section.
  hours: 'Lunes a viernes de 4:00 a 7:00 PM · Clases los fines de semana',
};

// Empty string = link hidden by the component.
// TODO: paste the real profile URLs (the live site links Facebook, Instagram & TikTok).
export const social = {
  instagram: '',
  facebook: '',
  twitter: '',
};

// Anchor targets must match a section `id` in the page.
export const nav = [
  { name: 'Inicio', id: 'inicio' },
  { name: 'Nosotros', id: 'nosotros' },
  { name: 'Programas', id: 'programas' },
  { name: 'Contacto', id: 'contacto' },
];
