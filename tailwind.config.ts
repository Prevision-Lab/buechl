import type { Config } from 'tailwindcss'

export default <Config>{
  theme: {
    extend: {
      colors: {
        // Főszínek - BÜCHL Design Specification
        'buchl-blue': '#005EB8',        // Fő kék szín
        'buchl-green': '#00F189',       // Akcent zöld
        'buchl-dark-blue': '#03305D',   // Sötétkék (hover animációkhoz)
        'buchl-gray': '#4E5556',        // Szöveg szürke
        
        // Semleges színek
        'gray-light': '#F5F5F5',
        'gray-medium': '#D9D9D9',
        'gray-dark': '#333333',
        
        // Akciószínek
        'warning': '#FFB800',
        'error': '#D9001B',
        'success': '#00D965',

        // Alapszínek felülírása a Nuxt UI számára - BÜCHL blue #005EB8
        primary: {
          '50': '#e6f2fc',
          '100': '#cce5f9',
          '200': '#99cbf3',
          '300': '#66b1ed',
          '400': '#3397e7',
          '500': '#005EB8', // BÜCHL Kék - FŐ SZÍN
          '600': '#004b93',
          '700': '#00386e',
          '800': '#00254a',
          '900': '#001225',
          '950': '#000912',
        },
        secondary: {
          '50': '#e6feef',
          '100': '#ccfddf',
          '200': '#99fbbe',
          '300': '#66f99e',
          '400': '#33f87d',
          '500': '#00F189', // Büchl Zöld
          '600': '#00c16e',
          '700': '#009152',
          '800': '#006037',
          '900': '#00301b',
          '950': '#00180e',
        },
      },
      fontFamily: {
        sans: ['Catamaran', 'sans-serif'],
        marker: ['Permanent Marker', 'cursive'],
      },
    },
  },
  safelist: [
    // Dinamikusan generált osztályok, amik mindenképp szükségesek
    'bg-buchl-blue',
    'bg-buchl-green',
    'bg-buchl-dark-blue',
    'text-buchl-blue',
    'text-buchl-green',
    'text-buchl-gray',
    'text-white',
    'hover:bg-buchl-dark-blue',
    'grayscale',
    'grayscale-0',
  ]
}