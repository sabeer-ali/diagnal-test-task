/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      192: "192px",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      backgroundImage: {
        "nav-bg-image": "url('/src/assets/nav_bar.png')",
      },
    },
  },
  plugins: [],
};
