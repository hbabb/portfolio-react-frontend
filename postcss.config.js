import process from 'process';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import tailwindcssNesting from 'tailwindcss/nesting/index.js';
import postcssApply from 'postcss-apply';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  plugins: [
    postcssImport,
    tailwindcssNesting,
    tailwindcss,
    postcssApply,
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
  ],
};
