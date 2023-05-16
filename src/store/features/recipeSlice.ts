import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRecipes } from "../../types/recipes";

type RecipesState = {
    recipes: IRecipes[];
    loading: boolean;
    error: null | string;
}

const initialState: RecipesState = {
    recipes: [],
    loading: false,
    error: null,
}

const baseURL = 'https://api.edamam.com/api/recipes/v2'
const requiredParams = `?type=public&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}`

export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async function (searchQuery: string, { rejectWithValue }) {
        try {
            const response = await fetch(`${baseURL}${requiredParams}&dishType=Salad${searchQuery}`)

            if (!response.ok) {
                throw new Error('Can\'t load recipes. Sadcat')
            }

            const data = await response.json()

            return Array(data)

        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
        }
    }
)

export const addNewPage = createAsyncThunk(
    'recipes/addNewPage',
    async function (newPageURL: string, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(newPageURL)

            if (!response.ok) {
                throw new Error('Can\'t load new page. sadcat.');
            }

            const data = await response.json();
            dispatch(newPage(data));

        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
        }
    }
);

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        newPage(state, action: PayloadAction<IRecipes>) {
            state.recipes.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.pending, (state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.recipes = action.payload;
        });
        builder.addCase(fetchRecipes.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.recipes = [];
        });
    },
})

const { newPage } = recipeSlice.actions
export default recipeSlice.reducer