import { ColorRGB } from "./type";
import { validateHex } from "./validation";
import { hexToRgb, rgbToHex } from "./conversion";

/**
 * Mix two color (hex code)
 * 
 * @param colorA : color one
 * @param colorB : color two
 * @param ratio : percent of color one (float [0, 1])
 * @returns mixed color
 */
export const mix2Rgb = (colorA: string, colorB: string, ratio: number) => {
  validateHex(colorA);
  validateHex(colorB);

  const hexA: ColorRGB = hexToRgb(colorA);
  const hexB: ColorRGB = hexToRgb(colorB);

  const r: number = parseInt(
    (hexA.r * ratio + hexB.r * (1 - ratio)).toString()
  );
  const g: number = parseInt(
    (hexA.g * ratio + hexB.g * (1 - ratio)).toString()
  );
  const b: number = parseInt(
    (hexA.b * ratio + hexB.b * (1 - ratio)).toString()
  );

  return rgbToHex({ r, g, b });
};
