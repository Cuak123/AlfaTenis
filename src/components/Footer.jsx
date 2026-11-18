import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { brand, contact, nav, social, whatsapp } from '../content/site.js';
import { primaryVenue } from '../content/venues.js';
import { waLinkProps } from '../lib/whatsapp.js';

/**
 * An empty value in `social` means the client has not given us that profile,
 * so the link is dropped entirely — never rendered as a dead `#`. If all three
 * are empty the whole block disappears rather than leaving a stray heading.
 *
 * TikTok has no lucide icon, hence the inline glyph.
 */
const SOCIAL_LINKS = [
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
  {
    key: 'tiktok',
    label: 'TikTok',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1 0-5.18c.27 0 .52.04.76.12v-3.2a5.76 5.76 0 0 0-.76-.05 5.78 5.78 0 1 0 5.78 5.78V9.01a7.35 7.35 0 0 0 4.31 1.38V7.3a4.28 4.28 0 0 1-3.35-1.48z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const activeSocial = SOCIAL_LINKS.filter(({ key }) => social[key]?.trim());
  const readyNav = nav.filter((item) => item.ready);
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="border-t border-white/10 bg-brand-dark scroll-mt-16"
    >
      <div className="mx-auto w-full max-w-content px-5 pb-28 pt-14 sm:px-8 sm:pb-16 sm:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.4fr] lg:gap-12">
          <div>
            <p className="font-display text-xl font-extrabold tracking-tight">
              <span className="text-white">{brand.nameParts[0]}</span>{' '}
              <span className="text-brand-neon">{brand.nameParts[1]}</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              {brand.tagline}
            </p>
            <a
              {...waLinkProps('trialClass')}
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-neon px-6 text-sm font-bold text-brand-dark transition-colors hover:bg-brand-neon-hover"
            >
              Agenda tu clase de prueba
            </a>
          </div>

          <nav aria-labelledby="footer-nav-title">
            <h2
              id="footer-nav-title"
              className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-neon"
            >
              Secciones
            </h2>
            <ul className="mt-4 space-y-2.5">
              {readyNav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="rounded-sm text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-neon">
              Contacto
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
                <a href={`tel:+${whatsapp.phone}`} className="rounded-sm hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
                <a href={`mailto:${contact.email}`} className="rounded-sm break-all hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
                <span>
                  {primaryVenue.name}
                  <br />
                  {primaryVenue.address} · {primaryVenue.city}
                </span>
              </li>
              {primaryVenue.hours ? (
                <li className="flex items-start gap-3">
                  <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
                  <span>{primaryVenue.hours}</span>
                </li>
              ) : null}
            </ul>

            {activeSocial.length > 0 ? (
              <ul className="mt-6 flex items-center gap-3">
                {activeSocial.map(({ key, label, Icon }) => (
                  <li key={key}>
                    <a
                      href={social[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${brand.name} en ${label}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-slate-200 transition-colors hover:border-brand-neon hover:text-brand-neon"
                    >
                      {Icon ? <Icon aria-hidden="true" className="h-5 w-5" /> : null}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        {/* No privacy-policy link: there is no such page, and nothing on this
            site collects personal data — every CTA hands off to WhatsApp. That
            changes the moment a form is added (Ley N.° 29733). */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-slate-400">
            © {year} {brand.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
