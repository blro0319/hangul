/// <reference types="vitest" />

import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@blro/hangul",
      fileName: "hangul",
    },
  },
  test: {
    globals: true,
  },
});
