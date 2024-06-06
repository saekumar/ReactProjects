import React from 'react'
import { UserButton } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="h-10 bg-gray-100  m-2 p-3 flex items-center justify-between flex-nowrap rounded-md">
      <div className=""></div>
      <div className="flex p-2 space-x-6">
        <button
          onClick={() => navigate('/fav/movies')}
          className="flex space-x-2 text-white text-md p-1 bg-blue-500 rounded-md hover:text-white hover:bg-blue-400 hover:border-blue-700"
        >
          Favorites
        </button>
        <div className="ml-auto">
          <UserButton />
        </div>
      </div>
    </div>
  )
}

export default Navbar
