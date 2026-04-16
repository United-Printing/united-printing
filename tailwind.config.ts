import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
    './app.vue',
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '720px',
      lg: '1200px',
      xl: '1920px',
    },
    extend: {
      colors: {
        accent: '#FEE137',
        teal: '#19B4B0',
        'teal-dark': '#17A09D',
        dark: '#111111',
        muted: '#ACAEB1',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Helvetica Now', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-in-left': 'slideInLeft 0.4s ease forwards',
        'slide-in-right': 'slideInRight 0.4s ease forwards',
        'glow': 'glow 5s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%': { borderColor: '#FEE137' },
          '100%': { borderColor: '#FFFFFF' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
