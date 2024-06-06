import Auth from './auth/Auth'
import { SignIn, SignedIn, useUser } from '@clerk/clerk-react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { SignInButton } from '@clerk/clerk-react'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Movie from './components/Movie'
import Wishlist from './components/Wishlist'

export default function App() {
  const { isSignedIn, isLoaded, user } = useUser()
  if (!user) {
    return (
      <div className=" h-screen flex items-center justify-center">
        <SignIn />
      </div>
    )
  }
  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>
        <SignedIn>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/movie/:id" element={<Movie />} />
              <Route path="/fav/movies" element={<Wishlist />} />
            </Routes>
          </Router>
        </SignedIn>
      </div>
    </>
  )
}
