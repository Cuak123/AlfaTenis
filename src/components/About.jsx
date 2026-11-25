import { about, stats } from '../content/about.js';
import { brand } from '../content/site.js';

export default function About() {
  return (
    <section
      id="nosotros"
      className="border-t border-white/10 bg-brand-dark py-14 sm:py-28"
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-neon sm:text-sm">
            {about.eyebrow}
          </p>
          <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {about.title}{' '}
            <span className="text-brand-neon">{brand.name}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            {brand.tagline}
          </p>
        </div>


        {/* Derived in about.js from coaches.js and venues.js, so the numbers
            cannot drift away from the data they describe. `dl` because each
            one is a figure and its meaning, not a list of equals. */}
        {stats.length > 0 ? (
          <dl className="mt-12 grid gap-5 border-t border-white/10 pt-10 sm:mt-16 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-4xl font-extrabold text-brand-neon sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-slate-300">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
