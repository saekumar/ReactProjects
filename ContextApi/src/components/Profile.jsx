import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)

  if (!user) return <div className=""></div>

  return (
    <div className="flex space-x-4">
      <h1 className="text-orange-400 mt-5">Welcome {user.username}</h1>
      <h1 className="text-orange-400 mt-5">Your password is {user.pass}</h1>
    </div>
  )
}

export default Profile
