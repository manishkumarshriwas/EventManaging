import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const menuRef = useRef(null); // Ref for menu container

  // Function to close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Function to close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 fixed w-full top-0 z-50 shadow-lg h-20 flex items-center backdrop-blur-md bg-opacity-90">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://storage.googleapis.com/a1aa/image/la0-xTLeXyDoMUQADk9ISUN0jWhUkRQmy0uAluly8FI.jpg"
            alt="Passage logo"
            className="mr-3"
            width="40"
            height="40"
          />
          <span className="text-2xl font-bold">CommunionHub</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="relative group hover:text-yellow-400">Home</Link>
          <Link to="/events" className="relative group hover:text-yellow-400">Event Listings</Link>
        </nav>

        {/* Sign In Button (Desktop) */}
        <button className="hidden md:block bg-yellow-500 text-purple-900 px-4 py-2 rounded-md hover:bg-yellow-600">
          Sign In
        </button>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className={`w-8 h-8 text-white transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div 
          ref={menuRef}
          className="fixed top-[100px] inset-x-0 bg-purple-800 bg-opacity-95 p-4 shadow-lg transition-all duration-300"
        >
          <nav className="flex flex-col space-y-4 items-center">
            <Link
              to="/"
              className="text-lg font-semibold hover:text-yellow-400"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="/events"
              className="text-lg font-semibold hover:text-yellow-400"
              onClick={handleLinkClick}
            >
              Event Listings
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
