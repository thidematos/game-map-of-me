/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        brancoAzulado: '#defcf9',
        azulClaro: '#85cdfd',
        azul: '#3c84ab',
        azulEscuro: '#362fd9',
        laranja: '#f76015',
      },
      fontFamily: {
        jakarta: 'Plus Jakarta Sans',
        amatic: 'Amatic SC',
      },
    },
  },
  plugins: [],
};
