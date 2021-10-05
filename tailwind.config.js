const gray200 = '#C2C2C2'
const gray300 = '#A3A3A3'
const gray400 = '#858585'
const gray500 = '#666666'
const gray600 = '#4D4D4D'
const gray650 = '#404040'
const gray700 = '#333333'
const gray900 = '#1A1A1A'
const purple700 = '#38364e'
const purple600 = '#6562BF'
const purple500 = '#8683FF'
const purple300 = '#B6B5FF'
const purple100 = '#F8F7FD'

const extendHeight = {
  92: '23rem',
  100: '25rem',
  104: '26rem',
  108: '27rem',
  112: '28rem',
  116: '29rem',
  120: '30rem',
  124: '31rem',
  128: '32rem',
  132: '33rem',
  136: '34rem',
  140: '35rem',
  144: '36rem',
  148: '37rem',
  152: '38rem',
  156: '39rem',
  160: '40rem',
  164: '41rem',
  168: '42rem',
  172: '43rem',
  176: '44rem',
  180: '45rem',
  184: '46rem',
  188: '47rem',
  192: '48rem',
}

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-200': gray200,
        'gray-300': gray300,
        'gray-400': gray400,
        'gray-500': gray500,
        'gray-600': gray600,
        'gray-650': gray650,
        'gray-700': gray700,
        'gray-900': gray900,
        'purple-100': purple100,
        'purple-300': purple300,
        'purple-500': purple500,
        'purple-600': purple600,
        'purple-700': purple700,
      },
      height: {
        ...extendHeight,
      },
      maxHeight: {
        '2x-screen': '200vh',
        ...extendHeight,
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    container: {
      center: true,
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.1em',
      widest: '.25em',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
