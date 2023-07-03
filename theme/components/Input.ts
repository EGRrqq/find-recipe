import { inputAnatomy as parts } from "@chakra-ui/anatomy"
import {
    createMultiStyleConfigHelpers,
    defineStyle,
} from "@chakra-ui/styled-system"

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)

const variantFilled = definePartsStyle((props) => {
    const { colorScheme: c } = props
    return {
        field: {
            rounded: '0.5rem',
            color: 'gray.700',

            _hover: {
                bg: 'currentBgColor',
                boxShadow: "inset -2px -4px #718096"
            },

            _active: {
                bg: 'currentBgColor',
                boxShadow: "inset -1px -1px #718096"
            },

            _focusVisible: {
                bg: `gray.100`,
            }
        },
    }
})

const variants = {
    filled: variantFilled,
}

export const inputTheme = defineMultiStyleConfig({
    variants,
})