import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { recipesApi } from '../services/recipesService'

const rootReducer = combineReducers({
    [recipesApi.reducerPath]: recipesApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipesApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']