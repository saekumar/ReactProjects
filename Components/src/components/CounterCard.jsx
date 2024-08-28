import React, { useState } from 'react'

const CounterCard = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const handleIncrement = () => {
    setCount(Number(count) + Number(step))
  }
  const handleDecrement = () => {
    setCount(count - step)
  }
  return (
    <div className="bg-white h-96 w-96 shadow-xl flex flex-col items-center justify-center gap-3 mx-5 p-5">
      <h2 className="text-2xl text-center mb-5">Use State Challenge</h2>
      <div className="w-full">
        <div className="flex flex-col items-center p-3">
          <div className="flex justify-between w-full mb-4">
            <h2 className="text-lg">Count:</h2>
            <div className="text-lg">{count}</div>
          </div>
          <div className="flex justify-between w-full">
            <h2 className="text-lg">Step:</h2>
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(e.target.value)}
              className="w-16 p-1 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex items-center justify-center p-2 gap-3 mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDecrement}
          >
            Decrement
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default CounterCard
