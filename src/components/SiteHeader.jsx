import { brand } from '../content/site.js';

/**
 * Wordmark only — no nav yet.
 *
 * `nav` in src/content/site.js flags each entry with `ready`, and only
 * `inicio` is true so far. Rendering links to sections that do not exist would
 * give dead anchors, so the menu lands with the sections.
 *
 * TODO: real logo. The favicon is still Vite's default.
 */
export default function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex w-full max-w-content items-center px-5 py-6 sm:px-8 sm:py-8">
        <a
          href="#inicio"
          className="rounded-sm font-display text-xl font-extrabold tracking-tight sm:text-2xl"
        >
          <span className="text-white">{brand.nameParts[0]}</span>{' '}
          <span className="text-brand-neon">{brand.nameParts[1]}</span>
          <span className="sr-only"> — inicio</span>
        </a>
      </div>
    </header>
  );
}
