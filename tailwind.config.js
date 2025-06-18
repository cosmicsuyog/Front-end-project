/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: "var(--font-zentry-regular)", // 👈 this line makes `font-zentry` work
      },
    },
  },
  plugins: [],
};
