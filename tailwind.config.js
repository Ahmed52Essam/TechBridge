/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF7",
        surface: "#FFFFFF",
        primary: { DEFAULT: "#007DB8", foreground: "#FFFFFF" },
        secondary: { DEFAULT: "#007DB8", foreground: "#FFFFFF" },
        accent: { DEFAULT: "#14263D", foreground: "#FFFFFF" },
        dark: { DEFAULT: "#14263D", foreground: "#F8FAFC" },
      },
      borderColor: { DEFAULT: "#E2E6EA" },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
