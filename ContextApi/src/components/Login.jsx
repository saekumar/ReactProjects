import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const { setUser } = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, pass })
    setUsername('')
    setPass('')
  }

  return (
    <div className="mt-3 flex flex-col items-center justify-center">
      <h1 className="text-xl text-orange-300">Login form</h1>
      <div className="flex space-x-4 mt-5">
        <input
          type="text"
          className="border-4 text-center rounded-lg"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <input
          type="password"
          className="border-4 text-center rounded-lg"
          placeholder="password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value)
          }}
        />
        <div className="">
          <button
            className="h-10 w-20 bg-blue-600 text-white-400 border-2 rounded-lg border-blue-400 hover:bg-blue-900 hover:border-blue-700"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
