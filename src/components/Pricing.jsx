import { ArrowRight, Info } from 'lucide-react';
import {
  perClass,
  plans,
  pricingSection,
  reducedRate,
} from '../content/pricing.js';
import { waLinkProps } from '../lib/whatsapp.js';

/**
 * "Precios" — the client's real rates, from their own flyers.
 *
 * This file replaces the pre-rebuild Pricing component, which read the legacy
 * src/config/site.js and showed invented figures.
 *
 * Two things the markup is doing deliberately:
 *
 * 1. The socio-FAP rate is labelled as restricted eligibility, not dressed up
 *    as a discount. A visitor who is not a socio has to be able to tell at a
 *    glance which column is theirs, and the regular rate is the one shown
 *    large. Cheaper-looking numbers are not worth a wasted first message.
 * 2. Price per class is computed from the figure beside it, so the two cannot
 *    contradict each other after an edit.
 *
 * A tier with no reduced rate renders nothing in that slot — never a repeat of
 * the tier above it.
 */
export default function Pricing() {
  if (plans.length === 0) return null;

  const showReduced =
    reducedRate.available &&
    plans.some((plan) => plan.options.some((o) => o.solesDescuento != null));

  return (
    <section
      id="precios"
      className="border-t border-white/10 bg-slate-900/40 py-14 sm:py-28"
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-neon sm:text-sm">
            {pricingSection.eyebrow}
          </p>
          <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {pricingSection.heading}{' '}
            <span className="text-brand-neon">{pricingSection.headingAccent}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            {pricingSection.subcopy}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-2 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7"
            >
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {plan.summary}
              </p>

              <ul className="mt-6 space-y-2.5">
                {plan.options.map((option) => (
                  <li
                    key={option.id}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl border border-white/10 bg-brand-dark/40 px-4 py-3"
                  >
                    <div className="min-w-0">
                      <span className="font-semibold text-white">
                        {option.label}
                      </span>
                      {/* A single class has no per-class rate worth stating:
                          it would just repeat the price beside it. */}
                      {option.soles != null && option.classes > 1 ? (
                        <span className="ml-2 text-xs text-slate-400">
                          {pricingSection.currency}{' '}
                          {perClass(option.soles, option.classes)} por clase
                        </span>
                      ) : null}
                    </div>

                    <div className="flex shrink-0 items-baseline gap-3">
                      {/* The reduced rate sits second and smaller: it applies
                          to fewer people than the rate beside it. */}
                      {showReduced && option.solesDescuento != null ? (
                        <span className="text-sm font-semibold text-brand-neon">
                          {pricingSection.currency} {option.solesDescuento}
                          <span className="ml-1 text-[0.65rem] font-bold uppercase tracking-wider text-brand-neon/80">
                            {reducedRate.label}
                          </span>
                        </span>
                      ) : null}

                      {option.soles != null ? (
                        <span className="text-lg font-extrabold text-white">
                          {pricingSection.currency} {option.soles}
                        </span>
                      ) : (
                        <span className="text-sm text-slate-400">
                          Precio por confirmar
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {plan.includes.length > 0 ? (
                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {plan.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              <a
                {...waLinkProps(plan.messageKey)}
                className="group mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-brand-neon/40 px-5 text-sm font-bold text-brand-neon transition-colors hover:bg-brand-neon hover:text-brand-dark sm:mt-auto"
              >
                <span>
                  Consultar por {plan.name.toLowerCase()}
                  <span className="sr-only"> en WhatsApp</span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>

        {showReduced ? (
          <p className="mt-8 flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
            <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-neon" />
            <span>{reducedRate.explanation}</span>
          </p>
        ) : null}

        <p className="mt-3 text-sm font-semibold text-brand-neon">
          {pricingSection.ctaNote}
        </p>
      </div>
    </section>
  );
}
