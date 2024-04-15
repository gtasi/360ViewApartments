import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import "./assets/css/style.css";
import Footer from "./components/home/Footer";
import Navbar from "./components/home/Navbar";
import Book from "./screens/Book";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Rooms from "./screens/Rooms";
import SuccessPage from "./screens/Success";

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
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
