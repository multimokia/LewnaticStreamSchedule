import plugin from 'tailwindcss';

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
        'hover-slow': 'hover 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        },
        tentalegs: {
          '50': '#fbf8fc',
          '100': '#f4eff8',
          '200': '#ece3f1',
          '300': '#ddcce6',
          '400': '#c6abd5',
          '500': '#b08ac3',
          '600': '#9a6eaf',
          '700': '#835a96',
          '800': '#6e4d7c',
          '900': '#5a3f64',
          '950': '#3c2546',
        },
      },
      fontFamily: {
        'BlackMango': ['BlackMango', 'sans-serif'],
      },
    },
    plugins: [
      plugin(({ matchUtilities, theme }) => {
        matchUtilities(
          {
            'animation-delay': (value) => {
              return {
                'animation-delay': value,
              };
            },
          },
          {
            values: theme('transitionDelay'),
          }
        );
      }),
    ],
  },
};
