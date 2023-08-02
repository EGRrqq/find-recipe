import { defineConfig } from "@pandacss/dev"
import { recipes } from "@/theme/recipes"
import { globalCss } from '@/theme/global-css'

export default defineConfig({
  preflight: true,
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],
  presets: ['@pandacss/dev/presets'],
  jsxFramework: 'react',
  jsxFactory: 'panda',
  globalCss,
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
  theme: {
    extend: {
      recipes,
      semanticTokens: {
        colors: {
          fg: {
            default: { value: { base: '{colors.slate.700}', } },
            placeholder: { value: { base: '{colors.slate.400}', } },
          },
          bg: {
            canvas: { value: { base: '{colors.red.50}', } },
            emphasized: { value: { base: '{colors.green.400}', } },
            surface: { value: { base: '{colors.slate.100}', } },
          },
          accent: {
            default: { value: { base: '{colors.yellow.400}', } },
            emphasized: { value: { base: '{colors.red.400}', } },
          },
          border: {
            default: { value: { base: '{colors.slate.500}', } },
          },
        },
      },
    }
  },

  exclude: [],

  outdir: "panda",
})