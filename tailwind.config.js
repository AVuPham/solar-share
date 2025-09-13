/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan toàn bộ source code
  ],
  theme: {
    extend: {
      colors: {
        solar: {
          yellow: "#FFD700",
          sky: "#00BFFF",
          green: "#32CD32",
        },
      },
    },
  },
  plugins: [],
};
