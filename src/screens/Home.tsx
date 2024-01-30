import React, { useEffect } from "react";
import Testimonials from "../components/home/Testimonials";
import { About } from "../components/home/About";
import Footer from "../components/home/Footer";
import Services from "../components/home/Services";
import Room from "../components/home/Room";
import Navbar from "../components/home/Navbar";
import Carousel from "../components/home/Carousel";
import db from "../backend/firebaseConfig";
import { collection, getDocs } from "firebase/firestore/lite";

const Home = () => {
  return (
    <>
      <Carousel />
      <div style={{ paddingTop: "5%" }}>
        <About />
      </div>
      <Services />
      <Room />
      <Testimonials />
    </>
  );
};

export default Home;
