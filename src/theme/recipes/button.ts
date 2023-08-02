import { createAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(createAnatomy('button').parts('root', 'icon').build())

export const button = defineRecipe({
  className: 'button',
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
      '--shadow': {
        base: 'colors.slate.500',
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
        "&:hover, &:focus-visible": { 
          boxShadow: '2px 4px var(--shadow)' 
        },
        _active: {
          boxShadow: '2px 2px var(--shadow)'
        },
      },
      outline: {
        boxShadow: 'none',
        border: "2px solid var(--shadow)",
        bg: {
          base: 'transparent',
        },
        "&:hover, &:focus-visible": { 
          boxShadow: '2px 2px var(--shadow)'
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
          px: '4',
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
          px: '4.5',
          textStyle: 'md',
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
          px: '5',
          textStyle: 'md',
        },
        icon: {
          fontSize: '1.25rem',
          '--icon-spacing': '0.5rem',
        },
      }),
      '2xl': parts({
        root: {
          h: '15',
          minW: '15',
          px: '7',
          fontSize: 'lg',
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
    size: 'md',
  },
})