import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Show from './components/Show';
// import Booking from './components/Bookingi'; // Import the Booking component
import Bookingitems from './components/Bookingitems';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Show/>} />
        <Route exact path="/Bookingitems" element={<Bookingitems/>} />
      </Routes>
    </Router>
  );
};

export default App;