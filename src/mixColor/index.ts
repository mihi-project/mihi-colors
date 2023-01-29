import { validateColorRGB } from "../validateColor";

interface ColorRGB {
  red: number;
  green: number;
  blue: number;
}

const splitColorRGB = (color: string): ColorRGB => {
  const red: number = parseInt(color.slice(1, 3), 16);
  const green: number = parseInt(color.slice(3, 5), 16);
  const blue: number = parseInt(color.slice(5, 7), 16);

  return { red, green, blue };
};

export const mixColor = (colorA: string, colorB: string, ratio: number) => {
  validateColorRGB(colorA);
  validateColorRGB(colorB);

  const a: ColorRGB = splitColorRGB(colorA);
  const b: ColorRGB = splitColorRGB(colorB);

  const red: number = parseInt(
    (a.red * ratio + b.red * (1 - ratio)).toString()
  );
  const green: number = parseInt(
    (a.green * ratio + b.green * (1 - ratio)).toString()
  );
  const blue: number = parseInt(
    (a.blue * ratio + b.blue * (1 - ratio)).toString()
  );

  var result: string = (red * 256 * 256 + green * 256 + blue).toString(16);
  while (result.length < 6) {
    result = "0" + result;
  }

  return ("#" + result).toUpperCase();
};
