import { Instagram } from 'lucide-react';
import { gallery, gallerySection } from '../content/gallery.js';
import { social } from '../content/site.js';

/**
 * "Galería" — a swipeable strip, not a stacked grid.
 *
 * As a grid this section was 4704px tall on a phone: 5.8 screens, 26% of the
 * whole page, for ten portrait photos stacked one per row. Measured, which is
 * why it changed.
 *
 * It is a scroll-snap strip, NOT a rotating carousel. The difference matters:
 * every photo stays in the DOM and in the document order, so crawlers and
 * screen readers get all ten, and nothing auto-advances away from a visitor
 * who is still looking. The only thing that changed is that the overflow runs
 * sideways instead of downward.
 *
 * Fixed height with automatic width gives each photo its own natural
 * proportion — the one landscape frame simply takes a wider slot instead of
 * being cropped — and the width/height attributes let the browser reserve the
 * right box before the file arrives, so this costs no layout shift.
 *
 * The container is focusable on purpose. A scrollable region that only
 * responds to a mouse wheel or a finger is unusable from a keyboard, so it
 * takes `tabIndex` and an accessible name and becomes arrow-key scrollable
 * (WCAG 2.1.1). The partially visible next photo is the affordance that says
 * "this moves" — no arrows needed.
 */
export default function Gallery() {
  if (gallery.length === 0) return null;

  const instagram = social.instagram?.trim();

  return (
    <section
      id="galeria"
      className="border-t border-white/10 bg-brand-dark py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="sm:flex sm:items-end sm:justify-between sm:gap-8">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-neon sm:text-sm">
              {gallerySection.eyebrow}
            </p>
            <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {gallerySection.heading}{' '}
              <span className="text-brand-neon">{gallerySection.headingAccent}</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              {gallerySection.subcopy}
            </p>
          </div>

          {instagram ? (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-full border border-white/20 px-5 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:mt-0"
            >
              <Instagram aria-hidden="true" className="h-4 w-4 shrink-0" />
              Síguenos en Instagram
            </a>
          ) : null}
        </div>

        {/* The strip lives INSIDE the page container rather than bleeding to
            the viewport edge with its own padding. The first attempt did the
            latter and the photos came out 176px left of the heading: with
            `scroll-snap-type: mandatory`, the first item snaps straight past
            the container's left padding, pinning scrollLeft to the padding
            value and cancelling it. Keeping the strip in the container means
            there is no padding for the snap to eat, and the left edge lines up
            with every other section on the page. */}
        <ul
          tabIndex={0}
          role="group"
          aria-label={`${gallerySection.eyebrow}: ${gallery.length} fotos, se desliza en horizontal`}
          className="custom-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:mt-14 sm:gap-5"
        >
          {gallery.map((image) => (
            <li
              key={image.id}
              className="h-[300px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-[380px] lg:h-[420px]"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="h-full w-auto max-w-none object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
