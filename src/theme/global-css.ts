import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
    ':root': {
        '--global-color-shadow': 'colors.slate.500'
    },
    "input[type='search']": {
        '&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
        {
            WebkitAppearance: 'none'
        }
    },
})