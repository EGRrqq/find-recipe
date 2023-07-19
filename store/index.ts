import { getRecipesBySearch } from '@/services/getRecipes'
import { IRecipeSearch } from '@/types'
import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

interface IFindRecipeSearch {
    recipes: IRecipeSearch,
    loading: boolean,
    getRecipesBySearch: (query: string) => Promise<void>,
}

export const useRecipe = create<IFindRecipeSearch>()(
    devtools(
        persist(
            (set) => ({
                recipes: {
                    from: 1,
                    to: 0,
                    count: 0,
                    _links: {},
                    hits: [],
                },
                loading: false,
                getRecipesBySearch: async (query) => {
                    set({ loading: true })
                    const recipes = await getRecipesBySearch(query)
                    set({ recipes, loading: false })

                }
            }),
            {
                name: 'recipe-search-storage',
            }
        )
    )
)