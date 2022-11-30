const { fontFamily } = require('tailwindcss/defaultTheme')
const { colors } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      current: '#273238',
      gray: '#93989c',
      brand: {
        light: '#80b8e6',
        DEFAULT: '#0071ce',
        dark: '#004c8e',
        140: '#004c8e',
        120: '#005eae',
        100: '#0071ce',
        75: '#4094da',
        50: '#80b8e6',
        25: '#bfdbf3',
        15: '#d9eaf8',
        10: '#e5f1fa',
        5: '#f2f8fd',
      },
      black: {
        DEFAULT: '#273238',
        75: '#5d656a',
        50: '#93989c',
        25: '#c9cccd',
        15: '#dfe0e1',
        10: '#e9eaeb',
        5: '#f4f5f5',
      },
      white: colors.white,
      blue: {
        DEFAULT: '#0071ce'
      },
      orange: {
        DEFAULT: '#ff7900',
        dark: '#EC7000',
      },
      green: {
        DEFAULT: '#50c800'
      },
      red: {
        DEFAULT: '#ff2800'
      },
      yellow: colors.amber,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['Assistant', '"Helvetica Neue"', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Bitter', '"Helvetica Neue"', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display1': ['3.25rem', { lineHeight: '3.375rem' }], // 52px
        'display2': ['2.625rem', { lineHeight: '3.375rem' }], // 42px
        'display3': ['2.25rem', { lineHeight: '2.75rem' }], // 36px
        'display4': ['1.5rem', { lineHeight: '1.875rem' }], // 24px,
      },
      spacing: {
        15: '3.75rem',
      },
    },
  },
  plugins: [
  ],
}
