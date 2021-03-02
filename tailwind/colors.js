const { cssVar, useColorVar } = require('./helpers');

const colorWithOpacity = (color) => ({ opacityVariable, opacityValue }) => {
  let opacity;

  if (opacityValue) opacity = opacityValue;
  else if (opacityVariable) opacity = `var(${opacityVariable}, 1)`;

  return useColorVar(color, opacity);
}

const baseColors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: colorWithOpacity('black'),
  white: colorWithOpacity('white'),
};

const themeColorsConfig = {
  gray: [
    'lightest',
    'lighter',
    'light',
    'DEFAULT',
    'dark',
    'darker'
  ],
  primary: [
    'light',
    'DEFAULT',
    'dark'
  ],
  accent: [
    'DEFAULT',
    'dark'
  ],
  info: [
    'DEFAULT',
    'dark'
  ],
  success: [
    'DEFAULT',
    'dark'
  ],
  warn: [
    'DEFAULT',
    'dark'
  ],
  danger: [
    'DEFAULT',
    'dark'
  ],
  active: [
    'DEFAULT'
  ]
};

const generateVariantThemeColors = (colorName) => themeColorsConfig[colorName].reduce((acc, variantColorName) => {
  const color = `${colorName}${variantColorName !== 'DEFAULT' ? `-${variantColorName}` : ''}`
  acc[variantColorName] = colorWithOpacity(color);
  return acc;
}, {});

const generateThemeColors = () => Object.keys(themeColorsConfig).reduce((acc, colorName) => {
  acc[colorName] = generateVariantThemeColors(colorName);
  return acc;
}, {});

const themeColors = generateThemeColors();

module.exports = {
  baseColors,
  themeColors,
  themeColorsConfig,
  colorWithOpacity,
  generateVariantThemeColors,
  generateThemeColors,
};
