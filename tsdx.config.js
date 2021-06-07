/**
 * TODO: Consider moving these notes to our README.md.
 *
 * For a size comparison with the most popular UI libraries see:
 * https://blog.logrocket.com/comparing-popular-react-component-libraries/
 *
 * For a helpful configuration example see:
 * https://github.com/formium/tsdx/pull/183
 */

const url = require('rollup-plugin-url');
const svgr = require('@svgr/rollup').default;
const postcss = require('rollup-plugin-postcss');
const { terser } = require('rollup-plugin-terser');
const nodeResolve = require('@rollup/plugin-node-resolve').default;
const postCSSConfig = require('./postcss.config');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      url(),
      svgr(),
      postcss({
        inject: true,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta
      }),
      terser(),
      nodeResolve({ browser: true }),
      ...config.plugins
    ];
    return config;
  },
};
