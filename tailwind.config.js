/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: "#23375F",
        black: "#000000",
        white: "#FFFFFF",
      },
      spacing: {
        '90': '90rem',
      },
      fontFamily: {
        // You can add custom fonts here
      },
    },
  },
  plugins: [],
} 