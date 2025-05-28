/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': '1400px',
      'xl': '1200px',
      'custom': '1100px',
      'lg': '1024px',
      'md': '768px',
      'sm': '480px',
    },
    extend: {
      colors: {
        blue: "#23375F",
        yellow: "#FFD149",
        orange: "#FFA500",
        "bright-orange": "#FD8121",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontSize: {
       
        '2xl': ['3.4375rem', {
          lineHeight: '100%',
          letterSpacing: '-3%',
        }],
        'xl': ['2.1875rem', {
          lineHeight: '100%',
          letterSpacing: '-3%',
        }],
        'lg': ['1.5625rem', {
          lineHeight: '100%',
          letterSpacing: '0%',
        }],
        'md': ['1.375rem', {
          lineHeight: '100%',
          letterSpacing: '0%',
        }],
        'base': '1rem',
        'sm': '0.875rem',
      },
      spacing: {
        '90': '90rem',
        '89': '71rem', // 1136px converted to rem
      },
      fontFamily: {
        // You can add custom fonts here
      },
    },
  },
  plugins: [],
} 