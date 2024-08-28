import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' // Import the styles

const airPorts = [
  { name: 'Delhi', code: 'DEL' },
  { name: 'Mumbai', code: 'BOM' },
  { name: 'Bangalore', code: 'BLR' },
  { name: 'Hyderabad', code: 'HYD' },
  { name: 'Chennai', code: 'MAA' },
  { name: 'Kolkata', code: 'CCU' },
  { name: 'Ahmedabad', code: 'AMD' },
  { name: 'Pune', code: 'PNQ' },
  { name: 'Jaipur', code: 'JAI' },
  { name: 'Lucknow', code: 'LKO' },
  { name: 'Kochi', code: 'COK' },
  { name: 'Goa', code: 'GOI' },
  { name: 'Patna', code: 'PAT' },
  { name: 'Bhubaneswar', code: 'BBI' },
  { name: 'Guwahati', code: 'GAU' },
  { name: 'Indore', code: 'IDR' },
  { name: 'Chandigarh', code: 'IXC' },
  { name: 'Nagpur', code: 'NAG' },
  { name: 'Vadodara', code: 'BDQ' },
  { name: 'Varanasi', code: 'VNS' },
  { name: 'Thiruvananthapuram', code: 'TRV' },
  { name: 'Visakhapatnam', code: 'VTZ' },
  { name: 'Ranchi', code: 'IXR' },
  { name: 'Raipur', code: 'RPR' },
  { name: 'Jodhpur', code: 'JDH' },
  { name: 'Cochin', code: 'COK' },
  { name: 'Amritsar', code: 'ATQ' },
  { name: 'Bagdogra', code: 'IXB' },
  { name: 'Dehradun', code: 'DED' },
  { name: 'Dibrugarh', code: 'DIB' },
]

const DateRangePicker = ({ onDataSubmit }) => {
  const [startDate, setStartDate] = useState(null)
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [dropdownOriginOpen, setDropdownOriginOpen] = useState(false)
  const [dropdownDestinationOpen, setDropdownDestinationOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const pickUpDate = startDate ? startDate.toISOString().split('T')[0] : ''
    const formData = { origin, destination, pickUpDate }

    onDataSubmit(formData) // Send data to Home component
    setStartDate(null)
    setOrigin('')
    setDestination('')
  }

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOriginOpen(!dropdownOriginOpen)}
            className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
          >
            {origin || 'Select Origin'}
          </button>
          {dropdownOriginOpen && (
            <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {airPorts.map((airport) => (
                  <li key={airport.code}>
                    <button
                      type="button"
                      onClick={() => {
                        setOrigin(airport.code)
                        setDropdownOriginOpen(false)
                      }}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {airport.name} ({airport.code})
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownDestinationOpen(!dropdownDestinationOpen)}
            className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
          >
            {destination || 'Select Destination'}
          </button>
          {dropdownDestinationOpen && (
            <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {airPorts.map((airport) => (
                  <li key={airport.code}>
                    <button
                      type="button"
                      onClick={() => {
                        setDestination(airport.code)
                        setDropdownDestinationOpen(false)
                      }}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {airport.name} ({airport.code})
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholderText="Select date start"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default DateRangePicker
