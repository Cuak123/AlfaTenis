import { ChevronDown } from 'lucide-react';
import { faqs } from '../content/faqs.js';
import { waLinkProps } from '../lib/whatsapp.js';

/**
 * Built on native <details>/<summary>: keyboard and screen-reader behaviour
 * come for free, it works with JS disabled, and there is no open/closed state
 * to keep in sync. <summary> allows heading content, so the question stays an
 * <h3> and the document outline holds.
 */
export default function FAQ() {
  return (
    <section
      id="faq"
      className="border-t border-white/10 bg-slate-900/40 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-neon sm:text-sm">
            Preguntas frecuentes
          </p>
          <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Antes de <span className="text-brand-neon">empezar</span>
          </h2>
        </div>

        <ul className="mt-10 max-w-3xl space-y-3 sm:mt-12">
          {faqs.map((faq) => (
            <li key={faq.id}>
              <details className="group rounded-2xl border border-white/10 bg-white/5 open:bg-white/[0.07]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-brand-neon transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {faq.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl text-sm text-slate-300">
          ¿Tienes otra pregunta?{' '}
          <a
            {...waLinkProps('general')}
            className="inline-block rounded-sm py-1 font-bold text-brand-neon underline underline-offset-4 hover:text-brand-neon-hover"
          >
            Escríbenos por WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
