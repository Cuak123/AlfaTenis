import { useState } from 'react';
import { Clock, ExternalLink, MapPin } from 'lucide-react';
import {
  mapLinks,
  openingHours,
  venues,
  venuesSection,
} from '../content/venues.js';
import { waLinkProps } from '../lib/whatsapp.js';

/**
 * The three venues + a map for whichever one the visitor picks.
 *
 * The Google Maps embed is CLICK-TO-LOAD on purpose. An iframe that mounts on
 * page load contacts Google and can set cookies before the visitor has agreed
 * to anything, and this site has no consent layer yet (Ley N.° 29733). The
 * placeholder gives the addresses and plain links; nothing third-party loads
 * until the visitor asks for it. It also keeps ~hundreds of KB off first paint.
 *
 * Switching venues after loading the map keeps it loaded — the visitor already
 * opted in, and making them click again for each venue would be pure friction.
 *
 * NOTE: the primary venue's name contains "FAP". That is the name the client
 * uses on their own tournament flyer and visitors need it to find the place.
 */
export default function Location() {
  const [mapVisible, setMapVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(venues[0].id);

  const selected = venues.find((v) => v.id === selectedId) ?? venues[0];
  const links = mapLinks(selected);

  return (
    <section
      id="ubicacion"
      className="border-t border-white/10 bg-brand-dark py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-neon sm:text-sm">
              {venuesSection.eyebrow}
            </p>
            <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {venuesSection.heading}{' '}
              <span className="text-brand-neon">{venuesSection.headingAccent}</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              {venuesSection.subcopy}
            </p>

            {/* Each venue selects itself for the map. aria-pressed rather than a
                radio group: these are buttons that change what the map shows,
                not a value being submitted anywhere. */}
            <ul className="mt-8 space-y-3">
              {venues.map((venue) => {
                const isSelected = venue.id === selected.id;
                return (
                  <li key={venue.id}>
                    <button
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedId(venue.id)}
                      className={`flex w-full items-start gap-3.5 rounded-2xl border p-4 text-left transition-colors sm:p-5 ${
                        isSelected
                          ? 'border-brand-neon/50 bg-brand-neon/10'
                          : 'border-white/10 bg-white/5 hover:border-white/25'
                      }`}
                    >
                      <MapPin
                        aria-hidden="true"
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          isSelected ? 'text-brand-neon' : 'text-slate-400'
                        }`}
                      />
                      <span className="min-w-0">
                        <span className="block font-bold text-white">
                          {venue.name}
                          {venue.isPrimary ? (
                            <span className="ml-2 inline-block whitespace-nowrap rounded-full bg-brand-neon/15 px-2 py-0.5 align-middle text-[0.65rem] font-bold uppercase tracking-wider text-brand-neon">
                              Sede principal
                            </span>
                          ) : null}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-slate-300">
                          {venue.address}
                          {venue.district ? ` · ${venue.district}` : ''}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* One shared line: the client's sheet gives the same hours for all
                three, so repeating it per card would be noise. No day range is
                claimed because the sheet states none. */}
            {openingHours ? (
              <dl className="mt-6 flex items-start gap-3.5">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-neon"
                />
                <div>
                  <dt className="font-bold text-white">Horario de las sedes</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-300">
                    {openingHours} · Consúltanos por los horarios de clases.
                  </dd>
                </div>
              </dl>
            ) : null}

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
                <span className="sr-only">
                  a {selected.name} (se abre en Google Maps)
                </span>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {mapVisible ? (
              <iframe
                key={selected.id}
                title={`Mapa de ${selected.name}`}
                src={links.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0 sm:h-[460px]"
              />
            ) : (
              <div className="flex h-[320px] flex-col items-center justify-center gap-4 p-6 text-center sm:h-[460px]">
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
