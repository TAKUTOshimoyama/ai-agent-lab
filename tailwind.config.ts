import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        "spin-medium": "spin 9s linear infinite",
        "spin-fast": "spin 5s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.98)" },
          "50%": { opacity: "0.6", transform: "scale(1.02)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      transitionDuration: {
        "1200": "1200ms",
        "1500": "1500ms",
      },
    },
  },
  plugins: [],
};

export default config;
