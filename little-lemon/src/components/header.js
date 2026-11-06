import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src="https://meta-capstone-little-lemon.web.app/static/media/logo.dcc102b675312ecfe774.png" alt="Little Lemon Logo" className="logo-img" />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/booking">Reservations</Link>
        <Link to="/order">Order Online</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;

