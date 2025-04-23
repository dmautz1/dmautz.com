/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.bold') },
        'h3': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
        'h4': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
        'h5': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.bold') },
        'h6': { fontSize: theme('fontSize.base'), fontWeight: theme('fontWeight.bold') },
      })
    },
  ],
};