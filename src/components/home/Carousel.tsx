import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "../../assets/img/hero/hero-1.jpg";
import hero2 from "../../assets/img/hero/hero-2.jpg";
import hero3 from "../../assets/img/hero/hero-3.jpg";
import "../../App.css";
import { Form } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <>
      <section>
        <div
          className="container"
          style={{ display: "flex", flexDirection: "row", zIndex: 2 }}
        >
          <div className="hero-text">
            <h1>360° View Apartments</h1>
            <p>
              Here are the best hotel booking sites, including recommendations
              for international travel and for finding low-priced hotel rooms.
            </p>
            {/* <a href="#" className="primary-btn">
              Discover Now
            </a> */}
          </div>

          <div className="booking-form" style={{ height: "30%" }}>
            <h3>Booking Your Hotel</h3>
            <form action="#">
              <p style={{ paddingLeft: "8%" }}>Check All Available Rooms</p>
              {/* <div className="check-date">
                <label htmlFor="date-in">Check In:</label>
                <Form.Control type="date" />
                <i className="icon_calendar"></i>
              </div>
              <div className="check-date">
                <label htmlFor="date-out">Check Out:</label>
                <Form.Control type="date" />
                 <i className="icon_calendar"></i> }
              </div>
              <div className="select-option">
                <label htmlFor="guest">Guests:</label>
                <select
                  id="guest"
                  style={{
                    borderRadius: 2,
                    border: "1px solid #ebebeb",
                    height: 50,
                    lineHeight: 50,
                    outline: "none",
                    paddingLeft: 20,
                    width: "100%",
                    float: "none",
                  }}
                >
                  <option value="">2 Adults</option>
                  <option value="">3 Adults</option>
                </select>
              </div> */}
              {/* <div className="select-option">
                <label htmlFor="room">Room:</label>
                <select
                  id="room"
                  style={{
                    borderRadius: 2,
                    border: "1px solid #ebebeb",
                    height: 50,
                    lineHeight: 50,
                    outline: "none",
                    paddingLeft: 20,
                    width: "100%",
                    float: "none",
                  }}
                >
                  <option value="">1 Room</option>
                  <option value="">2 Room</option>
                </select>
              </div> */}
              <button type="submit" onClick={() => navigate("/book")}>
                Check Availability
              </button>
            </form>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <Slider {...settings}>
            <div
              className="hs-item set-bg"
              style={{ width: "100%", height: "100%", zIndex: -1 }}
            >
              <img src={hero1} alt="Hero 1" />
            </div>
            <div
              className="hs-item set-bg"
              style={{ width: "100%", height: "100%", zIndex: -1 }}
            >
              <img src={hero2} alt="Hero 2" />
            </div>
            <div
              className="hs-item set-bg"
              style={{ width: "100%", height: "100%", zIndex: -1 }}
            >
              <img src={hero3} alt="Hero 3" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Carousel;
