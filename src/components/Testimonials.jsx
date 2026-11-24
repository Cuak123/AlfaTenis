import { Quote } from 'lucide-react';
import {
  testimonials,
  testimonialsSection,
} from '../content/testimonials.js';

/**
 * "Testimonios" — five real students, in their own words.
 *
 * This replaces the pre-rebuild component, which read the legacy
 * src/config/site.js and shipped three fabricated quotes attributed to invented
 * people with AI-generated portraits.
 *
 * `consent` gates rendering, not just storage: a record without it is skipped
 * even if someone adds one to the data file. That is the whole point of keeping
 * the flag on each person rather than on the section.
 *
 * No photos and no star ratings. Neither exists, and a row of five identical
 * five-star graphics is decoration pretending to be evidence.
 *
 * `blockquote` + `figcaption` rather than divs, so a screen reader announces
 * the quote as a quotation and the attribution as its source.
 */
export default function Testimonials() {
  const shown = testimonials.filter((t) => t.consent && t.quote);
  if (shown.length === 0) return null;

  return (
    <section
      id="testimonios"
      className="border-t border-white/10 bg-brand-dark py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-neon sm:text-sm">
            {testimonialsSection.eyebrow}
          </p>
          <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {testimonialsSection.heading}{' '}
            <span className="text-brand-neon">
              {testimonialsSection.headingAccent}
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            {testimonialsSection.subcopy}
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {shown.map((t) => (
            <li key={t.id}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7">
                <Quote
                  aria-hidden="true"
                  className="h-7 w-7 shrink-0 text-brand-neon"
                />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-200">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-5 border-t border-white/10 pt-4">
                  <span className="block font-bold text-white">{t.name}</span>
                  <span className="mt-1 block text-sm text-slate-400">
                    {[t.role, t.level, t.tenure].filter(Boolean).join(' · ')}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
