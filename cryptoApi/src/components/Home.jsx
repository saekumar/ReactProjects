import React, { useState } from 'react'
import DateRangePicker from './DatePicker'
import Providers from './Providers'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [searchParams, setSearchParams] = useState({
    pickUpEntityId: '95565058',
    pickUpDate: '2024-06-11',
    pickUpTime: '18:36',
    dropOffDate: '2024-06-26',
    dropOffTime: '18:39',
  })

  const handleDateSubmit = ({
    pickUpDate,
    pickUpTime,
    dropOffDate,
    dropOffTime,
  }) => {
    setSearchParams({
      pickUpEntityId: '95565058',
      pickUpDate: pickUpDate,
      pickUpTime: pickUpTime,
      dropOffDate: dropOffDate,
      dropOffTime: dropOffTime,
    })
  }

  const navigate = useNavigate()
  console.log(searchParams)

  return (
    <>
      <DateRangePicker onSubmit={handleDateSubmit} />
      {searchParams && <Providers searchParams={searchParams} />}
    </>
  )
}

export default Home
