import { generatePalette } from "../generatePalette";

interface Palette {
  red: string[];
  orange: string[];
  yellow: string[];
  green: string[];
  blue: string[];
  purple: string[];
}

export const presetPalette: Palette = {
  red: generatePalette("#FF4241"),
  orange: generatePalette("#FF9341"),
  yellow: generatePalette("#FFE541"),
  green: generatePalette("#4EFF41"),
  blue: generatePalette("#41ADFF"),
  purple: generatePalette("#7841FF"),
};

export const wdPresetPalette: Palette = {
  red: generatePalette("#E81123"),
  orange: generatePalette("#F7630C"),
  yellow: generatePalette("#FFB900"),
  green: generatePalette("#107C10"),
  blue: generatePalette("#0078D7"),
  purple: generatePalette("#9A0089"),
};
