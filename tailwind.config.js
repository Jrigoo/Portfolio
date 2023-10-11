/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFE9FF",
        dark: "#171D29",
        green: "#3BCCB2",
        blue: "#1C2230",
        gray: "#BAC0D0",
        pink: "#9D86AA",
        "blue-filter": "rgba(74,76,110,0.1)",
      },
    },
  },
  plugins: [],
};
