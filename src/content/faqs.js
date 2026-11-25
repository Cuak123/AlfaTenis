// @ts-check

/**
 * Frequently asked questions. Carried over from the previous build, which
 * CLAUDE.md does not flag as placeholder.
 *
 * ⚠️ This whole file needs an audit. It came from the build that also invented
 * the prices and the testimonials, and several answers state specific
 * operational policy that appears in NO client source: that rackets and balls
 * are provided, that rain reschedules automatically, the 24-hour make-up rule,
 * and the payment methods.
 *
 * Two were already contradicting confirmed data:
 *   - the minimum age said 4; the client's sheet says 3. Corrected here, and
 *     see src/content/programs.js for why 3 wins.
 *   - "semiprivadas (2 personas)" is still below. The client's own price
 *     flyers list only grupales and individuales, so this may be offering
 *     something that does not exist. LEFT AS-IS deliberately rather than
 *     deleted on a guess — removing a real service would be its own mistake.
 *
 * TODO (cliente): confirmar o corregir cada respuesta, una por una.
 *
 * @type {import('./types.js').Faq[]}
 */
export const faqs = [
  {
    id: 'experiencia-raqueta',
    sourced: false, // Que se preste raqueta y pelotas no aparece en ninguna fuente del cliente.
    question: '¿Necesito tener experiencia previa o raqueta propia?',
    answer:
      'No es necesario. En las clases de iniciación damos el material deportivo (raquetas y pelotas) para que puedas probar sin compromiso. A medida que avances, te asesoramos para comprar tu propia raqueta.',
  },
  {
    id: 'lluvia-inasistencia',
    sourced: false, // La reprogramacion automatica y la regla de 24 h no aparecen en ninguna fuente.
    question: '¿Qué pasa si llueve o no puedo asistir a una clase?',
    answer:
      'Si la clase se cancela por lluvia, se reprograma automáticamente. Si no puedes asistir por motivos personales, puedes recuperarla en otro horario disponible avisando con 24 horas de anticipación.',
  },
  {
    id: 'formas-de-pago',
    sourced: false, // Los medios de pago y el cobro por adelantado no aparecen en ninguna fuente.
    question: '¿Cuáles son las formas de pago?',
    answer:
      'Aceptamos Yape, Plin, transferencia bancaria y efectivo. Los pagos se hacen por adelantado al inicio de cada mes o paquete de clases.',
  },
  {
    id: 'clases-particulares',
    sourced: false, // Las privadas 1 a 1 si estan en el flyer de precios; las SEMIPRIVADAS no, y contradicen esa lista.
    question: '¿Ofrecen clases particulares?',
    answer:
      'Sí. Tenemos clases privadas (1 a 1) y semiprivadas (2 personas) para quienes buscan avanzar más rápido con corrección técnica personalizada. Los horarios se coordinan directamente con el entrenador.',
  },
  {
    id: 'edad-minima',
    sourced: true, // 3 anios y bola roja salen del cuadro del cliente (PUNTO ROJO / PUNTO NARANJA).
    question: '¿A partir de qué edad pueden empezar los niños?',
    answer:
      'El programa de Mini Tenis (bola roja) acepta niños desde los 3 años, con foco en la psicomotricidad y la diversión.',
  },
];
