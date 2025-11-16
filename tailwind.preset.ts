import type { Config } from "tailwindcss";

const preset: Partial<Config> = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#ffffff",
          dark: "#0b1117"
        },
        accent: {
          DEFAULT: "#4a9eff",
          light: "#d6ecff",
          soft: "#7cc2ff",
          dark: "#2b9cff"
        },
        primary: {
          DEFAULT: "#dc2626",
          light: "#ef4444",
          dark: "#b91c1c"
        },
        ocean: {
          DEFAULT: "#1e40af",
          light: "#3b82f6",
          dark: "#1e3a8a"
        },
        slate: {
          950: "#080d12",
          900: "#121820",
          800: "#1b232d",
          700: "#23303d",
          600: "#475569",
          500: "#64748b",
          400: "#94a3b8",
          300: "#cbd5e1",
          200: "#e2e8f0",
          100: "#f1f5f9",
          50: "#f8fafc"
        }
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        subheading: ["var(--font-subheading)", "sans-serif"]
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(to top right, rgba(0,0,0,0.6), rgba(30,64,175,0.4))",
        "accent-diagonal":
          "linear-gradient(135deg, rgba(220,38,38,0.1), rgba(74,158,255,0.1))",
        "logo-gradient":
          "linear-gradient(135deg, #4a9eff 0%, #1e40af 100%)"
      },
      boxShadow: {
        raised: "0 24px 48px rgba(18, 24, 32, 0.18)",
        deep: "0 36px 60px rgba(18, 24, 32, 0.28)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};

export default preset;

