/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },

    colors: {
      gray: {
        900: '#090706',
        800: '#202024',
        400: '#9ca3af',
        200: '#e1e1e6',
        100: '#c4c4cc',
      },

      cyan: {
        500: '#7dd3fc',
        400: '#42befa',
      },
      
      'transparent': 'transparent',

      'white': '#ffffff',  
      'black': '#000000',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
