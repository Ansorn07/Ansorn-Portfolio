import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        samurai: {
          background: "#0f0f14",  // Deep night
          primary: "#8b0000",     // Blood red
          secondary: "#6b1f1f",   // Maroon armor
          accent: "#000000",      // Replaced violet with black
          surface: "#1f1f1f",     // Katana steel gray
          text: "#f5f5f5",        // White parchment
          muted: "#2d2d2d",       // Shadow
          border: "#444444",      // Blade edge
        },
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
