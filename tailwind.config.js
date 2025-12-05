/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        ink: "#050506",
        paper: "#F5F5F5",
        mute: "#8A8F98",
        accent: "#58e877",
      },
      boxShadow: {
        soft: "0 8px 28px rgba(0,0,0,0.06)",
      },
    },
  },
};
