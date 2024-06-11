import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' // Import the styles

const DateRangePicker = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent form submission
    // Format dates and times as required
    const pickUpDate = startDate ? startDate.toISOString().split('T')[0] : ''
    const dropOffDate = endDate ? endDate.toISOString().split('T')[0] : ''
    const pickUpTime = startTime || ''
    const dropOffTime = endTime || ''

    onSubmit({
      pickUpDate,
      pickUpTime,
      dropOffDate,
      dropOffTime,
    })
    console.log(pickUpDate, pickUpTime, dropOffDate, dropOffTime)

    // Reset fields after submission
    setEndDate(null)
    setStartDate(null)
    setStartTime('')
    setEndTime('')
  }

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between"
      >
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholderText="Select date start"
        />
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5"
        />
        <span className="mx-2 text-gray-500">to</span>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholderText="Select date end"
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5"
        />
        <button
          type="submit"
          className="p-3 m-3 bg-blue-400 text-white rounded border-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default DateRangePicker
