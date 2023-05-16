import { configureStore, combineReducers } from '@reduxjs/toolkit'
import recipeReducer from './features/recipeSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { recipesApi } from './features/recipesService';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    recipes: recipeReducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [recipesApi.reducerPath]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(recipesApi.middleware),
});

export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
