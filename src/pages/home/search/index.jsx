// // src/pages/home/search/index.jsx
import React from "react";


function SearchBar({ fun }) {
  return (
    <div className="search-bar">
     
      <input
        className="search"
        placeholder="search"
        type="search"
        onChange={fun} // Use the correct prop name here
      />
    </div>
  );
}

export default SearchBar;


