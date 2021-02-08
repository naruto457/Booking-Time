import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./sections/Home.js";
import Booking from "./sections/Booking.js";
// import BookingConfirmation from "./sections/BookingConfirmation.js"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        {/* <Route path="/bookingconfirmation">
          <BookingConfirmation />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
