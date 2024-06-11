import express from 'express'
import cors from 'cors' // Import cors middleware
import fetchFlightData from './flightApiData/fetch.js'

const app = express()

app.use(cors()) // Use cors middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/flights', async (req, res) => {
  try {
    const flightData = await fetchFlightData()
    console.log('Fetched flight data:', flightData) // Log the fetched data
    res.json(flightData) // Sending response
  } catch (error) {
    // Handle error properly, sending a single response
    res.status(500).json({ error: error.message })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
