import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const inputFn = createRecipe('input', {
  "visual": "fill",
  "size": "md"
}, [])

const variantKeys = [
  "visual",
  "size"
]

function splitVariantProps(props) {
  return splitProps(props, variantKeys)
}

export const input = Object.assign(inputFn, {
  __recipe__: true,
  variantKeys,
  variantMap: {
  "visual": [
    "fill",
    "outline"
  ],
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps,
})