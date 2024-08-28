import React from 'react'
import Card from './components/Card'
import CounterCard from './components/CounterCard'

const App = () => {
  const movieDetails = {
    title: 'Gabbar Singh',
    year: 2011,
    rating: 9.8,
    genre: 'action',
    description: 'Abhey voo gabbar singh ka fan hai',
  }
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="text-black text-3xl font-bold p-3 ">
        Welcome to the Counter Card
      </div>
      <div className="mt-6 flex items-center justify-center flex-wrap gap-4 space-x-4 p-2">
        {/* <Card details={movieDetails} />
        <Card details={movieDetails} />
        <Card details={movieDetails} />
        <Card details={movieDetails} /> */}

        <CounterCard />
      </div>
    </div>
  )
}

export default App
