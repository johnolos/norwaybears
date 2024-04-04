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
      borderRadius: "lg",
      additionalColors: ["brown", "yellow", "amber", "orange", "pink", "grass"],
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
    extend: {
      tokens: {
        colors: {
          brand: {
            brown: { value: "#613704" },
            orange: { value: "#D46300" },
            golden: { value: "#FDDC62" },
            tan: { value: "#FDE5B7" },
            white: { value: "#FFFFFF" },
            black: { value: "#000000" },
            pink: { value: "#d8a1a7" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "app/styled-system",
});
