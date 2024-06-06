import React, { useEffect, useState } from 'react'
import useShowToast from '../hooks/toast'
import axios from 'axios'

const Wishlist = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const toast = useShowToast()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies')
        setMovies(response.data)
      } catch (error) {
        setError(error)
        toast('Error', 'Failed to fetch favorites', 'error')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [toast])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${id}`)
      setMovies(movies.filter((movie) => movie._id !== id))
      toast('Success', 'Movie deleted successfully', 'success')
    } catch (error) {
      toast('Error', 'Failed to delete movie', 'error')
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">My Wishlist</h2>
      {movies.length === 0 ? (
        <p>No movies in your wishlist.</p>
      ) : (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <div
              key={movie._id}
              class="relative overflow-hidden bg-white rounded-lg shadow-md border border-gray-200 hover:border-gray-400 transition duration-200 ease-in-out"
            >
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
                class="w-full h-auto object-cover rounded-t-lg transition transform duration-300 hover:scale-110"
              />
              <div class="p-4">
                <h3 class="text-lg font-bold mb-2 text-black">{movie.title}</h3>
                <p class="text-sm text-gray-500">
                  Release Date:{' '}
                  {new Date(movie.release_date).toLocaleDateString()}
                </p>
                <p class="text-sm text-gray-500">
                  Rating: {movie.vote_average}
                </p>
                <p class="text-sm text-gray-500">
                  Runtime: {movie.runtime} minutes
                </p>
                <p class="mt-2 text-justify text-black">{movie.overview}</p>
                <button
                  onClick={() => handleDelete(movie._id)}
                  class="mt-4 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition-colors duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
