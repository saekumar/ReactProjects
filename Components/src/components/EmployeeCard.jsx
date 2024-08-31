import React, { useState } from 'react'

const EmployeeCard = () => {
  let initialEmployees = [
    {
      name: 'saikumar',
      address: '17-125,Pulla',
      Mobile: '234567',
      DOB: '20-08-1234',
    },
    {
      name: 'hari',
      address: '17-125,Bhmadole',
      Mobile: '123457654',
      DOB: '30-08-2012',
    },
    {
      name: 'teja',
      address: '17-123,texa',
      Mobile: '87643',
      DOB: '20-08-2003',
    },
    {
      name: 'mani',
      address: '17-125,vijayawada',
      Mobile: '76543',
      DOB: '20-09-2004',
    },
  ]

  const [userdata, setUserdata] = useState(initialEmployees[0])
  const [employees, setEmployees] = useState(initialEmployees)
  const [empform, setEmpform] = useState(false)
  const [singleUserData, setSingleUserData] = useState({
    name: '',
    address: '',
    Mobile: '',
    DOB: '',
  })
  const handleClick = (name) => {
    console.log(name)
    setEmployees((prevemps) => {
      const updatedEmps = prevemps.filter((emp) => emp.name !== name)
      if (name === userdata.name) setUserdata({})

      return updatedEmps
    })
  }
  const handleEmpData = (e) => {
    e.preventDefault()
    setEmployees([...employees, singleUserData])
    setSingleUserData({ name: '', address: '', Mobile: '', DOB: '' })
    setEmpform(false)
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen ">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-3/7">
        <div className="lg:w-1/3 bg-blue-50 p-4 border-r border-gray-300">
          <h1 className="text-2xl font-semibold mb-4 text-blue-600">
            Employees List
          </h1>
          <ul className="space-y-2">
            {employees.map((emp, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 transition"
              >
                <button
                  className="text-blue-800 font-medium"
                  onClick={() => setUserdata(emp)}
                >
                  {emp.name}
                </button>
                <button
                  className="text-red-600 hover:text-red-800 transition"
                  onClick={() => handleClick(emp.name)}
                >
                  ❌
                </button>
              </div>
            ))}
          </ul>
        </div>

        <div className="w-2/3 p-6">
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">
            Employee Information
          </h1>
          <div className="space-y-4">
            {Object.entries(userdata).map(([key, val]) => (
              <div className="flex justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
                <div className="font-medium text-gray-700 capitalize">
                  {key}
                </div>
                <div className="text-gray-900">{val}</div>
              </div>
            ))}
            {Object.keys(userdata).length === 0 && (
              <div className="text-gray-500">No employee selected</div>
            )}
          </div>
          <div className="">
            <button
              className=" mx-auto h-12 w-20 rounded p-4 text-center items-center flex justify-center text-white hover:bg-blue-700 bg-blue-500"
              onClick={() => {
                setEmpform(!empform)
              }}
            >
              Add employee
            </button>
          </div>
        </div>
        {empform && (
          <div className="">
            <form action="" className="" onSubmit={handleEmpData}>
              <input
                type="text"
                placeholder="name"
                value={singleUserData.name}
                onChange={(e) => {
                  setSingleUserData({ ...singleUserData, name: e.target.value })
                }}
              />
              <input
                type="text"
                placeholder="address"
                val={singleUserData.address}
                onChange={(e) => {
                  setSingleUserData({
                    ...singleUserData,
                    address: e.target.value,
                  })
                }}
              />
              <input
                type="text"
                placeholder="MObile"
                val={singleUserData.Mobile}
                onChange={(e) => {
                  setSingleUserData({
                    ...singleUserData,
                    Mobile: e.target.value,
                  })
                }}
              />
              <input
                type="date"
                placeholder="Date Of Birth"
                val={singleUserData.DOB}
                onChange={(e) => {
                  setSingleUserData({ ...singleUserData, DOB: e.target.value })
                }}
              />
              <button type="submit">Add</button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default EmployeeCard
