import { createAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const anatomy = createAnatomy('card', ['root', 'content'])
const parts = defineParts(anatomy.build())

export const card = defineRecipe({
    className: 'card',
    jsx: ['Card'],
    base: {
        '& img': {
            userSelect: 'none',
            boxShadow: "0px 0px 80px rgba(0, 0, 0, 0.05)",
            borderRadius: "8px",
            maxWidth: "100%",
            objectFit: "cover",
        },
        ...parts({
            root: {
                p: '5',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                overflow: 'hidden',
                color: 'slate.700',
                rounded: 'lg',
                textDecorationLine: 'none',
                transition: 'all',
                boxShadow: '2px 2px var(--global-color-shadow)',
                bg: 'yellow.400',
                _hover: {
                    boxShadowColor: 'slate.100',
                    borderColor: 'slate.300'
                },
                _active: {
                    boxShadow: 'sm',
                    boxShadowColor: 'slate.200'
                }
            },
        })
    },
    variants: {},
    defaultVariants: {},
})