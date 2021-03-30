/*
Convert a hexadecimal color value to RGB
Reference: https://css-tricks.com/converting-color-spaces-in-javascript/
*/
function hexToRGB(h) {
  let r = 0;
  let g = 0;
  let b = 0;

  if (h.length == 4) {
    // 3 digits
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;

  } else if (h.length == 7) {
    // 6 digits
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }

  return `${+r}, ${+g}, ${+b}`;
}


module.exports = { hexToRGB };
