/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    colors: {
      white: "#FFFFFF",
      gray: {
        20: "#F6F6F6",
        50: "#F9F8F8",
        100: "#DCDCDC",
        150: "#EDEDED",
        200: "#A5A5A5",
        300: "#555555",
        400: "#3C3C3C",
      },
      green: {
        20: "#00E75C",
        50: "#00D254",
        100: "#00D254",
        150: "#00D655",
        180: "#00CA51",
        200: "#00983D",
      },
      red: "#BC0000",
      yellow: "#DED61A",
    },
    borderRadius: {
      'full': '9999px',
      '3xl': '90px',
      '2xl': '60px',
      'lg': '40px',
      'md': '20px',
    },
  },
}