// /src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Component/HomePage';
import EventListingPage from './Component/EventListingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventListingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
