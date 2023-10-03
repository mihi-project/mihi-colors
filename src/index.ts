import { mix2Rgb } from "./mixture";
import { generatePalette, generateDarkPalette, generateTheme } from "./generation";

const red: string[] = generatePalette("#FF414E");
const lava: string[] = generatePalette(mix2Rgb("#FF414E", "#FF9341", 0.5));
const orange: string[] = generatePalette("#FF9341");
const amber: string[] = generatePalette(mix2Rgb("#FF9341", "#FFF241", 0.5));
const yellow: string[] = generatePalette("#FFF241");
const lime: string[] = generatePalette(mix2Rgb("#FFF241", "#41FF5D", 0.5));
const green: string[] = generatePalette("#41FF5D");
const cyan: string[] = generatePalette(mix2Rgb("#41FF5D", "#41ADFF", 0.5));
const blue: string[] = generatePalette("#41ADFF");
const indigo: string[] = generatePalette(mix2Rgb("#41ADFF", "#9341FF", 0.5));
const purple: string[] = generatePalette("#9341FF");
const magenta: string[] = generatePalette(mix2Rgb("#9341FF", "#FF414E", 0.5));

const gray: string[] = [
  "#FFFFFF",
  mix2Rgb("#FFFFFF", "#000000", 0.95),
  mix2Rgb("#FFFFFF", "#000000", 0.9),
  mix2Rgb("#FFFFFF", "#000000", 0.8),
  mix2Rgb("#FFFFFF", "#000000", 0.7),
  mix2Rgb("#FFFFFF", "#000000", 0.6),
  mix2Rgb("#FFFFFF", "#000000", 0.5),
  mix2Rgb("#FFFFFF", "#000000", 0.4),
  mix2Rgb("#FFFFFF", "#000000", 0.3),
  mix2Rgb("#FFFFFF", "#000000", 0.2),
  mix2Rgb("#FFFFFF", "#000000", 0.1),
  mix2Rgb("#FFFFFF", "#000000", 0.05),
  "#000000",
];

const presetPalettes: Record<string, string[]> = {
  red,
  lava,
  orange,
  amber,
  yellow,
  lime,
  green,
  cyan,
  blue,
  indigo,
  purple,
  magenta,
};

export {
  mix2Rgb,
  generatePalette,
  generateDarkPalette,
  generateTheme,
  presetPalettes,
  red,
  lava,
  orange,
  amber,
  yellow,
  lime,
  green,
  cyan,
  blue,
  indigo,
  purple,
  magenta,
  gray,
};
