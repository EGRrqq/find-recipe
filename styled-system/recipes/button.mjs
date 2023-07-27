import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const buttonFn = createRecipe('button', {
  "visual": "funky",
  "size": "sm",
  "shape": "circle"
}, [])

const variantKeys = [
  "visual",
  "size",
  "shape"
]

function splitVariantProps(props) {
  return splitProps(props, variantKeys)
}

export const button = Object.assign(buttonFn, {
  __recipe__: true,
  variantKeys,
  variantMap: {
  "visual": [
    "funky",
    "edgy"
  ],
  "size": [
    "sm",
    "lg"
  ],
  "shape": [
    "square",
    "circle"
  ]
},
  splitVariantProps,
})