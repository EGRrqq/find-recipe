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

const variantOutline = definePartsStyle((props) => {
    return {
        field: {

            _hover: {
                borderColor: "gray.700",
                boxShadow: "inset -1px -1px #718096",
            },

            _focusVisible: {
                borderColor: `green.300`,
            },

            _pressed: {
                bg: 'red.800'
            }
        }
    }
})

const variants = {
    filled: variantFilled,
    outline: variantOutline,
}

export const inputTheme = defineMultiStyleConfig({
    variants,
})