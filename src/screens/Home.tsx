import Testimonials from "../components/home/Testimonials";
import { About } from "../components/home/About";
import Services from "../components/home/Services";
import Room from "../components/home/Room";
import Carousel from "../components/home/Carousel";
import React from "react";

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
