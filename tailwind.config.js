/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F3F4F6", // Very light grey
        surface: "rgba(255, 255, 255, 0.7)", // Glassmorphism base
        primary: {
          DEFAULT: "#4F46E5", // Indigo-600 (Vibrant)
          foreground: "#FFFFFF",
          glow: "rgba(79, 70, 229, 0.5)",
        },
        secondary: {
          DEFAULT: "#0EA5E9", // Sky-500 (Cyan-ish)
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#8B5CF6", // Violet-500
          foreground: "#FFFFFF",
        },
        dark: {
          DEFAULT: "#0F172A", // Slate-900
          foreground: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
        'mesh-light': 'radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(14, 165, 233, 0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(139, 92, 246, 0.15) 0px, transparent 50%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow': '0 0 20px -5px var(--tw-shadow-color)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }
      }
    },
  },
  plugins: [],
}
