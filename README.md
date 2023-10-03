<h1 align="center">MiHi Colors</h1>

<div align="center"> Color palettes and color tools of MiHi.</div>

## Installation

### npm

```bash
$ npm install mihi-colors
```

## Usage

### presetPalettes

```javascript
import { presetPalettes } from "mihi-colors";

console.log(presetPalettes);
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
}
*/
```

### generatePalette

```javascript
import { generatePalette } from "mihi-colors";

console.log(generatePalette("#00D778"));
/*
[
  '#B3FFD0', '#8FFFBE',
  '#6BFFAF', '#46FB9F',
  '#21E98A', '#00D778',
  '#00A964', '#007B4D',
  '#004D33', '#001F16'
]
*/
```

### mix2Rgb

```javascript
import { mix2Rgb } from "mihi-colors";

console.log(mix2Rgb("#00D778", "#123DEF", 0.4));
// 0.4 => #00D778 * 40% + #123DEF * 60%
/*
'#0A7ABF'
*/
```
