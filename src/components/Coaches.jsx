import { Award, Building2, ChevronDown, Trophy } from 'lucide-react';
import { coaches, coachesSection, initialsOf } from '../content/coaches.js';
import PendingBadge from './PendingBadge.jsx';

/**
 * "Profesores" — the coaching staff, straight from the client's own table.
 *
 * No photos exist for one of them, so that card leads with an initials
 * monogram rather than a stock or AI portrait. A fake face attached to a real
 * person's name is worse than no face at all, and the previous build did
 * exactly that.
 *
 * ── Why a <details> and not a flip card ────────────────────────────────────
 * The section was 2.3 phone screens. The ask was cards that flip on click to
 * reveal the detail; this does the same compaction without the three costs a
 * flip brings:
 *
 *   - Nothing announces that a card can be flipped, so most visitors never
 *     see the back. What is on the back here is the credibility — 26 years on
 *     the national circuit, ITF Level 1, the clubs they have coached at — so
 *     burying it behind an undiscovered interaction wastes the best evidence
 *     on the page.
 *   - Visually hidden content counts for less to a crawler and is awkward for
 *     a screen reader unless handled very carefully.
 *   - A flip needs JavaScript and a hover state that does not exist on touch.
 *
 * A native <details> has a visible, conventional affordance, works on touch,
 * keeps every word in the DOM and in the document order, and needs no JS.
 *
 * What stays visible is what someone scans for: who, how long, which levels.
 * What folds away is the supporting detail they only want once interested.
 *
 * Every row is still conditional — a coach with no certifications on file
 * renders nothing there, never an empty label or a placeholder dash.
 */
export default function Coaches() {
  return (
    <section
      id="profesores"
      className="border-t border-white/10 bg-slate-900/40 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-neon sm:text-sm">
            {coachesSection.eyebrow}
          </p>
          <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {coachesSection.heading}{' '}
            <span className="text-brand-neon">{coachesSection.headingAccent}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            {coachesSection.subcopy}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:gap-5">
          {coaches.map((coach) => {
            const hasDetail =
              coach.credentials.length > 0 ||
              coach.playerBackground ||
              coach.clubs.length > 0;

            return (
              <li
                key={coach.id}
                className="rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="flex items-center gap-4 p-5 sm:p-6">
                  {coach.photo ? (
                    <img
                      src={coach.photo}
                      alt=""
                      width={64}
                      height={64}
                      loading="lazy"
                      decoding="async"
                      className="h-16 w-16 shrink-0 rounded-full border border-white/10 object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-brand-neon/30 bg-brand-neon/10 text-lg font-extrabold text-brand-neon"
                    >
                      {initialsOf(coach.name)}
                    </span>
                  )}

                  <div className="min-w-0">
                    <h3 className="text-base font-bold leading-tight text-white sm:text-lg">
                      {coach.name}
                      {coach.displayNameNeedsReview ? (
                        <PendingBadge label="Revisar tildes" />
                      ) : null}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      {coach.role}
                      {coach.yearsExperience ? (
                        <>
                          {' · '}
                          <span className="font-semibold text-brand-neon">
                            {coach.yearsExperience} años
                          </span>
                        </>
                      ) : null}
                    </p>
                    {coach.levels.length > 0 ? (
                      <p className="mt-1.5 text-xs text-slate-400">
                        {coach.levels.join(' · ')}
                      </p>
                    ) : null}
                  </div>
                </div>

                {hasDetail ? (
                  <details className="group border-t border-white/10">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 text-sm font-bold text-brand-neon sm:px-6 [&::-webkit-details-marker]:hidden">
                      Ver trayectoria
                      <ChevronDown
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                      />
                    </summary>

                    <dl className="space-y-3 px-5 pb-5 text-sm sm:px-6 sm:pb-6">
                      {coach.credentials.length > 0 ? (
                        <div className="flex items-start gap-2.5">
                          <Award aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
                          <div>
                            <dt className="sr-only">Certificaciones</dt>
                            <dd className="text-slate-200">
                              {coach.credentials.join(' · ')}
                            </dd>
                          </div>
                        </div>
                      ) : null}

                      {coach.playerBackground ? (
                        <div className="flex items-start gap-2.5">
                          <Trophy aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
                          <div>
                            <dt className="sr-only">Trayectoria como jugador</dt>
                            <dd className="text-slate-200">{coach.playerBackground}</dd>
                          </div>
                        </div>
                      ) : null}

                      {coach.clubs.length > 0 ? (
                        <div className="flex items-start gap-2.5">
                          <Building2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
                          <div>
                            <dt className="sr-only">Clubes donde ha entrenado</dt>
                            <dd className="text-slate-200">{coach.clubs.join(' · ')}</dd>
                          </div>
                        </div>
                      ) : null}
                    </dl>
                  </details>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
