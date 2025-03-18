import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">


    <Navbar />

    {/* Hero Section */}
    <main 
      className="relative text-center text-white min-h-screen flex flex-col justify-center items-center bg-fixed bg-cover"
      style={{ 
        backgroundImage: "url('/items/newbackground.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",  // Ensures it sticks on scroll
        backgroundPosition: "top" // Fix: Set background position to top
      }}
    >
      <div className="relative z-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Connecting People Across <span className="text-yellow-500">Faith & Interests</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-6">
          GET <span className="text-white">EVENTS</span> MADE FOR <span className="text-white">YOU</span>
        </h2>
        <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <Link to="/events">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 w-full md:w-auto">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  
      {/* Signup Section */}
      <header className="bg-gradient-to-r from-purple-900 to-orange-600 p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input type="text" placeholder="Name*" className="p-2 rounded-md w-full md:w-auto" />
            <input type="email" placeholder="Email*" className="p-2 rounded-md w-full md:w-auto" />
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md w-full md:w-auto">
            GET STARTED
          </button>
        </div>
      </header>

      {/* Statistics Section */}
      <main className="container mx-auto py-20 text-center px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          REACH MORE FANS & <span className="font-black">ORGANISE MORE EVENTS</span> WITH COMMUNIONHUB.
        </h1>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            { label: 'Million Users', number: '5+', color: 'text-orange-500' },
            { label: 'Events', number: '5,000+', color: 'text-blue-500' },
            { label: 'More Sales', number: '14.8%', color: 'text-orange-500' },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold">{stat.number}</p>
                  <p className={`${stat.color} text-lg`}>{stat.label}</p>
                </div>
              </div>
              <p className="max-w-xs text-sm md:text-base">
                {index === 0 ? "Millions of fans search for events like yours." :
                index === 1 ? "Trust CommunionHub with their events." :
                "Boosted clients' sales up to 14.8% last year."}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Industry Selection */}
      <section className="bg-yellow-600 py-10 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            SELECT <span className="font-light">YOUR CATEGORY</span>
          </h2>
          <select className="py-2 px-4 rounded border border-gray-300">
            <option>Select Your Category</option>
          </select>
        </div>
      </section>

      {/* Background Image Sticking to Top */}
      <div className="min-h-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16 px-8 relative">
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-fixed opacity-50"
          style={{ backgroundImage: "url('/items/background2.png')" }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              SPEND LESS <span className="font-extrabold">TIME</span> MANAGING YOUR EVENT
            </h1>
            <p className="text-white p-4 rounded-md mb-4">
              Our platform handles ticketing, bookings & merchandise, so you can focus on your event.
            </p>
            <p className="text-lg">We'll help fans find your event easily.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-900 py-10 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-white">
          <div className="flex items-center">
            <img src="https://storage.googleapis.com/a1aa/image/mDSf8oWKlvRc7rpAbOT9z6dCkbEVfmnfqmYID4_0Tcg.jpg" alt="Passage logo" className="h-10 mr-2" />
            <span>COMMUNIONHUB</span>
          </div>
          <nav className="flex space-x-6">
            {["HOME", "VERTICALS", "FIND EVENTS", "BLOG", "SUPPORT"].map((item, index) => (
              <a key={index} href="#" className="hover:underline">{item}</a>
            ))}
          </nav>
          <div className="flex space-x-4">
            {["facebook-f", "twitter", "google-plus-g"].map((icon, index) => (
              <a key={index} href="#" className="text-white">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-white mt-4">
          © 2025 COMMUNIONHUB INC. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
