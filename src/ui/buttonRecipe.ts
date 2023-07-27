import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
  name: 'button',
  description: 'The styles for the Button component',
  base: {
    color: 'gray.700',

    rounded: '8px',
    px: '16px',
    py: '12px',

    boxShadow: "innerBr",

    _hover: {
      boxShadow: "innerBr_ext"
    },

    _active: {
      boxShadow: "innerBr",
    }
  },

  variants: {
    visual: {
      fill: { bg: 'gray.100' },
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

  jsx: ['Button']
})