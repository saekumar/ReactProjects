import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  // useRef hook
  const passRef = useRef(null)
  const passGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!#$%&()*+,-./:;<=>?@[]^_`{|}~'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      console.log(char)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPass = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, `${length}`)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passGenerator()
  }, [length, numberAllowed, charAllowed, passGenerator])

  return (
    <div>
      <div className=" bg-black text-white text-4xl text-center mt-4 h-11 ml-5 mr-5 rounded-md">
        Password Generator
      </div>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            value={password}
            className="outline-none w-full py-1 px-3 rounded-lg mt-3"
            placeholder="password"
            readOnly
            ref={passRef}
            type="text"
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 scroll-py-1.5 shrink-0 mt-1.5 ml-1 rounded-lg"
            onClick={copyPass}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value)
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={(e) => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="">Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
