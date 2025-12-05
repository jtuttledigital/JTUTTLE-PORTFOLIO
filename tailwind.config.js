/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        paper: "#FAFAFA",
        mute: "#8a8f98",
        accent: "#58e877", // ← your hex green
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"],
      },
      boxShadow: {
        soft: "0 8px 28px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
