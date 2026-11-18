// @ts-check

/**
 * Coaching staff.
 *
 * CLAUDE.md names Carlos Bartra as the real head coach — that is the only
 * confirmed fact here. No bio, credentials or years are recorded because none
 * are documented anywhere in the project; inventing them is out of the question.
 *
 * Photos: the files under src/assets/Staff/ are AI-generated or AI-edited
 * portraits (one still carries a generator watermark), so none is referenced.
 * `photo` stays null until the client sends real headshots with permission.
 *
 * @type {import('./types.js').Coach[]}
 */
export const coaches = [
  {
    id: 'carlos-bartra',
    name: 'Carlos Bartra',
    role: 'Head coach', // TODO (cliente): confirmar el título exacto en español.
    bio: null, // TODO (cliente): 2–3 líneas de trayectoria.
    credentials: [], // TODO (cliente): certificaciones (p. ej. ITF), años de experiencia.
    photo: null, // TODO (cliente): foto real + permiso de uso.
    confirmed: false,
  },
];

/** @type {import('./types.js').Pending} */
export const coachesStatus = {
  confirmed: false,
  note: 'Solo el nombre del head coach está confirmado. Falta bio, credenciales y fotos reales.',
};
