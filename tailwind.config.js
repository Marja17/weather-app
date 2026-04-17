/**
 * Configuración Tailwind
 */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "375px",
      },
      spacing: {
        "responsive-x": 'calc(1rem + (8 - 1) * ((100vw - 20rem) / (100 - 20)))',
        "responsive-y": 'calc(2rem + (4 - 2) * ((100vw - 20rem) / (100 - 20)))',
      },
    },
  },
  plugins: [],
};