import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const skyApiHeaders = {
  'x-rapidapi-key': '6435a5a709mshf5d257c985374a7p12dccejsne5e1945d44dc',
  'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com',
}

const baseUrl = 'https://sky-scanner3.p.rapidapi.com/'

const createRequest = (url, params) => {
  // Log the full URL for debugging
  const urlWithParams = new URL(baseUrl + url)
  Object.keys(params).forEach((key) =>
    urlWithParams.searchParams.append(key, params[key])
  )
  console.log('Request URL:', urlWithParams.toString())

  return {
    url,
    headers: skyApiHeaders,
    params,
  }
}

export const skyApi = createApi({
  reducerPath: 'skyApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    searchNearbyAirports: builder.query({
      query: ({
        fromEntityId,
        toEntityId = '',
        departDate = '',
        wholeMonthDepart = '',
        market = 'US',
        locale = 'en-US',
        currency = 'USD',
        stops = '',
        children = 0,
        infants = 0,
        cabinClass = 'economy',
        adults = 1,
      }) =>
        createRequest('flights/search-one-way', {
          fromEntityId,
          toEntityId,
          departDate,
          wholeMonthDepart,
          market,
          locale,
          currency,
          stops,
          children,
          infants,
          cabinClass,
          adults,
        }),
    }),
  }),
})

export const { useSearchNearbyAirportsQuery } = skyApi
