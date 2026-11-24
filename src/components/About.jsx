import { Building2, GraduationCap, ShieldCheck } from 'lucide-react';
import { about, stats } from '../content/about.js';
import { brand } from '../content/site.js';

/** Icon keys from src/content/about.js, resolved here so content stays JSX-free. */
const ICONS = {
  shield: ShieldCheck,
  graduation: GraduationCap,
  building: Building2,
};

export default function About() {
  return (
    <section
      id="nosotros"
      className="border-t border-white/10 bg-brand-dark py-20 sm:py-28"
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

        <ul className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {about.highlights.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                {Icon ? (
                  <Icon aria-hidden="true" className="h-8 w-8 text-brand-neon" />
                ) : null}
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>

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
