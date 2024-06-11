import React, { useEffect, useState } from 'react'
import { useSearchCarsQuery } from '../services/cryptoApi' // Ensure the import path is correct

const Providers = ({ searchParams }) => {
  // Local state to manage the API response
  const [searchData, setSearchData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Destructure the search parameters for better readability
  const {
    pickUpEntityId,
    pickUpDate,
    pickUpTime,
    dropOffDate,
    dropOffTime,
    dropOffEntityId = '95565058', // Assuming a default value for dropOffEntityId if not provided
  } = searchParams

  // Validate required parameters
  if (
    !pickUpEntityId ||
    !pickUpDate ||
    !pickUpTime ||
    !dropOffDate ||
    !dropOffTime
  ) {
    return <div>Error: Missing required search parameters.</div>
  }

  // Query for cars using the provided search parameters
  const {
    data,
    isFetching,
    error: queryError,
  } = useSearchCarsQuery({
    pickUpEntityId,
    pickUpDate,
    pickUpTime,
    dropOffDate,
    dropOffTime,
    dropOffEntityId,
  })

  useEffect(() => {
    if (!isFetching && data) {
      setSearchData(data)
      setLoading(false)
    }
    if (queryError) {
      setError(queryError)
      setLoading(false)
    }
  }, [isFetching, data, queryError])

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>
  }

  // Handle error state
  if (error) {
    return <div>Error: {error.message}</div>
  }

  // Extract providers from searchData
  const providers = searchData?.data?.providers
  const responseData = searchData?.data
  console.log(responseData)
  // const carList = responseData?.carList
  console.log(data?.carList)
  console.log(providers)

  return (
    <div>
      {providers ? (
        Object.entries(providers).map(([key, provider]) => (
          <div key={key}>
            <h2>{provider.rating}</h2>
            <p>{provider.provider_name}</p>
            {/* Add more details to display as needed */}
          </div>
        ))
      ) : (
        <div>No providers available</div>
      )}
    </div>
  )
}

export default Providers
