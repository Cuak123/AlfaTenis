# archive/

Files kept for reference but deliberately **not published**.

Nothing in this folder is part of the build. `public/` is copied verbatim into
`dist/` and served at the site root, so anything placed there is publicly
reachable by URL whether or not a page links to it. These files must not be.

## flyer_2026.html

Standalone promo flyer (not part of the React app). It previously lived at
`public/flyer_2026.html` and was therefore served at `/flyer_2026.html` on every
deploy.

It embeds a tournament photo as a base64 `data:` URI — the same photo as
`src/assets/Tournaments/torneo.jpeg`, which shows identifiable minors. Removing
the JPEG alone would not have removed the photo from the flyer, so the flyer
moved out of `public/` too.

Open it locally in a browser if needed. Do not move it back into `public/`
without parental consent for the photo (Ley N.° 29733).

## Related

`src/assets/Tournaments/torneo.jpeg` and `torneoconcarlos.jpeg` moved out of
`public/assets/` for the same reason. They stay under `src/assets/` because Vite
only emits files that a module actually imports, and nothing imports them.
`torneoconcarlos.jpeg` additionally shows a child's full name on a certificate.
