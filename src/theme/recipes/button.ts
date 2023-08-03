import { createAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const anatomy = createAnatomy('button', ['root', 'icon'])
const parts = defineParts(anatomy.build())

export const button = defineRecipe({
  className: 'button',
  jsx: ['Button', 'IconButton', 'TestIcon', 'ArrowRightIcon'],
  base: parts({
    root: {
      alignItems: 'center',
      appearance: 'none',
      borderRadius: 'lg',
      cursor: 'pointer',
      display: 'inline-flex',
      fontWeight: 'semibold',
      justifyContent: 'center',
      outline: 'none',
      position: 'relative',
      transitionProperty: 'base',
      transitionDuration: '100',
      transitionTimingFunction: 'ease-out',
      userSelect: 'none',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',

    },
    icon: {
      display: 'inline-flex',
      alignSelf: 'center',
      flexShrink: '0',
      w: '25px',
      h: '25px',
    },
  }),
  variants: {
    variant: {
      filled: {
        bg: {
          base: 'slate.100',
        },
        "&:hover, &:focus-visible": { 
          boxShadow: '2px 4px var(--global-color-shadow)' 
        },
        _active: {
          boxShadow: '2px 2px var(--global-color-shadow)'
        },
      },
      outline: {
        boxShadow: 'none',
        border: "2px solid var(--global-color-shadow)",
        bg: {
          base: 'transparent',
        },
        "&:hover, &:focus-visible": { 
          boxShadow: '2px 2px var(--global-color-shadow)'
        },
        _active: {
          boxShadow: 'none'
        },
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
    size: 'md',
  },
})