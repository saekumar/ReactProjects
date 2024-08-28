import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItinerariesCard from './ItinerariesCard'

const Providers = ({ data }) => {
  const [nearbyFlights, setNearByFlights] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFlights = async () => {
      const options = {
        method: 'GET',
        url: 'https://sky-scanner3.p.rapidapi.com/flights/search-one-way',
        params: {
          fromEntityId: data?.origin,
          toEntityId: data?.destination,
          departDate: data?.pickUpDate,
          currency: 'INR',
          stops: 'direct',
          cabinClass: 'economy',
        },
        headers: {
          'x-rapidapi-key':
            'd93a05979emshf63520101c3ab77p10ad39jsndd2f32676b65',
          'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com',
        },
      }

      try {
        const response = await axios.request(options)
        if (response.status === 200) {
          console.log(response?.data?.data)
          setNearByFlights(response?.data?.data)
        } else {
          setError(`Unexpected response code: ${response.status}`)
        }
        setLoading(false)
      } catch (error) {
        alert(error.message)
        setLoading(false)
      }
    }

    fetchFlights()
  }, [data])
  console.log(nearbyFlights)

  if (loading) return <div className="text-center mt-20">Loading...</div>
  if (error) return <div className="text-center mt-20">Error: {error}</div>

  if (
    !nearbyFlights ||
    !nearbyFlights.itineraries ||
    nearbyFlights.itineraries.length === 0
  ) {
    return <div className="text-center mt-20">No flights available</div>
  }

  const itineraries = nearbyFlights.itineraries
  console.log(itineraries)

  return (
    <div className="flex flex-col items-center justify-center w-full mt-20">
      <h2 className="text-2xl font-bold mb-4">Flight Details</h2>
      <div className="flex flex-col items-center gap-6 overflow-auto max-h-[calc(100vh-200px)] p-4 w-full">
        {itineraries.map((itinerary, index) => (
          <ItinerariesCard
            key={index}
            imgUrl={nearbyFlights.destinationImageUrl}
            itinerary={itinerary}
          />
        ))}
      </div>
    </div>
  )
}

export default Providers
