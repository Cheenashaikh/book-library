import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from "./layout/Navbar";
import SearchField from "./components/SearchField";
import Footer from "./components/Footer";

import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";


function App() {
 

  return (
    
    <div className="body">
      <Navbar />
      

    


        <BrowserRouter>
      <Routes>
      <Route path="/" element={<SearchField/>}/>
      <Route path="Contact" element={<ContactUs/>} /> 
      <Route path="Service" element={<Service/>} /> 
      
      </Routes>
    </BrowserRouter>


     <Footer/>  
    </div>
    
  );
}

export default App;
