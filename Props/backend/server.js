// server.js
const express = require('express')
const mongoose = require('mongoose')
const movieRoutes = require('./routes/movieRoutes')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connectDB = require('./db/connectDb')

dotenv.config()
connectDB()
const app = express()

const PORT = process.env.PORT || 5000
app.use(express.json({ limit: '50mb' })) // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })) // To parse form data in the req.body

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next()
})
// Middleware
app.use(bodyParser.json())

// Routes
app.use('/api', movieRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
