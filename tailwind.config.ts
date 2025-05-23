import type { Config } from 'tailwindcss'

export default <Config>{
  theme: {
    extend: {
      colors: {
        // Főszínek
        'buchl-blue': '#002F5C',
        'buchl-green': '#00F189',
        
        // Semleges színek
        'gray-light': '#F5F5F5',
        'gray-medium': '#D9D9D9',
        'gray-dark': '#333333',
        
        // Akciószínek
        'warning': '#FFB800',
        'error': '#D9001B',
        'success': '#00D965',

        // Alapszínek felülírása a Nuxt UI számára
        primary: {
          '50': '#e6f0f7',
          '100': '#cce0ef',
          '200': '#99c2df',
          '300': '#66a3cf',
          '400': '#3385bf',
          '500': '#0066af',
          '600': '#00528c',
          '700': '#003d69',
          '800': '#002F5C', // Büchl Kék
          '900': '#00101f',
          '950': '#000810',
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
    'text-buchl-blue',
    'text-buchl-green',
    'text-white',
    'grayscale',
    'grayscale-0',
  ]
}