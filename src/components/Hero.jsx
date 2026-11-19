import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { hero } from '../content/hero.js';
import { openingHours, venuesSummary } from '../content/venues.js';
import { waLinkProps } from '../lib/whatsapp.js';

/**
 * Above-the-fold section.
 *
 * The background photo is the LCP element: eager, high fetch priority, with
 * explicit dimensions so it reserves its box and shifts nothing. The copy is
 * deliberately NOT animated in — gating the largest text behind an entrance
 * animation delays LCP and leaves it invisible if the animation never runs.
 */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      <img
        src={hero.image.src}
        alt={hero.image.alt}
        width={hero.image.width}
        height={hero.image.height}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        /* The player sits at 31–48% of the photo's width. On a phone the image
           is cropped hard on the horizontal axis, so x=40% is what keeps him in
           frame; the vertical axis is fully covered there and does not matter.
           From `sm` the 16:9 source nearly fills the box, so centre is fine. */
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[40%_center] sm:object-center"
      />

      {/* Keeps the player readable while the copy sits on near-solid
          brand-dark. Bottom-up on mobile; from `sm` it runs right-to-left so the
          solid end lands under the right-aligned copy. This direction is tied to
          `sm:items-end` on the container below — flip one and you must flip both,
          or the copy ends up on the bright half of the photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark from-32% via-brand-dark/75 via-62% to-brand-dark/25 sm:bg-gradient-to-l sm:from-brand-dark sm:from-8% sm:via-brand-dark/80 sm:via-52% sm:to-brand-dark/15"
      />

      <div className="mx-auto flex w-full max-w-content flex-1 flex-col justify-end px-5 pb-28 pt-28 sm:items-end sm:justify-center sm:px-8 sm:py-28">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-neon sm:text-sm">
            {hero.eyebrow}
          </p>

          <h1 className="text-[2.125rem] font-extrabold leading-[1.06] sm:text-5xl lg:text-[4rem]">
            {hero.headline}{' '}
            <span className="block text-brand-neon">{hero.headlineAccent}</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-200 sm:mt-6 sm:max-w-lg sm:text-lg">
            {hero.subcopy}
          </p>

          <div className="mt-8 sm:mt-10">
            <a
              {...waLinkProps('trialClass')}
              className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-brand-neon px-7 text-base font-bold text-brand-dark transition-colors hover:bg-brand-neon-hover sm:w-auto sm:text-lg"
            >
              {hero.ctaLabel}
              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1"
              />
            </a>
            <p className="mt-3 text-sm text-slate-300">{hero.ctaNote}</p>
          </div>

          <dl className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-200 sm:mt-10 sm:flex-row sm:gap-8">
            <div className="flex items-start gap-2.5">
              <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
              <div>
                <dt className="sr-only">Horarios</dt>
                <dd>{openingHours}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
              <div>
                <dt className="sr-only">Ubicación</dt>
                <dd>{venuesSummary}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
