import { ColorHSV } from "./type";
import { hexToHsv, hsvToHex } from "./conversion";
import { mix2Rgb } from "./mixture";

const hStep = 2;
const sStep1 = 0.14;
const sStep2 = 0.07;
const vStep1 = 0.07;
const vStep2 = 0.18;

/**
 * Generate color palette
 *
 * @param color : primary color
 * @returns color palette
 */
export const generatePalette = (color: string): string[] => {
  const primary: ColorHSV = hexToHsv(color);
  const result: string[] = [];

  for (let index = 5; index > 0; index--) {
    const tmp = hsvToHex({
      h: Math.max(primary.h - index * hStep, 0),
      s: Math.max(primary.s - index * sStep1, 0.07),
      v: Math.min(primary.v + index * vStep1, 1),
    });
    result.push(tmp);
  }
  result.push(color);
  for (let index = 1; index < 5; index++) {
    const tmp = hsvToHex({
      h: Math.min(primary.h + index * hStep, 359),
      s: Math.min(primary.s + index * sStep2, 1),
      v: Math.max(primary.v - index * vStep2, 0.07),
    });
    result.push(tmp);
  }

  return result;
};

/**
 * Generate color palette for dark mode
 *
 * @param color : primary color
 * @param backgroundColor : background color
 * @returns color palette
 */
export const generateDarkPalette = (
  color: string,
  backgroundColor: string = "#191919"
): string[] => {
  const result = generatePalette(color);

  for (let index = 0; index < result.length; index++) {
    result[index] = mix2Rgb(backgroundColor, result[index], 0.18);
  }

  return result;
};

/**
 * Generate theme colors from primary color
 *
 * @param color : primary color
 * @param darkBackgroundColor : background color dark mode
 * @returns theme colors object
 */
export const generateTheme = (
  color: string,
  darkBackgroundColor: string = "#191919"
): object => {
  const primary: ColorHSV = hexToHsv(color);
  const light = hsvToHex({
    h: Math.max(primary.h - hStep, 0),
    s: Math.max(primary.s - sStep1, 0.07),
    v: Math.min(primary.v + vStep1, 1),
  });
  const dark = hsvToHex({
    h: Math.min(primary.h + hStep, 359),
    s: Math.min(primary.s + sStep2, 1),
    v: Math.max(primary.v - vStep2, 0.07),
  });

  const theme = {
    light: {
      primary: color,
      primaryLight: light,
      primaryDark: dark,
    },
    dark: {
      primary: mix2Rgb(darkBackgroundColor, color, 0.14),
      primaryLight: mix2Rgb(darkBackgroundColor, light, 0.14),
      primaryDark: mix2Rgb(darkBackgroundColor, dark, 0.14),
    },
  };

  return theme;
};
