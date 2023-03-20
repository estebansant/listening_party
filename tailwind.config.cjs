/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
    "./src/**/*.jsx",
    "./**/*.html"
    ]
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1280px',
      xl: '2560px',
      'special': { 'raw': '(min-height: 600px) and (max-width:1024px) and (max-height:601px)'},
    },
    colors: {
      // Color palette
      'black': '#222325',
      'gray': '#d5d4d2',
      'blue': '#094074',
      'white': '#f1faee',
      'green': '#1dbf73',
      'dark-green': '#0d5936',
    },
    fontFamily:{
      Merriweather:['Merriweather', 'serif'],
      Lato:['Lato', 'sans-serif']
    },
    fontSize:{
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'l': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '38px',
      '5xl': '46px',
    },
    borderRadius: {
      'none': '0',
      'xs': '6px',
      'sm': '8px',
      'md': '12px',
      'lg': '16px',
      'full': '50%',
    },
    boxShadow:{
      'sm': '0 2px 4px 0 rgb(0 0 0 / 0.45)',
      'md': '3px 4px 6px 1px rgb(0 0 0 / 0.45)',
      'md2': '0 4px 6px 1px rgb(0 0 0 / 0.35)',
      'md3': '3px 4px 6px 1px rgb(255 255 255 / 0.35)',
      'lg': '6px 10px 15px -3px rgb(0 0 0 / 0.45)',
      'xl': '9px 20px 25px -5px rgb(0 0 0 / 0.45)',
    },
    extend: {},
  },
  plugins: [
    
  ],
}
