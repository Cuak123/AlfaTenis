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
 * ── Strip, not carousel ────────────────────────────────────────────────────
 * Stacked, five quotes cost 2 phone screens — not because there is much text,
 * but because each card was generously padded. Same pattern as the gallery: a
 * scroll-snap strip, so all five stay in the DOM and in order and nothing
 * rotates away from someone mid-read. A rotating carousel would mean most
 * visitors see one testimonial instead of five, which defeats the point of
 * having five.
 *
 * `consent` gates rendering, not just storage: a record without it is skipped
 * even if someone adds one to the data file. That is why the flag lives on
 * each person rather than on the section.
 *
 * No photos and no star ratings. Neither exists, and a row of five identical
 * five-star graphics is decoration pretending to be evidence.
 *
 * `blockquote` + `figcaption` so a screen reader announces the quote as a
 * quotation and the attribution as its source. The strip is focusable for the
 * same reason as the gallery: a region that only answers to a finger or a
 * wheel is unusable from a keyboard.
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

        <ul
          tabIndex={0}
          role="group"
          aria-label={`${testimonialsSection.eyebrow}: ${shown.length} opiniones, se desliza en horizontal`}
          className="custom-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:mt-14 sm:gap-5"
        >
          {shown.map((t) => (
            <li
              key={t.id}
              className="w-[280px] shrink-0 snap-start sm:w-[320px]"
            >
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <Quote
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-brand-neon"
                />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-200">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-4 border-t border-white/10 pt-3">
                  <span className="block text-sm font-bold text-white">
                    {t.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-400">
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
