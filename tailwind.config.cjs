const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        secondary: '#525252',
        warning: '#f1c21b',
      },
      placeholderColor: {
        primary: '#a8a8a8',
      },
      textColor: {
        primary: '#161616',
        disabled: '#8d8d8d',
      },
      fontFamily: {
        sans: ["'Anuphan Variable'", ...defaultTheme.fontFamily.sans],
        serif: ["'IBM Plex Serif'", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
