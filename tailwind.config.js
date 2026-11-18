/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark theme is the default surface.
        'brand-dark': '#0f172a',
        'brand-blue': '#0066FF',
        'brand-blue-dark': '#0052cc',
        'brand-neon': '#ccff00',
        'brand-neon-hover': '#b3e600',
        // WhatsApp green. Pair with brand-dark text/glyph, never white:
        // white on this green is ~1.8:1 and fails the 3:1 non-text minimum.
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
