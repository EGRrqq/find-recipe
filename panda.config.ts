import { inputRecipe, buttonRecipe } from "@/ui"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],
  jsxFramework: 'react',
  theme: {
    extend: {
      recipes: {
        input: inputRecipe,
        button: buttonRecipe,
      },
      tokens: {
        shadows: {
          innerBr: { value: 'inset -2px -2px #718096' },
          innerBr_ext: { value: 'inset -2px -6px #718096' },
        }
      }
    }
  },

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",
})