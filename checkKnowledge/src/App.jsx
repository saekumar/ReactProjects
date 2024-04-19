import { useState } from 'react'
import SearchBox from './components/SearchBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <div className="h-12 bg-gray-600 text-3xl text-white  mt-2 ml-2 mr-2 text-center pt-1 rounded-lg">
        Password generator
      </div>
      <div className="">
        <SearchBox />
      </div>
    </div>
  )
}

export default App
