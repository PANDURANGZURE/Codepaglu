import React from 'react'

function Header() {
  return (
    <header className=" bg-black  text-white shadow-md ">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-cyan-400">
          ZURE<span className="text-white">.</span>
        </div>
        <ul className="flex space-x-6 text-sm font-medium">
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">Documentation</li>
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">About</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
