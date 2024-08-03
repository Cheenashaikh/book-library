import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar";
import Home from "./pages/home";
import Service from "./pages/service";
import ContactUs from "./pages/contactUs";
import Footer from "./components/layout/footer";

function App() {
  return (
    <div className="body">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<ContactUs />} />
          <Route path="Service" element={<Service />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
