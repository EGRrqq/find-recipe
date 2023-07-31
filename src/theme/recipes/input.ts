import { defineRecipe } from '@pandacss/dev'

export const input = defineRecipe({
    name: 'input',
    description: 'The styles for the Input component',
    base: {
        color: 'fg.default',
        textAlign: 'left',
        w: 'full',
        minW: 0,
        outline: 0,
        position: 'relative',
        appearance: 'none',
        transitionProperty: 'base',
        transitionDuration: '100',
        _disabled: {
            opacity: 0.4,
            cursor: 'not-allowed',
        },
    },
    defaultVariants: {
        variant: 'outline',
        size: 'md',
    },
    variants: {
        variant: {
            filled: {
                bg: {
                    base: 'slate.100',
                },
                rounded: 'lg',
                boxShadow: 'innerBr',
                _hover: {
                    boxShadow: "innerBr_ext"
                },
                _focus: {
                    zIndex: 1,
                    boxShadow: "innerBr_ext",
                },
            },
            outline: {
                bg: {
                    base: 'none',
                },
                borderColor: 'accent.default',
                borderRadius: 'lg',
                borderWidth: '1px',
                _hover: {
                    '--shadow': {
                        base: 'colors.accent.default',
                    },
                    boxShadow: 'inset -1px -4px 0 1px var(--shadow)',
                },
                _focus: {
                    zIndex: 1,
                    '--shadow': {
                        base: 'colors.accent.default',
                    },
                    boxShadow: 'inset -1px -4px 0 1px var(--shadow)',
                    borderColor: 'accent.default',
                },
            },
        },
        size: {
            sm: { px: '2.5', h: '9', minW: '9', textStyle: 'sm' },
            md: { px: '3', h: '10', minW: '10', textStyle: 'md' },
            lg: { px: '3.5', h: '11', minW: '11', textStyle: 'md' },
            xl: { px: '4', h: '12', minW: '12', textStyle: 'md' },
            '2xl': { px: '2', h: '16', minW: '16', textStyle: '3xl' },
        },
    },

})