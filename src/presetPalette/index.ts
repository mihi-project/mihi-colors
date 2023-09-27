import { generatePalette } from "../generatePalette";
import { mixColor } from "../mixColor";

interface Palette {
  red: string[];
  lava: string[];
  orange: string[];
  amber: string[];
  yellow: string[];
  lime: string[];
  green: string[];
  cyan: string[];
  blue: string[];
  indigo: string[];
  purple: string[];
  magenta: string[];
  gray: string[];
}

const grayPalette: string[] = [
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

export const presetPalette: Palette = {
  red: generatePalette("#FF414E"),
  lava: generatePalette(mixColor("#FF414E", "#FF9341", 0.5)),
  orange: generatePalette("#FF9341"),
  amber: generatePalette(mixColor("#FF9341", "#FFF241", 0.5)),
  yellow: generatePalette("#FFF241"),
  lime: generatePalette(mixColor("#FFF241", "#41FF5D", 0.5)),
  green: generatePalette("#41FF5D"),
  cyan: generatePalette(mixColor("#41FF5D", "#41ADFF", 0.5)),
  blue: generatePalette("#41ADFF"),
  indigo: generatePalette(mixColor("#41ADFF", "#9341FF", 0.5)),
  purple: generatePalette("#9341FF"),
  magenta: generatePalette(mixColor("#9341FF", "#FF414E", 0.5)),
  gray: grayPalette,
};
