import { Award, Building2, Trophy } from 'lucide-react';
import { coaches, coachesSection, initialsOf } from '../content/coaches.js';
import PendingBadge from './PendingBadge.jsx';

/**
 * "Profesores" — the coaching staff, straight from the client's own table.
 *
 * No photos exist yet, so each card leads with an initials monogram rather than
 * a stock or AI portrait. A fake face attached to a real person's name is worse
 * than no face at all, and the previous build did exactly that.
 *
 * Every line is conditional: a coach with no certifications on file simply does
 * not render that row, instead of showing an empty label or a placeholder dash.
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

        <ul className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:gap-6">
          {coaches.map((coach) => (
            <li
              key={coach.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7"
            >
              <div className="flex items-center gap-4">
                {/* Monogram stands in for the missing headshot. */}
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-neon/30 bg-brand-neon/10 text-lg font-extrabold text-brand-neon"
                >
                  {initialsOf(coach.name)}
                </span>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
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
                        </span>{' '}
                        de experiencia
                      </>
                    ) : null}
                  </p>
                </div>
              </div>

              <dl className="mt-6 space-y-4 text-sm">
                {coach.levels.length > 0 ? (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Niveles que enseña
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {coach.levels.map((level) => (
                        <span
                          key={level}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                        >
                          {level}
                        </span>
                      ))}
                    </dd>
                  </div>
                ) : null}

                {coach.credentials.length > 0 ? (
                  <div className="flex items-start gap-2.5">
                    <Award
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon"
                    />
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
                    <Trophy
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon"
                    />
                    <div>
                      <dt className="sr-only">Trayectoria como jugador</dt>
                      <dd className="text-slate-200">{coach.playerBackground}</dd>
                    </div>
                  </div>
                ) : null}

                {coach.clubs.length > 0 ? (
                  <div className="flex items-start gap-2.5">
                    <Building2
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon"
                    />
                    <div>
                      <dt className="sr-only">Clubes donde ha entrenado</dt>
                      <dd className="text-slate-200">{coach.clubs.join(' · ')}</dd>
                    </div>
                  </div>
                ) : null}
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
