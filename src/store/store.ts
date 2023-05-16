import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from './features/recipeSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { recipesApi } from './features/recipesService';

export const store = configureStore({
    reducer: {
        recipes: recipeReducer,
        [recipesApi.reducerPath]: recipesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipesApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
