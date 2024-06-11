import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Movies = () => {
  const [movieData, setMovieData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = []
        for (let i = 100; i <= 118; i++) {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${i.toString()}?api_key=f1dfe5bb78ba39601777848c99dd984e`
          )
          movies.push(response.data)
        }
        setMovieData(movies)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const filteredMovies = movieData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 bg-gray-100">
      <div className="flex items-center justify-center w-full max-w-md mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center gap-2 mb-4">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
          All
        </button>
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
          Series
        </button>
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
          Movies
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredMovies.map((movie, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md cursor-pointer"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full h-64 object-cover rounded"
            />
            <div className="p-4 bg-white  rounded">
              <h2 className="text-lg font-semibold text-black">
                {movie.original_title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4"></div>
    </div>
  )
}

export default Movies
