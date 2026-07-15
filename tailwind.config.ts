import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        court: {
          50: "#fff4ec",
          100: "#ffe4cf",
          200: "#ffc79b",
          300: "#ffa25e",
          400: "#ff7f2f",
          500: "#f96411",
          600: "#ea4a08",
          700: "#c2350a",
          800: "#9a2a10",
          900: "#7c2510",
          950: "#431006",
        },
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5d9e2",
          300: "#b1b8c8",
          400: "#8690a8",
          500: "#67718c",
          600: "#525a73",
          700: "#43495e",
          800: "#2e3241",
          900: "#191b24",
          950: "#0b0c11",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["2.75rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-sm": ["2.125rem", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 18, 25, 0.04), 0 8px 24px -8px rgba(15, 18, 25, 0.08)",
        card: "0 1px 1px rgba(15,18,25,0.03), 0 12px 32px -16px rgba(15,18,25,0.14)",
        "card-hover": "0 1px 1px rgba(15,18,25,0.04), 0 20px 40px -16px rgba(15,18,25,0.22)",
        glow: "0 0 0 1px rgba(249,100,17,0.15), 0 8px 24px -8px rgba(249,100,17,0.35)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(11,12,17,0.85)), radial-gradient(circle at top, rgba(249,100,17,0.14), transparent 60%)",
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.5s ease-out both",
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
