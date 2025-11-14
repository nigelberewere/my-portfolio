/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // We are managing the dark mode manually via a class and CSS variables
  // This gives us more control and allows for localStorage persistence.
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      // Set up our CSS variables for the light/dark theme
      colors: {
        background: "var(--color-bg)",
        text: "var(--color-text)",
        heading: "var(--color-heading)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        panel: "var(--color-panel)",
      },
      fontFamily: {
        // Use Inter for body text
        sans: ["Inter", "sans-serif"],
        // Use Fira Code for headings for the "coder" aesthetic
        mono: ["Fira Code", "Roboto Mono", "monospace"],
      },
      // Simple animation for the scroll-in effect
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};