// controllers/movieController.js
const Movie = require('../mongoSchema/Movie')

const addFavoriteMovie = async (req, res) => {
  try {
    const {
      title,
      release_date,
      vote_average,
      runtime,
      overview,
      poster_path,
    } = req.body

    // Create a new movie document
    const movie = new Movie({
      title,
      release_date,
      vote_average,
      runtime,
      overview,
      poster_path,
    })

    // Save the movie to the database
    await movie.save()

    res.status(201).json({ message: 'Movie added to favorites', movie })
  } catch (error) {
    res.status(500).json({ message: 'Failed to add movie to favorites', error })
  }
}

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find() // Fetch all movies from the database
    res.status(200).json(movies)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch movies', error })
  }
}

const checkFavoriteMovie = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findOne({ id: id })
    if (!movie) {
      return res.status(404).json({ isFavorite: false })
    }
    res.status(200).json({ isFavorite: true })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to check movie in favorites', error })
  }
}

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findByIdAndDelete(id)
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    res.status(200).json({ message: 'Movie deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete movie', error })
  }
}

module.exports = {
  addFavoriteMovie,
  getAllMovies,
  deleteMovie,
  checkFavoriteMovie,
}
