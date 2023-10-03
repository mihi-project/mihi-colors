import { ColorRGB, ColorHSV } from "./type";

/**
 * Convert color hex code to color RGB
 *
 * @param color : color hex code
 * @returns {r, g, b} color RGB
 */
export const hexToRgb = (color: string): ColorRGB => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  return { r, g, b };
};

/**
 * Convert color RGB to color hex code
 *
 * @param color : color RGB
 * @returns color hex code
 */
export const rgbToHex = (color: ColorRGB): string => {
  let result = (color.r * 256 * 256 + color.g * 256 + color.b).toString(16);

  while (result.length < 6) {
    result = "0" + result;
  }

  return ("#" + result).toUpperCase();
};

/**
 * Convert color RGB to color HSV
 *
 * @param color : color RGB
 * @returns {h, s, v} color HSV
 */
export const rgbToHsv = (color: ColorRGB): ColorHSV => {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = max;
  const s = max == 0 ? 0 : d / max;
  const v = max;

  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return { h: h * 360, s, v };
};

/**
 * Convert color HSV to color RGB
 *
 * @param color : color HSV
 * @returns {r, g, b} color RGB
 */
export const hsvToRgb = (color: ColorHSV): ColorRGB => {
  const h = (color.h / 360) * 6;
  const s = color.s;
  const v = color.v;

  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
};

/**
 * Convert color hex code to color HSV
 *
 * @param color : color hex code
 * @returns {h, s, v} color HSV
 */
export const hexToHsv = (color: string): ColorHSV => {
  return rgbToHsv(hexToRgb(color));
};

/**
 * Convert color HSV to color hex code
 *
 * @param color : color HSV
 * @returns color hex code
 */
export const hsvToHex = (color: ColorHSV): string => {
  return rgbToHex(hsvToRgb(color));
};
