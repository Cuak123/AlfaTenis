// @ts-check
import { whatsapp } from '../content/site.js';
import { messages } from '../content/messages.js';

/**
 * Build a WhatsApp deep link with a prefilled, URL-encoded message.
 *
 * Use the `key` form wherever possible so the copy stays in messages.js:
 *   waLink('trialClass')
 * A raw string is accepted for one-offs and is encoded the same way.
 *
 * @param {import('../content/messages.js').MessageKey | string} [keyOrText]
 * @returns {string}
 */
export function waLink(keyOrText = 'general') {
  const text =
    keyOrText in messages
      ? messages[/** @type {import('../content/messages.js').MessageKey} */ (keyOrText)]
      : String(keyOrText);

  return `https://api.whatsapp.com/send?phone=${whatsapp.phone}&text=${encodeURIComponent(text)}`;
}

/**
 * Props every WhatsApp link needs. Spread onto an <a> so no call site forgets
 * the security attributes on a `target="_blank"` link.
 *
 * @param {import('../content/messages.js').MessageKey | string} [keyOrText]
 */
export function waLinkProps(keyOrText) {
  return {
    href: waLink(keyOrText),
    target: '_blank',
    rel: 'noopener noreferrer',
  };
}
