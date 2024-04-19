import React from 'react'
import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-700 ">
      <h2 className="text-3xl mt-4 text-white-400 bg-gray-100 shadow-xl">
        Mini Context API
      </h2>
      <UserContextProvider className="mt-5">
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App
