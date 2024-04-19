import React, { useState, useCallback, useEffect } from 'react'

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('')
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [charAllowed, setCharAllowed] = useState(false)
  const [nmbrAllowed, setNmbrAllowed] = useState(false)
  const passGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (nmbrAllowed) str += '0123456789'
    if (charAllowed) str += '!#$%&()*+,-./:;<=>?@[]^_`{|}~'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      console.log(char)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, nmbrAllowed, charAllowed, setPassword])

  const copyPass = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, `${length}`)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passGenerator()
  }, [length, nmbrAllowed, charAllowed, passGenerator])
  return (
    <div className="flex items-center mb-3">
      <label htmlFor="search" className="text-sm mr-2">
        password
      </label>
      <input
        id="search"
        type="text"
        readOnly
        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
        value={password}
      />
      <div className="flex items-center ml-4">
        <span className="mr-2 text-gray-400">Filter:</span>
        <div className="flex items-center space-x-1">
          <input
            type="checkbox"
            id="numbers"
            className="w-4 h-4 accent-blue-500 focus:ring-1 focus:ring-blue-500"
            defaultChecked={nmbrAllowed}
            onChange={(e) => {
              setNmbrAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="numbers" className="text-sm">
            Numbers
          </label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={(e) => {
              setCharAllowed((prev) => !prev)
            }}
            id="special-characters"
            className="w-4 h-4 accent-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="special-characters" className="text-sm">
            Special Characters
          </label>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
