import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [
    "@pandacss/preset-base",
    createPreset({
      accentColor: "brown",
      grayColor: "sand",
      borderRadius: "none",
    }),
  ],

  outExtension: "js",

  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: ["./app/styled-system/**/*.{js,jsx,ts,tsx}"],

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "app/styled-system",
});
