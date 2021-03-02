const plugin = require('tailwindcss/plugin');
const button = require('./button');

module.exports = plugin((helpers) => {
  button(helpers);
});
