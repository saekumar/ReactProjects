import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [flights, setFlights] = useState([])

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get(
          'https://aviationstack1.p.rapidapi.com/flights',
          {
            headers: {
              'x-rapidapi-host': 'aviationstack1.p.rapidapi.com',
              'x-rapidapi-key':
                '6435a5a709mshf5d257c985374a7p12dccejsne5e1945d44dc',
            },
          }
        )
        setFlights(response.data) // Assuming flight data is in response.data.data
      } catch (error) {
        console.error('Error fetching flights:', error)
      }
    }

    fetchFlights()
  }, [])
  console.log(flights)
  return (
    <div>
      <h1>Flight Data</h1>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            Flight {index + 1}: {flight.flight_date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
