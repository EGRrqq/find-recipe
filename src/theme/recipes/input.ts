import { createAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const anatomy = createAnatomy('input', ['root', 'icon'])
const parts = defineParts(anatomy.build())

export const input = defineRecipe({
  className: 'input',
  base: parts({
    root: {
      color: 'fg.default',
      textAlign: 'left',
      w: 'full',
      minW: 0,
      outline: 0,
      rounded: 'lg',
      position: 'relative',
      appearance: 'none',
      transitionProperty: 'base',
      transitionDuration: '100',
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      '--shadow': {
        base: 'colors.slate.500',
      },
      boxShadow: '2px 2px var(--shadow)',
      _focus: {
        zIndex: 1,
        boxShadow: '2px 4px var(--shadow)',
      },
    },
    icon: {
      display: 'inline-flex',
      alignSelf: 'center',
      flexShrink: '0',
    },
  }),
  variants: {
    variant: {
      filled: {
        bg: {
          base: 'slate.100',
        },
      },
      outline: {
        bg: {
          base: 'transparent',
        },
        border: "2px solid var(--shadow)",
      },
    },
    size: {
      xs: parts({
        root: {
          h: '8',
          minW: '8',
          textStyle: 'xs',
          px: '3',
        },
        icon: {
          fontSize: '1.0rem',
          '--icon-spacing': '0.5rem',
        },
      }),
      sm: parts({
        root: {
          h: '9',
          minW: '9',
          textStyle: 'sm',
          px: '3.5',
        },
        icon: {
          fontSize: '1.25rem',
          '--icon-spacing': '0.5rem',
        },
      }),
      md: parts({
        root: {
          h: '10',
          minW: '10',
          textStyle: 'sm',
          px: '3.5',
        },
        icon: {
          fontSize: '1.25rem',
          '--icon-spacing': '0.5rem',
        },
      }),
      lg: parts({
        root: {
          h: '11',
          minW: '11',
          textStyle: 'md',
          px: '4',
        },
        icon: {
          fontSize: '1.25rem',
          '--icon-spacing': '0.5rem',
        },
      }),
      xl: parts({
        root: {
          h: '12',
          minW: '12',
          textStyle: 'md',
          px: '5',
        },
        icon: {
          fontSize: '1.25rem',
          '--icon-spacing': '0.5rem',
        },
      }),
      '2xl': parts({
        root: {
          h: '16',
          minW: '16',
          textStyle: '3xl',
          px: '6',
        },
        icon: {
          fontSize: '1.5rem',
          '--icon-spacing': '0.75rem',
        },
      }),
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'md'
  }
})