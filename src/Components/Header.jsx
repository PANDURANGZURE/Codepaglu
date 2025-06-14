import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Github, Menu, X } from 'lucide-react';
import { FaChevronDown } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="backdrop-blur-xl bg-opacity-50 text-white shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold hover:text-cyan-200">
          CODEPAGLU<span className="text-white">.</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-cyan-200 transition duration-300 cursor-pointer">Home</Link>
          <Link to="/Docs" className="hover:text-cyan-200 transition duration-300 cursor-pointer">Documentation</Link>
          <Link to="/About" className="hover:text-cyan-200 transition duration-300 cursor-pointer">About</Link>
          <Link to="/interpreter" className="hover:text-cyan-200 transition duration-300 cursor-pointer">Interpreter</Link>
          <a href="https://github.com/PANDURANGZURE" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <Github size={22} />
          </a>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <FaChevronDown />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm font-medium flex flex-col">
          <Link to="/" className="hover:text-cyan-200 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/Docs" className="hover:text-cyan-200 transition" onClick={() => setIsOpen(false)}>Documentation</Link>
          <Link to="/About" className="hover:text-cyan-200 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/interpreter" className="hover:text-cyan-200 transition" onClick={() => setIsOpen(false)}>Interpreter</Link>
          <a href="https://github.com/PANDURANGZURE" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <Github size={22} />
          </a>
        </div>
      )}
      <hr className="border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
    </header>
  );
}

export default Header;
