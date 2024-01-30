import testimonial from "../../assets/img/testimonial-logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <>
      <section className="testimonial-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Testimonials</span>
                <h2>What Customers Say?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="testimonial-slider owl-carousel">
                <div className="ts-item">
                  <Slider {...settings}>
                    <div
                      className="ts-item"
                      style={{ width: "100%", height: "100%", zIndex: -1 }}
                    >
                      <p>
                        After a construction project took longer than expected,
                        my husband, my daughter and I needed a place to stay for
                        a few nights. As a Chicago resident, we know a lot about
                        our city, neighborhood and the types of housing options
                        available and absolutely love our vacation at Sona
                        Hotel.
                      </p>
                      <div className="ti-author">
                        <div className="rating">
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star-half_alt"></i>
                        </div>
                        <h5>- Alexander Vasquez</h5>
                      </div>
                    </div>
                  </Slider>
                </div>
                <img src={testimonial} alt="" />
              </div>
              <div
                className="ts-item"
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                <p>
                  After a construction project took longer than expected, my
                  husband, my daughter and I needed a place to stay for a few
                  nights. As a Chicago resident, we know a lot about our city,
                  neighborhood and the types of housing options available and
                  absolutely love our vacation at Sona Hotel.
                </p>
                <div className="ti-author">
                  <div className="rating">
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star-half_alt"></i>
                  </div>
                  <h5>- Alexander Vasquez</h5>
                </div>
                <img src={testimonial} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
