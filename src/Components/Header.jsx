import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Github } from 'lucide-react';
import { FaChevronDown } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `transition duration-300 cursor-pointer ${
      isActive(path) ? "text-cyan-200 font-semibold" : "hover:text-cyan-200"
    }`;

  return (
    <header className="backdrop-blur-xl bg-opacity-50 text-white shadow-md sticky top-0 z-40">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link to="/">
        <div className="text-2xl font-bold text-white flex">
          <FaChevronDown className='rotate-90 mt-1' /><span className='text-cyan-200 '>CODEPAGLU</span>/<FaChevronDown className='-rotate-90 mt-1' />
        </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/Docs" className={linkClass("/Docs")}>Documentation</Link>
          <Link to="/interpreter" className={linkClass("/interpreter")}>Interpreter</Link>
          <Link to="/About" className={linkClass("/About")}>About</Link>
          
          <a
            href="https://github.com/PANDURANGZURE/Codepaglu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <Github size={22} />
          </a>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : <FaChevronDown />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm font-medium flex flex-col">
          <Link to="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/Docs" className={linkClass("/Docs")} onClick={() => setIsOpen(false)}>Documentation</Link>
          <Link to="/About" className={linkClass("/About")} onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/interpreter" className={linkClass("/interpreter")} onClick={() => setIsOpen(false)}>Interpreter</Link>
          <a
            href="https://github.com/PANDURANGZURE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <Github size={22} />
          </a>
        </div>
      )}
      <hr className="border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />
    </header>
  );
}

export default Header;
