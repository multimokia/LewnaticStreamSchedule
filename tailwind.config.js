import tailwindcssAnimated from "tailwindcss-animated";

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "hover-slow": "hover 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        tarot: {
          "50": "#fbf7f1",
          "100": "#f6ecde",
          "200": "#ecd6bc",
          "300": "#ddb488",
          "400": "#d29765",
          "500": "#c87d47",
          "600": "#ba683c",
          "700": "#9b5233",
          "800": "#7d442f",
          "900": "#653829",
          "950": "#361b14",
        },
        tentalegs: {
          "50": "#fbf8fc",
          "100": "#f4eff8",
          "200": "#ece3f1",
          "300": "#ddcce6",
          "400": "#c6abd5",
          "500": "#b08ac3",
          "600": "#9a6eaf",
          "700": "#835a96",
          "800": "#6e4d7c",
          "900": "#5a3f64",
          "950": "#3c2546",
        },
        "royal-blue": {
          "50": "#f1f4fd",
          "100": "#e0e7f9",
          "200": "#c8d5f5",
          "300": "#a3bbed",
          "400": "#7797e3",
          "500": "#4e6ed8",
          "600": "#435acd",
          "700": "#3948bc",
          "800": "#343d99",
          "900": "#2e377a",
          "950": "#20244b",
        },
      },
      fontFamily: {
        "BlackMango": ["BlackMango", "sans-serif"],
      },
      blur: {
        xs: "2px",
        ty: "1px",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      maxHeight: {
        "1/8": "12.5%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
    },
    safelist: [
      "fill-gray-400",
      "fill-gray-500",
      "fill-gray-600",
    ]
  },
  plugins: [
    tailwindcssAnimated,
  ],
};
