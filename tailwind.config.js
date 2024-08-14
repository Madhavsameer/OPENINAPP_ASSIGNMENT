/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode based on a class
  plugins: [
    require('tailwindcss-textshadow'),
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "purple": '#605BFF',
        "dark": '#161616',
        "light-dark": '#212121'
      },
      textShadow: {
        custom: '2px 2px 4px rgba(255, 0, 0, 0.5)', // Example of a custom red shadow
      },
    },
  },
};
