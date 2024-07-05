import { colors } from './src/theme/colors';

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    colors,
  },
  plugins: [],
};
