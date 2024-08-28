import React, { useState } from 'react'
import DateRangePicker from './DatePicker'
import Providers from './Providers'

const Home = () => {
  const [data, setData] = useState({})

  const handleDataFromDatePicker = (data) => {
    setData(data)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 p-6">
      <DateRangePicker onDataSubmit={handleDataFromDatePicker} />
      {data.origin && data.destination && data.pickUpDate && (
        <div className="w-full mt-8">
          <Providers data={data} />
        </div>
      )}
    </div>
  )
}

export default Home
