import { defineStyle, defineStyleConfig, transform } from "@chakra-ui/react";

const outline = defineStyle({
    // I'll expand it when it comes in handy
});

const solid = defineStyle({
    _hover: {
        bg: 'currentBgColor',
        boxShadow: "inset -2px -4px #718096"
    },

    _active: {
        bg: 'currentBgColor',
        boxShadow: "inset -1px -1px #718096"
    },
});

const ghost = defineStyle({
    _hover: {
        bg: 'none',
    },

    _active: {
        bg: 'none',
    },
});


export const buttonTheme = defineStyleConfig({
    variants: { solid, ghost },
})