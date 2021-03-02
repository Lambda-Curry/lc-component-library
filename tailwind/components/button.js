module.exports = ({ addComponents, theme }) => {
  const component = {
    '.button': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: theme('fontFamily.sans'),
      fontSize: theme('fontSize.sm'),
      appearance: 'none',
      textDecoration: 'none',
      '&:hover': {
        cursor: 'pointer'
      },
      '&:active': {
        scale: '0.98'
      },
      '&:disabled': {
        scale: '1.0',
        opacity: '0.5',
        cursor: 'not-allowed',
      },
      '&:focus': {
        boxShadow: theme('ringOffsetWidth.4'),
      }
    },

    '.button-styled': {
      height: theme('spacing.48'),
      padding: `${theme('spacing.14')} ${theme('spacing.20')}`,
    }
  };

  addComponents(component);
};
