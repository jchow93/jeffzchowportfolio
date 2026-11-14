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
        primary: "#000000",
        mist: "#F2F5F3",
        pine: "#10231D",
        sage: "#7F9879",
        stage: "#0D1714",
        filament: "#D9541A",
        "text-primary": "#000000",
        "text-secondary": "#666666",
        "text-tertiary": "#999999",
        background: "#FFFFFF",
        "background-alt": "#FAFAFA",
        border: "#E5E5E5",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Bricolage Grotesque", "Avenir Next", "Segoe UI", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

