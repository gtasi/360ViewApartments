import { About } from "../components/home/About";
import Carousel from "../components/home/Carousel";
import Room from "../components/home/Room";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <div style={{ paddingTop: "5%" }}>
        <Carousel />
      </div>
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
