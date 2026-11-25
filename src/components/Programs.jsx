import { ArrowRight, Baby, Check, ChevronDown, Users, Zap } from 'lucide-react';
import { programs } from '../content/programs.js';
import { waLinkProps } from '../lib/whatsapp.js';
import PendingBadge from './PendingBadge.jsx';

/** Icon keys from src/content/programs.js, resolved here so content stays JSX-free. */
const ICONS = { baby: Baby, users: Users, zap: Zap };

export default function Programs() {
  return (
    <section
      id="programas"
      className="border-t border-white/10 bg-slate-900/40 py-14 sm:py-28"
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-neon sm:text-sm">
            Programas
          </p>
          <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Encuentra tu <span className="text-brand-neon">nivel</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            Grupos por edad y nivel, con un plan de trabajo para cada etapa.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-3 lg:gap-5">
          {programs.map((program) => {
            const Icon = ICONS[program.icon];
            return (
              <li
                key={program.id}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7"
              >
                {Icon ? (
                  <Icon aria-hidden="true" className="h-8 w-8 text-brand-neon" />
                ) : null}

                <h3 className="mt-4 text-xl font-bold text-white">
                  {program.name}
                  {program.confirmed ? null : <PendingBadge />}
                </h3>

                {/* No age band is invented — the line is simply omitted when
                    the client has not confirmed one. */}
                {program.ageRange ? (
                  <p className="mt-1 text-sm font-semibold text-brand-neon">
                    {program.ageRange}
                  </p>
                ) : null}

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {program.summary}
                </p>

                {/* Same <details> as Profesores, on purpose: one disclosure
                    pattern across the page rather than a different one per
                    section. The bullets are what someone reads once already
                    interested; what they scan for — level, age, one line of
                    summary — stays visible. */}
                {program.features.length > 0 ? (
                  <details className="group mt-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 text-sm font-bold text-brand-neon [&::-webkit-details-marker]:hidden">
                      Qué incluye
                      <ChevronDown
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                      />
                    </summary>
                    <ul className="mt-3 space-y-2.5">
                      {program.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-slate-200"
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : null}

                <a
                  {...waLinkProps(program.messageKey)}
                  className="group mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-brand-neon/40 px-5 text-sm font-bold text-brand-neon transition-colors hover:bg-brand-neon hover:text-brand-dark sm:mt-auto"
                >
                  <span>
                    Consultar por {program.name}
                    <span className="sr-only"> en WhatsApp</span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Programas is organised by age and level; Precios by format (group
            vs individual). Nothing in the client's material maps one onto the
            other, so this links the two sections instead of claiming a
            correspondence that is not established. See src/content/pricing.js. */}
        <p className="mt-8 text-sm text-slate-300">
          Los paquetes de clases y sus tarifas están en{' '}
          <a
            href="#precios"
            className="inline-block rounded-sm py-1 font-bold text-brand-neon underline underline-offset-4 hover:text-brand-neon-hover"
          >
            Planes y tarifas
          </a>
          .
        </p>
      </div>
    </section>
  );
}
