

// src/components/layout/navbar/index.jsx
import React from "react";
import "./Navbar.css";
import SearchBar from "../../../pages/home/search";

function Navbar({ handleSearch }) {
  return (
    <header className="headerDesign">
      <img
        className="img-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGL5wP8jB6d6jEWJxBvXceZMvNCJJAldNPQ&s"
        alt="Books Stack"
      />
      <ul className="horizontal">
        <li><a href="/">Home</a></li>
        <li><a href="/Service">About Us</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
      <SearchBar fun={handleSearch} />
    </header>
  );
}

export default Navbar;
