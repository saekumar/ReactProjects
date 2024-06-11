import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useShowToast from '../hooks/toast'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../reduxUsage/store/favouriteSlice'
const Movie = () => {
  const { id } = useParams() // Extract the movie ID from the URL params
  const [movieData, setMovieData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const favorites = useSelector((state) => state.favorites.movies)
  const dispatch = useDispatch()
  const toast = useShowToast()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieRes = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?`
        )
        setMovieData(movieRes.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id, dispatch])

  const isFavorite = favorites.some((movie) => movie.id === parseInt(id))
  console.log(isFavorite)

  const handleAddToFav = async () => {
    try {
      await axios.post('http://localhost:5000/api/favorites', {
        title: movieData.title,
        release_date: movieData.release_date,
        vote_average: movieData.vote_average,
        runtime: movieData.runtime,
        overview: movieData.overview,
        poster_path: movieData.poster_path,
        id: movieData.id,
      })
      dispatch(addFavorite(movieData))
      toast('Success', 'Movie added to favorites', 'success')
    } catch (error) {
      toast('Error', 'Failed to add movie to favorites', 'error')
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      {movieData && (
        <div className="flex flex-col md:flex-row p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
            className="w-full md:w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold mb-2">{movieData.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              Release Date:{' '}
              {new Date(movieData.release_date).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Rating: {movieData.vote_average}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Runtime: {movieData.runtime} minutes
            </p>
            <p className="mt-4 text-justify text-black">{movieData.overview}</p>
            <div className="mt-4"></div>
            <button
              onClick={handleAddToFav}
              disabled={isFavorite}
              className={`mt-6 px-4 py-2 text-white rounded transition-colors duration-300 ease-in-out ${
                isFavorite ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'
              }`}
            >
              {isFavorite ? 'Already in Favorites' : 'Add to Fav'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Movie
