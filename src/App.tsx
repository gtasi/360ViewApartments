import { useState } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/style.css";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import Rooms from "./screens/Rooms";
import Book from "./screens/Book";
import Contact from "./screens/Contact";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";

function App() {
  return (
    <>
      <div style={{ flex: "1" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
