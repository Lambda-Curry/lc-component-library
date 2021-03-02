const defaultTheme = require('tailwindcss/defaultTheme');
const components = require('./tailwind/components');
const { cssVar } = require('./tailwind/helpers');
const { baseColors, themeColors } = require('./tailwind/colors');

module.exports = {
  purge: ['./src/**/*.tsx'],
  prefix: 'lc-',
  theme: {
    ...defaultTheme,
    colors: {
      ...baseColors,
      ...themeColors
    },
    spacing: {
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      '32': '32px',
      '40': '40px',
      '48': '48px',
      '56': '56px',
      '64': '64px',
      '72': '72px',
      '80': '80px',
      '88': '88px',
      '96': '96px',
      '104': '104px',
      '112': '112px',
      '120': '120px'
    },
    borderRadius: {
      DEFAULT: cssVar('border-radius')
    },
    fontFamily: {
      sans: cssVar('font-family-sans'),
      code: cssVar('font-family-code'),
    },
    fontWeight: {
      ...defaultTheme.fontWeight,
      ultralight: 200,
      regular: 400,
      heavy: 900
    },
    fontSize: {
      xs: ['12px', '1.5'],
      sm: ['14px', '1.5'],
      md: ['16px', '1.5'],
      lg: ['20px', '1.5'],
      xl: ['24px', '1.15'],
      '2xl': ['32px', '1.15'],
      '3xl': ['36px', '1.15'],
      '4xl': ['48px', '1.15']
    },
    borderWidth: {
      '0': '0',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    },
    borderRadius: {
      none: 'none',
      xs: '2px',
      sm: '4px',
      DEFAULT: '6px',
      md: '6px',
      lg: '8px',
      xl: '12px',
    },
    scale: {
      ...defaultTheme.scale,
      '98': '.98',
    }
  },
  variants: {
    extend: {
      opacity: ['disabled', 'active'],
      pointerEvents: ['disabled'],
      cursor: ['disabled', 'hover'],
      transform: ['active'],
      scale: ['active'],
      ringColor: ['focus-visible'],
      outline: ['focus-visible']
    }
  },
  plugins: [
    // require('./tailwind/components')
  ]
};
