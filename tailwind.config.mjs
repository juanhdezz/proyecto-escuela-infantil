/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#dcf3ff',
          200: '#b3e7ff',
          300: '#76d5ff',
          400: '#37bbff',
          500: '#069af0',
          600: '#007dcf',
          700: '#0064a8',
          800: '#00558b',
          900: '#064773',
        },
        secondary: {
          50: '#f4fbea',
          100: '#e6f6d1',
          200: '#ceeca9',
          300: '#b0dc77',
          400: '#92c84d',
          500: '#76ac32',
          600: '#5c8a25',
          700: '#476b21',
          800: '#3b551f',
          900: '#34491e',
        },
        accent: {
          50: '#fff8ec',
          100: '#ffeece',
          200: '#ffd88d',
          300: '#ffba4d',
          400: '#ff9b1f',
          500: '#ff7a00',
          600: '#e15a00',
          700: '#bb3d02',
          800: '#982e0a',
          900: '#7c280d',
        }
      },
      fontFamily: {
        display: ['Bubblegum Sans', 'Comic Sans MS', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}