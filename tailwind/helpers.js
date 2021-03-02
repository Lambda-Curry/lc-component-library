const cssVar = (name) => `var(--lc-${name})`;

function useColorVar(color, opacity = '1') {
  if (['text', 'placeholder', 'bg', 'border', 'ring', 'divide'].includes(opacity))
    opacity = `var(--tw-${opacity}-opacity)`;

  return `rgba(${cssVar(`color-${color}`)}, ${opacity})`;
}


module.exports = {
  cssVar,
  useColorVar
};
