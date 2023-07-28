import { defineRecipe } from '@pandacss/dev'

export const inputRecipe = defineRecipe({
  name: 'input',
  description: 'The styles for the Input component',
  base: {
    color: 'gray.700',

    rounded: '8px',
    px: '16px',
    py: '12px',
    width: '2/4',

    boxShadow: "innerBr",

    _hover: {
      boxShadow: "innerBr_ext"
    },

    _focus: {
      boxShadow: "innerBr_ext",
      outline: 'none',
    },
  },

  variants: {
    visual: {
      fill: { bg: 'stone.100' },
      outline: { bg: 'none', outline: '2px solid #718096' },
    },
    size: {
      sm: {
        px: '12px', py: '8px', fontSize: '16px'
      },
      md: { fontSize: '20px' },
      lg: { fontSize: '24px' },
    },
  },

  defaultVariants: {
    visual: 'fill',
    size: 'md',
  },

  jsx: ['Modal'],
})