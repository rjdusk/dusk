/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontSize: {
      /* @link https://utopia.fyi/type/calculator?c=320,16,1.2,1240,20,1.25,10,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
      xs: 'clamp(0.69rem, calc(0.63rem + 0.32vw), 0.88rem)',
      sm: 'clamp(0.83rem, calc(0.74rem + 0.46vw), 1.10rem)',
      base: 'clamp(1.00rem, calc(0.87rem + 0.65vw), 1.38rem)',
      lg: 'clamp(1.20rem, calc(1.02rem + 0.90vw), 1.72rem)',
      xl: 'clamp(1.44rem, calc(1.19rem + 1.23vw), 2.15rem)',
      '2xl': 'clamp(1.73rem, calc(1.40rem + 1.67vw), 2.69rem)',
      '3xl': 'clamp(2.07rem, calc(1.63rem + 2.23vw), 3.36rem)',
      '4xl': 'clamp(2.49rem, calc(1.89rem + 2.97vw), 4.20rem)',
      '5xl': 'clamp(2.99rem, calc(2.20rem + 3.93vw), 5.25rem)',
      '6xl': 'clamp(3.58rem, calc(2.55rem + 5.17vw), 6.56rem)',
      '7xl': 'clamp(4.30rem, calc(2.95rem + 6.78vw), 8.20rem)',
      '8xl': 'clamp(5.16rem, calc(3.39rem + 8.84vw), 10.24rem)',
      '9xl': 'clamp(6.19rem, calc(3.89rem + 11.50vw), 12.81rem)',
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
        serif: ['Larken', 'Larken Fallback', 'tabular-numbers', 'serif'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ addVariant }) {
        addVariant('children', '&>*')
      })
  ],
}