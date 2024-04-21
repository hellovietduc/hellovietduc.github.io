/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // https://coolors.co/191716-e6af2e-e0e2db-3d348b-beb7a4
        'eerie-black': '#191716',
        goldenrod: '#E6AF2E',
        alabaster: '#E0E2DB',
        'cosmic-cobalt': '#3D348B',
        'lavender-blue': '#C8C4E9',
        'khaki-web': '#BEB7A4',
      },
      fontSize: {
        '1.5xl': ['1.375rem', '2rem'],
        '2.5xl': ['1.6875rem', '2.25rem'],
        '3.5xl': ['2.125rem', '2.5rem'],
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}
