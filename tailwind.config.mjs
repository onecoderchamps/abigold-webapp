/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainColor: {
          DEFAULT: '#B76E79',
          '80': 'rgba(183, 110, 121, 0.9)',
          '70': 'rgba(183, 110, 121, 0.7)',
          '50': 'rgba(183, 110, 121, 0.5)', // 50% opacity
          '30': 'rgba(183, 110, 121, 0.3)', // 30% opacity
          '10': 'rgba(183, 110, 121, 0.1)',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        /* Hide scrollbar for Chrome, Safari and Opera */
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        /* Hide scrollbar for IE, Edge and Firefox */
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      };
      addUtilities(newUtilities)
    },
    flowbite.plugin(),
    require('daisyui'),
  ],
};
