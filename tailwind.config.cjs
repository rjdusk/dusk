/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontSize: {
      /* @link https://utopia.fyi/type/calculator?c=320,16,1.2,1240,20,1.25,10,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
    //   xs: 'clamp(0.69rem, calc(0.63rem + 0.32vw), 0.88rem)',
    //   sm: 'clamp(0.83rem, calc(0.74rem + 0.46vw), 1.10rem)',
    //   base: 'clamp(1.00rem, calc(0.87rem + 0.65vw), 1.38rem)',
    //   lg: 'clamp(1.20rem, calc(1.02rem + 0.90vw), 1.72rem)',
    //   xl: 'clamp(1.44rem, calc(1.19rem + 1.23vw), 2.15rem)',
    //   '2xl': 'clamp(1.73rem, calc(1.40rem + 1.67vw), 2.69rem)',
    //   '3xl': 'clamp(2.07rem, calc(1.63rem + 2.23vw), 3.36rem)',
    //   '4xl': 'clamp(2.49rem, calc(1.89rem + 2.97vw), 4.20rem)',
    //   '5xl': 'clamp(2.99rem, calc(2.20rem + 3.93vw), 5.25rem)',
    //   '6xl': 'clamp(3.58rem, calc(2.55rem + 5.17vw), 6.56rem)',
    //   '7xl': 'clamp(4.30rem, calc(2.95rem + 6.78vw), 8.20rem)',
    //   '8xl': 'clamp(5.16rem, calc(3.39rem + 8.84vw), 10.24rem)',
    //   '9xl': 'clamp(6.19rem, calc(3.89rem + 11.50vw), 12.81rem)',
// https://utopia.fyi/type/calculator/?c=320,18,1.2,1280,24,1.25,10,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
        // xs: 'clamp(0.7813rem, 0.7217rem + 0.2979vi, 0.96rem)',
        // sm: 'clamp(0.9375rem, 0.85rem + 0.4375vi, 1.2rem)',
        // base: 'clamp(1.125rem, 1rem + 0.625vi, 1.5rem)',
        // lg: 'clamp(1.35rem, 1.175rem + 0.875vi, 1.875rem)',
        // xl: 'clamp(1.62rem, 1.3788rem + 1.2063vi, 2.3438rem)',
        // '2xl': 'clamp(1.944rem, 1.6154rem + 1.6428vi, 2.9297rem)',
        // '3xl': 'clamp(2.3328rem, 1.8897rem + 2.2155vi, 3.6621rem)',
        // '4xl': 'clamp(2.7994rem, 2.2066rem + 2.9638vi, 4.5776rem)',
        // '5xl': 'clamp(3.3592rem, 2.5716rem + 3.938vi, 5.722rem)',
        // '6xl': 'clamp(4.0311rem, 2.9906rem + 5.2025vi, 7.1526rem)',
        // '7xl': 'clamp(4.8373rem, 3.4695rem + 6.839vi, 8.9407rem)',
        // '8xl': 'clamp(5.8048rem, 4.0144rem + 8.9519vi, 11.1759rem)',
        // '9xl': 'clamp(6.9657rem, 4.631rem + 11.6736vi, 13.9698rem)',

        xs: 'clamp(0.7813rem, 0.735rem + 0.2313vi, 0.92rem)',
        sm: 'clamp(0.9375rem, 0.8667rem + 0.3542vi, 1.15rem)',
        base: 'clamp(1.125rem, 1.0208rem + 0.5208vi, 1.4375rem)',
        lg: 'clamp(1.35rem, 1.201rem + 0.7448vi, 1.7969rem)',
        xl: 'clamp(1.62rem, 1.4113rem + 1.0435vi, 2.2461rem)',
        '2xl': 'clamp(1.944rem, 1.6561rem + 1.4394vi, 2.8076rem)',
        '3xl': 'clamp(2.3328rem, 1.9406rem + 1.9612vi, 3.5095rem)',
        '4xl': 'clamp(2.7994rem, 2.2702rem + 2.6459vi, 4.3869rem)',
        '5xl': 'clamp(3.3592rem, 2.6511rem + 3.5407vi, 5.4836rem)',
        '6xl': 'clamp(4.0311rem, 3.0899rem + 4.7058vi, 6.8545rem)',
        '7xl': 'clamp(4.8373rem, 3.5937rem + 6.2181vi, 8.5682rem)',
        '8xl': 'clamp(5.8048rem, 4.1696rem + 8.1758vi, 10.7102rem)',
        '9xl': 'clamp(6.9657rem, 4.825rem + 10.7034vi, 13.3878rem)',
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: 'clamp(0.25rem, calc(0.23rem + 0.11vw), 0.31rem)',
      1.5: '0.375rem',
      2: 'clamp(0.50rem, calc(0.46rem + 0.22vw), 0.63rem)',
      2.5: '0.625rem',
      3: 'clamp(0.75rem, calc(0.68rem + 0.33vw), 0.94rem)',
      3.5: '0.875rem',
      4: 'clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem)',
      5: '1.25rem',
      6: 'clamp(1.50rem, calc(1.37rem + 0.65vw), 1.88rem)',
      7: '1.75rem',
      8: 'clamp(2.00rem, calc(1.83rem + 0.87vw), 2.50rem)',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: 'clamp(3.00rem, calc(2.74rem + 1.30vw), 3.75rem)',
      14: '3.5rem',
      16: 'clamp(4.00rem, calc(3.65rem + 1.74vw), 5.00rem)',
      20: '5rem',
      24: 'clamp(6.00rem, calc(5.48rem + 2.61vw), 7.50rem)',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    extend: {
      colors: {
        base: "#f0f0ef",
        'gray': {
          '50': '#f7f7f6',
          '100': '#e5e4e2',
          '200': '#cac9c5',
          '300': '#a8a7a0',
          '400': '#85847c',
          '500': '#6b6a61',
          '600': '#54544d',
          '700': '#454540',
          '800': '#3a3935',
          '900': '#32322f',
          '950': '#0b0b0a',
        },
        'yellow': {
          '50': '#fffcf5',
          '100': '#fff3d5',
          '200': '#fee3aa',
          '300': '#fdce74',
          '400': '#fbae3c',
          '500': '#f99416',
          '600': '#ea780c',
          '700': '#c25b0c',
          '800': '#9a4812',
          '900': '#7c3c12',
          '950': '#431d07',
        },
      },
      fontFamily: {
        serif: ['Larken', 'serif'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ addVariant }) {
        addVariant('children', '&>*')
      })
  ],
}