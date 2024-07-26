/** @type {import('tailwindcss').Config} */

import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#0DE809',
        'dark-green': '#196917',
        'medium-green': '#03C200',
        'custom-gray': '#404040',
        'custom-white': '#ffffff',
      },
    },
  },
  plugins: [
    forms,
    aspectRatio,
    typography,
    containerQueries,
  ],
}
