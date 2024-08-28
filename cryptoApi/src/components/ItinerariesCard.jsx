import React from 'react'

const ItinerariesCard = ({ imgUrl, itinerary }) => {
  console.log(imgUrl)
  const getTimePart = (dateTimeString) => {
    return dateTimeString.split('T')[1].slice(0, 5)
  }

  const { legs, price } = itinerary
  const leg = legs[0]
  const {
    carriers,
    origin,
    destination,
    departure,
    arrival,
    durationInMinutes,
    stopCount,
  } = leg

  return (
    <div className="w-3/4 relative px-6 py-4 shadow-md bg-white rounded-lg cursor-pointer z-10 transition-all duration-300 ease-in hover:scale-105 hover:shadow-lg mb-6">
      <div className="flex items-center">
        <img
          src={imgUrl}
          alt="Flight"
          className="w-16 h-16 object-cover mr-4"
        />
        <div className="flex-grow flex justify-between items-center">
          <div className="text-left">
            <h3 className="font-bold text-lg">{carriers.marketing[0].name}</h3>
            <p className="text-sm">{carriers.marketing[0].id * -1}</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{getTimePart(departure)}</p>
            <p className="text-sm text-gray-500">{origin.id}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              {Math.floor(durationInMinutes / 60)}h {durationInMinutes % 60}m
            </p>
            <p className="text-sm text-gray-500">
              {stopCount === 0 ? 'Non-stop' : `${stopCount} stop`}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{getTimePart(arrival)}</p>
            <p className="text-sm text-gray-500">{destination.id}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-orange-500">
              {price.formatted}
            </p>
            <p className="text-sm text-gray-500">Rs.500 off</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItinerariesCard
