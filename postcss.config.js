/**
 * TODO: Consider adding notes about our configuration to our README.md.
 *
 * References for Tailwind/Storybook configuration:
 * - https://github.com/postcss/postcss-scss
 * - https://lifesaver.codes/answer/a-working-example-with-postcss-for-storybook-v5
 * - https://medium.com/@rbutera/jamstack-tutorial-part-1-gatsbyjs-with-storybook-tailwindcss-and-typescript-setup-bd28855db897
 * - https://dev.to/0xcap/nextjs-typescript-tailwindcss-storybook-project-setup-4clj
 * - https://medium.com/@romansorin/integrating-gatsby-tailwind-and-storybook-90b4f76d0fc7
 * - https://medium.com/better-programming/start-a-component-library-with-storybook-tailwind-css-and-typescript-ebaffc33d098
 * - https://dev.to/michaeldscherr/switching-from-sass-to-postcss-4p0c
 * - https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor
 * - https://epsi-rns.gitlab.io/frontend/2019/10/10/postcss-configuration/
 */

const { hexToRGB } = require('./util');

module.exports = {
  inject: false,
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('postcss-strip-inline-comments'),
    require('postcss-each'),
    require('precss'),
    require('postcss-functions')({
      functions: { hexToRGB }
    }),
    // TODO: Fix this for development/Storybook
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }]
    })
  ],
};
