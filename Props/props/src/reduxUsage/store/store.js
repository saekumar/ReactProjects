// store/store.js
import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favouriteSlice.js'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
})
