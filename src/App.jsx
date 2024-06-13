import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Layout Components/Navbar";
import Footer from "./Layout Components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
