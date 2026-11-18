import { useState } from 'react';
import { Clock, ExternalLink, MapPin } from 'lucide-react';
import { mapLinks, primaryVenue } from '../content/venues.js';
import { waLinkProps } from '../lib/whatsapp.js';

/**
 * Venue details + map.
 *
 * The Google Maps embed is CLICK-TO-LOAD on purpose. An iframe that mounts on
 * page load contacts Google and can set cookies before the visitor has agreed
 * to anything, and this site has no consent layer yet (Ley N.° 29733). The
 * placeholder gives the address and a plain link; nothing third-party loads
 * until the visitor asks for it. It also keeps ~hundreds of KB off first paint.
 *
 * NOTE: the venue name contains "FAP". That is the complex's official name and
 * visitors need it to find the place, so it is shown here. Pending Marco's call
 * on whether the client wants the name avoided as well as the crest — if so it
 * is one field in src/content/venues.js.
 */
export default function Location() {
  const [mapVisible, setMapVisible] = useState(false);
  const links = mapLinks(primaryVenue);

  return (
    <section
      id="ubicacion"
      className="border-t border-white/10 bg-brand-dark py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-neon sm:text-sm">
              Ubicación
            </p>
            <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Nuestra <span className="text-brand-neon">sede</span>
            </h2>

            <dl className="mt-8 space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-neon" />
                <div>
                  <dt className="font-bold text-white">{primaryVenue.name}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-300">
                    {primaryVenue.address} · {primaryVenue.city}
                  </dd>
                </div>
              </div>

              {primaryVenue.hours ? (
                <div className="flex items-start gap-3.5">
                  <Clock aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-neon" />
                  <div>
                    <dt className="font-bold text-white">Horarios</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-slate-300">
                      {primaryVenue.hours}
                    </dd>
                  </div>
                </div>
              ) : null}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                {...waLinkProps('schedule')}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-neon px-6 text-sm font-bold text-brand-dark transition-colors hover:bg-brand-neon-hover"
              >
                Consultar horarios
              </a>
              <a
                href={links.search}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Cómo llegar
                <ExternalLink aria-hidden="true" className="h-4 w-4 shrink-0" />
                <span className="sr-only">(se abre en Google Maps)</span>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {mapVisible ? (
              <iframe
                title={`Mapa de ${primaryVenue.name}`}
                src={links.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0 sm:h-[420px]"
              />
            ) : (
              <div className="flex h-[320px] flex-col items-center justify-center gap-4 p-6 text-center sm:h-[420px]">
                <MapPin aria-hidden="true" className="h-9 w-9 text-brand-neon" />
                <p className="text-sm leading-relaxed text-slate-300">
                  El mapa se carga solo si lo pides: al abrirlo se conecta con
                  Google Maps.
                </p>
                <button
                  type="button"
                  onClick={() => setMapVisible(true)}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-brand-neon/40 px-6 text-sm font-bold text-brand-neon transition-colors hover:bg-brand-neon hover:text-brand-dark"
                >
                  Cargar el mapa
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
