import { ArrowRight, Calendar, Check, Clock, MapPin, Medal } from 'lucide-react';
import { competitionSection, latestTournament } from '../content/tournaments.js';
import { waLinkProps } from '../lib/whatsapp.js';
import PendingBadge from './PendingBadge.jsx';

/**
 * "Competición" — the academy's own tournaments.
 *
 * The last edition is OVER (see src/content/tournaments.js), so every piece of
 * wording here is past tense and the CTA asks about the next one. A finished
 * event dressed up as an invitation is worse than no section: visitors would
 * message asking to sign up for a date that is already gone.
 *
 * `isPast` drives that wording, so when the client supplies a future date the
 * same component can carry it with one flag change rather than a rewrite.
 *
 * No tournament photographs: they show identifiable minors with no parental
 * consent on file.
 */
export default function Competition() {
  const t = latestTournament;
  if (!t) return null;

  return (
    <section
      id="competicion"
      className="border-t border-white/10 bg-slate-900/40 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-neon sm:text-sm">
            {competitionSection.eyebrow}
          </p>
          <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {competitionSection.heading}{' '}
            <span className="text-brand-neon">{competitionSection.headingAccent}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            {competitionSection.subcopy}
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:mt-16">
          <div className="border-b border-white/10 p-6 sm:p-8">
            {/* Says plainly that this already happened, before the name. */}
            {t.isPast ? (
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Edición pasada
              </p>
            ) : null}

            <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
              {t.name}
            </h3>

            <p className="mt-2 text-sm font-semibold text-brand-neon">
              {t.categories}
              {t.categoriesNeedReview ? <PendingBadge label="Confirmar categorías" /> : null}
            </p>

            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-2.5">
                <Calendar aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
                <div>
                  <dt className="sr-only">Fecha</dt>
                  <dd className="text-sm text-slate-200">
                    <time dateTime={t.date}>{t.dateLabel}</time>
                  </dd>
                </div>
              </div>

              {t.time ? (
                <div className="flex items-start gap-2.5">
                  <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
                  <div>
                    <dt className="sr-only">Hora</dt>
                    <dd className="text-sm text-slate-200">{t.time}</dd>
                  </div>
                </div>
              ) : null}

              <div className="flex items-start gap-2.5">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
                <div>
                  <dt className="sr-only">Sede</dt>
                  <dd className="text-sm text-slate-200">
                    {t.venueName}
                    {t.surface ? (
                      <span className="block text-slate-400">{t.surface}</span>
                    ) : null}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Formato de competencia
              </h4>
              <ul className="mt-4 space-y-2.5">
                {t.format.map((rule) => (
                  <li key={rule} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Premios
              </h4>
              <ul className="mt-4 space-y-2.5">
                {t.prizes.map((prize) => (
                  <li
                    key={prize.place}
                    className="flex items-start gap-2.5 text-sm text-slate-200"
                  >
                    <Medal aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
                    <span>
                      <span className="font-semibold text-white">{prize.place}</span>
                      {prize.award ? ` · ${prize.award}` : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-neon">
            {competitionSection.motto}
          </p>

          <div className="sm:text-right">
            <a
              {...waLinkProps('nextTournament')}
              className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-brand-neon px-7 text-base font-bold text-brand-dark transition-colors hover:bg-brand-neon-hover sm:w-auto"
            >
              {competitionSection.ctaLabel}
              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1"
              />
            </a>
            <p className="mt-3 text-sm text-slate-300">{competitionSection.ctaNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
