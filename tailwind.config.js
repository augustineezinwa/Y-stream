/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'sign-up-background': "url('/background-y-movies.jpg')",
      },
      colors: {
        osblood: '#4E232C',
        'gray-translucent': '#020203',
        'gray-dark': '#333333',
        'gray-8c': '#8C8C8C',
        'gray-b3': '#B3B3B3',
        'gray-413': '#413C3C',
        'gray-373': '#37383B',
        'gray-111': '#11131A',
        'ocean-dark-blue': '#132144',
        'gray-837': '#837F75',
        'gray-8080': '#808080',
        'ocean-blue': '#0872E5',
        theme: '#938873',
      },
    },
  },
  plugins: [],
};
