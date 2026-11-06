
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import BookingPage from "./components/BookingPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route
          path="/menu"
          element={<h1 className="placeholder">Our Menu</h1>}
        />
        <Route
          path="/order"
          element={<h1 className="placeholder">Order Online</h1>}
        />
        <Route
          path="/login"
          element={<h1 className="placeholder">Login</h1>}
        />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;

