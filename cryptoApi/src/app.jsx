import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import Providers from './components/Providers'
import Home from './components/Home'
import ItinerariesCard from './components/ItinerariesCard'
export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/flight" element={<ItinerariesCard />} /> */}
      </Routes>
    </Router>
  )
}
