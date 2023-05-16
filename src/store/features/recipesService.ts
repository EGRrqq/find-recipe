import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IHit } from '../../types/recipes'

const requiredParams = `?type=public&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}`

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.edamam.com/api/recipes/v2'}),
    endpoints: (build) => ({
        getSingleRecipe: build.query<IHit, string>({
            query: (recipeId) => `${recipeId}${requiredParams}`
        }),
    })
})

export const { useGetSingleRecipeQuery } = recipesApi