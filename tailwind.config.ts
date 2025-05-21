import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        // BÜCHL specific colors
        'buchl-blue': '#002F5C', // Büchl Kék (Saphirblau)
        'buchl-green': '#00F189', // Büchl Zöld
        
        // Override primary colors with BÜCHL blue
        primary: {
          50: '#e6f0f8',
          100: '#cce1f1',
          200: '#99c3e3',
          300: '#66a5d5',
          400: '#3387c7',
          500: '#002F5C', // Büchl Kék (Saphirblau)
          600: '#002549',
          700: '#001c38',
          800: '#001224',
          900: '#000912',
          950: '#000509',
        },
        
        // Full color palettes for UI components
        buchl: {
          50: '#e6f4ea',
          100: '#cce9d5',
          200: '#99d3ab',
          300: '#66bd82',
          400: '#33a758',
          500: '#00F189', // Büchl Zöld
          600: '#006937',
          700: '#004d26',
          800: '#003319',
          900: '#001a0d',
          950: '#000d06',
        },
        sapphire: {
          50: '#e6f0f8',
          100: '#cce1f1',
          200: '#99c3e3',
          300: '#66a5d5',
          400: '#3387c7',
          500: '#002F5C', // Büchl Kék (Saphirblau)
          600: '#002549',
          700: '#001c38',
          800: '#001224',
          900: '#000912',
          950: '#000509',
        },
        warning: {
          50: '#FFF9E5',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#FFB800',
          600: '#CC9300',
          700: '#996F00',
          800: '#7A5F00',
          900: '#5C4700',
          950: '#402F00',
        },
        error: {
          50: '#FEE5E8',
          100: '#FCCCD1',
          200: '#F999A3',
          300: '#F66676',
          400: '#F33348',
          500: '#D9001B',
          600: '#AE0016',
          700: '#820010',
          800: '#55000B',
          900: '#2B0005',
          950: '#150003',
        },
        success: {
          50: '#E5FAF0',
          100: '#CCF4E0',
          200: '#99E9C2',
          300: '#66DFA3',
          400: '#33D484',
          500: '#00D965',
          600: '#00AE51',
          700: '#00823D',
          800: '#005729',
          900: '#002B14',
          950: '#00150A',
        },
      },
      fontFamily: {
        sans: ['Catamaran', 'sans-serif'],
        display: ['Permanent Marker', 'cursive'],
      },
      spacing: {
        '2xs': '0.25rem',
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
      },
      boxShadow: {
        'sm': '0px 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '0px 4px 8px rgba(0, 0, 0, 0.1)',
        'lg': '0px 8px 16px rgba(0, 0, 0, 0.1)',
      },
      transitionTimingFunction: {
        'default': 'ease-in-out',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
      },
    },
  },
  plugins: [],
} satisfies Config