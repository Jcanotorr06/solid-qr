<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-qr&background=tiles&project=%20" alt="solid-qr">
</p>

<h1 align="center">
Solid QR
</h1>
<p align="center">
A minimal QR code image generator for SolidJS using <a href="https://github.com/soldair/node-qrcode">node-qrcode</a>
<p>

<p align="center">
  <a href="https://www.npmjs.com/package/solid-qr?activeTab=versions"><img src="https://badgen.net/npm/v/solid-qr"></a>
  <a href="https://github.com/x64Bits/solid-qr/blob/main/LICENSE"><img src="https://badgen.net/npm/license/solid-qr"></a>
  <a href="https://www.npmjs.com/package/solid-qr"><img src="https://badgen.net/npm/dt/solid-qr"></a>
<p>

<br>
<br>

## Installation

### Yarn
```bash
yarn add solid-qr
```
### PNPM
```bash
pnpm add solid-qr
```

### NPM
```bash
npm i solid-qr
```

### Usage

```tsx
import SolidQR from "solid-qr"
// or
import { SolidQR } from "solid-qr"

const Example = () => {
  return <SolidQR text="Hello World"/>
}
```

### Configuration

The `solid-qr` component receives the same props as a regular `img` would, plus two custom ones used to generate the QR code.

1. `text`: A `string` used to generate the QR Code.
2. `options`: An object with the following structure

| **Key**              | **Type**                       | **Default** | **Description**                                                                                                                                         |
|----------------------|--------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `version`              | number                         |             | QR Code version ranging from 1 to 40. If not specified the more suitable value will be calculated.                                                      |
| `errorCorrectionLevel` | `low \| medium \| quartile \| high` | `medium`      | QR Code error correction level                                                                                                                          |
| `maskPattern`          | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7`      |             | Mask pattern used to mask the symbol. If not specified the more suitable value will be calculated.                                                      |
| `margin`               | `number`                         | `2`           | Define how much wide the quiet zone should be.                                                                                                          |
| `scale`                | `number`                         | `4`           | Scale factor. A value of 1 means 1px per modules (black dots).                                                                                          |
| `width`                | `number`                         | `512`         | Forces a specific width for the output image.If width is too small to contain the qr symbol, this option will be ignored.Takes precedence over `scale`. |
| `color.dark`           | `string`                         | `#000000ff`   | Color of dark module. Value must be in hex format (RGBA).                                                                                               |
| `color.light`          | `string`                         | `#ffffffff`   | Color of light module. Value must be in hex format (RGBA).                                                                                              |
