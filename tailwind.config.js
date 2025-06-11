/** @type {import('tailwindcss').Config} */

import { colors } from './src/theme'

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.tsx",
    "./src/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    colors,
  },
  plugins: [],
}