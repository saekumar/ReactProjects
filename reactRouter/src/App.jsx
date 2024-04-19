import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Link,
  Routes,
  NavLink,
  Route,
} from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Github from './components/Github/Github'
import Contact from './components/Contact/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center bg-purple-300 border-2 border-purple-600 text-white text-3xl mt-3 p2 rounded-lg">
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="github" element={<Github />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
