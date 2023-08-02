import { createAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const anatomy = createAnatomy('input', ['root', 'icon', 'content'])
const parts = defineParts(anatomy.build())

export const input = defineRecipe({
  className: 'input',
  jsx: ['Input'],
  base: parts({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      w: 'full',
      rounded: 'lg',
      boxShadow: '2px 2px var(--shadow)',
      '--shadow': {
        base: 'colors.slate.500',
      },
      '--text': {
        base: 'colors.slate.700',
      },
      "&:has(:disabled)": {
        opacity: 0.4,
        cursor: 'not-allowed',
      }
    },
    content: {
      textAlign: 'left',
      color: 'var(--text)',
      appearance: 'none',
      display: 'flex',
      width: 'full',
      height: 'full',
      borderRadius: 'lg',
      border: 'none',
      outline: 'none',
      bg: 'transparent',
      _disabled: {
        cursor: 'not-allowed',
      }
    },
    icon: {
      color: 'var(--text)',
      display: 'inline-flex',
      alignSelf: 'center',
      flexShrink: '0',
      w: '25px',
      h: '25px',
    },
  }),
  variants: {
    variant: {
      filled: parts({
        root: {
          bg: {
            base: 'slate.100',
          },
          _focusWithin: {
            zIndex: 1,
            boxShadow: '2px 4px var(--shadow)',
            outline: '2px solid var(--shadow)'
          },
        },
      }),
      outline: parts({
        root: {
          border: "2px solid var(--shadow)",
          bg: {
            base: 'transparent',
          },
          _focusWithin: {
            zIndex: 1,
            border: '2px solid',
            borderColor: 'slate.100',
            boxShadow: '2px 4px var(--shadow)',
          },
        },
      }),
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
          '--icon-spacing': '0.75rem',
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
          '--icon-spacing': '0.75rem',
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
          '--icon-spacing': '0.75rem',
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
          '--icon-spacing': '0.75rem',
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
          '--icon-spacing': '0.75rem',
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
          '--icon-spacing': '1rem',
          w: '40px',
          h: '40px',
        },
      }),
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'md'
  }
})