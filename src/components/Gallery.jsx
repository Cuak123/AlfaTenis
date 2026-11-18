import { Instagram } from 'lucide-react';
import { gallery, gallerySection } from '../content/gallery.js';
import { social } from '../content/site.js';

/**
 * "Galería" — photos from the academy's own tournaments.
 *
 * This file replaces the pre-rebuild Gallery that read from the legacy
 * src/config/site.js and pointed at AI-generated stock images.
 *
 * No lightbox. A gallery of three photos does not justify a focus trap, a
 * keyboard escape handler and a scroll lock; the images are shown at a size
 * where nothing is lost by not enlarging them.
 *
 * Every image is lazy with explicit width/height, so the grid reserves its
 * boxes and nothing below it shifts while they load. `sizes` is declared so
 * the browser is not told to assume full viewport width for a grid cell.
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

          {/* Only rendered when a real URL exists — an empty value hides the
              link rather than shipping a dead `#`. */}
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

        <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {gallery.map((image) => (
            <li
              key={image.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, calc(100vw - 2.5rem)"
                className="h-full w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
