import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1F5C",
        "navy-dark": "#060E2B",
        gold: "#C9A84C",
        "gold-light": "#F0D080",
        accent: "#F97316",
        success: "#10B981",
        "bg-light": "#F5F6FA",
        "text-dark": "#1A1A2E",
        "text-muted": "#6B7280",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["DM Sans", "sans-serif"],
        devanagari: ["Noto Serif Devanagari", "serif"],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "bounce-slow": "bounce-slow 1.5s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
