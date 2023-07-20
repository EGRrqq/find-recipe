import { getRecipesBySearch } from '@/services/getRecipes'
import { IRecipeSearch } from '@/types'
import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

interface IFindRecipeSearch {
    recipes: IRecipeSearch,
    loading: boolean,
    getRecipesBySearch: (path: string) => Promise<void>,
}

interface IPath {
    path: {
        query: string,
        dishType: string,
    },
    setQuery: (value: string) => void,
    setDishType: (value: string) => void,
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
                    console.log('query', query)
                    const recipes = await getRecipesBySearch(query)
                    set({ recipes, loading: false })
                },
            }),
            {
                name: 'recipe-search-storage',
            }
        )
    )
)
export const usePath = create<IPath>()(
    devtools(
        persist(
            (set) => ({
                path: {
                    query: '',
                    dishType: '',
                },
                setQuery: (query) => set((state) => ({ path: { ...state.path, query: query } })),
                setDishType: (dishType) => set((state) => ({ path: { ...state.path, dishType: dishType } })),
            }),
            {
                name: 'recipe-path-storage',
            }
        )
    )
)