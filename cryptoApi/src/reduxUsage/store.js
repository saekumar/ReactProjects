import { configureStore } from '@reduxjs/toolkit'
import { skyApi } from '../services/cryptoApi' // Ensure the import path is correct

const store = configureStore({
  reducer: {
    [skyApi.reducerPath]: skyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(skyApi.middleware),
})

export default store
