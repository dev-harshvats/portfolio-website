import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "near-black": "#09090b",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "float-slow-1": "floatSlow1 12s ease-in-out infinite",
        "float-slow-2": "floatSlow2 15s ease-in-out infinite",
        "float-slow-3": "floatSlow3 18s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#6366f1" },
        },
        floatSlow1: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)", opacity: "0.2" },
          "50%": { transform: "translate(30px, -50px) scale(1.1)", opacity: "0.4" },
        },
        floatSlow2: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)", opacity: "0.15" },
          "50%": { transform: "translate(-40px, 40px) scale(0.9)", opacity: "0.35" },
        },
        floatSlow3: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)", opacity: "0.2" },
          "50%": { transform: "translate(20px, 30px) scale(1.05)", opacity: "0.3" },
        },
      },
      boxShadow: {
        "indigo-glow": "0 0 25px rgba(99, 102, 241, 0.15)",
        "cyan-glow": "0 0 25px rgba(34, 211, 238, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
