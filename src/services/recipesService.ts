// export const baseURL: string = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}&dishType=Salad`

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRecipes } from '../types/recipes'

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.edamam.com/api/recipes/v2'}),
    endpoints: (build) => ({
        getRecipes: build.query<IRecipes, _>({
            query: () => `?type=public&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}&dishType=Salad`
        })
    })
})

export const { useGetRecipesQuery } = recipesApi