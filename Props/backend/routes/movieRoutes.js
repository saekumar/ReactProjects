// routes/movieRoutes.js
const express = require('express')
const {
  addFavoriteMovie,
  getAllMovies,
  deleteMovie,
  checkFavoriteMovie,
} = require('../controllers/movieController')

const router = express.Router()

router.post('/favorites', addFavoriteMovie)
router.get('/movies', getAllMovies)
router.delete('/movies/:id', deleteMovie)
router.get('/favorites/:id', checkFavoriteMovie)

module.exports = router
