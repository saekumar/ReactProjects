import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDb from './db/connectDb.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()
connectDb()
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.use('/api/users', userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
