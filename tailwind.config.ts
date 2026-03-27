import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          light: "#F5C842",
          DEFAULT: "#D4A017",
          dark: "#E8A020",
          deeper: "#C8920D",
        },
        amber: {
          warm: "#8B4513",
          deep: "#6B3410",
        },
        cream: {
          light: "#FFFBF0",
          DEFAULT: "#FFF8E7",
          warm: "#FEF3C7",
        },
        forest: {
          light: "#3A6B1A",
          DEFAULT: "#2D5016",
          deep: "#1A3009",
        },
        dark: {
          light: "#2D2D2D",
          DEFAULT: "#1A1A1A",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(3deg)" },
          "66%": { transform: "translateY(-8px) rotate(-2deg)" },
        },
        drip: {
          "0%": { transform: "translateY(0) scaleY(1)", opacity: "1" },
          "80%": { transform: "translateY(40px) scaleY(1.3)", opacity: "0.8" },
          "100%": { transform: "translateY(60px) scaleY(0.5)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-honey": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "bee-fly": {
          "0%": { transform: "translateX(-100px) translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateX(25vw) translateY(-40px) rotate(10deg)" },
          "50%": { transform: "translateX(50vw) translateY(20px) rotate(-5deg)" },
          "75%": { transform: "translateX(75vw) translateY(-20px) rotate(8deg)" },
          "100%": { transform: "translateX(110vw) translateY(0px) rotate(0deg)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "hexagon-pulse": {
          "0%, 100%": { opacity: "0.05" },
          "50%": { opacity: "0.12" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        drip: "drip 2s ease-in infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-honey": "pulse-honey 2s ease-in-out infinite",
        "bee-fly": "bee-fly 18s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "hexagon-pulse": "hexagon-pulse 4s ease-in-out infinite",
      },
      clipPath: {
        hexagon: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      },
      backgroundImage: {
        "honey-gradient": "linear-gradient(135deg, #C8920D 0%, #D4A017 30%, #F5C842 60%, #E8A020 100%)",
        "hero-gradient": "linear-gradient(160deg, #1A0A00 0%, #2D1500 25%, #3D1F00 50%, #5C2E00 75%, #8B4513 100%)",
        "forest-gradient": "linear-gradient(135deg, #1A3009 0%, #2D5016 50%, #3A6B1A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
