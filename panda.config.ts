import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  preflight: true,
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],
  presets: ['@pandacss/dev/presets'],
  jsxFramework: 'react',
  conditions: {
    extend: {
      checked:
        '&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])',
      indeterminate:
        '&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])',
      closed: '&:is([data-state=closed])',
      open: '&:is([open], [data-state=open])',
    }
  },

  exclude: [],

  outdir: "panda",
})