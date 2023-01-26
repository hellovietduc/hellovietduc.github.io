/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        '1.5xl': ['1.375rem', '2rem'],
        '2.5xl': ['1.675rem', '2.25rem'],
        '3.5xl': ['2.125rem', '2.5rem'],
      },
    },
  },
  plugins: [],
};
