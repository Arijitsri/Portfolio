import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white w-full fixed top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-lg md:text-xl font-bold">Arijit Srivastava</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="/" className="hover:text-blue-400 transition">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-400 transition">About</a>
          </li>
          <li>
            <a href="/projects" className="hover:text-blue-400 transition">Projects</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-800 py-4 gap-4">
          <li>
            <a href="/about" onClick={toggleMenu} className="hover:text-blue-400 transition">About</a>
          </li>
          <li>
            <a href="/projects" onClick={toggleMenu} className="hover:text-blue-400 transition">Projects</a>
          </li>
          <li>
            <a href="/contact" onClick={toggleMenu} className="hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
