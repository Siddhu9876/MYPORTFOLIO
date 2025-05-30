/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        neon: {
          cyan: '#36F9F6',
          pink: '#FF2CDF',
          green: '#39FF14',
          yellow: '#FDFF00',
        },
        dark: {
          100: '#2d2d2d',
          200: '#252525',
          300: '#1f1f1f',
          400: '#181818',
          500: '#121212',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.neon.cyan), 0 0 20px rgba(54, 249, 246, 0.3)',
        'neon-hover': '0 0 10px theme(colors.neon.cyan), 0 0 30px rgba(54, 249, 246, 0.5)',
      },
    },
  },
  plugins: [],
};