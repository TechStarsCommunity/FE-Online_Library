/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*{.js,.jsx}',
    './index.html',
  ],
  theme: {
    fontFamily: {
      'serif': ['Montserrat', 'ui-serif'],
    },
    backgroundColor: {
      'background': '#dffcf4',
      'transparent': 'rgba(0,0,0,0)'
    },
    extend: {},
  },
  plugins: [],
}

