import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DDA7A5",
        secondary: "#F4E3E3",
        background: "#FDFBF7",
        textMain: "#4A4A4A",
        heading: "#6B4454",
        accent: "#B5C1B4",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
        display: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config
