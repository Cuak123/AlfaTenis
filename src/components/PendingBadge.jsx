/**
 * Dev-only marker for copy the client has not signed off.
 *
 * Renders nothing in a production build, so an unconfirmed string can sit on
 * the page during review without ever shipping as if it were final. Drive it
 * from a `confirmed: false` flag in src/content/, never from a hardcoded guess.
 */
export default function PendingBadge({ label = 'Por confirmar' }) {
  if (!import.meta.env.DEV) return null;

  return (
    <span className="ml-2 inline-block rounded border border-amber-400/40 bg-amber-400/10 px-1.5 py-0.5 align-middle text-[0.65rem] font-semibold uppercase tracking-wide text-amber-300">
      {label}
    </span>
  );
}
