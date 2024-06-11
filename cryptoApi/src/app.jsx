import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import Providers from './components/Providers'
import Home from './components/Home'
export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/providers" element={<Providers />} /> */}
      </Routes>
    </Router>
  )
}
