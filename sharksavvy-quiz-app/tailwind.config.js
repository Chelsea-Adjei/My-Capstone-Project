/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "100vh": "100vh",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: { min: "1024px", max: "1279px" },

        xl: "1024px",
        // => @media (min-width: 1024px) { ... }

        "2xl": "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
