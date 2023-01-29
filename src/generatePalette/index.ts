import { validateColorRGB } from "../validateColor";
import { mixColor } from "../mixColor";

export const generatePalette = (color: string): string[] => {
  validateColorRGB(color);

  const result: string[] = [];

  result.push(mixColor(color, "#FFFFFF", 0.1));
  result.push(mixColor(color, "#FFFFFF", 0.2));
  result.push(mixColor(color, "#FFFFFF", 0.4));
  result.push(mixColor(color, "#FFFFFF", 0.6));
  result.push(mixColor(color, "#FFFFFF", 0.8));
  result.push(color);
  result.push(mixColor(color, "#000000", 0.8));
  result.push(mixColor(color, "#000000", 0.6));
  result.push(mixColor(color, "#000000", 0.4));
  result.push(mixColor(color, "#000000", 0.2));

  return result;
};
