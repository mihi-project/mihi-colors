<h1 align="center">MiHi Colors</h1>

<div align="center"> Color palettes and color tools of MiHi.</div>

## Installation

### npm

```bash
$ npm install mihi-colors
```

## Usage

### presetPalette

```javascript
import { presetPalette } from "mihi-colors";

console.log(presetPalette);
/*
{
  red: [...],
  lava: [...],
  orange: [...],
  amber: [...],
  yellow: [...],
  lime: [...],
  green: [...],
  cyan: [...],
  blue: [...],
  indigo: [...],
  purple: [...]
  magenta: [...],
  gray: [...],
}
*/
```

### generatePalette

```javascript
import { generatePalette } from "mihi-colors";

console.log(generatePalette("#00D778"));
/*
[
  '#E5FBF1', '#CCF7E4',
  '#99EFC9', '#66E7AE',
  '#32DF93', '#00D778',
  '#00AC60', '#008148',
  '#005630', '#002B18'
]
*/
```

### mixColor

```javascript
import { mixColor } from "mihi-colors";

console.log(mixColor("#00D778", "#123DEF", 0.4));
// 0.4 => #00D778 * 40% + #123DEF * 60%
/*
'#0A7ABF'
*/
```
