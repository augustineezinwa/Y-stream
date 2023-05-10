/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "sign-up-background": "url('/background-y-movies.jpg')",
      },
      colors: {
        osblood: "#4E232C",
        "gray-translucent": "#020203",
        "gray-dark": "#333333",
        "gray-8c": "#8C8C8C",
        "gray-b3": "#B3B3B3",
      },
    },
  },
  plugins: [],
};
