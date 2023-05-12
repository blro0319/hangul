# Get Started

## Installation

::: code-group

```bash [npm]
npm install @blro/hangul
```

```bash [pnpm]
pnpm add @blro/hangul
```

```bash [yarn]
yarn add @blro/hangul
```

:::

## Usage Example

```ts
import { matchLeadingConsonants } from "@blro/hangul";

export function filterByChosung(list: string[], query: string) {
  return list.filter((item) => matchLeadingConsonants(item, query));
}
```
