import React from "react";
import "./Navbar.css";
function Navbar(){

return(


    <div>
    <header className="headerDesign">
      <h3>Books</h3>
      <ul className="horizontal">

      <li>
          <a href="/">Home</a>
        </li>
      
        <li>
          <a href="/Service">About Us</a>
        </li>
        
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </header>
  </div>
);

}
export default Navbar;