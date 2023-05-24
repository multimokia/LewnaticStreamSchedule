/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        tarot: {
          '50': '#fbf7f1',
          '100': '#f6ecde',
          '200': '#ecd6bc',
          '300': '#ddb488',
          '400': '#d29765',
          '500': '#c87d47',
          '600': '#ba683c',
          '700': '#9b5233',
          '800': '#7d442f',
          '900': '#653829',
          '950': '#361b14',
        }
      },
    },
    plugins: [],
  },
};
