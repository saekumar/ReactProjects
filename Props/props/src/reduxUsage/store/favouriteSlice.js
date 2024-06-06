// store/favoritesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// export const fetchFavorites = createAsyncThunk(
//   'favorites/fetchFavorites',
//   async () => {
//     const response = await axios.get('http://localhost:5000/api/movies')
//     return response.data
//   }
// )

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.movies.push(action.payload)
    },
    removeFavorite: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload)
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchFavorites.pending, (state) => {
  //         state.status = 'loading'
  //       })
  //       .addCase(fetchFavorites.fulfilled, (state, action) => {
  //         state.status = 'succeeded'
  //         state.movies = action.payload
  //       })
  //       .addCase(fetchFavorites.rejected, (state, action) => {
  //         state.status = 'failed'
  //         state.error = action.error.message
  //       })
  //   },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
