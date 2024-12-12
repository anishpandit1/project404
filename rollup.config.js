const resolve = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');

module.exports = {
  input: 'src/main.js', // Entry file
  output: {
    file: 'dist/bundle.js', // Output bundled file
    format: 'iife', // Immediately Invoked Function Expression for browser compatibility
    sourcemap: false, // Disable source maps for production
  },
  plugins: [
    resolve(), // Resolve imports
    terser(),  // Minify the output
  ],
};
