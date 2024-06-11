import axios from 'axios'

const fetchFlightData = async () => {
  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights',
    params: {
      fromId: 'DEL.AIRPORT',
      toId: 'BOM.AIRPORT',
      departDate: '2024-06-09',
      returnDate: '2024-06-09',
      pageNo: '1',
      adults: '1',
      children: '0,17',
      sort: 'BEST',
      cabinClass: 'ECONOMY',
    },
    headers: {
      'x-rapidapi-key': '6435a5a709mshf5d257c985374a7p12dccejsne5e1945d44dc',
      'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request(options)
    console.log('Full response:', response.data) // Log the entire response for debugging
    return response.data
  } catch (error) {
    console.error('Error fetching flight data:', error.message)
    throw error
  }
}

export default fetchFlightData
