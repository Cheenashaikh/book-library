


// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";

// import Navbar from "./components/layout/navbar"; 
// import Home from "./pages/home";             
// import Service from "./pages/Service";    
// import ContactUs from "./pages/ContactUs"; 
// import Footer from "./components/layout/footer";  

// function App() {



  
//   return (
//     <div className="body">
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/" element={<><Navbar /><Home /></>} /> */}
//           <Route path="Contact" element={<ContactUs />} />
//           <Route path="Service" element={<Service />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/navbar"; 
import Home from "./pages/home";             
import Service from "./pages/Service";    
import ContactUs from "./pages/ContactUs"; 
import Footer from "./components/layout/footer";  

function App() {
 
  const [search, setSearch] = useState("Novel");


  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="body">
      <BrowserRouter>
        <Navbar handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} handleSearch={handleSearch} />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
