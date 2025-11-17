/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        text: "var(--color-text)",
        heading: "var(--color-heading)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        panel: "var(--color-panel)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};