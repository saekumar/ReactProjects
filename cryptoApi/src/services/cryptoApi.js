import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const skyApiHeaders = {
  'x-rapidapi-key': '6435a5a709mshf5d257c985374a7p12dccejsne5e1945d44dc',
  'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com',
}
const baseUrl = 'https://sky-scanner3.p.rapidapi.com'

const createRequest = (url, params) => ({
  url,
  headers: skyApiHeaders,
  params,
})

export const skyApi = createApi({
  reducerPath: 'skyApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    searchCars: builder.query({
      query: ({
        pickUpEntityId,
        pickUpDate,
        pickUpTime,
        dropOffDate,
        dropOffTime,
        dropOffEntityId,
      }) =>
        createRequest('/cars/search', {
          pickUpEntityId,
          pickUpDate,
          pickUpTime,
          dropOffDate,
          dropOffTime,
          dropOffEntityId,
        }),
    }),
  }),
})

export const { useSearchCarsQuery } = skyApi
