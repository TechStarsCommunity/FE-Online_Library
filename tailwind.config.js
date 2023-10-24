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
      'transparent': 'rgba(0,0,0,0)',
      'primary':'#001E50',
      'secondary':'#35EAB9',
      'blue-gradient':'#10B2F3',
      'green-gradient': '#35EAB9',
      'white':'#fff',
      'black-70':'rgba(26, 26, 26, 0.70)',
      'black-80':'rgba(26, 26, 26, 0.80)',
      'black-90':'rgba(26, 26, 26, 0.90)',
      'black-100':'rgba(26, 26, 26, 1)',
      'btn-primary': 'linear-gradient(0deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.16) 100%), linear-gradient(96deg, #10B2F3 0%, #35EAB9 100%)',
      'btn-primary-hover':'#001E50',
      'btn-secondary': '#fff',
      'btn-secondary-hover':'linear-gradient(0deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.16) 100%), linear-gradient(96deg, #10B2F3 0%, #35EAB9 100%)'
    },
    colors:{
      'primary':'#001E50',
      'secondary':'#35EAB9',
      'blue-gradient':'#10B2F3',
      'green-gradient': '#35EAB9',
      'white':'#fff',
      'black-70':'rgba(26, 26, 26, 0.70)',
      'black-80':'rgba(26, 26, 26, 0.80)',
      'black-90':'rgba(26, 26, 26, 0.90)',
      'black-100':'rgba(26, 26, 26, 1)',
    },
    extend: {},
  },
  plugins: [],
}

