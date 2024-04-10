import React, { useState } from 'react'
import data from './data'

const Accordian = () => {
  const [selected, setSelected] = useState([])
  const [enableMulti, setEnableMulti] = useState(false)

  const handleSingleSelection = (id) => {
    setSelected(
      selected.includes(id) ? selected.filter((item) => item !== id) : [id]
    )
  }

  const handleAll = () => {
    const allIds = data.map((dataItem) => dataItem.id)
    setSelected(enableMulti ? [] : allIds)
    setEnableMulti(!enableMulti)
  }

  return (
    <div className="flex-col items-center justify-center">
      <div className="flex justify-center items-center ">
        <button
          className="text-white mt-20 bg-orange-500 border rounded-md px-4 py-2"
          onClick={handleAll}
        >
          {enableMulti ? 'Collapse All' : 'Expand All'}
        </button>
      </div>
      <div className="flex justify-center items-center text-white min-h-screen bg-black">
        <div className="w-[500px]">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div key={dataItem.id} className="text-center mb-10">
                <div
                  className={`cursor-pointer bg-blue-200 p-4  ${
                    selected.includes(dataItem.id) ? 'bg-blue-300' : ''
                  }`}
                  onClick={() => handleSingleSelection(dataItem.id)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className=" ml-10 bg-orange-500 inline-block w-40">
                      {dataItem.name}
                    </h3>
                    <span className="mr-28 bg-orange-500">
                      {selected.includes(dataItem.id) ? '-' : '+'}
                    </span>
                  </div>
                </div>
                {selected.includes(dataItem.id) && (
                  <div className="bg-blue-100 p-4">
                    <p className="bg-slate-50 text-blue-900">
                      {dataItem.About}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center font-bold">No data Found</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Accordian
