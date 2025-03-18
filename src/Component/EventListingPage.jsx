import React, { useState } from "react";
import Navbar from './Navbar';

import { FaPlus } from "react-icons/fa"; 

const initialEvents = [
  { title: "Religious", date: "2", cost: "$0", location: "Church", description: "A peaceful gathering.", image: "https://storage.googleapis.com/a1aa/image/R-PbW0vBZoWYRlEiOp69EW0yTmxHanx3jcmOxzZK67s.jpg" },
  { title: "Social", date: "3", cost: "$0", location: "Community Center", description: "Meet new people and connect.", image: "https://storage.googleapis.com/a1aa/image/-o-Y6QsqDkjETywRHnDqXCugFva7gmcNVyr2OKa_VHI.jpg" },
  { title: "Charity", date: "12", cost: "$0", location: "Park", description: "Helping those in need.", image: "https://storage.googleapis.com/a1aa/image/dOlbpLTJ5uLsB7yF8jusZxH0PW0_DVGNzAuJbfxXEb8.jpg" }
];

const categoryImages = {
  Religious: "https://storage.googleapis.com/a1aa/image/R-PbW0vBZoWYRlEiOp69EW0yTmxHanx3jcmOxzZK67s.jpg",
  Social: "https://storage.googleapis.com/a1aa/image/-o-Y6QsqDkjETywRHnDqXCugFva7gmcNVyr2OKa_VHI.jpg",
  Charity: "https://storage.googleapis.com/a1aa/image/dOlbpLTJ5uLsB7yF8jusZxH0PW0_DVGNzAuJbfxXEb8.jpg"
};

const EventListing = () => {
  const [events, setEvents] = useState(initialEvents);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", description: "" });
  const [categoryFilter, setCategoryFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date || !newEvent.location || !newEvent.description) return;
    const image = categoryImages[newEvent.title] || "https://via.placeholder.com/150";
    setEvents([...events, { ...newEvent, image }]);
    setShowForm(false);
    setNewEvent({ title: "", date: "", location: "", description: "" });
  };

  const filteredEvents = categoryFilter ? events.filter(event => event.title === categoryFilter) : events;

  return (
<div className="bg-blue-100 flex justify-center items-center min-h-screen p-4 pt-24">
<Navbar />
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Event Listing</h1>
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 p-2 rounded" onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
              <option value="">All Categories</option>
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
            <button className="bg-blue-500 text-white rounded-full p-3 flex items-center" onClick={() => setShowForm(true)}>
              <FaPlus className="text-white" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <img src={event.image} alt={event.title} className="rounded-t-lg mb-4 w-full h-48 object-cover" />
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-500 mb-2">Date: {event.date}</p>
              <p className="text-gray-500 mb-2">Location: {event.location}</p>
              <p className="text-gray-500 mb-2">Description: {event.description}</p>
            </div>
          ))}
        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Add New Event</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <select className="w-full p-2 border border-gray-300 rounded" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}>
                  <option value="">Select Category</option>
                  <option value="Religious">Religious</option>
                  <option value="Social">Social</option>
                  <option value="Charity">Charity</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Event Location" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea className="w-full p-2 border border-gray-300 rounded" rows="3" placeholder="Description" value={newEvent.description} onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}></textarea>
              </div>
              <div className="flex justify-center space-x-4">
                <button type="button" className="bg-gray-400 text-white rounded px-4 py-2" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Submit Event</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventListing;
