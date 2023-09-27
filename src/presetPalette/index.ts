import { generatePalette } from "../generatePalette";
import { mixColor } from "../mixColor";

const red: string[] = generatePalette("#FF414E");
const lava: string[] = generatePalette(mixColor("#FF414E", "#FF9341", 0.5));
const orange: string[] = generatePalette("#FF9341");
const amber: string[] = generatePalette(mixColor("#FF9341", "#FFF241", 0.5));
const yellow: string[] = generatePalette("#FFF241");
const lime: string[] = generatePalette(mixColor("#FFF241", "#41FF5D", 0.5));
const green: string[] = generatePalette("#41FF5D");
const cyan: string[] = generatePalette(mixColor("#41FF5D", "#41ADFF", 0.5));
const blue: string[] = generatePalette("#41ADFF");
const indigo: string[] = generatePalette(mixColor("#41ADFF", "#9341FF", 0.5));
const purple: string[] = generatePalette("#9341FF");
const magenta: string[] = generatePalette(mixColor("#9341FF", "#FF414E", 0.5));
const gray: string[] = [
  "#FFFFFF",
  mixColor("#FFFFFF", "#000000", 0.9),
  mixColor("#FFFFFF", "#000000", 0.8),
  mixColor("#FFFFFF", "#000000", 0.7),
  mixColor("#FFFFFF", "#000000", 0.6),
  mixColor("#FFFFFF", "#000000", 0.5),
  mixColor("#FFFFFF", "#000000", 0.4),
  mixColor("#FFFFFF", "#000000", 0.3),
  mixColor("#FFFFFF", "#000000", 0.2),
  mixColor("#FFFFFF", "#000000", 0.1),
  "#000000",
];

const presetPalette: Record<string, string[]> = {
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
  presetPalette,
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
