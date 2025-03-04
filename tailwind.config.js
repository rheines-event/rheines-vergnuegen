/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-bellefair)'],
        display: ['var(--font-forum)'],
        sans: ['var(--font-kantumruy-pro)'],
        serif: ['var(--font-spectral)'],
      }
    },
  },
  plugins: [],
  safelist: [
    'font-sans',
    'font-serif',
    'font-display',
    'font-body',
  ]
}
